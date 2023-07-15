import {QuestionDto} from "./question.model";
import {UserDto} from "./user.model";

export interface QuestionnaireCreateDto {
  name: string;
  time: number;
}

export interface QuestionnaireDeleteDto {
  id: number;
}

export interface QuestionnaireDto {
  id: number;

  name: string;

  time: number;

  isOpen: boolean;

  isFinished: boolean;

  author?: UserDto;

  questions?: QuestionDto[];
}