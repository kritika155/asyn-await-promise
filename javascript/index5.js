alert((function(n) {
    return !(n > 1) ?
        1 :
        arguments.callee(n - 1) * n;
})(10));

// alert((function factorial(n) {
//     return (n <= 1) ?
//         1 :
//         factorial(n - 1) * n;
// })(10));