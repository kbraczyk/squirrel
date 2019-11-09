import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'squirrel-calk-kcal-info',
  templateUrl: './calk-kcal-info.component.html',
  styleUrls: ['./calk-kcal-info.component.scss'],

})
export class CalkKcalInfoComponent implements OnInit {

  constructor(    private dialogService: MatDialog,
    ) { }

  ngOnInit() {
  }
}
