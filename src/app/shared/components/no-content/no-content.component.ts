import { Component, Input } from '@angular/core';

@Component({
  selector: 'squirrel-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {
  @Input() content: string = '';
  @Input() sugestion: string = '';

}
