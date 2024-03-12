import { INavData } from '@coreui/angular';

export const adminNavItems: INavData[] = [
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

export const writerNavItems: INavData[] = [
  {
    name: 'Tableau de bord',
    icon: 'bi bi-speedometer2', 
  },
  {
    name: 'Blogs',
    title: true
  },
  {
    name: 'Flux de travail',
    url: '/',
    icon: 'bi bi-substack',
    children: [
      {
        name: 'Ajouter un nouveau blog',
        url: '/',
        icon: 'bi bi-journal-plus',
      },
      {
        name: 'Catégoires', 
        url: '/',
        icon: 'bi bi-tags-fill',
      },
      {
        name: 'Media',
        url: '/',
        icon: 'bi bi-collection-fill',
      }
    ]
  },
  {
    name: 'Commentaires',
    url: '/',
    icon: 'bi bi-chat-quote-fill', 
  },
  {
    name: 'A Faire',
    title: true
  },
  {
    name: 'Consulter la liste',
    url: '/writer-dash/kanban',
    icon: 'bi bi-check2-circle', 
  },


];
