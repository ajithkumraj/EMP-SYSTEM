import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userform!: FormGroup;
  users:any = [];
  search:any = '';
  options:any = [];

  constructor(private fb: FormBuilder) {

    this.userform=this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]), 
      lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      empref: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required),
      homenumber: new FormControl('', Validators.required),
      officenumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      presentaddressfull: new FormControl('', Validators.required),
      presentlocality: new FormControl('', Validators.required),
      presentcity: new FormControl('', Validators.required),
      presentpincode: new FormControl('', Validators.required),
      presentdistrict: new FormControl('', Validators.required),
      presentstate: new FormControl('', Validators.required),
      presentcountry: new FormControl('', Validators.required),
      presentlandmark: new FormControl('', Validators.required),
      permanentaddresscheck: new FormControl('', Validators.required),
      permanentaddressfull: new FormControl('', Validators.required),
      permanentaddresslocality: new FormControl('', Validators.required),
      permanentaddresscity: new FormControl('', Validators.required),
      permanentaddresspincode: new FormControl('', Validators.required),
      permanentaddressdistrict: new FormControl('', Validators.required),
      permanentaddressstate: new FormControl('', Validators.required),
      permanentaddresscountry: new FormControl('', Validators.required),
      permanentaddresslandmark: new FormControl('', Validators.required),
      passwordvalue: new FormControl('', Validators.required),
      visa: new FormControl('', Validators.required),
      maritialstatus: new FormControl('', Validators.required),
      companyname: new FormControl('', Validators.required),
      durationfrom: new FormControl('', Validators.required),
      durationto: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      physically: new FormControl('', Validators.required),
      illness: new FormControl('', Validators.required),
      arrested: new FormControl('', Validators.required),
      OFS: new FormControl('', Validators.required),
      acceptTerms: new FormControl('', Validators.required),
      family:this.fb.array([]),
    })
  
   }

  ngOnInit() {
    this.userform.reset();
  }
  nameofuser='Test User'
  formmode="CREATE USER"
  div1=true
  div2=true
  div3=true
  div4=true
add() {
     console.log(this.userform.value);
    this.userform.reset();
   }
   reseter() {
    this.userform.reset();
   }
familys(){
  return this.userform.get('family') as FormArray
}
addfam(){
this.familys().push(this.fb.group({
  famname:'',
  famrelationship:'',
  famage:'',
  famoccuption:'',
}))}
removefam(i:number){
  this.familys().removeAt(i)
  // this.userform.controls['family'].setValue
}
}
