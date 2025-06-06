import {InfoItem} from '../../shared/info-item/info-item';

export class Transport implements InfoItem {
  header: string;
  paragraph1: string;
  paragraph2: string | undefined;
  href: string;
  labelButton: string;

  constructor(header: string, paragraph1: string, paragraph2: string | undefined, href: string, labelButton: string) {
    this.header = header;
    this.paragraph1 = paragraph1;
    this.paragraph2 = paragraph2;
    this.href = href;
    this.labelButton = labelButton;
  }
}
