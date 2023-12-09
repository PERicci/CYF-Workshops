// Predict and explain...
// What will happen when this program is run?
// There are bugs in lines 9 (the : is missing) and 10 (the sign inside the object is not =)
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
    "name": "Jemima",
    "location": "Glasgow",
    "id_number": 9,
};

// after the fix
console.assert(person.name === "Jemima");
// pass
console.assert(person.location === "Glasgow");
// pass
console.assert(person.id_number === 9);
// pass
