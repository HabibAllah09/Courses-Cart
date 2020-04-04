export enum CourseLevel {
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE',
  Advanced = 'ADVANCED'
}

export interface Course {
  description: string;
  level: CourseLevel;
  price: number;
  title: string;
}

export interface CartItem {
  price: number;
  title: string;
}

export interface Cart {
  items: CartItem[];
  sum: number;
}
