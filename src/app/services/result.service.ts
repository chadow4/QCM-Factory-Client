import {Injectable} from '@angular/core';
import {API_URL} from "./config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultCreateDto, ResultDto} from "../models/result.model";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  result_API = API_URL + '/result/';

  constructor(private http: HttpClient) {
  }

  public getAllResultsForQuestionnaire(id: number): Observable<ResultDto[]> {
    return this.http.get<ResultDto[]>(this.result_API + "global/" + id);
  }


  public getResultForQuestionnaire(id: number): Observable<ResultDto> {
    return this.http.get<ResultDto>(this.result_API + id);
  }

  public createResult(result: ResultCreateDto): Observable<any> {
    return this.http.post<ResultCreateDto>(this.result_API, result);
  }







}
