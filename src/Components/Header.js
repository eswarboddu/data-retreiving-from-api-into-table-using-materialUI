import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField, Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import NewClient from "./NewClient";
import {Link} from "react-router-dom";

const Header = () => {
  
  return (
    <Container>
      <ClientContainer>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Name>Clients</Name>
          </Grid>
          <Grid item xs={6}>
            <Add>
            <Link to="/newclient">
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                // onClick={NewClient}
              >
                NEW CLIENT
              </Button>
              </Link>
            </Add>
          </Grid>
        </Grid>
      </ClientContainer>

      <SearchContainer>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={8} sm={2} style={{ marginBottom: 8 }}>
            <Search>
              <TextField
                variant="outlined"
                placeholder="search...."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Search>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginBottom: 8 }}>
            <Grid container justify="flex-start">
              <Buttons>
                <SearchButton>
                  <Button variant="contained">SEARCH</Button>
                </SearchButton>
                <ClearButton>
                  <Button variant="contained" color="">
                    CLEAR
                  </Button>
                </ClearButton>
              </Buttons>
            </Grid>
          </Grid>

          <Grid item xs={5} sm={4}>
            <Grid container justify="flex-end">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FilterListIcon />}
              >
                SHOW FILTER
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </SearchContainer>
    </Container>
  );
}

export default Header;

const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${"" /* height: 35px; */}
  ${"" /* marginBotton: theme.space(2); */}
`;

const SearchContainer = styled.div`
  display: flex;
  ${"" /* flexgrow: 1; */}
  align-items: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: grid;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`;

const Name = styled.div`
  position: absolute;
  left: 0;
  padding-left: 16px;
`;

const Add = styled.div`
  position: absolute;
  right: 0;
  padding-right: 16px;
`;

const Search = styled.div`
  box-shadow: 0 0 10px rgba(0.2, 0.2, 0.2, 0.2);
  margin-right: 20px;
`;

const SearchButton = styled.div`
  padding-right: 20px;
`;

const ClearButton = styled.div``;

const Buttons = styled.div`
  ${"" /* position: absolute; */}
  display: flex;
`;
