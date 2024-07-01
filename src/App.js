import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header logo="logo"/>
      <Banner banner="banner" logo="logo"/>
      <Container>
        <Services/>
      </Container>
      <Footer logo="logo"/>
    </>
  );
}

export default App;
