import { LocaleEnum } from '../enums';


export const getLang = (lang: keyof typeof LocaleEnum ) => LocaleEnum[lang];
