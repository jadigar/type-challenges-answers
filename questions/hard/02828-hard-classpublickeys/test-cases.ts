import type { Equal, Expect } from '@type-challenges/utils';

class A {
  public str: string;

  protected num: number;

  private readonly bool: boolean;

  constructor() {
    this.str = 'naive';
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random();
  }
}

type Cases = [
  Expect<Equal<ClassPublicKeys<A>, 'getNum' | 'str'>>,
];
