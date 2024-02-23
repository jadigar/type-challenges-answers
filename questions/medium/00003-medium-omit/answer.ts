/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

// Проблема в первом варианте MyOmit связана с тем, что при использовании S extends K ? never : T[S], ключи, которые вы хотите исключить,
// фактически остаются в типе, но их тип становится never.
// В результате этого в Check вы все равно получите тип, включающий все ключи, но некоторые из них будут иметь тип never.

// type MyOmit<T, K extends keyof T> = { [S in keyof T]: S extends K ? never : T[S] };
// type Check = MyOmit<Todo, 'description'>;
// Check имеет тип { title: string; description: never; completed: boolean; }

type MyOmit<T, K extends keyof T> = { [S in keyof T as S extends K ? never : S ]: T[S] };

type Cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'completed' | 'description'>>>,
];

type Error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
