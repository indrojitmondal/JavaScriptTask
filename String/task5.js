// Capitalize Every first Letter of each word in a String
let str="JavaScript is fun language";
console.log(str);
// Split the string into an array of words
let words = str.split(" ");

for(let i=0; i<words.length; i++)
{
    words[i]=words[i][0].toUpperCase() + words[i].slice(1);
}
words=words.join(' ');
console.log(words);
