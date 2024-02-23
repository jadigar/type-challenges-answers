import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<Equal<SnakeCase<'getElementByClassNames' | 'getElementById'>, 'get_element_by_class_names' | 'get_element_by_id'>>,
];
