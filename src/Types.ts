//?Basic Types

let id: number = 10;
let company: string = "Oussama";
let flag: boolean = true;

//! it's not recommanded to use type `any` cause it can cause problemes due to bad user descisions
let x: any = "whatever";

//? Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any = [1, true, "Hello"];

//? Tuple => they gives you the possiblity to use more than one data type
let person: [number, string, boolean] = [1, "Brad", true];
//? Tuple Array
let emplyee: [number, string][];

emplyee = [
  [1, "oussama"],
  [2, "aymen"],
];

//? Union => allow two types for the same variable
let pid: string | number;
pid = 22;
pid = "22";

//? Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

//? Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "oussama",
};

console.log(user.id);

//? Type Assertion
let cid: any = 2;
// let customerId = <number>cid
let customerId = cid as number;

//? Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

//? Interfaces
interface UserInterface {
  id: number; //for read only property simply add `readonly` before the object name
  name?: string; // `!` sign means type optional
}

const user1: UserInterface = {
  id: 1,
  name: "oussama",
};

//? Interfaces usage with functions to keep the same data type
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//? Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const NewMember = new Person(1, "oussama")
console.log(NewMember);
