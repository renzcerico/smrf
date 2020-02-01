import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RequestComponent } from './request/request.component';
import { RecipientComponent } from './recipient/recipient.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { LoginComponent } from './login/login.component';
import { JobOrderComponent } from './job-order/job-order.component';
import { ManpowerComponent } from './manpower/manpower.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { JobOrderFormComponent } from './job-order-form/job-order-form.component';
import { RequestSummaryComponent } from './request-summary/request-summary.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { ManageRequestsComponent } from './manage-requests/manage-requests.component';
import { FooterComponent } from './footer/footer.component';
import { JobOrderSummaryComponent } from './job-order-summary/job-order-summary.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RequestComponent,
    RecipientComponent,
    RequestDetailsComponent,
    LoginComponent,
    JobOrderComponent,
    ManpowerComponent,
    PageNotFoundComponent,
    RequestFormComponent,
    JobOrderFormComponent,
    RequestSummaryComponent,
    RequestModalComponent,
    ManageRequestsComponent,
    FooterComponent,
    JobOrderSummaryComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AutosizeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'request', component: RequestComponent },
      { path: 'login', component: LoginComponent},
      { path: 'requests/:id', component: RequestDetailsComponent },
      { path: 'job-order/:id', component: JobOrderComponent },
      { path: 'modal', component: RequestModalComponent },
      { path: 'manage-request', component: ManageRequestsComponent},
      { path: '**', component: PageNotFoundComponent },
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
