export interface Resource {
  id: string;
  name: string;
  slug: string;
  description: string;
  url: string;
  categories: string[];
  keywords: string[];
}

export interface ResourcesResponse {
  resources: Resource[];
}
