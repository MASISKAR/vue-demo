import sum from './script1.js';


export let s = sum(3, 4);

console.log('s', s);

export default function printHello(){
    console.log('hello');
}

function printStart(){
    console.log('start');
}

const array = [2, 3,4 ,65 ,6];

// export default printHello;
// export { printStart };
// export { array };

export { printStart, array };