import React from 'react';
import * as PropTypes from 'prop-types';
import { Dialog,
        DialogTitle,
        IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import * as styles from './Modal.module.scss';

const Modal = (props) => {

  const { onClose, open, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
        onClose={handleClose}
        scroll={'body'}
        maxWidth={props.maxWidth}
        classes={{ paperScrollBody: styles.wrapper }}
        aria-labelledby="simple-dialog-title"
        open={open}>
      <DialogTitle id="simple-dialog-title" classes={{root: styles.header}}>
      {props.title}
      {onClose ? (
        <IconButton aria-label="close" className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
      </DialogTitle>
      {children}
    </Dialog>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Modal;
