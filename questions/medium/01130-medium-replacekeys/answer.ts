/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface NodeA {
  type: 'A'
  name: string
  flag: number
}

interface NodeB {
  type: 'B'
  id: number
  flag: number
}

interface NodeC {
  type: 'C'
  name: string
  flag: number
}

interface ReplacedNodeA {
  type: 'A'
  name: number
  flag: string
}

interface ReplacedNodeB {
  type: 'B'
  id: number
  flag: string
}

interface ReplacedNodeC {
  type: 'C'
  name: number
  flag: string
}

interface NoNameNodeA {
  type: 'A'
  flag: number
  name: never
}

interface NoNameNodeC {
  type: 'C'
  flag: number
  name: never
}
type ReplaceKeys<U = readonly Record<string, unknown>[], T = string, Y = readonly Record<string, unknown>[]> = {
  [ k in keyof U ]: k extends T
    ? k extends keyof Y
      ? Y[ k ]
      : never : U[ k ]
};
type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NodeB | NoNameNodeA | NoNameNodeC;

type Check1 = ReplaceKeys<Nodes, 'flag' | 'name', { name: number, flag: string }>;
//     ^?
type Cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'flag' | 'name', { name: number, flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
];
