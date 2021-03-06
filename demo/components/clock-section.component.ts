import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { ClockDemoComponent } from './clock-demo/clock-demo.component';
import { DemoSectionComponent } from './demo-section/demo-section.component';

// webpack html imports
let doc = require('../../src/components/clock/readme.md');
let titleDoc = require('../../src/components/clock/title.md');
let ts = require('!!raw?lang=typescript!./clock-demo/clock-demo.component.ts');
let html = require('!!raw?lang=markup!./clock-demo/clock-demo.component.html');

@Component({
  selector: 'clock-section',
  directives: [DemoSectionComponent, ClockDemoComponent, CORE_DIRECTIVES],
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <clock-demo></clock-demo>
    </demo-section>`
})

export class ClockSectionComponent {
  public name:string = 'Clock';
  public src:string = 'https://github.com/axa-ch/ng2-component-starter/tree/master/src/components/clock';
  public html:string = html;
  public ts:string = ts;
  public titleDoc:string = titleDoc;
  public doc:string = doc;
}