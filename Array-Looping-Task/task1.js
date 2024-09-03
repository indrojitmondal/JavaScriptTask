// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revered=[];
for(let i=colors.length-1; i>=0; i--)
{
    revered.push(colors[i]);
}
console.log(revered);