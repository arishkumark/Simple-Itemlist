import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx'
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableCell, TableContainer,
  TablePagination, TableRow, Paper, InputBase, Typography, AppBar, Toolbar, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TableHeader from './components/TableHeader'
import ShipmentsContainerStyles from './components/styles/ShipmentsContainerStyles'
import NameCell from './components/NameCell'

/**
 * Renders the shipments container component
 *
 * @author Arish Kumar K
 */

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const ShipmentsContainer = ({ classes, shipments, history }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [selected, setSelected] = useState('');
  const [list, setList] = useState(shipments.items);

  useEffect(() => {
    shipments.fetch();
  },[shipments]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleListClick = (id) => {
    history.push(`/shipments/${id}`)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.getAttribute('id');
    const data = list.filter((item) => item.id === id);
    setSelected(data[0].id)
  } 

  const isEditable = (id) => (selected === id);

  const handleNameUpdate = (e, index, id, updatedName) => {
    e.stopPropagation();
    setSelected('');
    const updatedShipments = mobx.toJS(shipments.items);
    updatedShipments[index].name = updatedName;
    const updatedData = {
      items: updatedShipments
    }
    shipments.update(updatedData, index, id)
  }

  const handleSearchChange = (e) => {
    if (e.target.value) {
      const FilteredList = shipments.items.filter(item => item.id.toLowerCase().includes(e.target.value));
      setList(FilteredList);
    } else {
      setList(shipments.items);
    }
  }

  return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              FreightHub Shipment List
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by ID"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        
        {list && list.length > 0 && <TableContainer className={classes.container}>
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={list.length}
            />
            <TableBody>
              {stableSort(list, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const itemEditable = isEditable(row.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => handleListClick(row.id)}
                      tabIndex={-1}
                      key={row.id}
                      classes={{ root: classes.tableRow }}
                    >
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">
                        <NameCell
                          isEdit={itemEditable}
                          id={row.id}
                          index={index}
                          name={row.name}
                          onEdit={handleEdit}
                          onNameUpdate={handleNameUpdate}
                        />
                      </TableCell>
                      <TableCell align="left">{row.mode}</TableCell>
                      <TableCell align="left">{row.type}</TableCell>
                      <TableCell align="left">{row.destination}</TableCell>
                      <TableCell align="left">{row.origin}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.userId}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>}
        {list && list.length > rowsPerPage && <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />}
        {
          (!list || (list && list.length === 0)) &&
          <Paper classes={{ root: classes.emptyItem}}>
            <Typography variant="h4">No Items Found</Typography>
            <Typography variant="h6">Please search with ID</Typography>
          </Paper>
        }
      </Box>
  );
}

ShipmentsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  shipments: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(ShipmentsContainerStyles)(inject('shipments')(observer(ShipmentsContainer)));

