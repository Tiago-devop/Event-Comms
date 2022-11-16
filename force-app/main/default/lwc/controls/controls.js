import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0, 2, 3, 4, 5, 6];
    numbers = [1000, 3000, 5000, 10000];
    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
    }
    handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: factor
        }));
    }
    handleNumbersToAdd(event) {
        const number = event.target.dataset.number;
        this.dispatchEvent(new CustomEvent('addnumbers', {
            detail: number
        }));
    }
    handleDivision() {
        this.dispatchEvent(new CustomEvent('div'));
    }
}