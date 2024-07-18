import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comptesBancaire } from './accounts.component';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private apiUrl = 'http://localhost:8080/bankaccounts'; // Endpoint de votre API

  constructor(private http: HttpClient) {}

  getcomptesBancaires(): Observable<comptesBancaire[]> {
    return this.http.get<comptesBancaire[]>(this.apiUrl);
  }
}
