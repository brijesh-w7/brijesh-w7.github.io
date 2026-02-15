$(document).ready(function () {
    var selectedCategory = "all";
    var selectedSubcategory = "all"
    $('.subcategories').hide()

    $(".category-button").click(function () {
        selectedCategory = $(this).data("category");
        $(".category-button").removeClass("active");
        $(this).addClass("active");
        $(".all-sub-cat").trigger("click");
        updateFilter();
        showSubCategories()
        $('.subcategories').show();
    });

    $(".subcategory-button").click(function () {
        selectedSubcategory = $(this).data("subcategory");
        $(".subcategory-button").removeClass("active");
        $(this).addClass("active");
        updateFilter();
    });

    function updateFilter() {
        $(".work-item").each(function () {
            var itemCategory = $(this).data("category");
            var itemSubcategory = $(this).data("subcategory");
            var duplicateSubCat = $(this).attr("duplicate-subCat");

            if ((selectedCategory === "all" || selectedCategory === itemCategory) &&
                (selectedSubcategory === "all" || selectedSubcategory === itemSubcategory || selectedSubcategory == duplicateSubCat)) {
                $(this).show();
            } else {
                $(this).hide();
            }

            Isotope.prototype._positionItem = function (item, x, y) {
                item.goTo(x, y);
            };
            $('#works-grid').isotope({
                // options
                itemSelector: '.work-item',
                layoutMode: 'fitRows'
            });
        });
    }

    function showSubCategories(event) {
        $(".subcategory-button").each(function () {
            var filterCategory = $(this).data("category");
            var filterSubcategory = $(this).data("subcategory");

            if ((selectedCategory === filterCategory)) {
                $(this).show();
            } else {
                $(this).hide();
            }
            // $('#subCat').isotope({
            //     // options
            //     filterSelector: '.subcategory-button',
            //     layoutMode: 'fitRows',
            // });
        });
    }
});