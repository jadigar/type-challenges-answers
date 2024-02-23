/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type MyReadonly<T> = {
  readonly [S in keyof T]: T[S]
};

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type Cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
];
