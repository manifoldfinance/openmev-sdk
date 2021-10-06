declare global {
  interface JSON {
      parse(text: Buffer, reviver?: (key: any, value: any) => any): any;
  }
}
