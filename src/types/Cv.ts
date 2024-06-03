export interface Cv {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: string;
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  work: {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
  }[];
  skills: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
  projects: {
    name: string;
    isActive: boolean;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
    github: string;
  }[];
};