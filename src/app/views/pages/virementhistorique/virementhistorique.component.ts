import { Component } from '@angular/core';
import { Virement } from './virement';
import { VirementService } from './VirementService';

@Component({
  selector: 'app-virementhistorique',
  templateUrl: './virementhistorique.component.html',
  styleUrl: './virementhistorique.component.scss'
})
export class VirementhistoriqueComponent {
  virements: Virement[] = [];

  constructor(private virementService: VirementService) { }

  ngOnInit(): void {
    this.fetchVirements();
  }

  fetchVirements() {
    this.virementService.getVirements()
      .subscribe(
        (data) => {
          this.virements = data;
        },
        (error) => {
          console.error('Error fetching virements', error);
        }
      );
  }
}
