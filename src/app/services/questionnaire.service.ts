import {Injectable} from '@angular/core';
import {API_URL} from "./config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionnaireCreateDto, QuestionnaireDto} from "../models/questionnaire.model";
import {QuestionCreateDto} from "../models/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {


  questionnaire_API = API_URL + "/questionnaire/";

  constructor(private http: HttpClient) {
  }

  public getAllQuestionnaires(): Observable<QuestionnaireDto[]> {
    return this.http.get<QuestionnaireDto[]>(this.questionnaire_API);
  }

  public getQuestionnaireById(id: number): Observable<QuestionnaireDto> {
    return this.http.get<QuestionnaireDto>(this.questionnaire_API + id);
  }

  public createQuestionnaire(questionnaire: QuestionnaireCreateDto): Observable<any> {
    return this.http.post<QuestionnaireDto>(this.questionnaire_API, questionnaire);
  }

  public createQuestion(question: QuestionCreateDto): Observable<any> {
    return this.http.post<QuestionCreateDto>(this.questionnaire_API + 'question', question);
  }

  public changeState(id: number): Observable<any> {
    return this.http.put<any>(this.questionnaire_API + id, null);
  }
}
