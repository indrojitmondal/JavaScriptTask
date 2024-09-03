const bottle ={
    brand: 'Apple',
    price: 45,
    color: 'white',
    isClean: false,
    'location_place': ['sdsd','assd'],
}
const proNamePlace='location_place';
bottle[proNamePlace]=['Dhaka','khulna','Jessore'];
console.log(bottle[proNamePlace]);
console.log(Object.keys(bottle));
