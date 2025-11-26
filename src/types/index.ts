// Common types for the application

export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  salary: string;
  religion: string;
  location: string;
  image?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  profileCompletion: number;
  image?: string;
  lookingFor: string;
}

export interface Stats {
  acceptance: number;
  justJoined: number;
}

export type ThemeMode = 'light' | 'dark';

