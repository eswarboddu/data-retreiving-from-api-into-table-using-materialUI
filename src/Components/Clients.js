import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { TablePagination } from "@material-ui/core";
import TableFooter from '@material-ui/core/TableFooter';
// import MaterialTable from "material-table";

const Clients = () => {
  const [data, setData] = useState([]);
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
  // const columns = [
  //   {
  //     title: "Client Name",
  //     field: "clientName",
  //   },
  //   {
  //     title: "Email",
  //     field: "clientEmail",
  //   },
  //   {
  //     title: "Phone",
  //     field: "clientWorkPhone",
  //   },
  //   {
  //     title: "Industry",
  //     field: "clientIndustry",
  //   },
  //   {
  //     title: "Point of Contact",
  //     field: "clientPocName",
  //   },
  //   {
  //     title: "Website",
  //     field: "clientWebsite",
  //   },
  // ];

  useEffect(() => {
    fetch(
      "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
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

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
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
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
}

//     <Container>
//     <MaterialTable
//         title="All Clients"
//         data={data}
//         columns={columns}
//         searchable="off"
//         />
//     </Container>
//   );
// };

export default Clients;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 30px;
`;
