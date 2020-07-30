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
      firstname: ['',Validators.required],
      lastname:  ['',Validators.required],
      telnum:  0,
      email:  ['',Validators.required],
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


  }


}
