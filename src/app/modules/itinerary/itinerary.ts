import {InfoItem} from '../../shared/info-item/info-item';

export class Itinerary implements InfoItem {
  header: string;
  paragraph1: string;
  paragraph2: string | undefined;
  href: string | undefined;
  labelButton: string | undefined;

  constructor(header: string, paragraph1: string, paragraph2: string | undefined, href: string | undefined = undefined, labelButton: string | undefined = undefined) {
    this.header = header;
    this.paragraph1 = paragraph1;
    this.paragraph2 = paragraph2;
    this.href = href;
    this.labelButton = labelButton;
  }
}
