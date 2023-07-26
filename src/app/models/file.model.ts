import {SectionDto} from "./section.model";

export interface CreateFileDto{
  name: string;
  path: string;
  type: string;
  size: number;
  sectionId: number;
}

export interface FileDto{
  id: number;
  name: string;
  path: string;
  type: string;
  size: number;
  section?: SectionDto;
}
