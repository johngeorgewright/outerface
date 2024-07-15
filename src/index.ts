/**
 * Use for declaring static interfaces.
 *
 * @example
 * ```
 * interface ComparableStatic<T> extends Outerface<T> {
 *   compare(a: T, b: T): number;
 * }
 *
 * @outerface<ComparableStatic<TableCell>>()
 * class TableCell {
 *   readonly value: number;
 *
 *   constructor(value: number) {
 *     this.value = value
 *   }
 *
 *   static compare(a: TableCell, b: TableCell): number {
 *     return a.value - b.value;
 *   }
 * }
 * ```
 */
export interface Outerface<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T
}

/**
 * Use for declaring static types on a class.
 *
 * @example
 * ```
 * interface ComparableStatic<T> extends Outerface<T> {
 *   compare(a: T, b: T): number;
 * }
 *
 * @outerface<ComparableStatic<TableCell>>()
 * class TableCell {
 *   readonly value: number;
 *
 *   constructor(value: number) {
 *     this.value = value
 *   }
 *
 *   static compare(a: TableCell, b: TableCell): number {
 *     return a.value - b.value;
 *   }
 * }
 */
export function outerface<T>() {
  return (_constructor: T) => {
    //
  }
}
