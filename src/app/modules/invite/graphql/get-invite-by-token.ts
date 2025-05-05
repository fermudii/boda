import {gql} from 'apollo-angular';

export const GET_INVITE_BY_TOKEN = gql`
  query GetInviteByToken($token: String!) {
      inviteByToken(token: $token) {
        id,
        fullname,
        alias,
        phone,
        attendance,
        comments,
        guestsCount,
        token
      }
    }
`;
