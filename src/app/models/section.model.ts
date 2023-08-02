import {ModuleDto} from "./module.model";
import {FileDto} from "./file.model";
import {ResourceDto} from "./resource.model";

export interface SectionCreateDto{
  name: string,
  moduleId: number
}


export interface SectionDto{
  id: number,
  name: string,
  module: ModuleDto,
  files: FileDto[];
  resources : ResourceDto[];
}
