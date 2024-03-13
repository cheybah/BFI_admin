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
