"use strict";
//?Basic Types
let id = 10;
let company = "Oussama";
let flag = true;
//! it's not recommanded to use type `any` cause it can cause problemes due to bad user descisions
let x = "whatever";
//? Array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//? Tuple => they gives you the possiblity to use more than one data type
let person = [1, "Brad", true];
//? Tuple Array
let emplyee;
emplyee = [
    [1, "oussama"],
    [2, "aymen"],
];
//? Union => allow two types for the same variable
let pid;
pid = 22;
pid = "22";
//? Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//? Objects
const user = {
    id: 1,
    name: "oussama",
};
console.log(user.id);
//? Type Assertion
let cid = 2;
// let customerId = <number>cid
let customerId = cid;
//? Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
const user1 = {
    id: 1,
    name: "oussama",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//? Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const NewMember = new Person(1, "oussama");
console.log(NewMember);
