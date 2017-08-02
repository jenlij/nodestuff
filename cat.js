var cat = {
    name: 'oakley',
    speak: function() {
        return 'meow'
    }
};
module.exports = cat;


//node
//var aCat = require('./cat')

//let prevents hoisting 
//const will never be reassigned

// > if(true) { var thing1 = 'foo';}
// undefined
// > thing1
// 'foo'
// > if(true) { let thing2 = 'foo';}
// undefined
// > thing2
// ReferenceError: thing2 is not defined




//const prevents rebinding, but allows mutation (aka can't name-variable match, but you can push things to array or add properties to object)
