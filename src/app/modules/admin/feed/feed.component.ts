/* eslint-disable @typescript-eslint/member-ordering */
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
    result: any[] = [
        {
            id: 1,
            name: faker.name.findName(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
            date: faker.date.past(),
            description: faker.lorem.paragraph(3),
        },
        {
            id: 2,
            name: faker.name.findName(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
            date: faker.date.past(),
            description: faker.lorem.paragraph(3),
        },
        {
            id: 3,
            name: faker.name.findName(),
            email: faker.internet.email(),
            image: faker.image.avatar(),
            date: faker.date.past(),
            description: faker.lorem.paragraph(3),
        },
    ];

    ngOnInit() {}
}
