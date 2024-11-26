function multiply(a) {
    
    return function (b) {

        return a * b;
    };

}
 const result1 = multiply(98)(4);
 console.log(result1);

 const result2 = multiply(-8)(8);
 console.log(result2);

 const result3 = multiply(3)(7);
 console.log(result3);
