import type { Equal, Expect } from '@type-challenges/utils';

interface Obj {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type Cases = [
  Expect<Equal<DeepOmit<Obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<Obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<Obj, 'name'>, Obj>>,
  Expect<Equal<DeepOmit<Obj, 'person.age.value'>, { person: { name: string, age: {} } }>>,
];
