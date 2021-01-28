import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'https://baas.kinvey.com/';
  private appKey = 'kid_rkUYTgX1u';
  private appSecret = 'e685a57423f041099f24a62356b96a3b';
  private masterAuth = "Basic a2lkX3JrVVlUZ1gxdTowZTYwNzJkYTk1ZjE0ZTBjYjkyYjU0MjEyNTA5NzAxZg==";
  public url = "";
  navBarCategory=[];
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.masterAuth
    }),      
  };  
  constructor(
    private http: HttpClient
  ) { }
  
  getData(id){
    const DataUrl = `${this.urlAPI}appdata/${this.appKey}/Category/`;
    const query = `?query={"parent_id":"null"}`;
    let navBarCategory1=[];
    let navBarCategory2=[];
    let child1 : any
    let child2 : any
    return this.http.get<any>(DataUrl + id, this.httpOptions).pipe(map(data => {
      navBarCategory1 = data.filter((item)=> item.parent_id == null);
      navBarCategory2 = data.filter((item)=> item.parent_id)
      navBarCategory1.forEach((item)=>{
        item.child = [];
        navBarCategory2.forEach((i)=>{
          if(i.parent_id == item._id){
            item.child.push(i);
          }
        })
        item.child.forEach((grand) => {
          grand.child = []
          navBarCategory2.forEach((x) => {
            if(x.parent_id == grand._id){
              grand.child.push(x);
            }
          })
        })
      });      
      return navBarCategory1;
    }));
  }
  // getData(id){
  //   const DataUrl = `${this.urlAPI}appdata/${this.appKey}/Category/`;    
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: this.masterAuth
  //     }),      
  //   };
  //   const query = `?query={"parent_id":"null"}`;
  //   return this.http.get<any>(DataUrl + id, httpOptions);
  // }
  getNewPost(){
    const DataUrl = `${this.urlAPI}appdata/${this.appKey}/Post/`;      
    return this.http.get<any>(DataUrl, this.httpOptions)
  }
}
