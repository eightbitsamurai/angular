import { Routes } from '@angular/router';
import { TemplateFormComponent } from './auth/template-form/template-form.component';
import { ReactiveFormComponent } from './auth/reactive-form/reactive-form.component';
import { IndexComponent } from './common/index/index.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NonAuthGuard } from './helpers/nonAuth.guard';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'template', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] },
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
    { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] }
];
