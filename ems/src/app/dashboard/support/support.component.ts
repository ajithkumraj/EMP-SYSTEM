import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

register: FormGroup |any;

  constructor() { }
   ngOnInit(): void {
this.register = new FormGroup({
  name: new FormControl('',Validators.required),
  from: new FormControl('',Validators.required),
  to: new FormControl('',Validators.required),
  role: new FormControl('',Validators.required),
  reason: new FormControl('',Validators.required),
  experience: new FormControl('',Validators.required),
  qualification: new FormControl('',Validators.required),
  physically: new FormControl('',Validators.required),
  arrested: new FormControl('',Validators.required),
  OFS: new FormControl('',Validators.required),
  illness: new FormControl('',Validators.required),
 
})

  }

}
