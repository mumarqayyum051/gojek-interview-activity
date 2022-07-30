import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from 'app/shared/shared.module';
import { Routes } from './feed.routing';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
@NgModule({
    imports: [CommonModule, RouterModule.forChild(Routes), SharedModule],
    declarations: [FeedComponent, CreatePostComponent],
})
export class FeedModule {}
