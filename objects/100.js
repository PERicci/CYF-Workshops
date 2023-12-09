// Predict and explain...
// What will be logged by this code?
// person1 is an object with its own data;
// person2 and person3 are references to the same object.
// So, when you assign person3.location = 'Manchester' it changes the person2.location too,
// because they are, actually, the same object in the memory.
// Check your prediction and explanation by running the code.

const person1 = {
    "name": "Abdi",
    "location": "London",
    "id_number": 17,
};

const person2 = {
    "name": "Shadi",
    "job": "Software Engineer",
    "location": "London",
    "id_number": 28,
};

const person3 = person2;

person3.location = "Manchester";

console.log(person1.name);
// Abdi, as assigned
console.log(person2["name"]);
// Shadi, as assigned
console.log(person1.id_number > person2["id_number"]);
// false, as 17 is not bigger than 28
console.log(person1.job);
// undefined, as not assigned yet
console.log(person1.location === person2.location);
// false, as person2.location is Manchester
console.log(person1.location === person3.location);
// false, as person3.location is Manchester
console.log(person2.location === person3.location);
// true, as person2 and person3 are the same object
