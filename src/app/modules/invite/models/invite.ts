export interface Invite {
  id: number;
  fullname: string;
  alias: string;
  phone: string;
  attendance: boolean | null;
  comments: string;
  guestsCount: number;
  token: string;
}
