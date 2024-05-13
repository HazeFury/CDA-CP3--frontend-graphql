import { gql } from "@apollo/client";

export const ADD_NEW_CONTINENT = gql`
  mutation AddContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      id
      name
    }
  }
`;
