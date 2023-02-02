const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.includes("Meat")){

}
// else{
//     shoppingCart.unshift("Meat")
// }

else if (shoppingCart.includes("Sugar")){    //Adding Sugar 

}
else{
    shoppingCart.unshift("Meat")

    shoppingCart.push("Sugar")
}

shoppingCart[shoppingCart.indexOf("Tea")]="Green Tea"

shoppingCart.splice(shoppingCart.indexOf("Honey"),1)   //removing honey from array

console.log(shoppingCart)

