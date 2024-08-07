import { INavData } from '@coreui/angular';

export const adminNavItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard/admin-dash',
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
    name: 'Service Client',
    url: '/admin-dash/accounts',
    icon: 'bi bi-people-fill', 
    children: [
      {
        name: 'Communication',
        url: '/admin-dash/chat',
        icon: 'bi bi-chat-dots-fill'
      },
      {
        name: 'Reclamations',
        url: '/admin-dash/reclamation',
        icon: 'bi bi-exclamation-diamond'
      },
      {
        name: 'Rendez-vous',
        url: '/admin-dash/rendez-vous',
        icon: 'bi bi-clock'
      }  
    ]
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
      },/*
      {
        name: 'Types',
        url: '/admin-dash/types',
        icon: 'bi bi-file-earmark'
      },
      {
        name: 'Services',
        url: '/admin-dash/services',
        icon: 'bi bi-gear'
      }  */
    ]
  },
  {
    name: 'Ajouter employée',
    url: '/register',
    icon: 'bi bi-people-fill', 
  },
  {
    name: 'Agences',
    url: '/admin-dash/agency',
    icon: 'bi bi-building', 
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
        url: '/admin-dash/historique',
        icon: 'bi bi-arrow-right-short',
      },
      {
        name: 'Versement',
        url: '/admin-dash/depot',
        icon: 'bi bi-arrow-left-short',
      },
      {
        name: 'Retrait',
        url: '/admin-dash/withdrawal',
        icon: 'bi bi-currency-dollar',
      }
    ]
  },/*
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
  }*/
];

export const writerNavItems: INavData[] = [
  {
    name: 'Tableau de bord',
    icon: 'bi bi-speedometer2', 
  },
  {
    name: 'Blogues',
    title: true
  },
  {
    name: 'Flux de travail',
    url: '/',
    icon: 'bi bi-substack',
    children: [
      {
        name: 'Ajouter un nouveau blogue',
        url: '/writer-dash/blogs',
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