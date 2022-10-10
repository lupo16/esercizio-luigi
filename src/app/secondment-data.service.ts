import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SecondmentDataService {

  getSecondmentDataResp =
    {
      "message": "PEO-000_O_Success",
      "response": {
        "OPERATIONS": [],
        "PMSAPEOPLE_SECONDMENT_COMBO": {
          "COMPANY_SECONDMENT": [
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Digitech Solutions S.p.A.",
              "ELEMENTID": 14,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Enterprise Process Solutions",
              "ELEMENTID": 15,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Professional Services",
              "ELEMENTID": 16,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Poland",
              "ELEMENTID": 22,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Romania",
              "ELEMENTID": 23,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Ukraine",
              "ELEMENTID": 24,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "iBe United Kingdom",
              "ELEMENTID": 25,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "iBe Italy",
              "ELEMENTID": 26,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Germany",
              "ELEMENTID": 27,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Targit Switzerland",
              "ELEMENTID": 28,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Targit Austria",
              "ELEMENTID": 29,
              "ELEMENTSELECTED": ""
            },
            {
              "COMBOLABEL": "Company Secondment",
              "ELEMENTDESC": "Be Think Solve Execute",
              "ELEMENTID": 30,
              "ELEMENTSELECTED": ""
            }
          ]
        },
        "PMSAPEOPLE_SECONDMENT_LIST": [
          {
            "DESC_COMPANY_SECONDMENT": "Be Romania",
            "ID_COMPANY_SECONDMENT": 23,
            "ID_PEOPLE": 1,
            "ID_PEOPLE_SECONDMENT": 1,
            "SECONDMENT_START_DATE": "2020-12-31",
            "SECONDMENT_EXPIRY_DATE": "2020-01-01",
            "SECONDMENT_NOTE": "test",
            "SECONDMENT_PERC": 100
          }
        ]
      }
    }


  constructor() { }

  public getSecondmentData(): Observable<ISecondment> {
    return of(this.getSecondmentDataResp).pipe(
      map(res => ({
        secondmentList: res.response?.PMSAPEOPLE_SECONDMENT_LIST?.map(el => ({
          descCompanySecondment: el.DESC_COMPANY_SECONDMENT,
          idCompanySecondment: el.ID_COMPANY_SECONDMENT,
          idPeople: el.ID_PEOPLE,
          idPeopleSecondment: el.ID_PEOPLE_SECONDMENT,
          // secondmentStartDate: this.dateService.fromOurToAmerican(el.SECONDMENT_START_DATE),
          // secondmentExpiryDate: this.dateService.fromOurToAmerican(el.SECONDMENT_EXPIRY_DATE),
          secondmentStartDate: el.SECONDMENT_START_DATE,
          secondmentExpiryDate: el.SECONDMENT_EXPIRY_DATE,
          secondmentNote: el.SECONDMENT_NOTE,
          secondmentPerc: el.SECONDMENT_PERC,
        })),
        secondmentCombo: res.response?.PMSAPEOPLE_SECONDMENT_COMBO?.COMPANY_SECONDMENT?.map(type => ({
          id: type.ELEMENTID,
          name: type.ELEMENTDESC,
        })),
        secondmentOperations: res.response?.OPERATIONS
      }))
    );
  }


}

export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}


export interface ISecondmentElement {
  descCompanySecondment: string;
  idCompanySecondment: number;
  idPeople: number;
  idPeopleSecondment: number;
  secondmentStartDate: string | Date;
  secondmentExpiryDate: string | Date;
  secondmentNote: string;
  secondmentPerc: number;
}

export interface ISecondment {
  secondmentList: ISecondmentElement[];
  secondmentCombo: ISelect[];
  secondmentOperations: string[];
}
