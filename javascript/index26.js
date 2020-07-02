const source = [5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {

    const [, , ...arr2] = list;

    return arr2;
}
const arr2 = removeFirstTwo(source);
console.log(arr2);
console.log(source);

const source1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo1(l) {

    const [a, , ...arr] = l;

    return a;
}
const arr1 = removeFirstTwo1(source1);
console.log(arr1);
console.log(source1);