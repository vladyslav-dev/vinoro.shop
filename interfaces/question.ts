export interface IQuestion {
    email: string;
    message: string;
}

export interface IQuestionData extends IQuestion {
    lang: string;
}

export interface IQuestionService {
    sendQuestion(data: IQuestionData): Promise<void>;
}