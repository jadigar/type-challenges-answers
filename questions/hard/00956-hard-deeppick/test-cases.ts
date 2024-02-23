import type { Equal, Expect } from '@type-challenges/utils';

interface Obj {
  a: number
  b: string
  c: boolean
  Obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type Cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, '' | 'a'>, unknown & { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'Obj.e'>, { a: number } & { Obj: { e: string } }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'Obj.e' | 'Obj.obj2.i'>, { a: number } & { Obj: { e: string } } & { Obj: { obj2: { i: boolean } } }>>,
];
