import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/service files/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nameofuser='Test User'
  formmode="CREATE USER"
  div1=true
  div2=true
  div3=true
  div4=true
  userform!: FormGroup;

  constructor(private fb: FormBuilder,public api:ApiService) {
  
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
      qualification: new FormControl('', Validators.required),
      physically: new FormControl('', Validators.required),
      illness: new FormControl('', Validators.required),
      arrested: new FormControl('', Validators.required),
      ofs: new FormControl('', Validators.required),
      acceptTerms: new FormControl('', Validators.required),
      family:this.fb.array([]),
      language: this.fb.array([]),
      education: this.fb.array([]),
      skillset: this.fb.array([]),
      profession: this.fb.array([]),
      refrence:this.fb.array([])
    })}
  ngOnInit() {
    this.userform.reset();
    this.addfam();
    this.addlang();
    this.addedu();
    this.addskill();
    this.addprof();
    this.addref()
  }
//submit button
add() {
console.log(this.userform.value);
let userdata = this.userform.value
console.log(userdata)
this.api.create(userdata)
this.userform.reset();
}
//reset button form
reseter() {
this.userform.reset();
}
//Adding the family 
familys(){
  return this.userform.get('family') as FormArray
}
addfam(){
this.familys().push(this.fb.group({
  famname:['',Validators.required],
  famrelationship:['',Validators.required],
  famage:['',Validators.required],
  famoccuption:['',Validators.required],
}))}
removefam(i:number){
  this.familys().removeAt(i)
}
//language addition
lang(){
  return this.userform.get('language') as FormArray
}
addlang(){
  this.lang().push(this.fb.group({
    languagename:['',Validators.required],
    canspeak:['',Validators.required],
    canread:['',Validators.required],
    canwrite:['',Validators.required],
  }))}
removelang(i:number){
  this.lang().removeAt(i)
}
//education
education(){
  return this.userform.get('education') as FormArray
}
addedu(){
  this.education().push(this.fb.group({
    cousepursed:['',Validators.required],
    collegename:['',Validators.required],
    durationfrom:['',Validators.required],
    durationto:['',Validators.required],
    cgpa:['',Validators.required],
  }))}
removeedu(i:number){
this.education().removeAt(i)
}
//skill set
skillset(){
  return this.userform.get('skillset') as FormArray
}
addskill(){
  this.skillset().push(this.fb.group({
    skills:['',Validators.required],
    yearofexp:['',Validators.required],
    rating:['',Validators.required],
  }))
}
removeskill(i:number){
  this.skillset().removeAt(i)
}
//profession
profession(){
  return this.userform.get('profession') as FormArray
}
addprof(){
  this.profession().push(this.fb.group({
    companyname:['',Validators.required],
    compfrom:['',Validators.required],
    compto:['',Validators.required],
    comprole:['',Validators.required],
    reasonforchange:['',Validators.required],
    totalyearsofexp:['',Validators.required],
  }))
}
removeprof(i:number){
  this.profession().removeAt(i)
}
//refrence
refrence(){
  return this.userform.get('refrence') as FormArray
}
addref(){
  this.refrence().push(this.fb.group({
    refname:['',Validators.required],
    personalrelationship:['',Validators.required],
    contactno:['',Validators.required],
    business:['',Validators.required],
  }))
}
removeref(i:number){
  this.refrence().removeAt(i)
}
}
