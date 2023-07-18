import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./config";
import {ModuleCreateDto, ModuleDto} from "../models/module.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  module_API = API_URL + "/module/";
  constructor(private http: HttpClient) { }

  public getAllModules(): Observable<ModuleDto[]> {
    return this.http.get<ModuleDto[]>(this.module_API);
  }

  public getModuleById(id: number): Observable<ModuleDto> {
    return this.http.get<ModuleDto>(this.module_API + id);
  }
  public createModule(module: ModuleCreateDto): Observable<any> {
    return this.http.post<ModuleDto>(this.module_API, module);
  }
}
