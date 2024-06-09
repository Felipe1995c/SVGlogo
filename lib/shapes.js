class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,10 290,290 10,290" fill="${this.color}" />`;
    }
  }
  
  export { Circle, Square, Triangle };