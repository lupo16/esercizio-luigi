import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PeopleListService {
  getPeopleListResp = {
    message: 'PEO-000_O_Success',
    response: {
      PMSAPEOPLE_LIST: [
        {
          CHANGE_LIST: [
            {
              FIELD: 'role',
              FLAG_CHANGE: 'A',
            },
          ],
          CONTRACT_END_DATE: '',
          CONTRACT_FIRST_START_DATE: '17/06/2016',
          CONTRACT_START_DATE: '17/06/2016',
          CONTRACT_TYPE: 'Permanent',
          DESC_COMPANY: 'Be Management Consulting S.p.A',
          DESC_PEOPLESTATUS: 'Onboarded',
          FIRST_NAME: 'Luigi',
          FLAG_CHANGE: 'A',
          ID_PEOPLE: 4247,
          ID_PEOPLESTATUS: 3,
          LAST_NAME: 'Berloni',
          MAIN_OFFICE_LOCATION: 'Verona',
          MIDDLE_NAME: '',
          PAYROLL_NUMBER: '',
          PER_DIEM: 0,
          ROLE: 'C3',
          ROLE_CLASS: 'Professional Staff/Consultants',
          ROLE_GROUP: 'Professional Staff/Consultants',
        }
      ]
    }
  }



  constructor() { }

  public getPeopleList(): Observable<Person[]> {

    // const userData = this.userService.getUserData();

    return of(this.getPeopleListResp).pipe(map((res) => {
      const response = res.response.PMSAPEOPLE_LIST.map((resp) => ({
        contractEndDate: resp.CONTRACT_END_DATE,
        contractFirstStartDate: resp.CONTRACT_FIRST_START_DATE,
        contractStartDate: resp.CONTRACT_START_DATE,
        contractType: resp.CONTRACT_TYPE,
        name: resp.FIRST_NAME,
        surname: resp.LAST_NAME,
        id: resp.ID_PEOPLE,
        mainOfficeLocation: resp.MAIN_OFFICE_LOCATION,
        middleName: resp.MIDDLE_NAME,
        perDiem: resp.PER_DIEM,
        internalRole: resp.ROLE,
        payrollNumber: resp.PAYROLL_NUMBER,
        status: resp.DESC_PEOPLESTATUS,
        employer: resp.DESC_COMPANY,
        changes: resp.CHANGE_LIST.map(el => ({
          field: el.FIELD,
          flag: el.FLAG_CHANGE
        }))
      }))

      return response
    }))
      ;
  }

}
export class Person {
  id?: any;
  name?: string;
  middleName?: string;
  surname?: string;
  businessEmail?: string;
  gender?: string;
  genderDescription?: string;
  birthdate?: string;
  contractEndDate?: string;
  contractStartDate?: string;
  contractType?: string;

  mainOfficeLocation?: string;
  perDiem?: number = 0;
  internalRole?: string = '';
  contractFirstStartDate?: string;
  payrollNumber?: string;

  status?: string;
  employer?: string;
  changes?: any[]; // qui inseriamo fiel e flag all interno di changes
}
