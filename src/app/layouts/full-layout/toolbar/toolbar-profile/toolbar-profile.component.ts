import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../ngrx/app-state/models/user.model';

@Component({
  selector: 'sk-toolbar-profile',
  templateUrl: './toolbar-profile.component.html',
  styleUrls: ['./toolbar-profile.component.scss']
})
export class ToolbarProfileComponent implements OnInit {

  @Input() user : User;
  @Output() logout : EventEmitter<void> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  emitLogout(){
    this.logout.emit();
  }

}
