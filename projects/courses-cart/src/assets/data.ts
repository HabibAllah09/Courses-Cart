import { Course, CourseLevel } from '../app/interfaces';

export const courses: Course[] = [
  {
    description: 'How to make Falafel in 3 steps',
    level: CourseLevel.Beginner,
    price: 15,
    title: 'Yummy Falafel'
  },
  {
    description: 'Learn to use sword to cut vegetables',
    level: CourseLevel.Advanced,
    price: 5.5,
    title: 'Sword Master'
  },
  {
    description:
      "Wanna learn more about Pattern Design, You're not in the right place",
    level: CourseLevel.Advanced,
    price: 9,
    title: 'Pattern Design'
  },
  {
    description: 'Learn the English alphabet',
    level: CourseLevel.Beginner,
    price: 10,
    title: 'English 101'
  },
  {
    description: 'Conversation in English',
    level: CourseLevel.Intermediate,
    price: 12,
    title: 'English 201'
  },
  {
    description: 'Join us to make the world better place',
    level: CourseLevel.Beginner,
    price: 19,
    title: 'Breaking Bad'
  },
  {
    description: 'Find million people to donate you 1$',
    level: CourseLevel.Intermediate,
    price: 1.25,
    title: 'How to be a millionare'
  },
  {
    description: 'I want to steal your money even you will be happy to',
    level: CourseLevel.Beginner,
    price: 22,
    title: 'Human Development'
  }
];
