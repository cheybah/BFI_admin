import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
   
  },
  {
    title: true,
    name: 'Consultations'
  },
  {
    name: 'Clients',
    url: '/theme/colors',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Agences',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilBuilding' }
  },
  {
    name: 'Comptes',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Listes',
        url: '/base/accordion'
      },
      {
        name: 'Types',
        url: '/base/carousel'
      },
      {
        name: 'Services',
        url: '/base/collapse'
      }  
    ]
  },
  {
    name: 'Employées',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Opérations bancaires',
    title: true
  },
  {
    name: 'Opérations monétaires',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Encaissement',
        url: '/base/cards'
      },
      {
        name: 'Virement',
        url: '/base/cards'
      },
      {
        name: 'Versement',
        url: '/base/cards'
      },
      {
        name: 'Retrait',
        url: '/base/cards'
      }
    ]
  },
  {
    name: 'Transférer',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Demandes',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
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
    iconComponent: { name: 'cil-notes' }
  }
];
