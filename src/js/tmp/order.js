$(document).on("click touchstart", ".order-product", function(a) {
    var b = $(this).attr("data-link");
    $.nette.ajax({
        type: "POST",
        url: b,
        success: function() {
            $("#productModal").modal();
        }
    });
});