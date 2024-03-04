import axios from "@/utils/axios";

export const getQuizList = async () => {
    try {
      const response = await axios.get('/api/quiz-types/list'); // Example endpoint and data
        return response;
    } catch (error) {
    }
  };