// const obj = {
//     id: 1,
//     name: 'Hong',
//     f() {
//       console.log('fffffff');
//     },
//   };
//   // console.table(obj);
//   const objProxy = new Proxy(obj, {
//     set(target, prop, value) {
//       console.log('proxy.set>>', prop, value);
//       target[prop] = value;
//     },
//     get(target, prop) {
//       console.log('proxy.get>>', prop);
//       if (prop === 'id_name') return `${target['id']}. ${target['name']}`;
//       return target[prop];
//     },
//   });
//   objProxy.id = 100;
//   console.log('obj.id>>', objProxy.id, obj['id']);
//   console.log('obj.id>>', objProxy.id_name);
//   objProxy.f();
//   console.log('::>>', objProxy instanceof obj.constructor);
  
//   class Animal {
//     #name;
//     constructor(name) {
//       // console.log('Animal.constructor>>', name);
//       this.#name = name || super.constructor.name;
//       console.log('🚀  constructor:', super.constructor);
//       console.log('🚀  prototype:', super.__proto__);
//     }
  
//     move() {
//       console.log('MOV!!!');
//     }
  
//     getName() {
//       return this.#name;
//     }
  
//     get name() {
//       return this.#name;
//     }
//   }
//   const dog = new Animal('Dog');
//   console.log('🚀  dog:', dog.name, dog.getName());
//   console.log('🚀  dog.const:', dog.constructor.name);
//   console.log('ani::>', Animal.prototype);
//   console.log('dog::>', dog.__proto__);
//   console.log('dog.move::>', dog.__proto__.move());
//   const cat = new Animal();
//   console.log('🚀  cat:', cat.name);
//   console.log('ok=', Object.keys(obj));
//   console.log('ak=', Object.keys(dog));
//   // for (let k in dog) console.log('k=', k);
//   // console.log('oh=', obj.hasOwnProperty('id'));
//   // console.log('dh=', dog.hasOwnProperty('id'));
//   console.log('dog-ani>>>', dog instanceof Animal, typeof dog);
//   console.log('ani-fn>>>', Animal instanceof Function, typeof Animal);
  
//   const cls = new (class {
//     constructor() {
//       console.log('constructor!');
//     }
//     eat() {}
//   })();
  
//   console.log('cls>>', cls instanceof Object);
//   console.log('--------------------------');
//   Animal.prototype.f = function () {
//     console.log('Animal.f>>', this.name);
//   };
//   // Object.setPrototypeOf(dog, { ...dog.__proto__, x: 1 });
//   dog.f(); // Animal.f
//   console.log('--------------------------');
//   console.log('P1>>', obj.__proto__);
//   console.log('P2>>', dog.__proto__);
//   console.log(Object.getPrototypeOf(dog));
  
//   console.log('***************************');
//   console.log(Animal === dog.constructor);
//   console.log(Animal.prototype === dog.__proto__);
  
//   console.log('obj.proto>>', obj.__proto__);
//   console.log('🚀  obj:', obj);
//   console.log('TTT>>', new Object(obj));
//   const objX = Object.create(obj);
//   console.log('🚀  objX:', objX);
//   console.log('🚀  objX.proto:', objX.__proto__);
//   // console.log('obj.proto>>', obj.__proto__);
  
//   Array.prototype.first = function () {
//     return this[0];
//   };
//   Object.defineProperties(Array.prototype, {
//     first: {
//       get: function () {
//         return this[0];
//       },
//     },
//     last: {
//       get: function () {
//         return this[this.length - 1];
//         // return this.slice(-1)[0];
//       },
//     },
//   });
//   const arr = [1, 2, 3];
//   // console.log('first-old>>', arr.first());
//   console.log('first-new>>', arr.first);
//   console.log('last-new>>', arr.last);
  
//   console.log('==============================');
  
//   class Singleton {
//     static #_instance;
  
//     constructor() {
//       if (Singleton.#_instance) return Singleton.#_instance;
//       console.log('Singleton.constructor!!!');
//       this.name = 'Singleton';
//       Singleton.#_instance = this;
//     }
  
//     static getInstance() {
//       // if (this.#_instance) return this.#_instance;
//       // return new this();
//       return this.#_instance || new this();
//     }
  
//     // overriding   cf. overloading: JS X
//     toString() {
//       return `[Singleton: ${this.name}]`;
//     }
//   }
  
//   const s3 = Singleton.getInstance();
//   console.log('🚀  s3:', s3);
//   const s1 = new Singleton();
//   const s2 = new Singleton();
//   console.log(s1 === s2, s2 === s3, s3 === s1);
//   console.log('toString>>', s3.toString());
  
//   console.log('===============================');
//   class Emp {
//     #name;
//     // constructor(name) {
//     //   this.nm = name;
//     // }
//     set name(name) {
//       this.#name = name;
//     }
  
//     get name() {
//       return this.#name;
//     }
  
//     set fullName(name) {
//       console.log('settter>>', name);
//       [this.firstName, this.lastName] = name.split(' ');
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     toString() {
//       return `first: ${this.firstName}, last: ${this.lastName}`;
//     }
//   }
//   const hong = new Emp('Senior Coding');
//   hong.name = 'Steve';
//   console.log('🚀  hong:', hong.name);
//   // hong.setFullName('Steve Jobs');
//   // console.log('🚀  hong11:', hong.toString());
//   // console.log('🚀  hong22:', hong.getFullName());
  
//   hong.fullName = 'Uncle Bob';
//   console.log('🚀  hong33:', hong.fullName);
  
//   // hong.fullName = 'Kildong Hong';
//   // console.log(hong.fullName); // ?
//   // console.log(Object.getOwnPropertyDescriptor(Emp.prototype, 'fullName'));
  
//   console.log('***************************');
//   class Pet {
//     feed(nutrient) {
//       console.log(`feed to ${this.name} :`, nutrient);
//     }
//   }
  
//   function mixinPetFeed(mainClass) {
//     Object.assign(mainClass.prototype, { feed: Pet.prototype.feed });
//     return mainClass;
//   }
  
//   // class Dog extends Animal {
//   class Dog extends mixinPetFeed(Animal) {
//     constructor(name) {
//       super(name);
//     }
  
//     bark() {
//       console.log('bowwow!', this.name);
//     }
//   }
  
//   // 1) method 1개
//   // Object.assign(Dog.prototype, { feed: Pet.prototype.feed });
  
//   // 2) 전체(다중상속)
//   // Object.defineProperty(Pet.prototype, 'feed', { enumerable: true });
//   // Object.assign(Dog.prototype, Pet.prototype);
//   const jake = new Dog('Jake');
//   jake.move();
//   jake.bark();
//   jake.feed('Banana');

const hong = { id: 1, name: 'Hong' };
const map = new Map([  [1, 11], [2, 22]  ]);
map.set('three', 333);  // {three: 333, four: [1,2]}
map.set('four', [1, 2, 3, 4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map);  // Map(6) {  1 => 11, 2 => 22, 'three' => 333, 'four' => [ 1, 2, 3, 4 ],        ?, ?}
console.log(map.get(hong));  // 'Hong'
map.delete(hong);
map.has(hong);   // ?
map.has(hong.name); // ?
map.clear();

