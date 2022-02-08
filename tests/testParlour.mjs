import chai from "chai";
import Customer from "../customer.mjs";
import Parlour from "../parlour.mjs";
import Product from "../products.mjs";
const assert = chai.assert;


describe("length of customer list", () => {

    it("atleast one value is on the customer list", () => {
        let parlour = new Parlour();
        let alex = new Customer("Alex", 21, "LorealParis");
        let kimberly = new Customer("Kimberly", 25, "VictoriaSecret");
        let lorealParis = new Product("LorealParis", 12);
        let victoriaSecret = new Product("VictoriaSecret", 15);
        parlour.addProductToStore(lorealParis);
        parlour.addProductToStore(victoriaSecret);
        parlour.addCustomer(alex);
        parlour.addCustomer(kimberly);
        assert.equal(parlour.customerList.length , 2 );

    });
});
