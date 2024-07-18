import { Component, OnInit } from '@angular/core';
import { BankAccountService } from './BankAccountService'; // Importez votre service

export interface comptesBancaire {
  id: number;
  comptesbancaireList: any[];
  rib: "string",
  solde :DoubleRange;

}
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit{
  comptesBancaires: comptesBancaire[] = [];

  constructor(private bankAccountService: BankAccountService) {}

  ngOnInit(): void {
    this.fetchcomptesBancaires();
  }

  fetchcomptesBancaires(): void {
    this.bankAccountService.getcomptesBancaires()
      .subscribe(data => {
        this.comptesBancaires = data;
      });
  }
}
