import { Component, Input, OnInit } from '@angular/core';
import { IMember } from 'src/app/models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() member: IMember | undefined;
  defaultImg = "assets/images/defaultImage.png";

  constructor() { }

  ngOnInit(): void {
  }

}
