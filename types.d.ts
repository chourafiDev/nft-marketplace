export interface Product {
  id: string;
  Owner: Owner;
  title: string;
  price: number;
  "propertie-name": string;
  type: string;
  cover: StaticImageData;
  images: StaticImageData[];
  property: Property[];
  category: Property[];
}

export interface Owner {
  name: string;
  image: StaticImageData;
}

export interface Property {
  type: string;
  value: string;
}
