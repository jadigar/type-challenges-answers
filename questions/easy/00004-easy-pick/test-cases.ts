import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'completed' | 'title'>>>,
  // @ts-expect-error
  MyPick<Todo, 'completed' | 'invalid' | 'title'>,
];

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
