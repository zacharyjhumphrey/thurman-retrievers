import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent implements OnInit {
  readonly DEFAULT_TEXT = 'Contact us';

  @Input() buttonText = this.DEFAULT_TEXT;
  @Input() isDisabled = false;
  @Input() dogName = "";

  constructor() {}

  ngOnInit(): void {}
}
