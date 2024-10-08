import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  getUrl = "http://localhost:8080/form/findAll";
  saveUrl = "http://localhost:8080/form/save";
  deleteUrl = "http://localhost:8080/form/delete"

  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.getUrl);
  }

  saveUsers(data:any)
  {
    return this.http.post(this.saveUrl, data);
  }

  deleteUser(id: number)
  {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
}
