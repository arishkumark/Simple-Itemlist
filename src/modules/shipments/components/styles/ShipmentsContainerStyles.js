import { fade } from '@material-ui/core';

/**
 * Styles for shipment lists
 *
 * @author Arish Kumar K
 */

const ShipmentsContainerStyles = (theme) => ({
  container: {
    maxHeight: 570
  },
  textField: {
    float: 'right',
    margin: '0px 20px 20px 0'
  },
  emptyItem: {
    marginTop: 200,
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  tableRow: {
    cursor: 'pointer'
  }
});

export default ShipmentsContainerStyles;
