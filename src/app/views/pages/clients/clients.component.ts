import { Component, OnInit, SchemaMetadata } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from '../../dashboard/dashboard-charts-data';
import {UserService} from './user.service';
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

  ngOnInit(): void {
    this.initCharts();
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Une erreur est survenue lors de la récupération des utilisateurs :', error);
      }
    );
  }

  editUser(user: any) {
    // Implement your edit logic here
  }

  deleteUser(userId: number) {

  }
  
  constructor(private chartsData: DashboardChartsData,
    private userService: UserService) {
  }
  public users: IUser[] = [];

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

 
  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}

