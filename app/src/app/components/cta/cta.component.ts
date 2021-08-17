import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent implements OnInit {
  readonly DEFAULT_TEXT = 'Contact us';
  link =
    'https://docs.google.com/forms/d/e/1FAIpQLScFdKFcT7SXD4rpXk5wWDPaGZA8RZGg96TpGfKSmyHAl4nCUQ/viewform';

  @Input() buttonText = this.DEFAULT_TEXT;
  @Input() isDisabled = false;
  @Input() dogName = '';
  @Input() large = false;

  constructor() {
    if (this.dogName !== '') {
      this.link = `https://docs.google.com/forms/d/e/1FAIpQLScFdKFcT7SXD4rpXk5wWDPaGZA8RZGg96TpGfKSmyHAl4nCUQ/viewform?usp=pp_url&entry.645927=__other_option__&entry.645927.other_option_response=${this.dogName}`;
    }
  }

  ngOnInit(): void {}
}
