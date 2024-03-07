import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AxiosService } from '../../../services/axios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  isPasswordVisible = false;

  login: string ="";
  password: string="";
  authenticationError = false; // Add this variable for authentication error

  constructor(private elementRef: ElementRef,
    private axiosService: AxiosService,
    private router: Router) { }

  ngOnInit(): void {
    this.scatterIcons();
  }


  onSubmitLogin(): void {
    console.log('Sending JSON object:', NgForm); // Log the JSON object before sending
    this.axiosService.request(
      "POST",
      "/login",
      { login: this.login, password: this.password }
    ).then(
      (response: any) => {
        this.router.navigate(['/500']);
      }
    ).catch(error => {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: Invalid credentials');
      } else {
        console.error('Login failed:', error);
        // Handle other error cases (network issues, server errors, etc.)
      }
    });
  }


  togglePasswordVisibility(event: MouseEvent) {
    this.isPasswordVisible = !this.isPasswordVisible;
    const inputElement = this.passwordInput.nativeElement as HTMLInputElement;
    inputElement.type = this.isPasswordVisible ? 'text' : 'password';

    const eyeIcon = event.currentTarget as HTMLElement;
    eyeIcon.classList.toggle('bi-eye-fill');
    eyeIcon.classList.toggle('bi-eye-slash-fill');
  }

  scatterIcons() {
    const bgPrimaryElement = this.elementRef.nativeElement.querySelector('.bg-primary');
    if (bgPrimaryElement) {
      const cardWidth = (bgPrimaryElement as HTMLElement).offsetWidth;
      const cardHeight = (bgPrimaryElement as HTMLElement).offsetHeight;

      const numIcons = 34; // Number of icons you want
      const iconSize = 25; // Size of the icon

      for (let i = 0; i < numIcons; i++) {
        const flagIcon = document.createElement('i');
        flagIcon.className = 'bi bi-boxes';
        flagIcon.style.position = 'absolute';
        flagIcon.style.left = Math.random() * (cardWidth - iconSize) + 'px';
        flagIcon.style.top = Math.random() * (cardHeight - iconSize) + 'px';
        flagIcon.style.fontSize = iconSize + 'px';
        flagIcon.style.color = '#ffffff'; // Set icon color to white
        flagIcon.style.opacity = '0.2'; // Adjust opacity

        bgPrimaryElement.appendChild(flagIcon);
      }
    }
  }

}
