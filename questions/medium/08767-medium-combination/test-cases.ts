import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>, 'bar baz foo' | 'bar baz' | 'bar foo baz' | 'bar foo' | 'bar' | 'baz bar foo' | 'baz bar' | 'baz foo bar' | 'baz foo' | 'baz' | 'foo bar baz' | 'foo bar' | 'foo baz bar' | 'foo baz' | 'foo'>>,
];
