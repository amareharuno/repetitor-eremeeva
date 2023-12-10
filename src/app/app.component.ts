import { Component } from '@angular/core';
import {BUTTON, introText, name, SECTIONS} from "./mocks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  readonly _title = name;
  readonly _introText = introText;
  readonly _buttons = BUTTON;
  readonly _sections = SECTIONS;
}
