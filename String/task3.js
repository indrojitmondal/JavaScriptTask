// Check whether a string contains all the vowels a, e, i, o, u
const address ='I love Paikgacha';
var ch;
for(let i=0; i<address.length; i++)
{
     ch=address[i].toLowerCase();
    if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u')
    {
        console.log(ch ,'is', 'Vowels');
    }
    else if(ch===' ')
    console.log(ch ,'is', 'Spaces');
    else{
        console.log(ch ,'is', 'Consonant');
    }

}