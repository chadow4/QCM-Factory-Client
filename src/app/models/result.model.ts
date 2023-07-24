import {QuestionnaireDto} from "./questionnaire.model";
import {UserDto} from "./user.model";

export interface ResultCreateDto {
  responses: string[];
  questionnaireId: number;
}
export interface ResultDto {
  id: number;
  mark: number;
  responses: string[];
  questionnaire: QuestionnaireDto;
  student: UserDto;
}
