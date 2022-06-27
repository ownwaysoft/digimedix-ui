import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, data: { title: 'Login' }
  },
  {
    path: 'forgot-password', loadChildren: () => import('../app/components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule), data: { title: 'Forgot Password' }
  },
  {
    path: 'sign-up', loadChildren: () => import('../app/components/sign-up/sign-up.module').then(m => m.SignUpModule), data: { title: 'Sign Up' }
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }
      },
      {
        path: 'activity', loadChildren: () => import('../app/components/activity/activity.module').then(m => m.ActivityModule), data: { title: 'Activity' }
      },
      {
        path: 'notification', loadChildren: () => import('../app/components/notification/notification.module').then(m => m.NotificationModule), data: { title: 'Notification' }
      },
      {
        path: 'share', loadChildren: () => import('../app/components/share/share.module').then(m => m.ShareModule), data: { title: 'Share' }
      },
      {
        path: 'settings', loadChildren: () => import('../app/components/settings/settings.module').then(m => m.SettingsModule), data: { title: 'Settings' }
      },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
