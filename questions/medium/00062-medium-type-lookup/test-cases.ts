import type { Equal, Expect } from '@type-challenges/utils';

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Bengal' | 'Curl' | 'Shorthair'
}

interface Dog {
  type: 'dog'
  breeds: 'Boxer' | 'Brittany' | 'Bulldog' | 'Hound'
  color: 'black' | 'brown' | 'white'
}

type Animal = Cat | Dog;

type Cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
];
