import { Component } from '@angular/core';
import { VirementService } from '../virementhistorique/VirementService';
import { Depot } from '../virementhistorique/depot';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-depothistorique',
  templateUrl: './depothistorique.component.html',
  styleUrl: './depothistorique.component.scss'
})
export class DepothistoriqueComponent {
  depots: Depot[] = [];

  constructor(private virementService: VirementService) { }

  ngOnInit(): void {
    this.fetchdepts();
  }

  fetchdepts() {
    this.virementService.getDepot()
      .subscribe(
        (data) => {
          this.depots = data;
        },
        (error) => {
          console.error('Error fetching depots', error);
        }
      );
}
updateStatus(id: number, status: string) {
  console.log(id);
  let actionObservable: Observable<any>;
  const confirmButtonText = status === 'Accepter' ? 'Oui, accepter !' : 'Oui, annuler !';
  const successMessage = status === 'Accepter' ? 'Le dépôt a été accepté.' : 'Le dépôt a été annulé.';

  if (status === 'Accepter') {
    actionObservable = this.virementService.approveDeposit(id);
  } else {
    actionObservable = this.virementService.rejectDeposit(id);
  }

  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: `Vous souhaitez ${status === 'Accepter' ? 'accepter' : 'rejeter'} ce dépôt ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: 'Non, garde-le'
  }).then((result) => {
    if (result.isConfirmed) {
      actionObservable.subscribe(
        () => {
          Swal.fire('Mis à jour!', successMessage, 'success');
          // Rafraîchir la liste des dépôts après l'action réussie
          this.fetchdepts();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du dépôt', error);
          Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour du dépôt. Veuillez vérifier la console pour plus de détails.', 'error');
        }
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Annulé', `La mise à jour du dépôt est annulée.`, 'info');
    }
  });
}


}
