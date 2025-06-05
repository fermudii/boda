import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GET_INVITE_BY_TOKEN} from '../graphql/get-invite-by-token';
import {Invite} from '../models/invite';
import {UPDATE_INVITE} from '../graphql/update-invite';
import {GET_INVITES} from '../graphql/get-invites';
import {CREATE_INVITE} from '../graphql/create-invite';
import {DELETE_INVITE} from '../graphql/delete-invite';

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

  getInvites() {
    return this.apollo.watchQuery({
      query: GET_INVITES,

    })
  }

  createInvite(fullname: string, alias: string, phone: string) {
    return this.apollo.mutate({
      mutation: CREATE_INVITE,
      variables: {fullname: fullname, alias: alias, phone: phone},
      refetchQueries: [
        {
          query: GET_INVITES
        }]
    })
  }

  deleteInvite(id: number) {
    return this.apollo.mutate({
      mutation: DELETE_INVITE,
      variables: {id: id},
      refetchQueries: [
        {
          query: GET_INVITES
        }]
    })
  }

}
