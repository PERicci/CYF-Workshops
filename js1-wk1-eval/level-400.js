let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// e) What kind of statement is on line 7?

// a) 3
// b) Find all "cake" (variable secret) and replace for "xxxx" (x repeated 4 times due the secret.length)
// c) 2 (first is the element to look for and the second one is the one to replace one with)
// d) 1 (amount of repetitions)
// e) statement