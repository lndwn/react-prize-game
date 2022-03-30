export interface Prize {
  id: string;
  name: string;
  imageUrl?: string;
  logoUrl?: string;
  value: number;
  kind: string;
}

export interface Card {
  id: string;
  name: string;
  image: string;
  prize: Prize;
}
