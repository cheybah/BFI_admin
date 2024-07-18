import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Virement } from './virement';
import { Depot } from './depot';

@Injectable({
  providedIn: 'root'
})
export class VirementService {

  private apiUrl = 'http://localhost:8080/virements'; // Remplacez par votre URL d'API
  private apiUrl1 = 'http://localhost:8080/depot/allDepots'; // Remplacez par votre URL d'API
  private apiUrl2 = 'http://localhost:8080/depot';  // Base URL pour les dépôts

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les virements depuis l'API
  getVirements(): Observable<Virement[]> {
    return this.http.get<Virement[]>(this.apiUrl);
  }
  getDepot(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.apiUrl1);
  }
 
  approveDeposit(id: number): Observable<any> {
    console.log('sou')
    return this.http.post(`${this.apiUrl2}/approveDeposit/${id}`, {});
  }
  rejectDeposit(depotId: number): Observable<any> {
    return this.http.post(`${this.apiUrl2}/reject/${depotId}`, {});
  }
}
