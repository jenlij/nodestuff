const fs = require('fs');

fs.watch('README.md', function(event) {
    console.log('printing');
});

//node watch.js
//in new terminal window: touch README.md

function yelp(what) {
    return 'hey that ' + what;
}

const yell = (what) => {
    return 'hey that ' + what;
}

fs.watch('blah.js', function(event){
    console.log(yelp('tickles'));
    console.log(yell('hurts'));
    console.log("helloooo");
});

// const isEven = val => (val % 2 == 0); //implicitly return 1 value without braces
// [1,2,3,4].filter(isEven);

//npm init -y

//npm start
