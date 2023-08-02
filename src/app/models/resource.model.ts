import {SectionDto} from "./section.model";

export interface ResourceCreateDto {
  name: string;
  content: string;
  sectionId: number;
}

export interface ResourceDto {
  id: number;
  name: string;
  content: string;
  section : SectionDto;
}
