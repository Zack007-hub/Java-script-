//Immediately Invoked Function Expressions (IIFE)
//What is IIFE : IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as  soon as it is defined. It is commonly used to avoid polluting the global namespace or to create a private scope for variables.

(function iife () {
    console.log(`DB connected`);

})();

((Bankai) => {
    console.log(`DB connected two ${Bankai}`);
    
})("Tensa Zangetsu");