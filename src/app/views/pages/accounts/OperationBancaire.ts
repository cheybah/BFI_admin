export interface comptesBancaire {
    id: number;
    date: Date;
    montant: string;
    solde :DoubleRange;
    motif?: number; 
    operationbancaireList: any[];
  }
  