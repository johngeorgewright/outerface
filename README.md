# @johngw/outerface

Create static interfaces for your Typescript classes.

## Installation

```
npm install @johngw/outerface
```

## Use

Use the `@outerface` class decorator, with an `Outerface` extended interface to declare your static properties and methods.

```typescript
interface ComparableStatic<T> extends Outerface<T> {
  compare(a: T, b: T): number
}

@outerface<ComparableStatic<TableCell>>()
class TableCell {
  readonly value: number

  constructor(value: number) {
    this.value = value
  }

  // This static method is required and the program will not compile
  // without it.
  static compare(a: TableCell, b: TableCell): number {
    return a.value - b.value
  }
}
```

The `Outerface` interface requires a type parameter that is the instance type of the class.
