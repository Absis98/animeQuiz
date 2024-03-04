import axios from "@/utils/axios";
import { useAppContext } from "@/AppContext";

export const getQuestionsList = async (userId: number, quizType: number) => {
    try {
      const response = await axios.get(`/api/question/${userId}/questions-list/${quizType}`); // Example endpoint and data
        return response;
    } catch (error) {
    }
  };

export const verifyAnswers = async (data: any) => {
    try {
        const response = await axios.post('/api/question/verify-answers', data); // Example endpoint and data
        return response;
    } catch (error) {
    }
};
