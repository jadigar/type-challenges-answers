/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > View on GitHub: https://tsch.js.org/2595
*/

/* _____________ Your Code Here _____________ */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never ]: T[key]
};

type Check1 = PickByType<Model, number>;
//      ^?

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type Cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2595/answer
  > View solutions: https://tsch.js.org/2595/solutions
  > More Challenges: https://tsch.js.org
*/
