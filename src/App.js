import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Cards";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#edfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
