import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DataDbService } from './form-reactivo/services/data-db.service';
import { ExcelComponent } from './excel/excel.component';


  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatButtonModule } from '@angular/material/button';
  import { MatIconModule} from '@angular/material/icon';
  import { MatInputModule} from '@angular/material/input';
  import { MatTableModule} from '@angular/material/table';
  import { MatNativeDateModule} from '@angular/material/core';

import { ExporterService } from './excel/services/exporter.service';
import { GridComponent } from './grid/grid.component';

import { AgGridModule } from 'ag-grid-angular';
import { UserComponent } from './git/user/user.component';
import { NotFoundComponent } from './git/not-found/not-found.component';
import { DataGitService } from './git/data-git.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './git/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormReactivoComponent,
    ExcelComponent,
    GridComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatTableModule,
        AgGridModule.withComponents([]),
        HttpClientModule
  ],
  providers: [DataGitService], /* DataDbService */ /* ExporterService */
  bootstrap: [AppComponent]
})
export class AppModule { }
