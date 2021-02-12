import { Hero, Kurka } from "./classes";

let n = 15,
  m = 30;

let initial_state = {
  n: n,
  m: m,
  width: 1350,
  height: 450,
  hero: new Hero("Hunter", 10, [2, 2], n, m),
  animals: [
    new Kurka("Ryaba", 3, [5, 5], n, m),
    new Kurka("Biba", 3, [6, 5], n, m),
  ],
  round: 1,
  animals_classes: [new Kurka()],
};

function all_animals_makes_move(animals) {
  for (let animal of animals) {
    animal.make_move();
  }
}

function after_move(state) {
  let hero = state.hero;
  hero.ne_poimal_li_kurku(state.animals);
  all_animals_makes_move(state.animals);
  hero.ne_poimal_li_kurku(state.animals);
  check_animals_spawn(state);
  state.round += 1;
}

function check_animals_spawn(state) {
  for (let animal_class of state.animals_classes) {
    if (state.round % animal_class.spawn_delay === 0) {
      animal_class.spawn(state);
    }
  }
}


const MAKE_MOVE = "MAKE_MOVE";
const MAKE_SHOT = "MAKE_SHOT";
const USE_SKILL = "USE_SKILL";


const game_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const side = action.side;
      state.hero.make_move(side);
      after_move(state);
      return { ...state };
    case MAKE_SHOT:
      break;
    case USE_SKILL:
      const skill = action.skill
      return skill.run(state)
    default:
      return state;
  }
};

export const make_move_AC = (side) => {
  return { type: MAKE_MOVE, side: side };
};

export const make_shot_AC = () => {
  return {type: MAKE_SHOT, }
}

export const use_skill_AC = (skill) => {
  return {type: USE_SKILL, skill: skill}
}

export default game_reducer;
