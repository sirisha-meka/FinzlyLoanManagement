import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';
import { AuthGuardService } from './service/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent,canActivate : [AuthGuardService] },  
  { path: 'loan', component: LoanComponent,canActivate : [AuthGuardService] }, 
  { path: 'customer-details', component: CustomerComponent ,canActivate : [AuthGuardService]}, 
  { path: 'payment-schedule', component: PaymentScheduleComponent ,canActivate : [AuthGuardService]},
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'login', component: LoginComponent },
  
  
  
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
