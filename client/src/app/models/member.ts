import { IPhoto } from "./photo";

export interface IMember {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction?: any;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: IPhoto[];
}
