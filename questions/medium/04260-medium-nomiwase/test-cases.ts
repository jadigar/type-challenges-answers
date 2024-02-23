import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<AllCombinations<''>, ''>>,
  Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
  Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'AB' | 'B' | 'BA'>>,
  Expect<Equal<AllCombinations<'ABC'>, '' | 'A' | 'AB' | 'ABC' | 'AC' | 'ACB' | 'B' | 'BA' | 'BAC' | 'BC' | 'BCA' | 'C' | 'CA' | 'CAB' | 'CB' | 'CBA'>>,
  Expect<Equal<AllCombinations<'ABCD'>, '' | 'A' | 'AB' | 'ABC' | 'ABCD' | 'ABD' | 'ABDC' | 'AC' | 'ACB' | 'ACBD' | 'ACD' | 'ACDB' | 'AD' | 'ADB' | 'ADBC' | 'ADC' | 'ADCB' | 'B' | 'BA' | 'BAC' | 'BACD' | 'BAD' | 'BADC' | 'BC' | 'BCA' | 'BCAD' | 'BCD' | 'BCDA' | 'BD' | 'BDA' | 'BDAC' | 'BDC' | 'BDCA' | 'C' | 'CA' | 'CAB' | 'CABD' | 'CAD' | 'CADB' | 'CB' | 'CBA' | 'CBAD' | 'CBD' | 'CBDA' | 'CD' | 'CDA' | 'CDAB' | 'CDB' | 'CDBA' | 'D' | 'DA' | 'DAB' | 'DABC' | 'DAC' | 'DACB' | 'DB' | 'DBA' | 'DBAC' | 'DBC' | 'DBCA' | 'DC' | 'DCA' | 'DCAB' | 'DCB' | 'DCBA'>>,
];
