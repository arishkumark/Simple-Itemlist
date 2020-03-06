/**
 * Styles for shipment details
 *
 * @author Arish Kumar K
 */

const ShipmentDetailsStyles = (theme) => ({
  paper: {
    boxShadow: 'none',
    width: '80%',
    margin: '30px auto',
    border: '1px solid #e9e9e9',
    padding: '30px 0'
  },
  textField: {
    margin: '0px 20px 10px 0px'
  },
  card: {
    width: '30%',
    margin: '30px auto 30px'
  },
  cardTextField: {
    marginBottom: 10
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
});

export default ShipmentDetailsStyles;
