import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxTextDiffModule } from '../../projects/ngx-text-diff/src/lib/ngx-text-diff.module';
import { HttpClientModule } from '@angular/common/http';
import { MachineService } from './service/machine.service';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'; 
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent ],
  imports: [BrowserModule,BrowserAnimationsModule,MatNativeDateModule,MatIconModule,MatDatepickerModule,MatSelectModule,MatDialogModule, MatCardModule,ComponentsModule,MatButtonModule, MatInputModule,NgxTextDiffModule,MatFormFieldModule, FormsModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [MachineService],
  bootstrap: [AppComponent],

})
export class AppModule {}
