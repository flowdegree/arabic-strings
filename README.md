# arabicStrings

 An NPM package that extends the native String object with methods to help when dealing with Arabic strings for node and the browser.
 > NPM updated package of @ahmads/arabicString repo

## Usage

### node

```js
const arabicString = require('@6degrees/arabic-strings');
```

## String#howArabic()

The percentage of Arabic letters in the `String`.

### Example

```js
arabicString.howArabic('foobar');
//=> 0.0

arabicString.howArabic('فوو bar');
//=> 0.5

arabicString.howArabic('فوبار');
//=> 1.0
```

## String#howNotArabic()

The percentage of non-Arabic letters in the `String`.

### Example

```js
arabicString.howNotArabic('فوبار');
//=> 0.0

arabicString.howNotArabic('فوو bar');
//=> 0.5

arabicString.howNotArabic('foobar');
//=> 1.0
```

## String#isArabic(threshold)

Is the `String` Arabic, based on a given `threshold` between `0` and `1`. Defaults to `0.79`.

### Example

```js
arabicString.isArabic('فوو');

//=> true
arabicString.isArabic('فوو bar baz');
//=> false
```

## String#hasArabic()

Does the `String` have _any_ Arabic letter.

### Example

```js
arabicString.hasArabic('فوو bar');
//=> ture

arabicString.hasArabic('foo bar');
//=> false
```

## String#removeTashkel()

Will return the `String` without the diacritics.

### Example

```js
arabicString.removeTashkel('مٌحمْد');
//=> 'محمد'

arabicString.removeTashkel('وَتُرى الْكَوَاكِبِ فِي الْمَجَرَّةِ شَرَعَا*** مِثْلُ الظِّباءِ كوارعا فِي جَدْوَلِ');
//=> 'وترى الكواكب في المجرة شرعا *** مثل الظباء كوارعا في جدول'
```

## String#removeTatwel()

Will return the `String` without the diacritics.

### Example

```js
arabicString.removeTatwel('مــرحــبــا');
//=> 'مرحبا'
```

## String#sanitize()

Will return the `String` without the diacritics, and clean characters.

### Example

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
