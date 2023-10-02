# Arabic Strings

A library for handling Arabic strings, including removing diacritics, normalizing characters, and more.

## Installation

```bash
npm install @flowdegree/arabic-strings
```

## Usage

### Importing the Library

```js
import * as arabicStrings from '@flowdegree/arabic-strings';
```

## Removing Diacritics (Harakat)

```js
// Define a string with Arabic diacritics (Harakat)
const str = 'مَرحبًا';

// Use the removeHarakat method to remove the diacritics from the string
const result = arabicStrings.removeHarakat(str);

// Output the result without diacritics
console.log(result); // Outputs: مرحبا
```

### How much of the string is Arabic

The percentage of Arabic letters in the `String`.

```js
arabicString.howArabic('foobar');
//=> 0.0

arabicString.howArabic('فوو bar');
//=> 0.5

arabicString.howArabic('فوبار');
//=> 1.0
```

### String#howNotArabic()

The percentage of non-Arabic letters in the `String`.

```js
arabicString.howNotArabic('فوبار');
//=> 0.0

arabicString.howNotArabic('فوو bar');
//=> 0.5

arabicString.howNotArabic('foobar');
//=> 1.0
```

### String#isArabic(threshold)

Is the `String` Arabic, based on a given `threshold` between `0` and `1`. Defaults to `0.79`.

```js
arabicString.isArabic('فوو');

//=> true
arabicString.isArabic('فوو bar baz');
//=> false
```

### String#hasArabic()

Does the `String` have _any_ Arabic letter.

```js
arabicString.hasArabic('فوو bar');
//=> ture

arabicString.hasArabic('foo bar');
//=> false
```

### String#removeTashkel()

Will return the `String` without the diacritics.

```js
arabicString.removeTashkel('مٌحمْد');
//=> 'محمد'

arabicString.removeTashkel('وَتُرى الْكَوَاكِبِ فِي الْمَجَرَّةِ شَرَعَا*** مِثْلُ الظِّباءِ كوارعا فِي جَدْوَلِ');
//=> 'وترى الكواكب في المجرة شرعا *** مثل الظباء كوارعا في جدول'
```

### String#removeTatwel()

Will return the `String` without the diacritics.

```js
arabicString.removeTatwel('مــرحــبــا');
//=> 'مرحبا'
```

### String#sanitize()

Will return the `String` without the diacritics, and clean characters.

```js
arabicString.sanitize(`أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي ... وَأَسمَـعَت كَلِماتي مَن بِهِ صَمَمُ
أَنـامُ مِلءَ جُفوني عَن شَوارِدِهــا ... وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ
وَجـــاهِلٍ مَدَّهُ في جَهلِهِ ضَحِكي ... حَتّى أَتَتهُ يَدٌ فَرّاسَــــــةٌ وَفَـــــمُ
`);
/*=> `انا الذي نظر الاعمي الي ادبي ... واسمعت كلماتي من به صمم
انام ملء جفوني عن شواردها ... ويسهر الخلق جراها ويختصم
وجاهل مده في جهله ضحكي ... حتي اتته يد فراسه وفم
`
*/
```

## Credits

- Original script [https://github.com/ahmads/arabicString]
- Enhancements [https://github.com/ahmads/arabicString/pulls]
- sanitization [https://github.com/ielashi/arabic-nlp]

## License

(The MIT License)
