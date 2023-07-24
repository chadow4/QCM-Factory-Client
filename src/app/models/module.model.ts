import {UserDto} from "./user.model";
import {QuestionnaireDto} from "./questionnaire.model";
import {SectionDto} from "./section.model";

export interface ModuleCreateDto {
  name: string;
}

export interface ModuleUpdateDto {
  name?: string;
}

export interface ModuleDto{
  id: number;
  name: string;
  questionnaire: QuestionnaireDto[];
  sections: SectionDto[];
  author: UserDto
}
