import { QuizSessionData } from "@/types/quizSession";
import { QuizType } from "@/types/quizType";

export const getMostParticipatedQuiz = (quizSessions: QuizSessionData[], quizTypes: QuizType[]) => {
    const groupedQuizCount: {[key: string]: QuizSessionData[]} = {};
    quizSessions?.forEach((quiz: QuizSessionData) => {
        const currentQuizType = quizTypes.find((q) => q.id === quiz.quizTypeId);
        if (!currentQuizType) {
            return;
        }
        if (!groupedQuizCount[currentQuizType.quizName]) {
            groupedQuizCount[currentQuizType.quizName] = [quiz];
        }
        groupedQuizCount[currentQuizType.quizName].push(quiz);
        return;
    });
    const data = Object.entries(groupedQuizCount).reduce((acc: any, [quizName, sessions]) => {
        if (acc[1] > sessions.length) {
            return acc;
        }
        acc = [quizName, sessions];
        return acc;
    }, ['', 0]);
    const categoriesExploredData = Object.entries(groupedQuizCount).map(([type, count]) => ({type, count}));
    return {maxCountForType: data[1], typeWithMaxCount: data[0], categoriesExplored: categoriesExploredData}
}