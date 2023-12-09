// Predict and explain...
// What will happen when this program is run?
// false for both because in both objects there is not the key 'location'.
// So, the location will be undefined e the includes cannot find undefined in cyfLocations
// Check your prediction and explanation by running the program.
// I didn`t notice that the last assertion has a ! operator. So, in this case, receiving false change to true.
// I`ve solved the bug, and the last assertion is true because there is not Edinburgh in cyfLocations
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
    const cyfLocations = ["Birmingham", "Cape Town", "Glasgow", "London", "Manchester"];
    // return cyfLocations.includes(person.location);
    return cyfLocations.includes(person.city);
}

const mo = {
    "name": "Mo",
    "city": "Glasgow",
    "focus": "React",
};

const sayed = {
    "name": "Sayed",
    "city": "Edinburgh",
    "focus": "SQL",
}

console.assert(checkLivesNearCYF(mo));
console.assert(!checkLivesNearCYF(sayed));
