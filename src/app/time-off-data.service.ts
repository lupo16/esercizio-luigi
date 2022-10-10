import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeOffDataService {
  private REQUEST =
    'https://run.mocky.io/v3/9e7f89ea-85e0-4ead-b5aa-c4219ea3f617';

  getTimeOffdataResp = {
    message: 'PEO-000_O_Success',
    response: {
      OPERATIONS: ['Modify', 'Add', 'Delete', 'Detail'],
      PMSAPEOPLE_TIMEOFF_COMBO: {
        TIMEOFF_TYPE: [
          {
            COMBOLABEL: 'Timeoff Type',
            ELEMENTDESC: 'Maternità obbligatoria',
            ELEMENTID: 1,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Timeoff Type',
            ELEMENTDESC: 'Maternità facoltativa',
            ELEMENTID: 2,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Timeoff Type',
            ELEMENTDESC: 'Maternità a rischio',
            ELEMENTID: 3,
            ELEMENTSELECTED: '',
          },
          {
            COMBOLABEL: 'Timeoff Type',
            ELEMENTDESC: 'Sabbatico',
            ELEMENTID: 4,
            ELEMENTSELECTED: '',
          },
        ],
      },
      PMSAPEOPLE_TIMEOFF_LIST: [
        {
          DESC_TIMEOFF_TYPE: 'Maternità obbligatoria',
          ID_PEOPLE: 4247,
          ID_PEOPLE_TIMEOFF: 1,
          ID_TIMEOFF_TYPE: 1,
          TIMEOFF_EXPIRY_DATE: '01/01/2021',
          TIMEOFF_NOTE: 'Note',
          TIMEOFF_START_DATE: '01/01/2020',
        },
      ],
    },
  };

  constructor(private http: HttpClient) {}
  public getTimeOffData(): Observable<ITimeOff> {
    return of(this.getTimeOffdataResp).pipe(
      map((res) => ({
        timeOffList: res.response?.PMSAPEOPLE_TIMEOFF_LIST?.map((el) => ({
          descTimeOffType: el.DESC_TIMEOFF_TYPE,
          idPeople: el.ID_PEOPLE,
          idPeopleTimeOff: el.ID_PEOPLE_TIMEOFF,
          idTimeOffType: el.ID_TIMEOFF_TYPE,
          timeOffStartDate: el.TIMEOFF_START_DATE,
          timeOffExpiryDate: el.TIMEOFF_EXPIRY_DATE,
          timeOffNote: el.TIMEOFF_NOTE,
        })),
        timeOffCombo: res.response?.PMSAPEOPLE_TIMEOFF_COMBO?.TIMEOFF_TYPE?.map(
          (type) => ({
            id: type.ELEMENTID,
            name: type.ELEMENTDESC,
          })
        ),
        timeOffOperations: res.response?.OPERATIONS,
      }))
    );
  }

  // public getTimeOffData(): Observable<ITimeOff> {
  //   return this.http.get<ITimeOff>(this.REQUEST).pipe(
  //     map(res => ({
  //       timeOffList: res.timeOffList?.map(el => ({
  //         descTimeOffType: el.descTimeOffType,
  //         idPeople: el.idPeople,
  //         idPeopleTimeOff: el.idPeopleTimeOff,
  //         idTimeOffType: el.idTimeOffType,
  //         timeOffStartDate: el.timeOffStartDate,
  //         timeOffExpiryDate: el.timeOffExpiryDate,
  //         timeOffNote: el.timeOffNote
  //       })),
  //       timeOffCombo: res.timeOffCombo?.map(type => ({
  //         id: type.id,
  //         name: type.name
  //       })),
  //       timeOffOperations: res.timeOffOperations
  //     }))
  //   );
  // }

  // public getTimeOffData(): Observable<{ timeOffList: ITimeOffElement, timeOffCombo: ISelect[], timeOffOperations: string[] }> {
  //   return this.http.get(this.REQUEST)
  //     .pipe(
  //       map((data: any) => {
  //         return {
  //           timeOffList: data.response.PMSAPEOPLE_TIMEOFF_LIST?.map(
  //             (el: any) => ({
  //               descTimeOffType: el.DESC_TIMEOFF_TYPE,
  //               idPeople: el.ID_PEOPLE,
  //               idPeopleTimeOff: el.ID_PEOPLE_TIMEOFF,
  //               idTimeOffType: el.ID_TIMEOFF_TYPE,
  //               timeOffStartDate: el.TIMEOFF_START_DATE,
  //               timeOffExpiryDate: el.TIMEOFF_EXPIRY_DATE,
  //               timeOffNote: el.TIMEOFF_NOTE,
  //             })
  //           ),
  //           timeOffCombo: data.response?.PMSAPEOPLE_TIMEOFF_COMBO?.TIMEOFF_TYPE?.map(
  //             (type: any) => ({
  //               id: type.ELEMENTID,
  //               name: type.ELEMENTDESC,
  //             })
  //           ),
  //           timeOffOperations: data.response?.OPERATIONS,
  //         };
  //       })
  //     );

  // }
}

export interface ITimeOffElement {
  descTimeOffType: string;
  idPeople: number;
  idPeopleTimeOff: number;
  idTimeOffType: number;
  timeOffStartDate: string | Date;
  timeOffExpiryDate: string | Date;
  timeOffNote: string;
}

export interface ITimeOff {
  timeOffList: ITimeOffElement[];
  timeOffCombo: ISelect[];
  timeOffOperations: string[];
}

export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}
