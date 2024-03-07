import { Component, ElementRef, ViewChild } from '@angular/core';
import { RegisterService } from '../../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService] // Provide RegisterService at the component level
})
export class RegisterComponent {

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  isPasswordVisible = false;

  firstName: string ="";
  lastName: string="";
  email: string="";
  login: string ="";
  password: string="";
  role: string="";

  constructor(private registerService: RegisterService) { }

  togglePasswordVisibility(event: MouseEvent) {
    this.isPasswordVisible = !this.isPasswordVisible;
    const inputElement = this.passwordInput.nativeElement as HTMLInputElement;
    inputElement.type = this.isPasswordVisible ? 'text' : 'password';

    const eyeIcon = event.currentTarget as HTMLElement;
    eyeIcon.classList.toggle('bi-eye-fill');
    eyeIcon.classList.toggle('bi-eye-slash-fill');
  }

  registerUser(formData: any) {
    // Log the JSON payload before making the HTTP request
    console.log('JSON payload:', formData);
  
    // Call register method from RegisterService
    this.registerService.register(formData).subscribe(
      (response) => {
        // Handle successful registration response
        console.log('Registration successful:', response);
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed:', error);
      }
    );
  }

}
