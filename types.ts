// types.ts
export type Project = {
  title: string;
  description: string;
  fullDescription?: string; // For modal
  tools: string[];
  role: string;
  openToPartners: boolean;
  github?: string;
  liveDemo?: string;
  image?: string; // Add project images
  featured?: boolean; // For highlighting important projects
  timeline?: string; // e.g., "3 months", "Ongoing"
  status?: string; // e.g., "Completed", "In Development", "Maintenance"
  challenges?: string[]; // Key challenges faced
  achievements?: string[]; // Key accomplishments
};
