import {gql} from 'apollo-angular';

export const GET_INVITES = gql`
  query GetInvites {
      invites {
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
