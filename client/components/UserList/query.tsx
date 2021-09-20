import { gql } from '@apollo/client';

export const query = gql`
    query Users($limit: Int, $offset: Int) {
      users(limit: $limit, offset: $offset) {
        name
        address
        email
        phone
      }
    }
  `;