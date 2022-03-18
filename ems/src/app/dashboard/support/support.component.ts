import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  userFormGroup: FormGroup | any;

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            phoneNumber:['', RxwebValidators.pattern({expression:{'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/} })], 
        });
        ReactiveFormConfig.set({"validationMessage":{"onlyDigit":"Input does not match the pattern requirements"}});
    }
}
