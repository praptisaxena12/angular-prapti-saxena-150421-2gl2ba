import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Candidate } from "../candidate";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  candidateData: Candidate[];
  public getJson(): Observable<Candidate[]> {
    return this.http.get("./asset/input.json").subscribe(data => {
      this.candidateData = data;
      return this.candidateData;
    });
  }
}
