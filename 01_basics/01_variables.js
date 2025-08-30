const accountId = 1444553;
let accountEmail = "absc@gmail.com";
var accountPassword = "1452";
accountCity = "Pune"; //also we can use variables without declaration in js
let accoutnState;

accountEmail = "test@gmail.com";
accountPassword = "52535";

/*
In javascript var is not using now because of global and block scope variable instead
of the var we are using let for decalring variables in javascript
*/

// accountId = 2    //not allowed because it is const

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accoutnState ])
