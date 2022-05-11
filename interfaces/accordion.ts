import { ILangData } from '@/interfaces/general';

export interface IAccordion {
    title: string;
    description: string;
}

export type IAccordionData = {
    [key in keyof ILangData]: IAccordion;
};