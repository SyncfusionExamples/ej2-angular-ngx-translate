import { Culture } from './culture';

export class Cultures {
  static readonly supportedCultures = [
    new Culture('en-US', 'en', 'English', true),
    new Culture('de-DE', 'de', 'Deutsch', false)
  ];

  private static _languageCodes: string[];
  public static get languageCodes(): string[] {
    if (Cultures._languageCodes == null || Cultures._languageCodes.length <= 0) {
      Cultures._languageCodes = [];
      Cultures.supportedCultures.forEach((element) => {
        if (element != null) {
          Cultures._languageCodes.push(element.language);
        }
      });
    }

    return Cultures._languageCodes;
  }

  private static _cultureCodes: string[];
  public static get cultureCodes(): string[] {
    if (Cultures._cultureCodes == null || Cultures._cultureCodes.length <= 0) {
      Cultures._cultureCodes = [];
      Cultures.supportedCultures.forEach((element) => {
        if (element != null) {
          Cultures._cultureCodes.push(element.culture);
        }
      });
    }

    return Cultures._cultureCodes;
  }

  private static _fallbackCulture: Culture;
  public static get fallbackCulture(): Culture {
    if (Cultures._fallbackCulture == null) {
      Cultures._fallbackCulture = Cultures.supportedCultures.find((item) => item.isFallback)!;
    }

    return Cultures._fallbackCulture;
  }

  public static getCultureCode(language: string): string | null {
    let cultureCode: string | null = null;
    Cultures.supportedCultures.forEach((element) => {
      if (element.language === language) {
        cultureCode = element.culture;
      }
    });
    return cultureCode;
  }

  public static getCulture(culture: string): Culture | null{
    let c: Culture | null = null;
    Cultures.supportedCultures.forEach((element) => {
      if (element.culture === culture) {
        c = element;
      }
    });
    return c;
  }
}
