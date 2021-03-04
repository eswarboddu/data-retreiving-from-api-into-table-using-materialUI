import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Clients from "./Components/Clients";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
    <Router>
    <Container>
        <Header />
        <Main>
          <Switch>
            <Route path="/">
              <Clients />
            </Route>
          </Switch>
        </Main>
      </Container>
    </Router>
      
    </div>
  );
}

export default App;


const Container = styled.div`

`

const Main = styled.div`

`
