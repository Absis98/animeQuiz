import { QuizType } from '@/types/quizType';
import { atom } from 'recoil';
import { UserProfileData } from '@/types/user';

export const userState = atom({
  key: 'userData',
  default: {} as UserProfileData,
});

export const quizTypesState = atom({
    key: 'quizTypes',
    default: [] as QuizType[],
  });