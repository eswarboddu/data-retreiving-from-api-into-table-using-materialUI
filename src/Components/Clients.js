import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TablePagination } from "@material-ui/core";

const Clients = () => {
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  useEffect(() => {
    fetch(
      "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        // setSearch("Mart");
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={5}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ClientName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>Person of Contact</TableCell>
                <TableCell>Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((client) => (
                <TableRow key={client.clientId}>
                  <TableCell>{client.clientName}</TableCell>
                  <TableCell>{client.clientEmail}</TableCell>
                  <TableCell>{client.clientWorkPhone}</TableCell>
                  <TableCell>{client.clientIndustry}</TableCell>
                  <TableCell>{client.clientContact}</TableCell>
                  <TableCell>{client.clientWebsite}</TableCell>
                  <TableCell>
                    <EditIcon 
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            </Table>
            <Page>
                <TablePagination style={{margin: "auto"}}
                  component="div"
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  // colSpan={6}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  
                />
              </Page>
        </TableContainer>
      </Paper>
    </Container>
  )
}


export default Clients;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 30px;

`;

const Page = styled.div`
  display:flex;
  justify-content: center;
  width:100%
`



{/* .filter((client) => client.clientName.indexOf(search) !== -1) */}