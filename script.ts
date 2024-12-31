// let num = 324.421
// let names: string = "prasad"
// console.log(`user name is${names} and age is ${num}`)
// let emp: null = undefined
// console.log(emp)

// const user: { names: string age: number } = {
//   age: 21,
//   names: "arun",
//   place: "bhavani",
// }

// console.log("users :", user)

// let arr: Array<object> = [
//   { nameS: "somu", age: "21" },
//   { names: "prasad", age: 322 },
// ]
// let arrtuple: [number, string, boolean] = [7, "ara", true]
// // console.log(arrtuple)

// let values: number | string | boolean;
// let data = 32;
// // data = "string"
// values = 7;
// values = true;
// console.log(values);
// let use ={name:'raj',age:56}
// use={age:87,name:'somu'}

// function

// function getUser(name = "no name given", age: number, place?: string): void {
//   console.log(`name is ${name} and age is ${age} place is ${place}`);
// }
// getUser("prasa", 67, "bhavani");

// const add: (name: number) => number = function (num) {
//   return num;
// };
// console.log(add(6));

// const add = (num1: string, num2: string): string => {
//   let total = num1 + num2;

//   return total;
// };

// console.log(add("prasad", " raja"));

// rest para

// let addnum = ((...num: number[]) => {
//   num.push(12);
//   return num;
// })();

// console.log(addnum(1, 324, 32, 42, 14, 24));

// interface

interface Structure {
  name: string;
  age: number;
  place?: string;
}

export interface Person extends Structure {
  qualification?: string;
  isjob?: boolean;
}

let obj1: Person = {
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

class Generic<Type> {
  items: Type[] = [];

  push(item: Type) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }
}

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

function getvalues<type>(value: type[]) {
  return value;
}

let output = getvalues<number>([31, 43, 2, 42, 425, 5]);
let stringoutupt = getvalues<string>(["jdsfa", "fdfa", "fadsfa"]);
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

let num = 31;
let data = num as any as string;
console.log(data);
