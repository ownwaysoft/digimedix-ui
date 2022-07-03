import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  template: `<span class="help is-danger" [class.hide]="_hide">{{_text}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`.hide {
    display: none;
  }
  
  span{
    color: #dc3545;
    font-size: 0.8em;
  }`]
})
export class ControlErrorComponent implements OnInit {
  _text:any;
  _hide = true;

  @Input() set text(value:any) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}