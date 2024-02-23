import type { Equal, Expect } from '@type-challenges/utils';

interface Test1 {
  key: 'cat'
  value: 'green'
}

interface TestExpect1 {
  key: 'cat'
  value: 'green'
  home: boolean
}

interface Test2 {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

interface TestExpect2 {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

interface Test3 {
  key: 'cow'
  value: 'yellow'
  sun: false
}

interface TestExpect3 {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

type Cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
];
