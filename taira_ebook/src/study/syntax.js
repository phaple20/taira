let bar = {a:1,b:2,d:4,e:{nickName: 6}};
let baz = { ...bar }
baz.e.nickName = 7;
//let bac = Object.assign({c:3,d:5},bar);
//console.log(bar);
function add(a,b) {
    return a+b;
}
const adddemo = [3,9];
console.log(add(...adddemo));

function foo() { 
    console.log(typeof arguments);
    console.log(arguments);
 } 
 var arg = Array.prototype.slice.call(arguments); 
 foo("a","b","c","d"); 

