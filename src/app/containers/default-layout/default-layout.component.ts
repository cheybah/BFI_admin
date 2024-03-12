import { Component } from '@angular/core';
import { AuthRoleService } from '../../services/authrole.service';
import { adminNavItems } from './_nav';
import { writerNavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})

export class DefaultLayoutComponent {

  public navItems: any[] = []; // Initialize to an empty array

  constructor(private authRoleService: AuthRoleService) {
    // Determine the logged-in user's role using your authentication service
    const userRole = this.authRoleService.getRole();

    // Set navItems based on the user's role
    if (userRole === 'ADMIN') {
      this.navItems = adminNavItems;
    } else if (userRole === 'WRITER') {
      this.navItems = writerNavItems;
    }
  }
}
