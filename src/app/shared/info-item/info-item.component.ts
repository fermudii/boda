import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {InfoItem} from './info-item';
import {Invite} from '../../modules/invite/models/invite';

@Component({
  selector: 'app-info-item',
  imports: [
    NgIf
  ],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})
export class InfoItemComponent implements OnInit {

  @Input() infoItem: InfoItem | undefined;
  @Output() openDialog = new EventEmitter<InfoItem>();


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
}
