(function(d3, fc, sc) {
    'use strict';

    // Generates a menu option similar to those generated by sc.model.menu.option from a sc.model.data.product object
    sc.model.menu.productAdaptor = function(product) {
        return {
            displayString: product.display,
            option: product
        };
    };

}(d3, fc, sc));
