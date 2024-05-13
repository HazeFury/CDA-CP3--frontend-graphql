import { gql } from "@apollo/client";

export const GET_ONE_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        name
        id
      }
    }
  }
`;
