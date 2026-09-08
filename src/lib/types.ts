export type Hotel = {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  countryName: string;
  address?: string;
  summary: string;
  description: string[];
  images: string[];
};

export type City = {
  id: string;
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  heroText: string;
  body: string[];
  attractions: string[];
  images: string[];
  hotelIds: string[];
  comingSoon?: boolean;
};

export type Country = {
  id: string;
  slug: string;
  name: string;
  citySlugs: string[];
};
