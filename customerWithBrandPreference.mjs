import Parlour from "./parlour.mjs";
import Product from "./products.mjs"; 
import Customer from "./customer.mjs";



let listofCustomerData = [
    {name:"Carole", age:25, brandPreference:"LorealParis"},
    {name:"Sasha", age:21, brandPreference:"Sephora"},
    {name:"Shubi", age:28, brandPreference:"LorealParis"},
    {name:"Shweta", age:27, brandPreference:"Catrice"},
    {name:"Shikshya", age:26, brandPreference:"Victoria Secret"}
]

let listofCustomers = [];
listofCustomerData.forEach(customer => {
    let customerObject = new Customer(customer.name, customer.age, customer.brandPreference);
    listofCustomers.push(customerObject);

});

let listOfProductData = [
    {brandName: "Sephora", availableNumbers: 25},
    {brandName: "Maybelline", availableNumbers: 15},
    {brandName: "LorealParis", availableNumbers: 1},
    {brandName: "Catrice", availableNumbers: 12},
    {brandName: "Garnier", availableNumbers: 20},
    {brandName: "Victoria Secret", availableNumbers: 10},
    {brandName: "Extreme", availableNumbers: 30}
]

let listofProducts = [];
listOfProductData.forEach(product => {
    let productObject = new Product(product.brandName, product.availableNumbers);
    listofProducts.push(productObject);
})

const myParlour = new Parlour();

listofProducts.forEach(product => {
    myParlour.addProductToStore(product);
})

listofCustomers.forEach(customer => {
    myParlour.addCustomer(customer);
})

myParlour.showProductsInStore();

myParlour.addProductToStore();
