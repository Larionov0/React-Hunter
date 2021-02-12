import {
  random_choice,
  arraysEqual,
  removeItem,
  randomInteger,
  calc_distance
} from "../functions/main";

class GameObject {
  img_src = "";
  constructor(coords, n, m) {
    this.coords = coords;
    this.n = n;
    this.m = m;
  }

  make_move_by_side(side) {
    switch (side) {
      case "w":
        if (this.coords[0] === 0) {
        } else {
          this.coords[0] -= 1;
        }
        break;
      case "a":
        if (this.coords[1] === 0) {
        } else {
          this.coords[1] -= 1;
        }
        break;
      case "s":
        if (this.coords[0] === this.n - 1) {
        } else {
          this.coords[0] += 1;
        }
        break;
      case "d":
        if (this.coords[1] === this.m - 1) {
        } else {
          this.coords[1] += 1;
        }
        break;
      default:
        break;
    }
  }
}


class Skill {
  constructor (name, description, img_src, cast_function) {
    this.name = name
    this.description = description
    this.img_src = img_src
    this.cast_function = cast_function
  }

  run(state) {
    // this function shoud return new state
    return this.cast_function(state)
  }
}

class Hero extends GameObject {
  img_src =
    "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png";
  constructor(name, hp, coords, n, m) {
    super(coords, n, m);
    this.name = name;
    this.hp = this.max_hp = hp;
    this.details = 0;
    this.skills = this.create_base_skills()
  }

  create_base_skills() {
    const s1_f = (state) => {
      const hero = state.hero;
      const animals = state.animals;

      for (let animal of animals) {
        if (calc_distance(animal.coords, hero.coords) < 1.6) {
          animal.die(animals)
        }
      }
      return {...state}
    }
    const skill1 = new Skill('Бомба', 'взрывается в радиусе 1', '', s1_f)
    const skill2 = new Skill('Рывок', 'игрок перемещается на 2 кл', '')
    return [skill1, skill2]
  }

  make_move(side) {
    this.make_move_by_side(side);
  }

  ne_poimal_li_kurku(animals) {
    let cathced = [];
    for (let animal of animals) {
      if (arraysEqual(this.coords, animal.coords)) {
        cathced.push(animal);
      }
    }

    for (let animal of cathced) {
      this.curka_poimana(animal, animals);
    }
  }

  curka_poimana(animal, animals) {
    removeItem(animals, animal);
    let reward = animal.details;
    this.details += reward;
  }
}

class Animal extends GameObject {
  spawn_delay = 20;
  details = 10;
  img_src = "";
  constructor(name, hp, coords, n, m) {
    super(coords, n, m);
    this.name = name;
    this.hp = this.max_hp = hp;
    this.coords = coords;
  }

  make_move() {
    const side = random_choice(["w", "a", "s", "d"]);
    this.make_move_by_side(side);
  }

  die (animals) {
    removeItem(animals, this);
  }

  spawn(state) {}
}

class Kurka extends Animal {
  spawn_delay = 10;
  details = 3;
  img_src = "http://pngimg.com/uploads/chicken/chicken_PNG2169.png";

  spawn(state) {
    let kurka = new Kurka(
      "New",
      3,
      [randomInteger(0, state.n - 1), randomInteger(0, state.m - 1)],
      state.n,
      state.m
    );
    state.animals.push(kurka);
  }
}

export { Hero, Kurka, Skill };
