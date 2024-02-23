/*
  2757 - PartialByKeys
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.

  For example

  ```typescript
  interface User {
    name: string
    age: number
    address: string
  }

  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
  ```

  > View on GitHub: https://tsch.js.org/2757
*/

/* _____________ Your Code Here _____________ */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Copy<T> = { [P in keyof T]: T[P] };
type Pick<T, K> = { [key in keyof T as key extends K ? key : never]: T[key] };
type Omit<T, K> = { [key in keyof T as key extends K ? never : key]: T[key] };
type PartialByKeys<T, K = keyof T> = Copy<Omit<T, K> & Partial<Pick<T, K>>>;

type PartialByKeys2<T, K = keyof T> = Copy<
{ [P in Exclude<keyof T, K>]: T[P] } & { [P in keyof T as P extends K ? P : never]?: T[P] }
>;

type Check1 = PartialByKeys<User, 'name'>;
//      ^?
type Check2 = PartialByKeys2<User, 'name'>;
//      ^?

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type Cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'age' | 'name'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys2<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys2<User, 'age' | 'name'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys2<User>, Partial<User>>>,
  Expect<Equal<PartialByKeys2<User, 'name' | 'unknown'>, UserPartialName>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2757/answer
  > View solutions: https://tsch.js.org/2757/solutions
  > More Challenges: https://tsch.js.org
*/
