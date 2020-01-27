export class God {
  static create() {
    let humans = [];
    let adam = new Man('Adam');
    let eve = new Woman('Eve');
    humans.push(adam, eve);
    return humans;
  }
}

export class Human {
  constructor(name) {
    this.name = name;
    this.sex = undefined;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get sex() {
    return this._sex;
  }

  set sex(value) {
    return this._sex = value;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'male';
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'female';
  }
}
