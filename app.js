//! JavaScript Memory Management:

/*
! Js Memory 2 type of info:

? 1. Call Stack

! Primitive data type:

* String, Number, Boolean, Undefiend, Null, Symb, BigInt
*/

let fullName = 'Ibrahim Shipon';
let wevDevloper = fullName;
wevDevloper = 'Akash';

console.log(fullName);
console.log(wevDevloper);


/*
? 2. Heap

! Non Primitive data type:

* Object, Array
*/

let student = {
    name: 'Shipon',
    age: 20,
}

let people = student;
// people = {
//     name: 'Akash',
//     age: 25,
// }

people.name = 'Ibrahim';
people.age = 30;

console.log(student);
console.log(people);

let car = ['BMW', 'Audi'];
let newCar = car;
newCar[0] = 'Fzs';
newCar[1] = 'Fzs';

console.log(car);
console.log(newCar);


