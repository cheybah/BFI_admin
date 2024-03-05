import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  isPasswordVisible = false;

  constructor() { }

  togglePasswordVisibility(event: MouseEvent) {
    this.isPasswordVisible = !this.isPasswordVisible;
    const inputElement = this.passwordInput.nativeElement as HTMLInputElement;
    inputElement.type = this.isPasswordVisible ? 'text' : 'password';

    const eyeIcon = event.currentTarget as HTMLElement;
    eyeIcon.classList.toggle('bi-eye-fill');
    eyeIcon.classList.toggle('bi-eye-slash-fill');
  }

}
