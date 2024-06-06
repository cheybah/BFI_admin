import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Reclamation {
  idReclamation: number;
  clientId: number;
  reference: string;
  sujet: string;
  contenu: string;
  date: string;
  reponse: string;
  status: string;
  responded?: boolean; // Add this field to track the response status
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  API_URL = 'http://localhost:8080/service-client/reclamations';

  async getAllReclamationsWithClientDetails(): Promise<Reclamation[]> {
    const response = await axios.get(`${this.API_URL}/with-client-details`);
    return response.data as Reclamation[];
  }

  async updateReclamation(id: number, reponse: string): Promise<void> {
    const response = await axios.put(`${this.API_URL}/${id}`, { reponse, status: 'Approuvé' });
    return response.data;
  }
}
