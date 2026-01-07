function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrows = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firstNumber: number, secondNumber?: number, base = 2) {
  return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const res: string = addNumbersArrows(3, 4);
// const multiResult = multiply(2);
// console.log({ result, res, multiResult });
interface Characters {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Characters, amount: number) => {
  character.hp += amount;
};

const strider: Characters = {
  name: "strinder",
  hp: 50,
  showHp() {
    console.log(`puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);
strider.showHp();

export {};
