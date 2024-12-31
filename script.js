"use strict";
// let num = 324.421
// let names: string = "prasad"
// console.log(`user name is${names} and age is ${num}`)
// let emp: null = undefined
// console.log(emp)
Object.defineProperty(exports, "__esModule", { value: true });
var obj1 = {
    name: "arun",
    age: 21,
    place: "bhvani",
};
// obj1.name = "prasad";
// console.log(obj1);
// function person(details: Structure) {
//   console.log(`name is ${details.name} and ${details.age} `);
// }
// let per = { age: 98, name: "raju", place: "place" };
// person(per);
// function getUser(name: string | number) {
//   const result = typeof name === "string" ? `text:${name}` : `number:${name}`;
//   return result;
// }
// console.log(getUser("prasasd"));
// interface eg
// let obj: User = {
//   name: "prasad",
//   age: 20,
//   place: "bhvani",
//   phone: 9958429524,
// };
// // console.log(obj);
// interface Fun {
//   (a: number, b: number): number;
// }
// enum Access {
//   admin,
//   user,
//   guest,
// }
// function addignRole(role: Access): void {
//   if (role === Access.admin) {
//     console.log("congrats, you are an admin");
//   } else {
//     console.log("you are the user ");
//   }
// }
// addignRole(Access.admin);
// addignRole(Access);
// interface Persons {
//   name: string;
//   age: number;
//   place?: string;
//   phone?: number;
// }
// let user: Person = { name: "arun", age: 20, place: "bhavani" };
// function getUser(person: Persons) {
//   console.log(`name ${person.name} age ${person.age}`);
// }
// getUser(user);
// class Personcls {
//   name: string;
//   age?: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getUser() {
//     return `hello this is ${this.name} age is ${this.age}`;
//   }
// }
// class Adminuser extends Personcls {
//   role: string;
//   constructor(name: string, age: number, role: string) {
//     super(name, age);
//     this.role = role;
//   }
//   getRole() {
//     return `hello this is ${this.name} age ${this.age} role ${this.role}`;
//   }
// }
// const person = new Personcls("arun", 21);
// const Admin = new Adminuser("", 2, "");
// console.log(person.getUser());
// // console.log(Admin.getUser());
// function Counter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     decrement: function () {
//       count--;
//     },
//   };
// }
// let counter1 = Counter();
// let counter2 = Counter();
// counter1.increment();
// counter1.increment();
// console.log(counter1.increment());
// console.log(counter2.increment());
// generic
var Generic = /** @class */ (function () {
    function Generic() {
        this.items = [];
    }
    Generic.prototype.push = function (item) {
        this.items.push(item);
    };
    Generic.prototype.pop = function () {
        this.items.pop();
    };
    return Generic;
}());
// let gene = new Generic<number>();
// let geneString = new Generic<string>();
// geneString.push("hello");
// geneString.push(" prasad");
// geneString.pop();
// console.log(geneString.items);
// gene.push(1);
// gene.push(2);
// gene.push(3);
// gene.pop();
// console.log(gene.items);
function getvalues(value) {
    return value;
}
var output = getvalues([31, 43, 2, 42, 425, 5]);
var stringoutupt = getvalues(["jdsfa", "fdfa", "fadsfa"]);
// console.log(output);
// console.log(stringoutupt);
// interface keypair<t1, t2> {
//   id: t1;
//   name: t2;
// }
// let person: keypair<number, string> = {
//   id: 6857,
//   name: "prasad",
// };
// console.log(person);
var num = 31;
var data = num;
console.log(data);
