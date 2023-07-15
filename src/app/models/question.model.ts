import {QuestionnaireDto} from "./questionnaire.model";

export interface QuestionCreateDto{
  questionText: string;
  correctOption: string;
  options: string[];
  questionnaireId: number;
}

export interface QuestionDeleteDto{
  id: number;
}

export interface QuestionDto{
  id: number;
  questionText: string;
  correctOption: string;
  options: string[];
  questionnaire?: QuestionnaireDto;
}

