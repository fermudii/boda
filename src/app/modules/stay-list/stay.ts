import {InfoItem} from '../../shared/info-item/info-item';

export class Stay implements InfoItem {
  header: string;
  paragraph1: string;
  paragraph2: string | undefined;
  href: string;
  labelButton: string;
  tooltip: string | undefined;

  constructor(header: string, paragraph1: string, paragraph2: string | undefined, href: string, labelButton: string, tooltip: string | undefined = undefined) {
    this.header = header;
    this.paragraph1 = paragraph1;
    this.paragraph2 = paragraph2;
    this.href = href;
    this.labelButton = labelButton;
    this.tooltip = tooltip;
  }
}
