const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};


 const f = createHelloWorld();
 console.log(f());            
 console.log(f(1, 2, 3));  
 console.log(f({}, null, 42));  

 