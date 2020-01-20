import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {


    this.addressForm = this.fb.group({
      address: ['', [Validators.required]],
      landmark: ['Alkapuri']
    });



    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['9510447773', [Validators.required]]
    });


  }

  updateProfile(form: any) {

    console.log(form.value);

  }

  updateAddressForm(form: any) {

    console.log(form.controls.address.valid);

    if (!form.controls.address.valid) {

      alert('Plz add Address');

      return false;

    }

    console.log(form);


  }



  ngOnInit() {
  }

}
