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
    url: '/theme/colors',
    icon: 'bi bi-people', 
  },
  {
    name: 'Agences',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    icon: 'bi bi-building', 
  },
  {
    name: 'Comptes',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    icon: 'bi bi-cash-stack', 
    children: [
      {
        name: 'Listes',
        url: '/base/accordion',
        icon: 'bi bi-list-ul'
      },
      {
        name: 'Types',
        url: '/base/carousel',
        icon: 'bi bi-file-earmark'
      },
      {
        name: 'Services',
        url: '/base/collapse',
        icon: 'bi bi-gear'
      }  
    ]
  },
  {
    name: 'Employées',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
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
        url: '/base/cards',
        icon: 'bi bi-cash',
      },
      {
        name: 'Virement',
        url: '/base/cards',
        icon: 'bi bi-arrow-right-short',
      },
      {
        name: 'Versement',
        url: '/base/cards',
        icon: 'bi bi-arrow-left-short',
      },
      {
        name: 'Retrait',
        url: '/base/cards',
        icon: 'bi bi-currency-dollar',
      }
    ]
  },
  {
    name: 'Transférer',
    url: '/buttons',
    icon: 'bi bi-cursor',
  },
  {
    name: 'Demandes',
    url: '/forms',
    icon: 'bi bi-file-earmark-text', 
    children: [
      {
        name: 'Input Group',
        url: '/forms/input-group'
      }
    ]
  },

  {
    title: true,
    name: 'Gestion du flux de travail'
  },
  {
    name: 'Blogues',
    url: '/login',
    icon: 'bi bi-journal', 
  }
];
