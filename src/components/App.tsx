import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

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

  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { id: personId },
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect((): void => {
    if (!loading && !error) {
      setPerson(data.person);
    }
  }, [loading, error, data]);

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
          <button className="btn btn-primary mt-3">Find</button>
        </article>
        <article className="col-6"></article>
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
