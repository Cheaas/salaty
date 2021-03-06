<?php
/**
 * Created by PhpStorm.
 * User: viktorkafka
 * Date: 28/11/2017
 * Time: 09:34
 */

namespace App\Presenters;


use App\Forms\UserFormFactory;
use App\Model\OrderModel;
use App\Model\UserManager;
use App\Model\UserModel;
use Nette\Application\UI\Form;
use Nette\Application\UI\Presenter;
use Nette\Neon\Exception;
use Nette\Security\AuthenticationException;
use Nette\Security\Passwords;
use Nette\Utils\DateTime;
use Nette\Utils\Random;
use V\Services\NotificationMail;

class SignPresenter extends Presenter
{
    /**
     * @var UserFormFactory
     * @inject
     */
    public $userForm;


    /**
     * @var UserModel
     * @inject
     */
    public $userModel;

    /**
     * @var UserManager
     * @inject
     */
    public $userManager;

    /**
     * @var OrderModel
     * @inject
     */
    public $orderModel;


    /**
     * @return \Nette\Application\UI\Form
     */
    protected function createComponentSignUpForm()
    {
        $form = $this->userForm->createSignUp();
        $form->onSuccess[] = [$this, 'signUpSucceeded'];
        return $form;
    }

    public function signUpSucceeded(Form $form)
    {
        $values = $form->getValues();
        try {
            $this->userModel->isUserRegistered($values->email);
            $user = $this->userModel->register($values);

            $mailData = [
                'date' => new DateTime(),
                'firstname' => $values->firstname,
                'lastname' => $values->lastname,
                'email' => $values->email,
                'phone' => $values->phone,
                'street' => $values->street,
                'city' => $values->city,
                'postalcode' => $values->postalcode,
                'factory' => $values->factory,
                'link' => 'http://' . $_SERVER['HTTP_HOST'] . $this->presenter->link('Admin:default', ['do' => 'changeUserStatus', 'userId' => $user->id, 'status' => 1])
            ];
            $mail = new NotificationMail($mailData, 'salatyob@seznam.cz', NotificationMail::NEW_REGISTRATION, 'SalátyObe - Nová registrace', $values->email);
            $mail->send();
            $this->flashMessage('Registrace proběhla úspěšně.', 'success');
            $this->redirect('Homepage:default');
        } catch (AuthenticationException $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }


    /**
     * @return \Nette\Application\UI\Form
     */
    protected function createComponentSignInForm()
    {
        $form = $this->userForm->createSignIn();
        $form->onSuccess[] = [$this, 'signInSucceeded'];
        return $form;
    }

    public function signInSucceeded(Form $form)
    {
        $values = $form->getValues();

        try {
            $this->user->setExpiration('7 days', TRUE);
            $this->user->login($values->email, $values->password);
            $this->flashMessage('Přihlášení proběhlo úspěšně.', 'success');
            $this->redirect('Homepage:default');
        } catch (AuthenticationException $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }

    public function actionOut()
    {
        if ($this->user->isLoggedIn()) {
            $this->user->logout();
            $this->flashMessage('Odhlášení proběhlo úspěšně', 'success');
            $this->redirect('Homepage:default');
        } else {
            $this->flashMessage('Pro tuto akci je potřeba být přihlášený.', 'danger.');
            $this->redirect('Homepage:default');
        }

    }

    public function actionProfile()
    {
        if (!$this->user->isLoggedIn()) {
            $this->flashMessage('Pro tuto akci je potřeba být přihlášený.', 'danger');
            $this->redirect('Homepage:default');
        }
    }

    public function renderProfile()
    {
        $this->template->wallet = $this->orderModel->getUserWallet($this->user->getId());
    }

    public function renderOrders()
    {
        $this->template->orders = $this->orderModel->getUserOrders($this->user->getId())->fetchAssoc('date[]');
    }

    protected function createComponentEditProfile()
    {
        $form = $this->userForm->editProfile($this->user, $this->userModel->isEmailSignedForNewsletter($this->user->identity->email));

        $form->onSuccess[] = [$this, 'editProfileSucceeded'];
        return $form;
    }

    public function editProfileSucceeded(Form $form)
    {
        $values = $form->getValues();
        try {
            if (!$this->user->isLoggedIn()) {
                throw new \Exception('K provedení této akce musíte být přihlášeni.');
            }
            if ($values->old_password && $values->new_password && $values->new_password_2) {

                if ($values->new_password !== $values->new_password_2) {
                    throw new \Exception('Hesla se neshodují.');
                }
                $user = $this->userModel->getUserById($this->user->getId());

                if (!Passwords::verify($values->old_password, $user->password)) {
                    throw new \Exception('Hesla se neshodují.');
                }

                $this->userModel->editUserPassword($values->new_password, $this->user->getId());
            }

            $isSignedForNewsletter = $this->userModel->isEmailSignedForNewsletter($values->email);

            if ($values->newsletter) {
                if (!$isSignedForNewsletter) {
                    $this->userModel->signForNewsletter($values->email);
                }
            } else {
                if ($isSignedForNewsletter) {
                    $this->userModel->signOutNewsletter($values->email);
                }
            }

            $this->user->identity->firstname = $values->firstname;
            $this->user->identity->lastname = $values->lastname;
            $this->user->identity->phone = $values->phone;
            $this->user->identity->email = $values->email;
            $this->user->identity->factory = $values->factory;
            $this->user->identity->street = $values->street;
            $this->user->identity->city = $values->city;
            $this->user->identity->postalcode = $values->postalcode;

            $data = [
                'id' => $this->user->getId(),
                'firstname' => $values->firstname,
                'lastname' => $values->lastname,
                'email' => $values->email,
                'phone' => $values->phone,
                'factory' => $values->factory,
                'street' => $values->street,
                'city' => $values->city,
                'postalcode' => $values->postalcode,
            ];

            $this->userModel->editUser($data);
            $this->flashMessage('Editace proběhla úspěšně.', 'success');
        } catch (\Exception $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }


    protected function createComponentSignForNewsletter()
    {
        $form = $this->userForm->signForNewsletter();
        $form->onSuccess[] = [$this, 'signForNewsletterSucceeded'];
        return $form;
    }

    public function signForNewsletterSucceeded(Form $form)
    {
        $values = $form->getValues();
        try {
            $isSignedUp = $this->userModel->isEmailSignedForNewsletter($values->email);
            if ($isSignedUp) {
                throw new \Exception('Tento e-mail se již nachází v databázi pro odběr novinek');
            }
            $this->userModel->signForNewsletter($values->email);
            $this->flashMessage('Přihlášení k odběru proběhlo úspěšně.', 'success');
        } catch (\Exception $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }

    protected function createComponentLostPassword()
    {
        $form = $this->userForm->lostPassword();
        $form->onSuccess[] = [$this, 'lostPasswordSucceeded'];

        return $form;
    }

    public function lostPasswordSucceeded(Form $form)
    {
        $values = $form->getValues();
        try {
            $user = $this->userModel->getUserByEmail($values->email)->fetch();
            if (!$user) {
                throw new \Exception('Účet s tímto e-mailem neexistuje.');
            }
            $password = Random::generate(6);
            $this->userModel->changeUserPassword($password, $user->id);
            $mailData = [
                'password' => $password,
                'link' => $this->presenter->link('Sign:profile')
            ];
            $mail = new NotificationMail($mailData, $values->email, NotificationMail::LOST_PASSWORD, 'SalátyObe - Zapomenuté heslo', 'salatyob@seznam.cz');
            $mail->send();
            $this->flashMessage('Nové heslo Vám bylo zasláno na e-mail.', 'success');
        } catch (\Exception $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }

    }

}