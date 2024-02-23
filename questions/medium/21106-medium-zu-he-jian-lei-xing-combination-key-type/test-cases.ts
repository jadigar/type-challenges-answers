import type { Equal, Expect } from '@type-challenges/utils';

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn'];
type CaseTypeOne = 'cmd ctrl' | 'cmd fn' | 'cmd opt' | 'ctrl fn' | 'ctrl opt' | 'opt fn';

type Cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
];
