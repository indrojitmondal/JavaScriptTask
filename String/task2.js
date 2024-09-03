// Count how many times a string has the letter a or A
// Count how many times a string has the letter a
const address='PAikgacha';
let ct_a=0;
for(let i=0; i<address.length; i++)
{
    if(address[i].toLowerCase()==='a') ct_a++;
}
console.log(ct_a);
