import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GET_INVITE_BY_TOKEN} from '../graphql/get-invite-by-token';
import {Invite} from '../models/invite';
import {UPDATE_INVITE} from '../graphql/update-invite';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private apollo: Apollo) { }

  getInviteByToken(token: String)  {
    return this.apollo.query({
      query: GET_INVITE_BY_TOKEN,
      variables: { token },
    })
  }

  updateInvite(id: number, input: Invite) {
    return this.apollo.mutate({
      mutation: UPDATE_INVITE,
      variables: {id: id, input: input},
    })
  }

}
