import Header from "./custom/Header.tsx";
import Search from "./custom/Search.tsx";
import Graph from "./custom/Graph.tsx";
import Footer from "./custom/Footer.tsx";

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
