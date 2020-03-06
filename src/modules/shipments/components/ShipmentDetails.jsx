import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Box, Paper, TextField, Card, CardContent,
  AppBar, Toolbar, IconButton, withStyles, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShipmentDetailsStyles from './styles/ShipmentDetailsStyles'


/**
 * Renders shipment details
 *
 * @author Arish Kumar K
 */

const ShipmentDetails = ({ shipments, match, classes, history }) => {

  const shipmentDetails = shipments.items.filter((item) => item.id === match.params.id);
  const cargoItems = shipmentDetails && shipmentDetails.length && shipmentDetails[0].cargo;
  const services = shipmentDetails && shipmentDetails.length && shipmentDetails[0].services;

  const getServices = () => {
    const types =  services && services.length && services.map(service => (service.type))
    return types.join(', ')
  }

  const handleBackClick = () => {
    history.push('/shipments');
  }

  useEffect(() => {
    shipments.fetch();
  },[shipments]);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.backButton} onClick={handleBackClick} color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shipment Details of {match.params.id}
          </Typography>
        </Toolbar>
      </AppBar>
      {shipmentDetails && shipmentDetails.length > 0 && <Paper classes={{ root: classes.paper}}>
        <Box>
          <TextField multiline classes={{ root: classes.textField}} id="id" label="ID" defaultValue={shipmentDetails[0].id} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="name" label="Name" defaultValue={shipmentDetails[0].name} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="mode" label="Mode" defaultValue={shipmentDetails[0].mode} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="type" label="Type" defaultValue={shipmentDetails[0].type} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="services" label="Services" defaultValue={getServices()} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box>
        <Box display="flex">
        {cargoItems && cargoItems.length && cargoItems.map (item => (
          <>
            <Card key={item.type} variant="outlined" classes={{ root: classes.card}}>
              <CardContent>
                <TextField multiline classes={{ root: classes.cardTextField}} id="cargo-type" label="Type" defaultValue={item.type} variant="outlined" InputProps={{
                  readOnly: true,
                }}
                />
                <TextField multiline classes={{ root: classes.cardTextField}} id="cargo-description" label="Description" defaultValue={item.description} variant="outlined" InputProps={{
                  readOnly: true,
                }}
                />
                <TextField multiline classes={{ root: classes.cardTextField}} id="cargo-volume" label="Volume" defaultValue={item.volume} variant="outlined" InputProps={{
                  readOnly: true,
                }}
                />
              </CardContent>
            </Card>
          </>
        ))}
        </Box>
        </Box>
        <Box>
          <TextField multiline classes={{ root: classes.textField}} id="destination" label="Destination" defaultValue={shipmentDetails[0].destination} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="origin" label="Origin" defaultValue={shipmentDetails[0].origin} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="total" label="Total" defaultValue={shipmentDetails[0].total} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="status" label="Status" defaultValue={shipmentDetails[0].status} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
          <TextField multiline classes={{ root: classes.textField}} id="userId" label="User Id" defaultValue={shipmentDetails[0].userId} variant="outlined" InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Paper>}
    </Box>
  )
}

ShipmentDetails.propTypes = {
  shipments: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default withStyles(ShipmentDetailsStyles)(inject('shipments')(observer(ShipmentDetails)));

