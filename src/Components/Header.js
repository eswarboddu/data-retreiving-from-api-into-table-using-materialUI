import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField,Button } from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


function Header() {
  return (
    <Container>
      <ClientContainer>
        <Name>Clients</Name>
        <Add>
        <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}>
          NEW CLIENT
        </Button>
        </Add>
      </ClientContainer>

      <SearchContainer className="container">
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
        <SearchButton>
        <Button
          variant="contained"
          >
          SEARCH
        </Button>
        </SearchButton>
        <ClearButton>
        <Button
          variant="contained"
          color="">
          CLEAR
        </Button>
        </ClearButton>
        <Filter>
        <Button
        variant="outlined"
        color="primary"
        startIcon={<FilterListIcon />}>
          SHOW FILTER
        </Button>
        </Filter>
      </SearchContainer>
    </Container>
  );
}

export default Header;

const ClientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

const SearchContainer = styled.div`
    display: flex;
    height: 35px;
    padding-top: 15px;
`;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`;

const Name = styled.div``;

const Add = styled.div`
  
`;
const Search = styled.div`
    position: absolute;
    left:0;
    margin-left: 16px;
    box-shadow: 0 0 10px rgba(0.2, 0.2, 0.2, 0.2);
`;

const SearchButton = styled.div`
     padding-left: 280px;
     padding-right: 20px;
`

const ClearButton = styled.div`

`
const Filter = styled.div`
    position: absolute;
    right: 0;
    padding-right: 16px;
`
