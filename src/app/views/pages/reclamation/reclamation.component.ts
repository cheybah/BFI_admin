import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reclamation, ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reclamation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.scss'
})
export class ReclamationComponent implements OnInit {
  reclamationList: Reclamation[] = [];
  showModal = false;
  currentId: number;
  responseText: string;

  constructor(private reclamationService: ReclamationService) { 
    this.currentId = 0; // Initialize currentId
    this.responseText = ''; // Initialize responseText
  }

  ngOnInit() {
    this.fetchReclamations();
  }

  async fetchReclamations() {
    this.reclamationList = await this.reclamationService.getAllReclamationsWithClientDetails();
  }

  openModal(id: number) {
    this.showModal = true;
    this.currentId = id;
    console.log("it open",this.showModal);
  }

  closeModal() {
    this.showModal = false;
    this.responseText = '';
  }

  async updateReclamation(id: number, response: string) {
    const actionText = 'response'; // Action to be performed (responding to the reclamation)
    const confirmButtonText = 'Yes, send response'; // Text for confirmation button
    const successMessage = 'Response sent successfully'; // Success message

    // Show confirmation dialog
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous souhaitez envoyer cette réponse?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Non, annule'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // If user confirms, send response
        await this.reclamationService.updateReclamation(id, response);
        // Update UI and close modal
        this.fetchReclamations();
        this.markAsResponded(id);
        this.closeModal();
        // Show success message
        Swal.fire('Succès!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If user cancels, show info message
        Swal.fire('Annulé', 'Envoi de la réponse est annulé', 'info');
      }
    });
  }
  
  markAsResponded(id: number) {
    const reclamation = this.reclamationList.find(rec => rec.idReclamation === id);
    if (reclamation) {
      reclamation.responded = true;
    }
  }
}
