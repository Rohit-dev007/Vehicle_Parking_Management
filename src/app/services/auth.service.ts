import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credentialsUrl = 'assets/credentials.json';

  constructor(private http: HttpClient) {}

  getCredentials(): Observable<any> {
    return this.http.get(this.credentialsUrl);
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      this.getCredentials().subscribe(data => {
        const user = data.users.find((u: any) => u.username === username && u.password === password);
        const operator = data.gateOperators.find((o: any) => o.username === username && o.password === password);
        observer.next(!!user || !!operator);
        observer.complete();
      });
    });
  }
}