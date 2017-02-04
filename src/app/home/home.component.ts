import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home',
    encapsulation: ViewEncapsulation.None,
    template: `<div>Home</div>`
})
export class HomeComponent implements OnInit {

    constructor() {}

    public ngOnInit() {
    }
}
