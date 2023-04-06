# Список распространенных вопросов по JavaScript.

Этот документ поможет вам в двух случаях:

- Если вы работодатель
- Вы программист, который покинул текущую работу в поисках новой работы, в требования которой входят знания JS

Я понимаю что имея даже большой опыт нельзя помнить наверняка все темы JS, так как многие просто не используются, а некоторые теоретические не применяются в реальных задачах. Но повторение этих тем поможет произвести впечатление на работодателя и покажет ваш уровень ответственности. Я не включал вопросы по темам которые часто используются в практике.

> Список вопросов я рассортировал так, чтобы сложность возрастала вместе с порядковым номером.

### Что такое `NaN` и какова его роль?

- Это специальное значение **«Not a Number»**, которое обычно **говорит о том, что была выполнена бессмысленная операция**
- Его роль в том, чтобы сообщить об ошибке математической операции
- Так же есть функция `isNaN()`, которая проверяет является ли строка не числом

### Что такое примитивные типы данных в JavaScript? Перечислите их.

- Это данные, которые **не являются объектом** и не **имеют методов**.
  <br/>
  **Примитивные**: `bigint, boolean, number, string, symbol, undefined.`
  <br/>
  **Остальные типы**: `object, function.`

### Какие значения в JS являются ложными?

- `'', 0, null, undefined, NaN, false`

### В чем разница между undefined и is not defined?

- `is not defined` - это **код ошибки** при обращении к несуществующей переменной.
- `undefined` - это значение, присваемое объявленной, но не инициализированной переменной.

### Как проверить, является ли объект массивом?

- Для этого можно использовать встроенный метод `Array.isArray()`.

### Как быстро преобразовать строку в число?

- Можно использовать **унарный +** (например: `const myNum = +myString`), он преобразует строку в число, если это возможно.
- **Унарный -** делает тоже самое, но затем меняет знак результата(`-’20’ => -20`).

### Как динамически добавлять и удалять свойства в JavaScript?

- Вы можете добавить свойство к объекту используя, `myObject.propName = value`, и удалить свойство, используя delete `myObject.propName`.

### Как рассчитать числа Фибоначчи в JavaScript?

- числа Фибоначчи это **последовательность чисел**, где **каждое значение** – это **сумма двух предыдущих.**
- Решение

![fibonacci](fibonacci.png)

### Для чего используются операторы break и continue в JavaScript?

- `Break` и continue обеспечивают более точный контроль над выполнением кода в цикле
- `Break` завершает текущую итерацию и **приводит к немедленному выходу из цикла.**
- `Continue` завершает текущую итерацию, но **не останавливает цикл.**
- `Return` работает так же как и break и вдобавок **может вернуть с функции значение остановив выполнение функции.**

![return](return.png)

### Что такое Рекурсия?

- Это когда алгоритм или **функция вызывает сама себя**.

### Что такое чистые(pure) функции?

- это функции, у которой **возвращаемое значение зависит от передаваемых параметров.**

### Что такое мутабельность / иммутабельность?

- Иммутабельность предполагает, что после создания **данные или структура**, которая их содержит, **не могут быть изменены**.
- Мутабельность означает что **данные могут меняться.**
- \* Например в **redux** используются **чистые функции**(reducers), которые **не меняют состояния**, а **возвращают новый объект**, основываясь на текущем состоянии и действии. Из этого можно сделать вывод, что **редакс иммутабельный.**

### В чем разница между атрибутами и свойствами?

- Атрибут — это начальное состояние в рендеринге DOM, а свойство — это текущее состояние

### Что такое ООП (Объектно-ориентированное программирование) и ФП (функциональное программирование)?

- ООП **основано на концепции объектов**. Это **структуры данных**, **которые содержат поля данных**, известные в JavaScript как свойства, и процедуры, известные как методы (Например: Math с его методами random, max, sin и свойствами такими как PI)
- ФП **основан на концепции чистых функций**, которые избегают общего состояния, изменяемых данных и побочных эффектов.

### Что такое XSS?

- (Cross-Site Scripting —«**межсайтовый скриптинг**»)—довольно распространенная **уязвимость**, которую можно обнаружить на множестве веб-приложений. Ее суть довольно проста, **злоумышленнику удается внедрить на страницу JavaScript-код, который не был предусмотрен разработчиками**

### Что такое чейнинг(chain) функций?

- Это когда мы **у объекта можем вызывать функции по цепочке**, один за другим

```js
obj.add(‘val’).add(‘val2’).delete(‘valN’)
```

### Что такое анонимная функция?

- Функциональное выражение, которое не записывается в переменную, называют анонимной функцией

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###

###