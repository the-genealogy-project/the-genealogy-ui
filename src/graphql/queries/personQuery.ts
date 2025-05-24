import type { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PERSON_QUERY: DocumentNode = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      firstName
      middleName
      lastName
      placeOfBirth
      dateOfBirth
      photoFileName
      parents {
        firstName
        lastName
      }
      children {
        firstName
        lastName
      }
      siblings {
        firstName
        lastName
      }
      spouses {
        firstName
        lastName
      }
    }
  }
`;

export default PERSON_QUERY;
