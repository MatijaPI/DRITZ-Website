import type sl from './sl.ts';

/** Recursively widen string literals so another language can supply its own text. */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;

export type Dict = Widen<typeof sl>;
