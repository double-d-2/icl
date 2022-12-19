import { memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AppTable = ({ tableHead = [], tableBody = [] }) => {
  const renderTableHead = () => {
    return tableHead.map((item) => {
      const { render, name, key, options = {} } = item;
      return (
        <TableCell key={`head-${key}`} {...options}>
          {render ? render() : name}
        </TableCell>
      );
    });
  };
  const renderTableBody = () => {
    return tableHead.map((headItem) => {
      return (
        <TableRow key={`body-row-${headItem.key}`}>
          {tableBody.map((bodyItem) => {
            const options = bodyItem.options || {};
            return (
              <TableCell
                key={`table-cell-${bodyItem[headItem.key]}-${headItem.key}`}
                component="th"
                scope="row"
                {...options}
              >
                {bodyItem.render
                  ? bodyItem.render(headItem, bodyItem)
                  : bodyItem[headItem.key]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>{renderTableHead()}</TableRow>
        </TableHead>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(AppTable);
