import { Component, Input } from '@angular/core';
import { Iuser } from '../Interface/iuser';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  faCheck = faCheck
  @Input() user !: Iuser;
}
