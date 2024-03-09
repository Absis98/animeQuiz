import axios from "@/utils/axios";
import { ValidateUserData } from "@/types/user";
import { useAppContext } from "@/AppContext";

export const validateUser = async (data: ValidateUserData) => {
    try {
      const response = await axios.post('/api/validate-user', data); // Example endpoint and data
        return response;
    } catch (error) {
    }
  };

export const getQuizSessionsForUser = async (userId: number) => {
  try {
    const response = await axios.get(`/api/user-profile/sessions/${userId}`,); // Example endpoint and data
      return response;
  } catch (error) {
  }
};