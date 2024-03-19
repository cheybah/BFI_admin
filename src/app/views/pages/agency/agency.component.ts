// agency.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { agencyService } from './agencyService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  agencies: any[] = [];
  editForm: FormGroup;

  constructor(
    private agencyService: agencyService,
    private fb: FormBuilder,
  ) {
    this.editForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      ville: ['', Validators.required],
      address: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.fetchAgencies();
  }

  fetchAgencies() {
    this.agencyService.getAllAgencies().subscribe(agencies => {
      this.agencies = agencies;
    });
  }

  deleteAgency(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this agency?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.agencyService.deleteAgency(id).subscribe(() => {
          this.agencies = this.agencies.filter(agency => agency.idAgency !== id);
          Swal.fire('Deleted!', 'The agency has been deleted.', 'success');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The agency is safe', 'error');
      }
    });
  }
  
  editAgency(id: number) {
    const agency = this.agencies.find(agency => agency.idAgency === id);
    this.editForm.patchValue({
        id: id,
        name: agency.name,
        ville: agency.ville,
        address: agency.address,
        tel: agency.tel,
        email: agency.email
    });
  }

  submitChanges() {
    const editedAgency = this.editForm.value;
    this.agencyService.editAgency(editedAgency).subscribe(() => {
      const index = this.agencies.findIndex(agency => agency.idAgency === editedAgency.id);
      if (index !== -1) {
        this.agencies[index] = editedAgency;
      }
    });
  }
}
