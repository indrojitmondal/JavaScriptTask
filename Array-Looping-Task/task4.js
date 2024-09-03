// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
// const newStatement= statement.split();

   const newStatement=statement.split(' ');
let newStr='';
for(let i=newStatement.length-1; i>=0; i--){
    newStr=newStr + ' '+newStatement[i];
}
console.log(newStr);

