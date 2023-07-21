import {QuestionDto} from "./question.model";
import {UserDto} from "./user.model";
import {ModuleDto} from "./module.model";

export interface QuestionnaireCreateDto {
  name: string;
  time: number;
  moduleId: number;
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

  module?: ModuleDto;

  questions?: QuestionDto[];
}
