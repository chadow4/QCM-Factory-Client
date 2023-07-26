import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "./config";
import {CreateFileDto} from "../models/file.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  file_API = API_URL + "/file/";

  constructor(private http: HttpClient) { }

  public uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    const apiUrl= this.file_API + 'upload';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(apiUrl, formData, { headers: headers });
  }

  public createFile(file: CreateFileDto): Observable<any> {
    return this.http.post<any>(this.file_API, file);
  }

  public deleteFile(id: number): Observable<any> {
    return this.http.delete<any>(this.file_API + id);
  }

  public getFontAwesomeIconClass(fileType: string): string {
    const iconMap: { [key: string]: string } = {
      "application/pdf": "far fa-file-pdf",
      "image/jpeg": "far fa-file-image",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "far fa-file-word",
      "text/plain": "far fa-file-alt",
      "video/mp4": "far fa-file-video",
    };

    if (fileType in iconMap) {
      return iconMap[fileType];
    }

    return "far fa-file";
  }

  public octetsToMegaoctets(octets: number): string {
    if (octets < 0) {
      throw new Error('Le paramètre doit être un nombre positif.');
    }

    const megaoctets = octets / (1024 * 1024);
    return megaoctets.toFixed(2); // Arrondi à 2 décimales
  }
}
