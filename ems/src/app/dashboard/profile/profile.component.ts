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
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required]),
      check: new FormControl('', Validators.requiredTrue),
      HOBBY: new FormControl('', Validators.required),
      quantities: this.fb.array([]),
      name2:new FormControl(''),
      name3:new FormControl(''),
      name4:new FormControl('')
    })
  
   }

  ngOnInit() {
    this.userform.reset();
    this.quantities().clear();
    for (let i:number = 18; i <= 99; i++) {
      this.options.push(i);
    }
  }
  nameofuser='Test User'
  formmode="CREATE USER"
  div1=true
  div2=false
  div3=false
  div4=false
show1(){
  this.div1=true,this.div2=false,this.div3=false,this.div4=false
}
show2(){
  this.div2=true,this.div1=false,this.div3=false,this.div4=false
}
show3(){
  this.div3=true,this.div1=false,this.div2=false,this.div4=false
}
show4(){
  this.div4=true,this.div1=false,this.div3=false,this.div2=false
}
quantities(): any {
  return this.userform.get('quantities') as FormArray;
}
newQuatity(): FormGroup {
  return this.fb.group({
    qty: '',
    qty1:''
  });
}
addQuantity() {
  this.quantities().push(this.newQuatity());
}
removeQuantities(i: number) {
  this.quantities().removeAt(i);
}
add() {
  console.log(this.userform.value);
  this.users.push(this.userform.value);
  this.userform.reset();
  this.quantities().clear();
}
reseter() {
  this.userform.reset();
  this.quantities().clear();
}
remove(userDetail: { name: any; }) {
  this.users.splice(
    this.users.findIndex((user: { name: any; }) => user.name === userDetail.name),
    1
  );
}

}
