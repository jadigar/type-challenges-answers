import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--success' | 'btn__price--warning' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--large' | 'btn--medium' | 'btn--small' >>,
];
