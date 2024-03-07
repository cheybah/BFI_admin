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
    url: '/comptes',
    icon: 'bi bi-cash-stack', 
    children: [
      {
        name: 'Listes',
        url: '/listes',
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
    url: '/employees',
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
        url: '/encaissement',
        icon: 'bi bi-cash',
      },
      {
        name: 'Virement',
        url: '/virement',
        icon: 'bi bi-arrow-right-short',
      },
      {
        name: 'Versement',
        url: '/versement',
        icon: 'bi bi-arrow-left-short',
      },
      {
        name: 'Retrait',
        url: '/retrait',
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
    url: '/blogues',
    icon: 'bi bi-journal', 
  }
];
