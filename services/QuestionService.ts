import $api from "../api/index"
import { IQuestionService } from "@/interfaces/question"

const QuestionService: IQuestionService = {
    sendQuestion: async (data) => {
        await $api.post("/api/question/send", { data });
    }
}

export default QuestionService;
