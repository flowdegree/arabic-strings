class arabicStrings {
    static howArabic(str: string): number {
        // strip punctuation, digits, and spaces
        str = str.replace(/[\u0021-\u0040\s]/gm, "");

        const match = str.match(/[\u0621-\u0652]/gm) || [];
        const result = match.length / str.length;

        return result;
    }

    static howNotArabic(str: string): number {
        // strip punctuation, digits, and spaces
        str = str.replace(/[\u0021-\u0040\s]/gm, "");

        const match = str.match(/[^\u0621-\u0652]/gm) || [];
        const result = match.length / str.length;

        return result;
    }

    static isArabic(str: string, threshold: number = 0.79): boolean {
        return arabicStrings.howArabic(str) >= threshold;
    }

    static hasArabic(str: string): boolean {
        return /[\u0621-\u064A]/.test(str);
    }

    static removeTashkel(str: string): string {
        return str.replace(/[\u064B-\u0652]/gm, "");
    }

    static removeNonArabic(str: string): string {
        return str.replace(/[^\u0621-\u0652]/gm, "");
    }

    static removeArabic(str: string): string {
        return str.replace(/[\u0621-\u0652]/gm, "");
    }

    static removeTatwel (str: string): string {
        return str.replace(/\u0640/g, '');
    }
}

module.exports = arabicStrings;