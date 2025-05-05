import {gql} from 'apollo-angular';

export const UPDATE_INVITE = gql`
  mutation UpdateInvite($id: ID!, $input: UpdateInviteInput) {
      updateInvite(id: $id, input: $input) {
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
