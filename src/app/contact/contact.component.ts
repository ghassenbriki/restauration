import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { FeedBack, contactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  @ViewChild('fform') feedbackFormDirective;


  feedbackForm: FormGroup;
  feedback: FeedBack;
  contactType = contactType;




  constructor(private fb:FormBuilder) 
  { 
       this.createForm();

  }

  ngOnInit() 
  {
  }

 
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.maxLength(23),Validators.minLength(3)]],
      lastname:  ['',[Validators.required],Validators.maxLength(23),Validators.minLength(3)],
      telnum: [0,[Validators.required,Validators.pattern]],
      email:  ['',[Validators.required,Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }




  onSubmit() 
  {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({firstname:'',lastname:'',telnum:0});

    this.feedbackFormDirective.resetForm(); //assure the reset of the form

    /* we can crate reactive form based on reactive programming(observable) using the changeValues observable and
    doing more flexible form validations*/
  }


}
