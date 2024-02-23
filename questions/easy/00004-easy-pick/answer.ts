/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type MyPick<T, K extends keyof T> = { [S in K]: T[S] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

type abc = MyPick<Todo, 'title'>;

type Cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'completed' | 'title'>>>,
  MyPick<Todo, 'completed' | 'invalid' | 'title'>,
];
