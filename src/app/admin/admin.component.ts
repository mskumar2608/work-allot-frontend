import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  allotWork() {
    // Add your allot work logic here
    alert('Allot Work button clicked');
  }

  checkProgress() {
    // Add your check progress logic here
    alert('Check Progress button clicked');
  }

}
