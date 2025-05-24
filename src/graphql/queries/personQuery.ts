import type { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PERSON_QUERY: DocumentNode = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      firstName
      middleName
      lastName
      placeOfBirth
      dateOfBirth
      photoFileName
      parents {
        id
        firstName
        lastName
      }
      children {
        id
        firstName
        lastName
      }
      siblings {
        id
        firstName
        lastName
      }
      spouses {
        id
        firstName
        lastName
      }
    }
  }
`;

export default PERSON_QUERY;
