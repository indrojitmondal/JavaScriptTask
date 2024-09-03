const numbers=[6,2,3,4,5,1];
const sorted_asc=[...numbers].sort(function (a,b) {return a - b});

const sorted_dsc=[...numbers].sort(function (a,b) {return b - a});
console.log(sorted_asc);
console.log(sorted_dsc);


