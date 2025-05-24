import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import PERSON_QUERY from "../graphql/queries/personQuery";

import { NETWORK_ONLY } from "../constants/app.constants.ts";

const App: React.FC<AppProps> = ({ applicationName }) => {
  const [person, setPerson] = useState<Person>({
    firstName: "",
    middleName: null,
    lastName: "",
    placeOfBirth: null,
    dateOfBirth: null,
    photoFileName: null,
    parents: [],
    children: [],
    siblings: [],
    spouses: [],
  });

  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { id: "dd1f88d2-3863-11f0-a399-0a0027000005" },
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect(() => {
    if (!loading && !error) {
      setPerson(data.person);
    }
  }, [loading, error, data]);

  return (
    <section>
      <h1>{applicationName}</h1>
      <p>{person.firstName}</p>
      <p>{person.middleName}</p>
      <p>{person.lastName}</p>
      <p>{person.placeOfBirth}</p>
      <p>{person.photoFileName}</p>
    </section>
  );
};

export default App;
