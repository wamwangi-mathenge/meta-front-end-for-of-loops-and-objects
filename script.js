// A loop cannot work on an object directly, since an object is not iterable

// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }

// Running the above code will throw a TypeError


// Arrays are iterable
const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}