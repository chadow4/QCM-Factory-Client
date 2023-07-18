import {ResultDto} from "./result.model";
import {QuestionnaireDto} from "./questionnaire.model";
import {ModuleDto} from "./module.model";

export interface UserCreateDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface UserUpdateDto {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

export interface UserDto {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  myModules?: ModuleDto[];
  myResults?: ResultDto[];
}
export interface UserDeleteDto {
  id: number;
}

export interface UserLoginDto {
  email: string;
  password: string;
}

export interface UserJWtTokenDto {
  expiresIn: string;
  accessToken: string;
}


export interface UserJwtSessionDto{
  id: number;
  email: string;
  role: string;
}
