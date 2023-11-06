const commentedCode1 = `
//---------------------------------------------------
//Question #1:
//---------------------------------------------------
// function sum(arr){
//     return arr.filter(e=>e>20).reduce((a,b)=>a+b);
// }
// const arrValues= [20,9,3,22,78,6,50,2];
`;
console.log(commentedCode1);

function sum(arr){
    return arr.filter(e=>e>20).reduce((a,b)=>a+b);
}
const arrValues= [20,9,3,22,78,6,50,2];

console.log("Answer #1: ",sum(arrValues));

const commentedCode2 = `
//---------------------------------------------------
//Question #2
//---------------------------------------------------
//const ques2Result = function getNewArray(strArr) {return strArr.filter(e=>e.length>=5&&e.includes('a'))}
//ques2Result(['Cyrus', 'Shrestha', 'Tanusha', 'Pukuchey']
`;
console.log(commentedCode2);

const ques2Result = function getNewArray(strArr) {return strArr.filter(e=>e.length>=5&&e.includes('a'))}
console.log("Answer #2 ", ques2Result(['Cyrus', 'Shrestha', 'Tanusha', 'Pukuchey']));


const commentedCode3 = `
//---------------------------------------------------
//Question #3
//---------------------------------------------------
//const concat= (e,f,g)=>  [...e,...f,...g];
//concat('hi', [1,2,3], ['Hello','world'])
`;
console.log(commentedCode3);
const concat= (e,f,g)=>  [...e,...f,...g];
console.log("Answer #3 ", concat('hi', [1,2,3], ['Hello','world']));



// const arr = [5,1,3,2,6];

// const result = (a) => a.reduce((acc,curr)=>  {
//     if(curr>acc){
//         acc = curr;
//     }
//     return acc;
// },0);
// console.log(result(arr));


// const person = [{fname: "Cyrus", lname: "Shrestha", age: 26},
//                 {fname: "Tanusha", lname: "Ayer", age: 24},
//                 {fname: "Astro", lname: "Puku", age: 2}];

// const a = [];

// const result1 = (arr) => arr.map(x=>`${x.fname+" "+x.lname}`);
// console.log(result1(person));

