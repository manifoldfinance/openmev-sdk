// Original file: proto/config.proto


export interface PlatformAccount {
  'address'?: (string);
  'name'?: (string);
  'isActive'?: (boolean);
  'validity'?: (string);
  'aliasOf'?: (string);
  '_aliasOf'?: "aliasOf";
}

export interface PlatformAccount__Output {
  'address': (string);
  'name': (string);
  'isActive': (boolean);
  'validity': (string);
  'aliasOf'?: (string);
  '_aliasOf': "aliasOf";
}
