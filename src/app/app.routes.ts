import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './components/directive/ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './components/decorators/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';

// this is route array containing route object
export const routes: Routes = [
  // here we watnt to add default routes
  // this means thers is nothing in the url so it should be redirected to login page

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  // here we will allow all the other omponents that should be accessible after login
  // here layout component is parent component and we want to display that
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'add-emp',
        component: AddEmployeeComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
        // her for data binding component we are applying the authGuard to avoid from accessing this componen with out login
        canActivate: [authGuard],
      },
      {
        path: 'emp-list',
        component: EmployeeListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'structural-dir',
        component: StructuralDirectiveComponent,
        canActivate: [authGuard],
      },
      {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent,
        canActivate: [authGuard],
      },
      {
        path: 'if-else',
        component: IfelseComponent,
        canActivate: [authGuard],
      },
      {
        path: 'for',
        component: ForComponent,
        canActivate: [authGuard],
      },
      {
        path: 'app-pipe',
        component: PipeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'app-template',
        component: TemplateComponent,
        canActivate: [authGuard],
      },

      {
        path: 'app-reactive',
        component: ReactiveComponent,
        canActivate: [authGuard],
      },
      {
        path: 'get-api',
        component: GetApiComponent,
        canActivate: [authGuard],
      },
      {
        path: 'post-api',
        component: PostApiComponent,
        canActivate: [authGuard],
      },
      {
        path: 'app-lifecycle',
        component: LifecycleEventComponent,
        canActivate: [authGuard],
      },
      {
        path: 'ng-template',
        component: NgtemplateComponent,
        canActivate: [authGuard],
      },
      {
        path: 'ng-container',
        component: NgcontainerComponent,
        canActivate: [authGuard],
      },
      {
        path: 'view-child',
        component: ViewchildComponent,
        canActivate: [authGuard],
      },
      {
        path: 'app-signal',
        component: SignalComponent,
        canActivate: [authGuard],
      },
    ],
  },
];
