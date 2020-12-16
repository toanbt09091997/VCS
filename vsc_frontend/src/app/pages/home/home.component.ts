import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from '../services/home-service.service';
import {ITableCell} from './table/ITableCell';
import {FormComponent} from './form/form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {FormSearchComponent} from './form-search/form-search.component';
import {AccountModel, AccountModelTotal} from '../../model/account.model';

const sampleGridCells: ITableCell[] = [
  {
    label: 'Account Number',
    align: 'center',
    field: 'account_number',
    width: 150
  },
  {
    label: 'Email',
    align: 'center',
    field: 'email',
    width: 150
  },
  {
    label: 'Employer',
    align: 'center',
    field: 'employer',
    width: 150
  },
  {
    label: 'Balance',
    align: 'center',
    field: 'balance',
    width: 140
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  gridCells: ITableCell[] = sampleGridCells;
  totalRows = 25;
  dataItemShow: AccountModel;
  dataItem: AccountModelTotal[] ;

  filterText: any = '';

  searchOption: any = {
    pageNumber: 0,
    pageSize: 25,
  };

  constructor(
    private homeServiceService: HomeServiceService,
    public modal: NgbModal,
    public toastrService: ToastrService,
  ) {
  }

  onLoaded(): void {
      this.findByKeyword();
  }

  ngOnInit() {
    this.fetchData();
  }

  build(pageNumber?) {
    this.searchOption.pageSize = null;
    this.searchOption.pageNumber = null;
    return new Object({
      pageSize: null,
      pageNumber: null,
    });
  }

  fetchData(): void {
    const param = {};
    param['page'] = this.searchOption.pageNumber;
    param['limit'] = this.searchOption.pageSize;
    this.homeServiceService.getAllListAccount(param).subscribe(res => {
      if(res){
        this.dataItemShow = res;
        this.dataItem = this.dataItemShow.account;
      }
    });
  }

  // filterTrans() {
  //   if (this.filterText && this.filterText.trim().length > 0
  //     && this.dataItem && this.dataItem.length > 0) {
  //     let filtered = [];
  //     const inputData = this.filterText.trim().toLocaleLowerCase();
  //     for (let i = 0; i < this.dataItem.length; i++) {
  //       const accountNumber = this.dataItem[i].accountNumber ? this.dataItem[i].accountNumber.toString().trim().toLocaleLowerCase() : '';
  //
  //       if (accountNumber.search(inputData) >= 0 || accountNumber.search(inputData) >= 0) {
  //         filtered.push(this.dataItem[i]);
  //       }
  //     }
  //
  //     this.dataItemShow = filtered;
  //   } else {
  //     this.dataItemShow = this.dataItem;
  //   }
  // }

  createTemplate(): void {
    const modalRef = this.modal.open(FormComponent, {size: 'xl'});
    modalRef.componentInstance.isAdd = true;
    modalRef.result.then(result => {
      if (result && result === 'OK') {
        this.fetchData();
      }
    }).catch(() => {
      return;
    });
  }
  searchTemplate(): void {
    const modalRef = this.modal.open(FormSearchComponent, {size: 'xl'});
  }
  findByKeyword(): void{
    if (this.filterText !== ''){
      this.homeServiceService.findByKeyword(this.filterText).subscribe(value => {
        if (value){
          this.dataItemShow = value;
          this.dataItem = value;
        }
      });
    } else {
      this.fetchData();
    }
  }

}
