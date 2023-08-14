# For of loops and objects

In this reading, you'll learn how the for of loop works conceptually.

It is important to know that a for loop cannot work on an object directly, since an object is not iterable. For example:

```
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
```

Running the above code snippet will throw the following error:

```
Uncaught TypeError: car is not iterable
```

Contrary to objects, arrays are iterable. For example:

```
const color = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}
```

This time, output is as follows:

```
red
orange
yellow
```

Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

## Built-in methods
### The Object.keys() method

The Object.keys() method receives an object as its parameter. This is object is the object you want to loop over. 

Here's an example of running the Object.keys() method on a brand new car2 object:

```
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed', 'color']
```

### The Object.values() method

Another useful method is Object.values():

```
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```

### The Object.entries() method

The Object.entries() returns an array listing both the keys and the values.

```
const car4 = {
    speed: 400,
    color: "magenta"
}
console.log(Object.entries(car4))
```

What gets returned from the invocation of the `Object.entries()` method is the following:

```
[['speed', 400], ['color', 'magenta']]
```

The values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.


## Examples
The above properties are all the ingredients needed to loop over any object's own property keys and values

```
var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}

for(key of Object.keys(clothingItem)) {
    console.log(keys, ":", clothingItem[key])
}
```