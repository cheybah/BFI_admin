import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'bi bi-speedometer2', 
  },
  {
    title: true,
    name: 'Consultations'
  },
  {
    name: 'Clients',
    url: '/clients',
    icon: 'bi bi-people', 
  },
  {
    name: 'Agences',
    url: '/agences',
    icon: 'bi bi-building', 
  },
  {
    name: 'Comptes',
    url: '/accounts',
    icon: 'bi bi-cash-stack', 
    children: [
      {
        name: 'Listes',
        url: '/accounts',
        icon: 'bi bi-list-ul'
      },
      {
        name: 'Types',
        url: '/types',
        icon: 'bi bi-file-earmark'
      },
      {
        name: 'Services',
        url: '/services',
        icon: 'bi bi-gear'
      }  
    ]
  },
  {
    name: 'Employées',
    url: '/employee',
    icon: 'bi bi-people-fill', 
  },
  {
    name: 'Opérations bancaires',
    title: true
  },
  {
    name: 'Opérations monétaires',
    url: '/base',
    icon: 'bi bi-cash-coin',
    children: [
      {
        name: 'Encaissement',
        url: '/collection',
        icon: 'bi bi-cash',
      },
      {
        name: 'Virement',
        url: '/transfer',
        icon: 'bi bi-arrow-right-short',
      },
      {
        name: 'Versement',
        url: '/collection',
        icon: 'bi bi-arrow-left-short',
      },
      {
        name: 'Retrait',
        url: '/withdrawal',
        icon: 'bi bi-currency-dollar',
      }
    ]
  },
  {
    name: 'Transférer',
    url: '/transferer',
    icon: 'bi bi-cursor',
  },
  {
    name: 'Demandes',
    url: '/demandes',
    icon: 'bi bi-file-earmark-text', 
  },

  {
    title: true,
    name: 'Gestion du flux de travail'
  },
  {
    name: 'Blogues',
    url: '/blogs',
    icon: 'bi bi-journal', 
  }
];
