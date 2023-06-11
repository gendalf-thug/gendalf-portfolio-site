# Список распространенных вопросов по TypeScript

### Что такое TypeScript и зачем использовать его вместо JavaScript?

- это надмножество JS, которое добавляет в него возможность явного статического назначения типов. (проект принадлежит Microsoft)
- Одним из серьёзных преимуществ TypeScript перед JavaScript является возможность обнаружения ошибок непосредственно в процессе ввода кода

### Что такое обобщения(Generic) и зачем они нужны?

- Это инструмент, который позволяет писать на TypeScript функции и классы, способные работать с различными типами данных, сохраняя работоспособность проверки типов

```ts
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverse(numbers);

const strings = ['apple', 'banana', 'orange'];
const reversedStrings = reverse(strings);
```

### Поддерживает ли TypeScript все принципы ООП?

- Да, Есть 4 принципа:
  - **Инкапсуляция** - размещение в оболочке(изоляция), закрытие чего-либо инородного с целью исключения влияния на окружающее
  - **Наследование** - позволяет использовать повторно функциональность и свойства существующего объекта в новом
  - **Абстракция** - означает, что для каждого объекта мы задаём минимальное кол-во методов, полей и описаний, которые позволят нам решить задачу.
  - **Полиморфизм** - означает, что функция или метод может работать с разными типами

### Что представляют собой `.map` файлы в TypeScript?

- Это файлы карты, которые позволяют инструментам сопоставлять выпущенный ĸод JavaScript и исходные файлы TypeScript, которые его создали.

### Кто такие геттеры(get) и сеттеры(set) в TypeScript?

- TypeScript поддерживает геттеры и сеттеры, которые позволяют управлять доступом ĸ элементам класса.
- Они дают разработчику средства контроля над чтением и записью свойств объектов.
- Для объектов можно использовать `Object.defineProperty` для определения геттеров и сеттеров

```ts
interface UserI {
  firstName: string;
  surname: string;
  fullName?: string; // Чтобы TS не ругался
}

const user: UserI = {
  firstName: 'Вася',
  surname: 'Петров',
};

Object.defineProperty(user, 'fullName', {
  get() {
    return this.firstName + ' ' + this.surname;
  },
  set(value) {
    const splitRes = value.split(' ');
    this.firstName = splitRes[0];
    this.surname = splitRes[1];
  },
});

user.fullName = 'Петя Иванов';
console.log(user.firstName); // Петя
console.log(user.surname); // Иванов
```

- \* Указание set и get при создании объекта:

```ts
const user = {
  firstName: 'Вася',
  surname: 'Петров',
  get fullName() {
    return this.firstName + ' ' + this.surname;
  },
  set fullName(value) {
    const splitRes = value.split(' ');
    this.firstName = splitRes[0];
    this.surname = splitRes[1];
  },
};

console.log(user.fullName); // Вася Петров
user.fullName = 'Вадим Прасолов';
console.log(user.firstName); // Вадим
console.log(user.surname); // Прасолов
```

### Можно ли использовать TypeScript в серверной разработке, и если да — то ĸаĸ?

- Да, лучший способ сделать это - установить `nodemon` и `ts-node` в dev-зависимости и добавить 2 скрипта:
  1. `start` для развертывания на сервере `"start": "ts-node ./src/app.ts"`
  2. `dev` для локального запуска с авто-обновлением сервера при обновлении файлов: `"dev": "nodemon ./src/app.ts"`

### Расскажите об основных компонентах TypeScript

- Язык. Синтаксис который позволяет писать на typescript
- Компилятор. Он выполняет преобразование TypeScript-кода в JavaScript-ĸод и сообщает об ошибках типов если они имеются. Еще он позволяет объединять несколько TypeScript-файлов в один выходной JS-файл и умеет создавать карты кода
- Вспомогательные инструменты. Это среды разработки такие ĸаĸ VS Code, которые могут быстро запускать TS-ĸод

### Что такое перегрузка функции и поддерживает ли её TypeScript?

- Это объявление функции с тем же именем несколько раз. Чтобы компилятор мог отличать «перегруженные» функции между собой, у них должны быть разные параметры
- Да, TS поддерживает перегрузку, но не совсем таĸ ĸаĸ в других языках
- Перегрузка может быть полезна для предопределения типа возвращаемого значения, в зависимости от типов передаваемых в функции аргументов

Пример перегрузки в TypeScript:

```ts
function foo(arg1: number, arg2: number): number;
function foo(arg1: string, arg2: string): string;
function foo(arg1: number | string, arg2: number | string): string;

function foo(arg1: string | number, arg2: string | number) {
  // @ts-ignore
  return arg1 + arg2;
}

// Благодаря перегрузке тип возвращаемого значения определиться сам
const numberResult = foo(20, 10); // numberResult: number
const stringResult = foo('20', 10); // stringResult: string
const stringResult2 = foo('Hello', 'world'); // stringResult2: string
```

### Чем различаются ключевые слова interface и type в TypeScript?

- Интерфейсом можно описать только тип объекта, а типом можно описать примитивные значения

У интерфейса есть преимущества:

1. Интерфейс может быть использован в выражении `extends` или `implements`
2. Интерфейс может иметь несколько объединённых объявлений. Механизм «слияния объявлений» позволяет компилятору объединять различные объявления интерфейсов с одним и тем же именем в одно определение интерфейса.

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}

const person: Person = {
  name: 'John',
  age: 30,
};
```

### Расскажите о том, когда в TypeScript используют ключевое слово `declare`

- Ключевое слово declare используется в TypeScript для объявления переменных, источником которых может служить некий файл, не являющийся TypeScript-файлом.

### Что такое внешние объявления переменных в TypeScript и когда их нужно использовать?

- Это механизм, который позволяет сообщать компилятору TypeScript о том, что некий исходный ĸод существует где-то за пределами текущего файла
- Внешние объявления помогают интегрировать в TS-программы сторонние JavaScript-библиотеки.
- Эти объявления делают в файле объявления типов с расширением `.d.ts`

### Можно ли автоматически генерировать файлы объявлений TypeScript из JS-библиотек?

- `Microsoft/dts-gen` — официальное средство, используемое Microsoft ĸаĸ отправная точка при создании объявлений типов
- Установить опцию компилятора на true в файле `tsconfig.json`

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

### Какая польза от файла tsconfig.json?

- Файл `tsconfig.json` определяет корневые файлы и параметры компилятора, необходимые для компиляции проекта.

### Какая инструкция используется для наследования в TypeScript?

- `extends`

```ts
interface User {
  name: string;
  age: string;
}

interface Worker extends User {
  passport: string;
  officeNumber: number;
}
```

### Можно ли в TypeScript унаследоваться от класса?

- Да, через ключевое слово extends

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} говорит`);
  }
}

class Dog extends Animal {
  // Расширяем класс животных
  constructor(name: string) {
    super(name);
  }
  wagTail(): void {
    console.log(`${this.name} виляет хвостом`);
  }
}

const dog = new Dog('Егор');
dog.speak(); // Егор говорит
dog.wagTail(); // Егор виляет хвостом
```

### Что такое пространство имен в Typescript?

- Это просто способ логически сгруппировать связанные классы или интерфейсы в оболочке
- Данный способ является устаревшим, рекомендуется использовать модули(`import/export`) вместо namespace

Пример `namespace`:

```ts
namespace MyNamespace {
  export interface Person {
    name: string;
  }

  export function sayHello(person: Person) {
    console.log(`Привет, ${person.name}!`);
  }
}
const person: MyNamespace.Person = {name: 'Владимир'};
MyNamespace.sayHello(person);
```

### Что такое декораторы в TypeScript?

- Декораторы - это специальные функции, которые могут быть применены к классам, методам, свойствам и параметрам во время определения

```ts
function classDecorator(constructor: Function) {
  console.log('Вызвано тело этого декаратора');
  const instance = new constructor();
  console.log(instance.name);
}

@classDecorator
class MyClass {
  name = 'Мой класс';
  constructor() {
    console.log('Конструктор класса отработал');
  }
}
// При запуске данного кода вывод будет в таком порядке:
// Вызвано тело этого декаратора
// Конструктор класса отработал
// Мой класс
```

### Для чего используется ключевое слово `as` в TypeScript?

![as not ass](asNotAss.gif)

- `as` - это дополнительный синтаксис для утверждения типа в TypeScript
- Обычно он используется когда вы уверенны в типе объекта, но TypeScript с вами не согласен

```ts
interface SomethingI {
  keyName: string;
}
const fetchSomething = async () => {
  const data = (await axios.get('https://example.com/api/something'))
    .data as SomethingI;
  // Теперь data имеет тип SomethingI, а не any
};
```

### Когда используется ключевое слово `unknown`?

- Когда вы не хотите использовать ĸлючевое слово `any` и/или заранее не знаете точный тип, но хотите назначить его позже.

### Что такое `Omit`, `Partial`, `Record` в TypeScript?

- `Omit`, `Partial` и `Record` - это утилиты типов в TypeScript
- `Omit` позволяет создавать новый тип, исключая определенные свойства из исходного типа

```ts
type PersonDataPersonData = {name: string; age: number; location: string};
type CroppedPersonData1 = {name: string; age: number}; // Этот тип аналогичен типу ниже
type CroppedPersonData2 = Omit<PersonData, 'location'>;
```

- `Partial` позволяет создать новый тип, где все свойства исходного типа становятся необязательными

```ts
interface PersonInterface {
  name: string;
  email: string;
}
type PartialPersonInterface = Partial<PersonInterface>;

// Тут будут требовать указания всех полей PersonInterface
const partialPerson: PersonInterface = {};
// Эта строка не потребует указания всех полей PersonInterface
const partialPerson: PartialPersonInterface = {};
```

- `Record` позволяет создавать новый тип, представляющий собой объект с заданными ключами и значениями

```ts
interface CatInfo {
  age: number;
  breed: string; // breed - порода(кошки)
}
type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: {age: 6, breed: 'Персидский'},
  boris: {age: 5, breed: 'Мейн-кун'},
  mordred: {age: 2, breed: 'Британская короткошерстная'},
};
```

- Есть множество других утилит <https://www.typescriptlang.org/docs/handbook/utility-types.html>

### Что делает `instanceof` в TS?

- Оператор `instanceof` используется для проверки, является ли объект объектом указанного класса

```ts
class Person {
  constructor(name) {
    this.name = name;
  }
}

const john = new Person('John');

console.log(john instanceof Person); // true
```

### Чем отличаются друг от друга типы объединения(«|») И пересечения(«&»)?

- Объединение, позволяет создавать из множества существующих типов данных логическое условие, по которому данные могут принадлежать ĸ одному из указанных типов

```ts
type MyType = string | number;

let value: MyType;
value = 'Hello';
value = 42;
```

- Пересечение, позволяет рассматривать множество типов данных, ĸаĸ один

```ts
interface Printable {
  print: () => void;
}

interface Loggable {
  log: () => void;
}

type Logger = Printable & Loggable;

const logger: Logger = {
  print: () => console.log('Printing...'),
  log: () => console.log('Logging...'),
};
```

### Каĸ сделать интерфейс не ограниченным по свойствам

- Это можно сделать следующим образом:

```ts
interface User {
  name: string;
  age: number;
  [propName: string]: any;
}
const person: User = {
  name: 'vadim',
  age: 31,
  nickName: 'tazik',
  justTest: 'test',
};
```

### Что такое перечисления(enums) в TypeScript?

- Перечисления — Инструмент TS, который упрощает работу с именованными наборами констант. По умолчанию перечисление основано на числах, начиная с нуля, и каждому параметру присваивается приращение на единицу. Это полезно, когда значение не важно

```ts
enum Links {
  YOUTUBE = 'https://youtube.com/',
  VK = 'https://vk.com/',
  FACEBOOK = 'https://facebook.com/',
}

Links.YOUTUBE; // https://youtube.com/'
```

### Объяснить значение кортежей(tuples) в TS

- Tuple(Кортеж данных) - это последовательность значений
- Особености:
  - Tuple объявляется с помощью TypeScript с определенным кол-ом элементов и указывает тип для каждого элемента
  - Начальным значением должен быть массив с тем же ĸоличеством элементов, что и в описании типа

```ts
let myTuple: [dataType1, dataType2, dataTypeN] = [value1, value2, valueN];
```
