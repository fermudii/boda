import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgIf} from '@angular/common';
import {InfoItem} from './info-item';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'app-info-item',
  imports: [
    NgIf,
    Tooltip
  ],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})
export class InfoItemComponent implements OnInit {

  @ViewChild(Tooltip) tooltip: Tooltip | undefined;
  @Input() infoItem: InfoItem | undefined;
  @Output() openDialog = new EventEmitter<InfoItem>();

  isTooltipClicked: boolean = false;
  isDialog: boolean = false;


  ngOnInit(): void {
    if (this.infoItem?.href == "dialog") {
      this.isDialog = true;
    }
  }

  showDialog(event: Event) {
    event.preventDefault();
    this.openDialog.emit(this.infoItem);
  }

  onClickTooltip() {
    console.log("test")
    this.isTooltipClicked = true;
    this.tooltip?.activate();
    setTimeout(()=> {
      this.isTooltipClicked = false;
    },
      10000);
  }
}
