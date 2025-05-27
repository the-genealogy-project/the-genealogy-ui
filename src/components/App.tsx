import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import PERSON_QUERY from "../graphql/queries/personQuery";

import { NETWORK_ONLY } from "../constants/app.constants.ts";

import logo from "../assets/logo.png";

const App: React.FC<AppProps> = ({ applicationName }) => {
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
    <main className="container">
      <header className="py-3">
        <div className="container d-flex align-items-center">
          <img
            src={logo}
            alt="The Genealogy Project logo"
            className="me-3"
            style={{ height: "50px" }}
          />
          <h1 className="h4 mb-0">{applicationName}</h1>
        </div>
      </header>

      <section className="row">
        <article className="col-6">
          <p>Enter person ID:</p>
          <input
            id="personId"
            className="form-control personId"
            type="text"
            value={personId}
            onChange={(event) => setPersonId(event.target.value)}
          />
          {error && (
            <p className="text-danger mt-3">
              No person found with the given ID.
            </p>
          )}
          <button
            className="btn btn-primary mt-3"
            onClick={() => loadPerson({ variables: { id: personId } })}
            disabled={loading}
          >
            {loading ? "Loading..." : "Find"}
          </button>
        </article>
      </section>
      <section className="row">
        <article className="col-12">
          {/* Graph View of the Family Tree*/}
        </article>
      </section>
      <footer className="text-center py-3 mt-auto">
        <div className="container">
          <span className="text-muted">
            The Genealogy Project &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
};

export default App;
