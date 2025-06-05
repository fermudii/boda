import {gql} from 'apollo-angular';

export const DELETE_INVITE = gql`
  mutation DeleteInvite($id: ID!) {
    deleteInvite(id: $id)
  }
`;
