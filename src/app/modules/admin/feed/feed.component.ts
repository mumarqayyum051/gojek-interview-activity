import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
    today = new Date();
    constructor() {}

    ngOnInit() {}
}
