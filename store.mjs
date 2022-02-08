class Store {
    constructor() {
        this.productList = [];
    }

    addProduct(productObj) {
         this.productList.push(productObj);
        console.log(`The new product ${productObj.brandName} has been added to the store.`)
    }

    checkProductAvailability(customerBrandPreference) {
         for(let product of this.productList) {
            if(product.brandName === customerBrandPreference && product.availableNumbers > 0) {
                return product;
            }
         }
         return null;
    }

    reduceProductCount(bookedProduct){ 
        let previousProductCount = bookedProduct.availableNumbers;
        bookedProduct.availableNumbers = previousProductCount - 1;
        console.log(`The ${bookedProduct.brandName} quantity reduced from ${previousProductCount} to ${bookedProduct.availableNumbers}`);
    }

    showProducts() {
        this.productList.forEach(product => {
            console.log(` ${product.availableNumbers} ${product.brandName} is on the product list`);
        })
    }
}

    
export default Store;

