// foreach only works with array
// var arr = ["red", "green", "blue", "yellow"];

// arr.forEach(function(x, n){

//     console.log(x);
//     console.log(n);

// })

var jsondata = [
    {
        name : "rohit",
        city : "indore",
        age : 25
    },
    {
        name : "jaya",
        city : "indore",
        age : 20
    },
    {
        name : "nidhi",
        city : "bhopal",
        age : 32
    },
    {
        name : "garuav",
        city : "indore",
        age : 21
    },
    {
        name : "nilesh",
        city : "ujjain",
        age : 25
    }
];

jsondata.forEach(function(user){
    console.log(user.name);
    console.log(user.city);
    console.log(user.age);
});