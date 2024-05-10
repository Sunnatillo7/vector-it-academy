import { Routes } from '@angular/router';
import { AdminComponent } from './admins/admin/admin.component';
import { StudentsComponent } from './students/students/students.component';
import { MentorComponent } from './mentors/mentor/mentor.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { AlertComponent } from './core/auth/components/alert/alert.component';
import { NotFoundComponent } from './shared/components/not-found/notFound.component';

export const routes: Routes = [
    {path:'admin', component: AdminComponent},
    {path:'students', component: StudentsComponent},
    {path:'mentor', component: MentorComponent},
    {path:'login', component: LoginComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'alert', component: AlertComponent},
    {path:'not-found', component: NotFoundComponent},
    {path:'**', redirectTo:'not-found'}
];
