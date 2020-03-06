
import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow, TableSortLabel, withStyles } from '@material-ui/core';

/**
 * Renders the table header
 *
 * @author Arish Kumar K
 */

const styles = () => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  tableHead: {
    fontWeight: 600
  }
});

const TableHeader = ({ classes, order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  const headCells = [
    { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'mode', numeric: false, disablePadding: false, label: 'Mode' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'destination', numeric: false, disablePadding: false, label: 'Destination' },
    { id: 'origin', numeric: false, disablePadding: false, label: 'Origin' },
    { id: 'total', numeric: true, disablePadding: false, label: 'Total' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'userId', numeric: false, disablePadding: false, label: 'User Id' },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            classes={{ head: classes.tableHead }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default withStyles(styles)(TableHeader)