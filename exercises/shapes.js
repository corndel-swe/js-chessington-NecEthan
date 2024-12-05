export class Shape {
  area() {
    throw new Error('This method should be overwritten')
  }

  perimeter() {
    throw new Error('This method should be overwritten')
  }
}

// Exercise 3: Make Rectangle, Triangle, and Circle child classes of Shape
// And override the getArea and getPerimeter methods

export class Rectangle extends Shape{
  #width
  #height

  constructor(width, height) {
    super()
    this.#width = width
    this.#height = height
  }

  area() {
    return this.#width * this.#height
  }

  perimeter() {
    return 2 * (this.#width + this.#height)
  }

  width() {
    return this.#width
  }

  height() {
    return this.#height
  }
}

export class RightTriangle extends Shape{
  #base
  #height

  constructor(base, height) {
    super();
    this.#base = base
    this.#height = height
  }

  area() {
    return (this.#base * this.#height) / 2;
  }

  perimeter() {
    const hypotenuse = this.hypotenuse();
    return this.#base + this.#height + hypotenuse;
  }

  base() {
    return this.#base
  }

  height() {
    return this.#height
  }

  hypotenuse() {
    return Math.sqrt(this.#base ** 2 + this.#height ** 2)
  }
}

export class Circle extends Shape{
  #radius

  constructor(radius) {
    super();
    this.#radius = radius
  }

  area() {
    return Math.PI * this.#radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.#radius;
  }

  radius() {
    return this.#radius
  }
}

