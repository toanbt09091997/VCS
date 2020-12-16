import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HomeServiceService} from '../../services/home-service.service';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})

export class FormSearchComponent implements OnInit {
  model = {
    firstName: 'a.firstname',
  };
   formSearch = this.fb.group({
    search: ['', ],
    firstName: ['', ],
    // lastName: ['', ],
    // balance: ['', ],
    // age: ['', ],
    // gender: ['', ],
    // address: ['', ],
    // employer: ['', ],
    // email: ['', ],
    // city: ['', ],
    // state: ['', ],
  });

  constructor(private fb: FormBuilder,
              private homeServiceService: HomeServiceService,
              public activeModal: NgbActiveModal,
              ) { }

  ngOnInit(): void {
  }
  search(): void{
    this.homeServiceService.findByName(this.formSearch.value.firstName, this.formSearch.value.search)
      .subscribe(value => {
      });
  }
  close(): void {
    this.activeModal.close('CLOSE');
  }

}
