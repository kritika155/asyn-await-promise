const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = arr1; // change this line
    arr1[0] = 'potato'
})();
console.log(arr2);

const arr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;
(function() {
    arr3 = [...arr]; // change this line
    arr[0] = 'potato'
})();
console.log(arr3);