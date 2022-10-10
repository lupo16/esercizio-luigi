import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonBasicDataService {
  // RESPONSE:
  getPeopleBasicData = {
    message: 'PEO-000_O_Success',
    response: {
      OPERATIONS: [],
      SECTIONS: [],
      PMSAPEOPLE_BASIC_REC: {
        BUSINESS_EMAIL: '',
        ID_PEOPLE: 4247,
        RESOURCE_BIRTHDATE: '12/11/1964',
        RESOURCE_GENDER: 'M',
        RESOURCE_MIDDLE_NAME: '',
        RESOURCE_NAME: 'Luigi',
        RESOURCE_SURNAME: 'Berloni',
      },
    },
  };
  constructor() {}
  public getPersonBasicData(): Observable<{
    sections: string[];
    operations: string[];
    data: Person;
  }> {
    return of(this.getPeopleBasicData).pipe(
      map((res) => ({
        sections: res.response.SECTIONS,
        operations: res.response.OPERATIONS,
        data: {
          id: res.response.PMSAPEOPLE_BASIC_REC.ID_PEOPLE,
          name: res.response.PMSAPEOPLE_BASIC_REC.RESOURCE_NAME,
          middleName: res.response.PMSAPEOPLE_BASIC_REC.RESOURCE_MIDDLE_NAME,
          surname: res.response.PMSAPEOPLE_BASIC_REC.RESOURCE_SURNAME,
          gender: res.response.PMSAPEOPLE_BASIC_REC.RESOURCE_GENDER,
          birthdate: res.response.PMSAPEOPLE_BASIC_REC.RESOURCE_BIRTHDATE,
          businessEmail: res.response.PMSAPEOPLE_BASIC_REC.BUSINESS_EMAIL,
        },
      }))
    );
  }
}
export interface Person {
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
  perDiem?: number;
  internalRole?: string;
  contractFirstStartDate?: string;
  payrollNumber?: string;

  status?: string;
  employer?: string;
  changes?: any[];
}
