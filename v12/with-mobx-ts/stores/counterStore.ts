import {makeAutoObservable} from "mobx";

export class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase() {
        this.count++;
        console.log("카운트 업데이트!!:", this.count);
    }

    decrease() {
        this.count--;
        console.log("카운트 업데이트!!:", this.count);
    }
}

export const counterStore = new CounterStore();
