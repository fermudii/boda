import {gql} from 'apollo-angular';

export const CREATE_INVITE = gql`
  mutation CreateInvite($fullname: String!, $alias: String!, $phone: String!) {
      createInvite(fullname: $fullname, alias: $alias, phone: $phone) {
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
