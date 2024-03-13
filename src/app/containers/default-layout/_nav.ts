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
    url: '/admin-dash/clients',
    icon: 'bi bi-people', 
  },
  {
    name: 'Agences',
    url: '/admin-dash/agences',
    icon: 'bi bi-building', 
  },
  {
    name: 'Comptes',
    url: '/admin-dash/accounts',
    icon: 'bi bi-cash-stack', 
    children: [
      {
        name: 'Listes',
        url: '/admin-dash/accounts',
        icon: 'bi bi-list-ul'
      },
      {
        name: 'Types',
        url: '/admin-dash/types',
        icon: 'bi bi-file-earmark'
      },
      {
        name: 'Services',
        url: '/admin-dash/services',
        icon: 'bi bi-gear'
      }  
    ]
  },
  {
    name: 'Employées',
    url: '/admin-dash/employee',
    icon: 'bi bi-people-fill', 
  },
  {
    name: 'Opérations bancaires',
    title: true
  },
  {
    name: 'Opérations monétaires',
    url: '/admin-dash/base',
    icon: 'bi bi-cash-coin',
    children: [
      {
        name: 'Encaissement',
        url: '/admin-dash/collection',
        icon: 'bi bi-cash',
      },
      {
        name: 'Virement',
        url: '/admin-dash/transfer',
        icon: 'bi bi-arrow-right-short',
      },
      {
        name: 'Versement',
        url: '/admin-dash/collection',
        icon: 'bi bi-arrow-left-short',
      },
      {
        name: 'Retrait',
        url: '/admin-dash/withdrawal',
        icon: 'bi bi-currency-dollar',
      }
    ]
  },
  {
    name: 'Transférer',
    url: '/admin-dash/transferer',
    icon: 'bi bi-cursor',
  },
  {
    name: 'Demandes',
    url: '/admin-dash/demandes',
    icon: 'bi bi-file-earmark-text', 
  },

  {
    title: true,
    name: 'Gestion du flux de travail'
  },
  {
    name: 'Blogues',
    url: '/admin-dash/blogs',
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