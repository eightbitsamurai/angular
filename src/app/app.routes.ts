import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: '', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent }
];
