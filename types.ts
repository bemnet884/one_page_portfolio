// types.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  role: string;
  openToPartners: boolean;
  github?: string;
  liveDemo?: string;
};
