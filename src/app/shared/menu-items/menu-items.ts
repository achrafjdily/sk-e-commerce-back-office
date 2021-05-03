import { Injectable } from '@angular/core';


export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}


export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  children?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: "link" | "extLink" | "extTabLink" | "sub";
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS: Menu[] = [
  // {
  //   state: 'repcie',
  //   name: 'Réponse CIE',
  //   type: 'sub',
  //   icon: 'folder_special',
  //   children: [
  //     {
  //       state: 'identification-retour',
  //       name: 'Identification des retours',
  //       type: "link"
  //     },
  //     {
  //       state: 'remb',
  //       name: 'Retours Remb',
  //       type: "subchild",
  //       children: [
  //         {
  //           state: "all",
  //           name: "Tous les Retours",
  //           type: "link"
  //         },
  //         {
  //           state: "ongoing",
  //           name: "Retours en Cours",
  //           type: "link"
  //         },
  //         {
  //           state: "closed",
  //           name: "Retours Clôturés",
  //           type: "link"
  //         },
  //         {
  //           state: "unqualified",
  //           name: "Retours Non Qualifiés",
  //           type: "link"
  //         },
  //       ]
  //     },
  //     {
  //       state: 'nonremb',
  //       name: 'Retours Non Remb',
  //       type: "subchild",
  //       children: [
  //         {
  //           state: "all",
  //           name: "Tous les Retours",
  //           type: "link"
  //         },
  //         {
  //           state: "ongoing",
  //           name: "Retours en Cours",
  //           type: "link"
  //         },
  //         {
  //           state: "closed",
  //           name: "Retours Clôturés",
  //           type: "link"
  //         },
  //         {
  //           state: "unqualified",
  //           name: "Retours Non Qualifiés",
  //           type: "link"
  //         },
  //       ]
  //     },
  //     {
  //       state: 'decomptes',
  //       name: 'Décomptes',
  //       type: "subchild",
  //       children: [
  //         {
  //           state: "all",
  //           name: "Tous les Décomptes",
  //           type: "link"
  //         },
  //         {
  //           state: "ongoing",
  //           name: "Décomptes en Cours",
  //           type: "link"
  //         },
  //         {
  //           state: "decompte-abattement",
  //           name: "Décomptes Avec Abattement",
  //           type: "link"
  //         },
  //         {
  //           state: "closed",
  //           name: "Décomptes Clôturés",
  //           type: "link"
  //         },
  //       ]
  //     },
  //     {
  //       state: "propnada",
  //       name: "Proposition Nada",
  //       type: "link"
  //     }
  //   ]
  // },
  {
    state: 'rabbit-mqops',
    name: 'RabbitMQ Ops',
    type: 'sub',
    icon: 'developer_board',
    children: [
      {
        state: 'deadletters',
        name: 'Dead Letters',
        type: "link"
      },
    ]
  },
  {
    state: 'rabbit-mqops',
    name: 'RabbitMQ Ops',
    type: 'link',
    icon: 'developer_board',
  }
];

const navItems: NavItem[] = [
  {
    displayName: 'DevFestFL',
    iconName: 'recent_actors',
    route: 'devfestfl',
    children: [
      {
        displayName: 'Speakers',
        iconName: 'group',
        route: 'devfestfl/speakers',
        children: [
          {
            displayName: 'Michael Prentice',
            iconName: 'person',
            route: 'devfestfl/speakers/michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'devfestfl/speakers/michael-prentice/material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            iconName: 'person',
            route: 'devfestfl/speakers/stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'devfestfl/speakers/stephen-fluin/what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            iconName: 'person',
            route: 'devfestfl/speakers/mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'devfestfl/speakers/mike-brocchi/my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'devfestfl/speakers/mike-brocchi/become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        iconName: 'speaker_notes',
        route: 'devfestfl/sessions',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'devfestfl/sessions/material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'devfestfl/sessions/what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'devfestfl/sessions/my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'devfestfl/sessions/become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        iconName: 'feedback',
        route: 'devfestfl/feedback'
      }
    ]
  },
  {
    displayName: 'Disney',
    iconName: 'videocam',
    children: [
      {
        displayName: 'Speakers',
        iconName: 'group',
        children: [
          {
            displayName: 'Michael Prentice',
            iconName: 'person',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            iconName: 'person',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            iconName: 'person',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        iconName: 'speaker_notes',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        iconName: 'feedback',
        route: 'feedback'
      }
    ]
  },
  {
    displayName: 'Orlando',
    iconName: 'movie_filter',
    children: [
      {
        displayName: 'Speakers',
        iconName: 'group',
        children: [
          {
            displayName: 'Michael Prentice',
            iconName: 'person',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            iconName: 'person',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            iconName: 'person',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        iconName: 'speaker_notes',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        iconName: 'feedback',
        route: 'feedback'
      }
    ]
  },
  {
    displayName: 'Maleficent',
    disabled: true,
    iconName: 'report_problem',
    children: [
      {
        displayName: 'Speakers',
        iconName: 'group',
        children: [
          {
            displayName: 'Michael Prentice',
            iconName: 'person',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            iconName: 'person',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            iconName: 'person',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        iconName: 'speaker_notes',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        iconName: 'feedback',
        route: 'feedback'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): NavItem[] {
    return navItems;
  }
}