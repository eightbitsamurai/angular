import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { IndexComponent } from './index/index.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './helpers/auth.guard';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'template', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }
];
