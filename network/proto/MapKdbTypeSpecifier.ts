// Original file: proto/kdb_type_specifier.proto

import type { KdbTypeSpecifier as _KdbTypeSpecifier } from './KdbTypeSpecifier';

export interface MapKdbTypeSpecifier {
  'keyType'?: (_KdbTypeSpecifier | keyof typeof _KdbTypeSpecifier);
  'valueType'?: (_KdbTypeSpecifier | keyof typeof _KdbTypeSpecifier);
}

export interface MapKdbTypeSpecifier__Output {
  'keyType': (keyof typeof _KdbTypeSpecifier);
  'valueType': (keyof typeof _KdbTypeSpecifier);
}
