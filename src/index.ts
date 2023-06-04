
const TASHKEEL: Array<string> = [
    "\u0610", // ( ؐ) arabic sign sallallahou alayhe wassallam
    "\u0611", // ( ؑ) arabic sign alayhe assallam
    "\u0612", // ( ؒ) arabic sign rahmatullah alayhe
    "\u0613", // ( ؓ) arabic sign radi allahou anhu
    "\u0614", // ( ؔ) arabic sign takhallus
    "\u0615", // ( ؕ) arabic small high tah
    "\u0616", // ( ؖ) arabic small high ligature alef with lam with yeh
    "\u0617", // ( ؗ) arabic small high zain
    "\u0618", // ( ؘ) arabic small fatha
    "\u0619", // ( ؙ) arabic small damma
    "\u061a", // ( ؚ) arabic small kasra
    "\u064b", // ( ً) arabic fathatan
    "\u064c", // ( ٌ) arabic dammatan
    "\u064d", // ( ٍ) arabic kasratan
    "\u064e", // ( َ) arabic fatha
    "\u064f", // ( ُ) arabic damma
    "\u0650", // ( ِ) arabic kasra
    "\u0651", // ( ّ) arabic shadda
    "\u0652", // ( ْ) arabic sukun
    "\u0653", // ( ٓ) arabic maddah above
    "\u0654", // ( ٔ) arabic hamza above
    "\u0655", // ( ٕ) arabic hamza below
    "\u0656", // ( ٖ) arabic subscript alef
    "\u0657", // ( ٗ) arabic inverted damma
    "\u0658", // ( ٘) arabic mark noon ghunna
    "\u065a", // ( ٚ) arabic vowel sign small v above
    "\u065b", // ( ٛ) arabic vowel sign inverted small v above
    "\u065c", // ( ٜ) arabic vowel sign dot below
    "\u065d", // ( ٝ) arabic reversed damma
    "\u065e", // ( ٞ) arabic fatha with two dots
]

const ALIF_REGEX = new RegExp("[أإآ]", "g");

const YA_REGEX = new RegExp("[ىي]", "g");

const TA_REGEX = new RegExp("[ة]", "g");

const TASHKEEL_REGEX = new RegExp(TASHKEEL.join(""), "g");

const TATWEEL_REGEX = new RegExp("\u0640", "g"); //    /ـ/g; // /\u0640/g

function howArabic(str: string): number {
    // strip punctuation, digits, and spaces
    str = str.replace(/[\u0021-\u0040\s]/gm, "");

    const match = str.match(/[\u0621-\u0652]/gm) || [];
    const result = match.length / str.length;

    return result;
}

function howNotArabic(str: string): number {
    // strip punctuation, digits, and spaces
    str = str.replace(/[\u0021-\u0040\s]/gm, "");

    const match = str.match(/[^\u0621-\u0652]/gm) || [];
    const result = match.length / str.length;

    return result;
}

function isArabic(str: string, threshold: number = 0.79): boolean {
    return howArabic(str) >= threshold;
}

function hasArabic(str: string): boolean {
    return /[\u0621-\u064A]/.test(str);
}

function removeTashkel(str: string): string {
    const escapedTashkeel = TASHKEEL.map((t) => "\\" + t).join("|");
    const regex = new RegExp(escapedTashkeel, "g");
    return str.replace(regex, '');

    return str.replace(TASHKEEL_REGEX, '');
}

function removeNonArabic(str: string, excludeChars: string = ""): string {
    const exclusionRegex = new RegExp(`[${excludeChars}]`, "gm");
    return str.replace(new RegExp(`[^\\u0621-\\u0652${excludeChars}]`, "gm"), "");
}
    
function removeArabic(str: string): string {
    return str.replace(/[\u0621-\u0652]/gm, "");
}

function removeTatwel (str: string): string {
    return str.replace(TATWEEL_REGEX, '');

}

function sanitize(str: string): string {
    str = str.replace(ALIF_REGEX, 'ا').replace(YA_REGEX, 'ي').replace(TA_REGEX, 'ه');
    str = removeTatwel(str)
    str = removeTashkel(str)
    
    return str;
}

export {
    TASHKEEL,
    ALIF_REGEX,
    TASHKEEL_REGEX,
    TA_REGEX,
    YA_REGEX,
    TATWEEL_REGEX,
    howArabic,
    howNotArabic,
    isArabic,
    hasArabic,
    removeTashkel,
    removeNonArabic,
    removeArabic,
    removeTatwel,
    sanitize,
};