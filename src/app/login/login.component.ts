import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
// import { exists } from 'fs';

@Component({
  selector: 'tda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
   // visible:any;
    hide: boolean = true;
    hide1 = true;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router) { 
 
  }
// hide(){
//   this.navService.hide();
// }
  ngOnInit() {
    this.login = this.fb.group({
      email_id:["",[Validators.email]],
      password:["",[Validators.required]]
       
    })
  }
 logintest(val)
 { 
       console.log(this.login.value);
       
       this.http.post("http://192.168.0.237:4002/api/v1/programmer_login",this.login.value).subscribe(res=>{
        console.log(res);
        let data  = res;
        localStorage.setItem ("tenant_id",data['tenant_id'])
        localStorage.setItem ("token",data['token'])
        //alert(data['status']);
        if(data['status'] ===  "Login success")
        { 
          localStorage.setItem ("tenant_id",data['tenant_id'])
          localStorage.setItem ("token",data['token'])    
          this.route.navigate(['/home']);
        }
        else
        {
          alert(data['status']);
          console.log("error");
        }
  })
  
 }
 }

