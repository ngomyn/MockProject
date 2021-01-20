import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'https://baas.kinvey.com/';
  private appKey = 'kid_rkUYTgX1u';
  private appSecret = 'e685a57423f041099f24a62356b96a3b';
  private masterAuth = "Basic a2lkX3JrVVlUZ1gxdTowZTYwNzJkYTk1ZjE0ZTBjYjkyYjU0MjEyNTA5NzAxZg=="

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    const DataUrl = `${this.urlAPI}appdata/${this.appKey}/Category?query=`;
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.masterAuth
      }),
      param: new HttpParams().set('parent_id','')
    };

    return this.http.get<any>(DataUrl , httpOptions)
  }
}
