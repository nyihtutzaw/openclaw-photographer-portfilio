export type ProjectImage = {
  id: number;
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  coverImage: string;
  images: ProjectImage[];
};
