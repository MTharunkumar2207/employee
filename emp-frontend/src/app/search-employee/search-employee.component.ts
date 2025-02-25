import { Component, OnInit } from '@angular/core';
import { EmloyeeserviceService } from '../emloyeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent implements OnInit {
  employees:any=Employee;
  searchResult: Employee[] = [];
  searchKeyword: string = '';
  constructor(
    private employeeService: EmloyeeserviceService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe((res: any) => {
      this.employees = res;
    });
  }

  getSearchEmployee(): void  {
    setTimeout(() => {
        if (this.searchKeyword === '') {
          this.searchResult = [];
        } else {
          //this.searchResult = this.employees.filter((item: Employee) => this.searchKeyword.includes(item?.firstName));
          this.searchResult = this.employees.filter((x:any) => x.firstName.includes(this.searchKeyword));
        }
    }, 500);
    
  }

}
