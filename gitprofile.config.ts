// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bisht2961', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['bisht2961/bisht2961','bisht2961/sachinbisht.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['bisht2961/ai_resume_generator'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI Resume generator',
          description:
            'Built an AI-powered resume builder using Strapi (backend) and React (frontend), enabling seamless resume creation and sharing',
          imageUrl:
            'resume',
          link: 'https://github.com/bisht2961/ai_resume_generator',
        },
        {
          title: 'News Aggregator',
          description:
            'A full-stack news aggregation platform that fetches and curates news from the News API.',
          imageUrl:
            'news',
          link: 'https://github.com/bisht2961/news_aggregator_fe',
        },
        {
          title: 'Instagram Clone',
          description:
            'Crafted a fully operational Instagram clone with a microservices architecture with JWT authentication.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/bisht2961/news_aggregator_fe',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sachin Bisht',
    description: '',
    imageURL: 'https://drive.google.com/file/d/1Jw50v3XtErBhl9AEsn8-GqfIWFuHVax9/view?usp=drive_link',
  },
  social: {
    linkedin: 'sachin-bisht01',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sachinbisht2961@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1vuwUUqiJi1FiR-61mDnzK7sQdPcScN-C/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Spring Boot',
    'HTML',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Infosys Limited',
      position: 'Specialist Programmer',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://www.infosys.com/',
    },
    {
      company: 'Quantiphi',
      position: 'Software Engineer Intern',
      from: 'January 2023',
      to: 'July 2023',
      companyLink: 'https://quantiphi.com/',
    },
  ],
  certifications: [
    {
      name: 'Google Cloud',
      body: 'Associate Cloud Engineer',
      year: 'May 2023',
      link: 'https://drive.google.com/file/d/1ieD9BemS140ye3L049oV72SrscrtY5hl/view?usp=drive_link',
    },
    {
      name: 'Microsoft AI',
      body: 'Azure AI Engineer Associate',
      year: 'June 2024',
      link: 'https://drive.google.com/file/d/1WUtpLa34kUCD6WP1Fe5TBGIRZ0mojFSJ/view?usp=drive_link',
    },
  ],
  educations: [
    {
      institution: 'Chandigarh University',
      degree: 'B.E Computer Science',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Saint Soldier International School',
      degree: 'High School',
      from: '2017',
      to: '2018',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
