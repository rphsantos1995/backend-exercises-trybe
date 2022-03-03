## Classes

Class is the first of the concepts, used to determine something generic. In object-oriented programming, every class is intended to accurately model the representation of a real-world entity. An example of a class is Person . There are several people in the world, you and I being two of them, and as much as we are different people, we belong to the same Person class.

Within classes and objects there are attributes and methods. Examples of a Person's attributes are the Person's height and mass.

An attribute represents a value, and a method (or message) is nothing more than an action. an attribute is a variable created in a class, and a method is a function created in a class. One method worth mentioning is the constructor method. It is run automatically when creating an object, and serves to initialize some attributes and call some methods.


>typescript code snippet

```typescript
class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
};
// outputs
const p1 = new Person('Maria', 171, 58); //Creating person Maria
const p2 = new Person('John', 175, 66); //Creating person John
console.log(p1.name, p1.height, p1.weight);//Maria 171 58
console.log(p2.name, p2.height, p2.weight);// John 175 66
p1.sleep();//Maria: zzzzzzz
p2.sleep();//John: zzzzzzz
```

## Abstraction

One of the pillars of Object Orientation is abstraction. When creating Object Oriented code, it should be intentional to use abstraction, that is, to "hide" implementation details from the person who will use the class or objects.
In console.log, log is a method of the console object.

Between the console.log call and the visualization of the result on the screen, there are several layers of abstraction, which, on the one hand, do not give you a clear picture of what is happening, on the other hand, they solve your problem without you having to worry about it. The person just needs to know that, upon receiving a certain input, this method will return or display a certain result.

## Encapsulation








