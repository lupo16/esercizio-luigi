import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ContractClosingService {
  getcontractClosing = {
    message: 'PEO-000_O_Success',
    response: {
      OPERATIONS: [],
      PMSAPEOPLE_CONTRACT_CLOSING: {
        CONTRACT_CLOSING_DATE: '',
        ID_PEOPLE: 0,
        ID_PEOPLE_CONTRACT: 0,
        NO_SHOW_FLAG: [
          {
            COMBOLABEL: 'No Show Flag',
            ELEMENTCODE: 'Y',
            ELEMENTDESC: 'Yes',
            ELEMENTID: 1,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'No Show Flag',
            ELEMENTCODE: 'N',
            ELEMENTDESC: 'No',
            ELEMENTID: 2,
            ELEMENTSELECTED: '',
          }
        ],
        REASON_FOR_LEAVING: [
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'N/A',
            ELEMENTID: 0,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Career focus changed',
            ELEMENTID: 1,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Moved on to a position with more responsibilities',
            ELEMENTID: 2,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Offered a new position from another company',
            ELEMENTID: 3,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Lack of growth opportunities at the company',
            ELEMENTID: 4,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Laid-off from job due to corporate merger',
            ELEMENTID: 5,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Reason for Leaving',
            ELEMENTDESC: 'Laid-off due to restructuring',
            ELEMENTID: 6,
            ELEMENTSELECTED: '',
          }
        ]
      }
    }
  };

  constructor() { }

  public getContractClosing(): Observable<{ combo: IComboContractClosing; data: ContractClosing; }> {
    const mapSelect = (el: { ELEMENTID: number, ELEMENTDESC: string }): ISelect =>
      ({ id: el.ELEMENTID, name: el.ELEMENTDESC });

    return of(this.getcontractClosing).pipe(
      map((resp) => {
        const response = resp.response.PMSAPEOPLE_CONTRACT_CLOSING;
        return {
          combo: {
            reasonForLeaving: response.REASON_FOR_LEAVING.map(mapSelect),
            noShowFlag: response.NO_SHOW_FLAG?.map((el: { ELEMENTID: any; ELEMENTDESC: any; }) =>
              ({ id: el.ELEMENTID, name: el.ELEMENTDESC }))
          },
          data: {
            contractClosingDate: response?.CONTRACT_CLOSING_DATE,
            idPeople: response?.ID_PEOPLE,
            idPeopleContract: response?.ID_PEOPLE_CONTRACT,
            noShowFlag: response?.NO_SHOW_FLAG.find(el => el.ELEMENTSELECTED == 'S')?.ELEMENTDESC == 'Yes' ? true : false,
            reasonForLeaving: response?.REASON_FOR_LEAVING.find(el => el.ELEMENTSELECTED == 'S')?.ELEMENTDESC,
            idReasonForLeaving: response?.REASON_FOR_LEAVING.find(el => el.ELEMENTSELECTED == 'S')?.ELEMENTID
          }
        }
      })
    );
  }
}
export interface IComboContractClosing {
  reasonForLeaving?: ISelect[];
  noShowFlag?: ISelect[];
}

export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}

export class ContractClosing {
  idContract?: number;
  idPeople?: number;
  contractClosingDate?: string;
  idReasonForLeaving?: number;
  noShowFlag?: boolean;
}
