// Predict and explain...
// What will happen when this program is run?
// It is not working properly as the 'field' parameter is not the same of the .field key.
// It doesn't matter if we call the function with the field parameter equals to 'favourite_ice_cream'.
// The function will search a key called 'field' inside the object.
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
    "name": "Manu",
    "favourite_ice_cream": "vanilla",
    "favourite_topping": "marshmallows",
};

function assertFieldEquals(object, field, targetValue) {
    // console.assert(object.field === targetValue);
    console.assert(object[field] === targetValue);
}

assertFieldEquals(person, "favourite_ice_cream", "vanilla");
