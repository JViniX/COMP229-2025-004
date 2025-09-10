var person = {
    firstname: "John",
    lastname: "Smith"
};
console.log(person.firstname +" "+ person.lastname);

person = 10;
console.log(typeof person);

person = "John Smith";
console.log(typeof person);

person = 20;
person++;
console.log(typeof person);

let rVar = "21";

let result = person === rVar;
console.log(typeof result);
