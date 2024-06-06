import { Injectable } from '@angular/core';
import axios from 'axios';

export interface RendezVous {
  id: number; // Add this line
  clientId: number;
  agence: string;
  raison: string;
  date: string; // Use the appropriate type for date
  heure: string; // Use the appropriate type for time
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  API_URL = 'http://localhost:8080/service-client/rendezvous';

  async getAllRendezVousWithClientDetails(): Promise<RendezVous[]> {
    const response = await axios.get(`${this.API_URL}/with-client-details`);
    return response.data as RendezVous[];
  }

  async updateRendezVousStatus(id: number, status: string): Promise<void> {
    const response = await axios.put(`${this.API_URL}/${id}/status`, status, {
        headers: { 'Content-Type': 'text/plain' }
    });
    return response.data;
}
}