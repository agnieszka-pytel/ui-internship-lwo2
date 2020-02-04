export class God {
  static create() {
    let humans = [];
    humans.push(new Man("Adam"), new Woman("Eve"));
    return humans;
  }
}

export class Human {
  constructor(name) {
    if (this.constructor === Human) {
      throw new TypeError("Abstract class Human cannot be instantiated");
    }
    this.name = name;
    this.sex = undefined;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = "male";
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = "female";
  }
}
