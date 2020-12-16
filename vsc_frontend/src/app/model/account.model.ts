export class AccountModel {
  account: AccountModelTotal[];
  size: number;
  total: number;
  page: number;
  limit: number;
  nextpage: number;
}
export class AccountModelTotal {
  _id: AccountModelid;
  account_number: number;
  balance: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  address: string;
  employer: string;
  email: string;
  city: string;
  state: string;
}
export class AccountModelid {
  $oid: string;
}
