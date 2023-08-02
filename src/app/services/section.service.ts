import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./config";
import {SectionCreateDto} from "../models/section.model";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  section_API = API_URL + "/section/";
  constructor(private http: HttpClient) { }

  public createSection(section: SectionCreateDto): any {
    return this.http.post<SectionCreateDto>(this.section_API, section);
  }
}
