import { Component, OnInit } from '@angular/core';
import { DataDbService } from './services/data-db.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.scss']
})
export class FormReactivoComponent implements OnInit {
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      message: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });
  }

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }  

  onSaveForm(){
    /* console.log('save', this.contactForm); */
    
/*     const newContact = {
      name:'Neyder',
      email:'neyder@gmail.com',
      message:'hola este es mi mensaje'
    } */
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }else{
      console.log('error');
      
    }
  }

  get name(){ return this.contactForm.get('name');}
  get email(){ return this.contactForm.get('email');}
  get message(){ return this.contactForm.get('message');}

}
