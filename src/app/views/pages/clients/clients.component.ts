import { Component, OnInit, SchemaMetadata } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from '../../dashboard/admin-dash/dashboard-charts-data';
import {UserService} from './user.service';
import { Router } from '@angular/router';
export interface IUser {
  firstName: string;
  lastName: string;
  id:number;
  state: string;
  registered: string;
  email: string;
  phoneNumber: string;
  photo: string;
  gender: string;
  address: {
    street: string;
    city: string;
    // Ajoutez d'autres propriétés de l'adresse si nécessaire
  };
}


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public users: IUser[] = [];
  public archivedusers: IUser[] = [];
  
  constructor(private chartsData: DashboardChartsData,
    private userService: UserService,
    private router: Router // Injecter le Router dans le constructeur
    ) {
  }

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

 
  ngOnInit(): void {
    this.initCharts();
    this.loadUsers();
    this.loadArchivedUsers();
//    this.nombre_clients();
  }

  editUser(user: any) {
    // Implement your edit logic here
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Une erreur est survenue lors de la récupération des utilisateurs :', error);
      }
    );
  }
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Suppression réussie, rechargez la liste des utilisateurs
        window.location.reload();

      },
      error => {
        console.error('Une erreur est survenue lors de la suppression de l\'utilisateur :', error);

      }
    );
  }
 
  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
  getUserPhoto(photoUrl: string): string {
    // Extraire le nom de fichier de l'URL photo
    const filename = photoUrl.substring(photoUrl.lastIndexOf('\\') + 1);
    // Construire le chemin d'accès à l'image à partir du nom de fichier
    return `assets/img/avatars/${filename}`;
  }
  loadArchivedUsers(): void {
    this.userService.getAllArchivedUsers().subscribe(
      users => {
        this.archivedusers = users;
      },
      error => {
        console.error('An error occurred while fetching archived users:', error);
      }
    );
  }

}

