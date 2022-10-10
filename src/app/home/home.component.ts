import { Component, OnInit } from '@angular/core';
import { ContractClosingService } from '../contract-closing.service';
import { Contract, ContractListService } from '../contract-list.service';
import { PeopleListService } from '../people-list.service';
import { Person, PersonBasicDataService } from '../person-basic-data.service';
import { ISecondment, SecondmentDataService } from '../secondment-data.service';
import { ITimeOff, TimeOffDataService } from '../time-off-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personBasicData!: Person;
  contractList!: Contract;
  timeofData!: ITimeOff;
  contractClosingList: any;
  peopleList!: Person[];
  secondmentData!: ISecondment;

  constructor(
    private personBasicDataService: PersonBasicDataService,
    private contractListService: ContractListService,
    private timeOfDataService: TimeOffDataService,
    private contractClosing: ContractClosingService,
    private peopleListService: PeopleListService,
    private secondmentDataService: SecondmentDataService
  ) { }

  ngOnInit(): void {
    // personBasicData
    this.personBasicDataService.getPersonBasicData().subscribe(data => {
      this.personBasicData = data.data;
      console.log('personBasicData', this.personBasicData);
    });
    // contractList
    this.contractListService.getContractList().subscribe(data => {
      data.data.map(contract => {
        this.contractList = contract;
        console.log('contractList', this.contractList);
      });
    });
    // timeofData
    this.timeOfDataService.getTimeOffData().subscribe(data => {
      this.timeofData = data;
      console.log('timeofData', this.timeofData);
    })
    // contractClosingList
    this.contractClosing.getContractClosing().subscribe(data => {
      this.contractClosingList = data;
      console.log('contractClosingList', this.contractClosingList);
    })
    // peopleList
    this.peopleListService.getPeopleList().subscribe(data => {
      this.peopleList = data;
      console.log('peopleList', this.peopleList);
    })
    // secondmentData
    this.secondmentDataService.getSecondmentData().subscribe(data => {
      this.secondmentData = data;
      console.log('secondmentData', this.secondmentData);
    })
  }



}






