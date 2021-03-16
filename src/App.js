import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Clients from "./Components/Clients";
import styled from "styled-components";
import NewClient from "./Components/NewClient";

function App() {
  return (
    <div className="App">
    <Router>
    <Container>
        <Main>
          <Switch>
            <Route exact path="/">
              <Header />
              <Clients />
            </Route>
            <Route path="/newclient">
              <NewClient />
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
  justify-content: center;
  width: 100%
`

const Main = styled.div`

`
