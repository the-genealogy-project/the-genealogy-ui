import Header from "./Header.tsx";
import Search from "./Search.tsx";
import Graph from "./Graph.tsx";
import Footer from "./Footer.tsx";

const App = () => {
  return (
    <main className="container">
      <Header />
      <section className="row">
        <article className="col-6">
          <Search />
        </article>
      </section>
      <section className="row">
        <article className="col-12">
          <Graph />
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default App;
