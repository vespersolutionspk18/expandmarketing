export interface Job {
  id: string
  title: string
  contractType: string
  team: string
  location: string
  link?: string
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'US PR Associate',
    contractType: 'Full Time',
    team: 'PR',
    location: 'New York, USA',
    link: '#'
  },
  {
    id: '2',
    title: 'Senior Paid Social Manager',
    contractType: 'Full Time',
    team: 'Social',
    location: 'London, UK',
    link: '#'
  },
  {
    id: '3',
    title: 'Social Lead',
    contractType: 'Full Time',
    team: 'Social',
    location: 'London, UK',
    link: '#'
  },
  {
    id: '4',
    title: 'Digital PR Strategist',
    contractType: 'Full Time',
    team: 'PR',
    location: 'Manchester, UK',
    link: '#'
  },
  {
    id: '5',
    title: 'Creator Manager/Strategist',
    contractType: 'Full Time',
    team: 'Social',
    location: 'New York, USA',
    link: '#'
  },
  {
    id: '6',
    title: 'Senior Account Manager',
    contractType: 'Full Time',
    team: 'Account Management',
    location: 'Manchester, UK',
    link: '#'
  },
  {
    id: '7',
    title: 'Senior Account Director',
    contractType: 'Full Time',
    team: 'Account Management',
    location: 'London, UK',
    link: '#'
  },
  {
    id: '8',
    title: 'Content Strategist',
    contractType: 'Full Time',
    team: 'Content',
    location: 'Manchester, UK',
    link: '#'
  },
  {
    id: '9',
    title: 'SEO Specialist',
    contractType: 'Full Time',
    team: 'SEO',
    location: 'London, UK',
    link: '#'
  },
  {
    id: '10',
    title: 'Junior Designer',
    contractType: 'Full Time',
    team: 'Design',
    location: 'Manchester, UK',
    link: '#'
  },
  {
    id: '11',
    title: 'Senior Data Analyst',
    contractType: 'Full Time',
    team: 'Data',
    location: 'London, UK',
    link: '#'
  },
  {
    id: '12',
    title: 'PR Executive',
    contractType: 'Full Time',
    team: 'PR',
    location: 'New York, USA',
    link: '#'
  }
]
