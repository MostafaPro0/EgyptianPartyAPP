import { CountDown } from "./countDown.js";
import { Singers } from "./singers.js";
import { UI } from "./ui.js";


export class Events {
    constructor() {
        this.ui = new UI();
        this.ui.displaynavbar();
        this.singers = new Singers();
        this.countdown = new CountDown();
        this.countdown.coundDownEvent();    
    }
}
