import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { agencyService } from 'src/app/services/agencyService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  @ViewChild('createAgencyModal') createAgencyModal!: ElementRef;
  createForm!: FormGroup;
  agencies: any[] = [];
  editForm: FormGroup;
  noAgencies=false;

  constructor(
    private agencyService: agencyService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.editForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      ville: ['', Validators.required],
      address: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      ville: ['', Validators.required],
      address: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}

  ngOnInit(): void {
    this.agencyService.getAllAgencies().subscribe((agencies) => {
      this.agencies = agencies;

      // Set the flag if there are no agencies
      this.noAgencies = this.agencies.length === 0;
    });  }

 

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
        Swal.fire('Cancelled', 'Agency deletion is cancelled', 'error');
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
    Swal.fire({
        title: 'Are you sure?',
        text: 'You want to edit this agency?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, edit it!',
        cancelButtonText: 'No, cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            this.agencyService.editAgency(editedAgency).subscribe(() => {
                const index = this.agencies.findIndex(agency => agency.idAgency === editedAgency.id);
                if (index !== -1) {
                    this.agencies[index] = editedAgency;
                }
                Swal.fire('Changes Submitted!', 'The changes have been successfully submitted.', 'success');
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'The changes have not been submitted.', 'info');
        }
    });
}



  fetchAgencies() {
    this.agencyService.getAllAgencies().subscribe((agencies) => {
      this.agencies = agencies;

      // If no agencies, open the modal to create the first one
      if (this.agencies.length === 0) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal() {
    const modalElement = document.getElementById('agencyModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Remaining methods for editing, deleting, etc.
  submitCreateForm() {
    const newAgency = this.createForm.value;
    this.agencyService.addAgency(newAgency).subscribe(
      (addedAgency) => {
        this.agencies.push(addedAgency); // Add the newly created agency
        this.closeCreateModal(); // Close the modal after addition
        this.createForm.reset(); // Reset the form after submission
        Swal.fire('Success!', 'Agency added successfully.', 'success');
      },
      (error) => {
        console.error('Error adding agency:', error);
        Swal.fire('Error!', 'Failed to add agency. Please try again.', 'error');
      }
    );
  }

  closeCreateModal() {
    const modalElement = document.getElementById('agencyModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
}