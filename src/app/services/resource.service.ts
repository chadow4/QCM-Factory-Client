import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./config";
import {ResourceCreateDto, ResourceDto} from "../models/resource.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resource_API = API_URL + "/resource/";
  constructor(private http: HttpClient) { }

  public createResource(resource: ResourceCreateDto): any {
    return this.http.post<any>(this.resource_API, resource);
  }

  public getResourceById(id: number): Observable<ResourceDto> {
    return this.http.get<ResourceDto>(this.resource_API + id);
  }


}
