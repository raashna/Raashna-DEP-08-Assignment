//1. Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
//2. Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
//3. using forEach: Log a message for each discounted product showing the product name and its new price.


const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];
//using map
const discountProducts=products.map((product)=>{
    if(product.quantity>100){
        return{
            ...product,
            discountedPrice: product.price*0.90
        };
    }
    else{
        return{
            ...product,
            discountedPrice: product.price
        };
    }
});
console.log("discounted products");
console.log(discountProducts);

//using filter
const filteredArray= discountProducts.filter(product=>product.price != product.discountedPrice);
console.log("filtered array");
console.log(filteredArray);

//using for each
filteredArray.forEach((product)=>{
    console.log("name :",product.name);
    console.log("new price: ",product.discountedPrice);
})