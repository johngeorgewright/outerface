import { test } from 'vitest'
import { outerface, Outerface } from '../src/index.js'

interface ComparableStatic<T> extends Outerface<T> {
  compare(a: T, b: T): number
}

test('correct typing', () => {
  @outerface<ComparableStatic<TableCell>>()
  class TableCell {
    readonly value: number

    constructor(value: number) {
      this.value = value
    }

    static compare(a: TableCell, b: TableCell): number {
      return a.value - b.value
    }
  }
  new TableCell(1)
})

test('typing error', () => {
  /*
  Argument of type 'typeof TableCell' is not assignable to parameter of type 'ComparableStatic<TableCell>'.
    Property 'compare' is missing in type 'TableCell' but required in type 'Comparable<TableCell>'.
  */
  // @ts-expect-error
  @outerface<ComparableStatic<TableCell>>()
  class TableCell {
    readonly value: number

    constructor(value: number) {
      this.value = value
    }
  }
  new TableCell(1)
})
