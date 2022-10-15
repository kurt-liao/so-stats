/**
 * I18n translation class.
 *
 * Code from https://github.com/anuraghazra/github-readme-stats
 */
class I18n {
  constructor({ locale, translations }) {
    this.locale = locale;
    this.translations = translations;
    this.fallbackLocale = "en";
  }

  t(str) {
    if (!this.translations[str]) {
      throw new Error(`${str} Translation string not found`);
    }

    if (!this.translations[str][this.locale || this.fallbackLocale]) {
      throw new Error(`${str} Translation locale not found`);
    }

    return this.translations[str][this.locale || this.fallbackLocale];
  }
}

export { I18n };
export default I18n;
