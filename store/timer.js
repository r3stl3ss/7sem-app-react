import { makeAutoObservable } from "mobx";

class Timer {
  millisecondsPassed = 0;
  secondsPassed = 0
  constructor() {
    makeAutoObservable(this);
  }

  startIncrease() {
    console.log(`timer started`);
    this.millisecondsPassed += 1;
    if (this.millisecondsPassed == 60) {
        this.secondsPassed += 1;
        this.millisecondsPassed = 0;
    }
  }

  stopIncrease() {
    console.log(`timer stoped`);
  }

  clearTimer() {
    console.log(`timer cleared`);
    this.secondsPassed = 0;
  }
}

export default new Timer();