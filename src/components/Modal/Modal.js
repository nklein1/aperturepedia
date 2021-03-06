import React from 'react';
import * as PropTypes from 'prop-types';
import { Dialog,
        DialogTitle,
        IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import styles from './Modal.module.scss';

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
