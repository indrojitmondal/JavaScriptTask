// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

// console.log(Object.values(myObject));
// const values= Object.values(myObject);
// console.log(values[1]);

// Output

 for(const prop in myObject){
    console.log('key:',prop, '|', 'type:',typeof myObject[prop] );
    // console.log(typeof myObject[prop]);
 }