// Extended type definitions for Sugar v2.0.3
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

// <reference path="sugar.d.ts" />

interface DateConstructor {
  range(start?: string|Date, end?: string|Date): sugarjs.Range;
}

interface NumberConstructor {
  range(start?: number, end?: number): sugarjs.Range;
}

interface Number {
  cap(max?: number): number;
  clamp(start?: number, end?: number): number;
  downto<T>(num: number, step?: number, fn?: (el: T, i: number, r: sugarjs.Range) => void): T[];
  downto<T>(num: number, fn?: (el: T, i: number, r: sugarjs.Range) => void): T[];
  upto<T>(num: number, step?: number, fn?: (el: T, i: number, r: sugarjs.Range) => void): T[];
  upto<T>(num: number, fn?: (el: T, i: number, r: sugarjs.Range) => void): T[];
}

interface StringConstructor {
  range(start?: string, end?: string): sugarjs.Range;
}