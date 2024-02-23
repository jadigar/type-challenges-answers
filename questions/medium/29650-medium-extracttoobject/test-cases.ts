import type { Equal, Expect } from '@type-challenges/utils';

interface Test1 { id: '1', myProp: { foo: '2' } }

interface TestExpect1 {
  id: '1'
  foo: '2'
}

interface Test2 {
  id: '1'
  prop1: { zoo: '2' }
  prop2: { foo: '4' }
}

interface TestExpect2 {
  id: '1'
  prop1: { zoo: '2' }
  foo: '4'
}

interface Test3 {
  prop1: { zoo: '2', a: 2, b: 4, c: 7 }
  prop2: { foo: '4', v: 2, d: 4, g: 7 }
  k: 289
}

interface TestExpect3 {
  zoo: '2'
  a: 2
  b: 4
  c: 7
  prop2: { foo: '4', v: 2, d: 4, g: 7 }
  k: 289
}

interface Test4 { id: '1', myProp: { foo: '2' } }

interface TestExpect4 {
  id: '1'
  myProp: { foo: '2' }
}

type Cases = [
  Expect<Equal<ExtractToObject<test1, 'myProp'>, testExpect1>>,
  Expect<Equal<ExtractToObject<test2, 'prop2'>, testExpect2>>,
  Expect<Equal<ExtractToObject<test3, 'prop1'>, testExpect3>>,
  // @ts-expect-error
  Expect<Equal<ExtractToObject<test4, 'prop4'>, testExpect4>>,
];
