import {UserDto} from "./user.model";
import {QuestionnaireDto} from "./questionnaire.model";

export interface ModuleCreateDto {
  name: string;
}

export interface ModuleUpdateDto {
  name?: string;
}

export interface ModuleDto{
  id: number;
  name: string;
  questionnaire?: QuestionnaireDto[];
  author: UserDto
}
