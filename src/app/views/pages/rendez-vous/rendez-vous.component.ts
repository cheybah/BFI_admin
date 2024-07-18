import { Component , OnInit} from '@angular/core';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { CommonModule } from '@angular/common';
import { RendezVous } from 'src/app/services/rendezvous.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rendez-vous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.scss'
})
export class RendezVousComponent implements OnInit {
  rendezVousList: RendezVous[] = []; // Use the interface

  constructor(private rendezVousService: RendezvousService) { }

  ngOnInit() {
    this.fetchRendezVous();
  }

  async fetchRendezVous() {
    this.rendezVousList = await this.rendezVousService.getAllRendezVousWithClientDetails();
  }

  async updateStatus(id: number, status: string) {
    const actionText = status === 'Approuvé' ? 'approver' : 'rejeter';
    const confirmButtonText = status === 'Approuvé' ? 'Oui, approuvez !' : 'Oui, rejetez !';
    const successMessage = status === 'Approuvé' ? 'Le rendez-vous a été approuvé.' : 'Le rendez-vous a été rejetée.';

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: `Vous souhaitez ${actionText} ce rendez-vous ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Non, garde-le'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.rendezVousService.updateRendezVousStatus(id, status);
        await this.fetchRendezVous();
        Swal.fire('Mis à jour!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', `La mise à jour du statut du rendez-vous est annulée.`, 'info');
      }
    });
  }
}
