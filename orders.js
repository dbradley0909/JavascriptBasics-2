/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/

//finish db check one
//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/

//CODE HERE
class Ticket{
    constructor(items, orderTime, customerId, status){
        this.items = items;
        this.orderTime = orderTime;
        this.customerId = customerId;
        this.status = status;
    }
    updateStatus(newStatus){
        this.status = []
        for(let i = 0; i < this.status.length; itt)
          if(newStatus[i] < 1)
        console.log(`${this.customerId} is now ${this.status}`)

    }

}



/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered a: 7:03 PMt
    customer: 575
*/

//CODE HERE
const firstTicket = new Ticket('food ordered: pasta, bread, and wine',' ordered a: 8:15 PMt','customer: 10')
console.log(Ticket)
/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE

let meal = firstTicket.updateStatus()
console.log(meal);