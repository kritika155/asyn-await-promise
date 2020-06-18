const increment = (function() {
    return function increment(number, value = 0) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));