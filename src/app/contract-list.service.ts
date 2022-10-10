
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractListService {

  getContractListResp = {
    message: 'PEO-000_O_Success',
    response: {
      OPERATIONS: ['Delete', 'Add', 'Detail', 'Modify', '_Approval'],
      PMSAPEOPLE_CHANGE_LIST: [
        {
          FIELD: 'role',
          FLAG_CHANGE: 'A',
        },
        {
          FIELD: 'fte',
          FLAG_CHANGE: 'A',
        },
        {
          FIELD: 'bonus',
          FLAG_CHANGE: 'A',
        }
      ],
      PMSAPEOPLE_CONTRACT_LIST: [
        {
          BONUS_MECHANISM_NOTES: '',
          CONTRACT_LEVEL: 'C3',
          CONTRACT_START_DATE: '17/06/2016',
          CONTRACT_TERMINATION: '',
          CONTRACT_TYPE: 'Permanent',
          DESC_REASON_CHANGE: 'New Hire',
          EMPLOYER: 'Be Management Consulting S.p.A',
          FIXED_BONUS: 0,
          FLAG_CLOSE: 'N',
          FTE_YEARLY_SALARY: 10000,
          FULL_TIME_EQUIVALENT: 100,
          ID_PEOPLE: 4247,
          ID_PEOPLE_CONTRACT: 2262,
          MAIN_OFFICE_LOCATION: 'Verona',
          MAX_BONUS_TYPE: '',
          MAX_PERC_GROSS_ANN_SAL_BONUS: 0,
          ONEOFF_BONUS: 0,
          ONEOFF_NOTES: '',
          ROLE: 'C3',
          ROLE_CLASS: 'Professional Staff/Consultants',
          ROLE_GROUP: 'Professional Staff/Consultants',
          SPECIAL_CATEGORY_FLAG: 'N',
        }
      ],
      base: {
        FlagChange: 'A',
      }
    }
  };



  constructor() { }

  public getContractList(): Observable<{ operations: string[]; data: Contract[]; flag: string; }> {

    return of(this.getContractListResp).pipe(
      map((res) => {
        return {
          operations: res.response.OPERATIONS,
          data: res.response.PMSAPEOPLE_CONTRACT_LIST.map(
            (el) => ({
              bonusMechanismNotes: el.BONUS_MECHANISM_NOTES,
              contractLevel: el.CONTRACT_LEVEL,
              contractStartDate: el.CONTRACT_START_DATE,
              contractEndDate: el.CONTRACT_TERMINATION,
              contractType: el.CONTRACT_TYPE,
              employer: el.EMPLOYER,
              fixedBonus: el.FIXED_BONUS,
              fteYearlySalary: el.FTE_YEARLY_SALARY,
              fullTimeEquivalent: el.FULL_TIME_EQUIVALENT,
              idPeople: el.ID_PEOPLE,
              id: el.ID_PEOPLE_CONTRACT,
              mainOfficeLocation: el.MAIN_OFFICE_LOCATION,
              maxBonusType: el.MAX_BONUS_TYPE,
              maxPercGrossAnnSalBonus: el.MAX_PERC_GROSS_ANN_SAL_BONUS,
              internalRole: el.ROLE,
              roleClass: el.ROLE_CLASS,
              roleGroup: el.ROLE_GROUP,
              reasonForChange: el.DESC_REASON_CHANGE,
              oneOffBonus: el.ONEOFF_BONUS,
              oneOffNotes: el.ONEOFF_NOTES,
              specialCategoryFlag: el.SPECIAL_CATEGORY_FLAG == 'N' ? false : true,
              flagClose: el.FLAG_CLOSE
            })
          ),
          flag: res.response.base.FlagChange.trim()
        }
      })

    )
  }
}

export interface Contract {
  bonusMechanismNotes: string;
  contractLevel: string;
  contractStartDate: string;
  contractEndDate: string;
  contractType: string;
  employer: string;
  fixedBonus: number;
  fteYearlySalary: number;
  fullTimeEquivalent: number;
  idPeople: number;
  id: number;
  mainOfficeLocation: string;
  maxBonusType: string;
  maxPercGrossAnnSalBonus: number;
  internalRole: string;
  roleClass: string;
  roleGroup: string;
  reasonForChange: string;
  oneOffBonus: number;
  oneOffNotes: string;
  specialCategoryFlag: boolean;
  flagClose: string;
  // idContractType?: any;
  // idMainOfficeLocation?: string ;
  // idMaxBonusType?: number;
  // idEmployer?: string ;
  // idContractLevel?: string ;
  // flag?: string ;
  // idReasonForChange: number;
  // idInternalRole?: number;
}
