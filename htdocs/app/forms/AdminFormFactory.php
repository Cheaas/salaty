<?php
/**
 * Created by PhpStorm.
 * User: Viki
 * Date: 9.1.2018
 * Time: 22:09
 */

namespace App\Forms;


use App\Model\CategoryModel;
use App\Model\IngredientModel;
use App\Model\ProductModel;
use Nette\Application\UI\Form;

class AdminFormFactory
{

    /**
     * @var CategoryModel
     */
    private $categoryModel;

    /**
     * @var IngredientModel
     */
    private $ingredientModel;

    /**
     * @var ProductModel
     */
    private $productModel;

    /**
     * AdminFormFactory constructor.
     */
    public function __construct(CategoryModel $categoryModel, IngredientModel $ingredientModel, ProductModel $productModel)
    {
        $this->categoryModel = $categoryModel;
        $this->ingredientModel = $ingredientModel;
        $this->productModel = $productModel;
    }

    public function createNewIngredientsForm()
    {
        $form = new Form();

        $form->addText('name', 'Název ingredience:')
            ->setAttribute('placeholder', '* Název ingredience')
            ->setRequired();
        $form->addSubmit('send', 'Přidat')
            ->setAttribute('class', 'btn btn-primary');

        return $form;
    }

    public function createNewCategoryForm()
    {
        $form = new Form();

        $form->addText('name', 'Název kategorie:')
            ->setAttribute('placeholder', '* Název kategorie')
            ->setRequired();
        $form->addSubmit('send', 'Přidat')
            ->setAttribute('class', 'btn btn-primary');

        return $form;
    }

    public function createEditProduct($product)
    {
        $form = new Form();
        $form->addText('name', 'Název:')
            ->setDefaultValue($product->name)
            ->setAttribute('placeholder', '* Název')
            ->setRequired();

        $form->addTextArea('description', 'Popis:')
            ->setDefaultValue($product->description)
            ->setAttribute('placeholder', '* Popis')
            ->setRequired();

        $form->addText('price', 'Cena (v Kč):')
            ->setDefaultValue($product->price)
            ->setAttribute('placeholder', '* Cena (v Kč)')
            ->setRequired();

        $form->addText('weight', 'Váha (v g):')
            ->setDefaultValue($product->weight)
            ->setAttribute('placeholder', '* Váha (v gramech)')
            ->setRequired();

        $form->addText('rank', 'Pořadí:')
            ->setDefaultValue($product->rank)
            ->setAttribute('placeholder', 'Pořadí');


        $categories = $this->categoryModel->getAllCategories()->fetchAll();
        $categoryData = [];
        foreach ($categories as $category) {
            $categoryData[$category->id] = $category->name;
        }
        $form->addSelect('category_id', 'Kategorie:', $categoryData)
            ->setDefaultValue($product->category_id);

        $ingredients = $this->ingredientModel->getAllIngredients()->fetchAll();
        $ingredientsData = [];
        foreach ($ingredients as $ingredient) {
            $ingredientsData[$ingredient->id] = $ingredient->name;
        }
        $productIngredients = $this->productModel->getProductIngredients($product->id)->fetchAll();
        $productIngredientsData = [];
        foreach ($productIngredients as $productIngredient) {
            $productIngredientsData[] = $productIngredient->ingredient_id;
        }
        $form->addMultiSelect('ingredients', 'Ingredience:', $ingredientsData)->setDefaultValue(array_values($productIngredientsData));

        $form->addUpload('img', 'Obrázek:');

        $form->addSubmit('send', 'Uložit')
            ->setAttribute('class', 'btn btn-primary');

        return $form;
    }

    public function createEditProductIngredients($ingredients)
    {
        $form = new Form();

        foreach ($ingredients as $ingredient) {
            $form->addInteger($ingredient->ingredient_id, 'Množství ' . $ingredient->name . ': ')->setDefaultValue($ingredient->weight);
        }
        $form->addSubmit('send', 'Uložit')
            ->setAttribute('class', 'btn btn-primary');

        return $form;
    }

    public function createAddNewProduct(){
        $form = new Form();
        $form->addText('name', 'Název:')
            ->setAttribute('placeholder', '* Název')
            ->setRequired();

        $form->addTextArea('description', 'Popis:')
            ->setAttribute('placeholder', '* Popis')
            ->setRequired();

        $form->addText('price', 'Cena (v Kč):')
            ->setAttribute('placeholder', '* Cena (v Kč)')
            ->setRequired();

        $form->addText('weight', 'Váha (v g):')
            ->setAttribute('placeholder', '* Váha (v gramech)')
            ->setRequired();

        $form->addText('rank', 'Pořadí:')
            ->setAttribute('placeholder', 'Pořadí');


        $categories = $this->categoryModel->getAllCategories()->fetchAll();
        $categoryData = [];
        foreach ($categories as $category) {
            $categoryData[$category->id] = $category->name;
        }
        $form->addSelect('category_id', 'Kategorie:', $categoryData);

        $ingredients = $this->ingredientModel->getAllIngredients()->fetchAll();
        $ingredientsData = [];
        foreach ($ingredients as $ingredient) {
            $ingredientsData[$ingredient->id] = $ingredient->name;
        }

        $form->addMultiSelect('ingredients', 'Ingredience:', $ingredientsData);

        $form->addUpload('img', 'Obrázek:')->setRequired();

        $form->addSubmit('send', 'Vytvořit')
            ->setAttribute('class', 'btn btn-primary');

        return $form;
    }
}