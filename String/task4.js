// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let topic= 'Exiting sxmething is OkaX';

topic=topic.replace(/x/g,'X');
console.log(topic);

topic=topic.replace(/X/g,'Y');
console.log(topic);