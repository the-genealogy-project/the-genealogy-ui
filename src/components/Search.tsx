import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import PERSON_QUERY from "../graphql/queries/personQuery.ts";

import { NETWORK_ONLY } from "../constants/app.constants.ts";

const Search = () => {
  const [personId, setPersonId] = useState<string>("");

  const [person, setPerson] = useState<Person>({
    id: "",
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

  const [loadPerson, { loading, error, data }] = useLazyQuery(PERSON_QUERY, {
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect(() => {
    if (data && data.person) {
      setPerson(data.person);
    }
  }, [data, person]);

  return (
    <>
      <p>Enter person ID:</p>
      <input
        id="personId"
        className="form-control personId"
        type="text"
        value={personId}
        onChange={(event) => setPersonId(event.target.value)}
      />
      {error && (
        <p className="text-danger mt-3">No person found with the given ID.</p>
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={() => loadPerson({ variables: { id: personId } })}
        disabled={loading}
      >
        {loading ? "Loading..." : "Find"}
      </button>
    </>
  );
};

export default Search;
