import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Box, IconButton, Typography, TextField, withStyles } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

/**
 * Renders name component
 *
 * @author Arish Kumar K
 */

const styles = () => ({
  box: {
    display: 'flex'
  },
  iconBtn: {
    padding: 0,
    marginLeft: 15
  },
  textField: {
    width: '90%'
  }
});

const NameCell = ({ name, classes, id, onEdit, isEdit, onNameUpdate, index }) => {
  const [nameVal, setNameVal] = useState(name);

  const handleChange = (e) => {
    e.stopPropagation();
    setNameVal(e.target.value);
  }
  const handleOnclick = (e) => {
    e.stopPropagation();
  }

  return(
    <Box className={classes.box}>
      {!isEdit &&
      <>
        <Typography>{name}</Typography>
        <IconButton
          id={id}
          classes={{ root: classes.iconBtn }}
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
      </>
      }
      {isEdit &&
      <>
        <TextField value={nameVal} onClick={handleOnclick} onChange={handleChange} classes={{ root: classes.textField}}/>
        <IconButton
          id={id}
          classes={{ root: classes.iconBtn }}
          onClick={(e) => onNameUpdate(e, index, id, nameVal)}
        >
          <DoneIcon />
          </IconButton>
        </>
      }
    </Box>
  )
}

NameCell.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onNameUpdate: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}
export default withStyles(styles)(inject('shipments')(observer(NameCell)));

