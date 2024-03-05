import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  isPasswordVisible = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.scatterIcons();
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

      const numIcons = 43; // Number of icons you want
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
