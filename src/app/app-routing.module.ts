import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './shared/services/authguards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'login', component: LoginComponent, data: { title: 'Login' }
  // },
  {
    path: 'login', loadChildren: () => import('../app/components/login/login.module').then(m => m.LoginModule), data: { title: 'Login' }
  }, {
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
        path: 'dashboard', loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' }, canActivate: [AuthGuard]
      },
      {
        path: 'activity', loadChildren: () => import('../app/components/activity/activity.module').then(m => m.ActivityModule), data: { title: 'Activity' }, canActivate: [AuthGuard]
      },
      {
        path: 'notification', loadChildren: () => import('../app/components/notification/notification.module').then(m => m.NotificationModule), data: { title: 'Notification' }, canActivate: [AuthGuard]
      },
      {
        path: 'share', loadChildren: () => import('../app/components/share/share.module').then(m => m.ShareModule), data: { title: 'Share' }, canActivate: [AuthGuard]
      },
      {
        path: 'settings', loadChildren: () => import('../app/components/settings/settings.module').then(m => m.SettingsModule), data: { title: 'Settings' }, canActivate: [AuthGuard]
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
