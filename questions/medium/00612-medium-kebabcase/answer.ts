/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type KebabCase<S extends string> = S extends `${infer Letter}${infer Rest}`
  ? Rest extends `${Uncapitalize<Rest>}`
    ? `${Lowercase<Letter>}${KebabCase<Rest>}`
    : `${Lowercase<Letter>}-${KebabCase<Rest>}`
  : S;

  type Check1 = KebabCase<'FooBarBaz'>;
  //      ^?
  type Check2 = KebabCase<'FooBarBaz'>;
  //      ^?

type Cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
];
