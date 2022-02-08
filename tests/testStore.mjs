import chai from "chai";
import Product from "../products.mjs";
import Store from "../store.mjs";

    const assert = chai.assert;


    describe("length of product list", () => {

        it("atleast one value is on the product list", () => {
            let store = new Store();
            let product = new Product("Sephora", 12);
            store.addProduct(product);
            assert.equal(store.productList.length , 1 );

        });
  });

    describe("check product availability", () => {
        let store = new Store(); 
            let lorealParis = new Product("LorealParis", 2);
            let victoriaSecret = new Product("VictoriaSecret", 0);
            store.addProduct(lorealParis);
            store.addProduct(victoriaSecret);

        it("checks weather given product is on the list or not", () => {
            let returendProduct = store.checkProductAvailability(lorealParis.brandName);
            assert.equal(returendProduct, lorealParis);
        });    

        it("checks weather given product is on the list or not based on available numbers", () => {
            let returnedProduct = store.checkProductAvailability(victoriaSecret.brandName);
            assert.equal(returnedProduct, null);            
        });
    });


    describe("reduce product count", () => {

        it("checks weather or not product count reduces", () => {
            let store = new Store();
            let catrice = new Product("Catrice", 12);
            let maybelline = new Product("Maybelline", 10);
            store.reduceProductCount(catrice);
            store.reduceProductCount(maybelline);
            assert.equal(catrice.availableNumbers, 11 );
            assert.equal(maybelline.availableNumbers, 9);
        });
        
    })

   