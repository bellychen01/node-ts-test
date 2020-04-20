export function add(x:number, y:number):number {
  return x+y
}

abstract class Animal {
  name: string;
  constructor(name: string) {
     this.name = name
  }

  abstract eat(): any;
}

class Dog extends Animal {
  age: number;
  constructor(age: number) {
    super('dong');
    this.age = age;
  }

  eat(): void {
    console.log(this.name + 'eat.');
  }
}

let dog = new Dog(12);
dog.eat();

interface userInfo {
  name:string;
  nick:string;
  point:number;
  getName():string;
}

class Person implements userInfo {
  name:string;
  nick:string;
  point:number;
  constructor(name: string, nick: string, point: number) {
    this.name = name;
    this.nick = nick;
    this.point = point;
  }

  getName(): string {
    return this.name;
  }
}

let p = new Person('a', 'b', 10);
p.getName();
let u:userInfo = {
  name: 'c',
  nick: 'd',
  point: 10,
  getName(): string {
    return this.name;
  }
}
console.log(u.getName());