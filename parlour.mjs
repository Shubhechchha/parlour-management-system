import Store from "./store.mjs";

class Parlour {
    constructor() {
        this.store= new Store();
        this.customerList = [];
    }

    addProductToStore(productObj) {
        this.store.addProduct(productObj);
    }

    addCustomer(customerObj) {
        let reqProduct = this.store.checkProductAvailability(customerObj.brandPreference);
        if(reqProduct !== null) {
            this.customerList.push(customerObj);
            this.store.reduceProductCount(reqProduct);
            console.log(`The added name and brand preference of customer is ${customerObj.name} and ${customerObj.brandPreference} respectively.`);
        }else {
            console.log("All seats booked!");
        }
    }

    showProductsInStore() {
        this.store.showProducts();
    }

}

export default Parlour;
