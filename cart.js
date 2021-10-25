///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

let sum = cart.reduce((acc, val) => {
    return val.name == 'pizza' ? acc : acc + val.price;
  }, 0);
console.log(sum)
// really dont know if i did it right
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}


const compareNums = (num1, num2) => num1 > num2 ? num1 : num2



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
  
*/
const explObject = {
    name : 'guest name because you need to identify and (string)',
    bDayYear: 'to verify if guest is over the age of 21 and (number)',
    ccInfo: 'so customers can pay for food and (number)',
    expDateCc = ' to make sure guest doesnt come with faulty cards and (number)',
    mealAndDrink: 'because you can suggest their favorite meal when the come and (string and array)',
}
/*
    Now, create a customer object following your own
    guidelines.
*/
//CODE HERE
const customerObject = {  
    name : 'lisa',
   bDayYear: 1991,
   ccInfo: 1234567891011,
   expDateCc = 1234,
   mealAndDrink: ['coke','shrimp pasta','salad']
}
