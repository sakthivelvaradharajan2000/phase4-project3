import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string =""
loginRef=new FormGroup({
  email:new FormControl(),
  pass:new FormControl(),

})
  constructor(public router:Router) { }  

  ngOnInit(): void {
  }
checkUser(){
  let login = this.loginRef.value;
  let obj = sessionStorage.getItem("loginInfo");
  if(obj!=null){
    let loginInfo = JSON.parse(obj);
    let result = loginInfo.find((l:any)=>login.email==login.email && l.pass==login.pass);
    if(result !=undefined){
      sessionStorage.setItem("user",login.email);
      this.router.navigate(["home"]);
    }else{
      this.msg="Failed";
    }
  }
  this.loginRef.reset;
}
}
