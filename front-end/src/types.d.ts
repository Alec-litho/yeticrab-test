export interface Attraction {
    id:number;
  name: string;
  description: string;
  rating: number;
  photoUrl: string;
  location: string;
  lat: number;
  lng: number;
  status: Status;
  addedDate: Date
}

export enum Status {
    PLANNED,
    VISITED
}