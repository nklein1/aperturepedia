import React from 'react';
import PropTypes from 'prop-types';
import { Button,
        IconButton,
        Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';
import styles from  './DbPageLayout.module.scss';

const DbPageLayout = ({children, location, modalContent, seoData}, props) => {

  const [showModal, setModalOpen] = React.useState(false);

  const openDialog = () => {
    setModalOpen(true);
  }

  const closeDialog = () => {
    setModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Typography variant={'h5'} className={styles.title}>
              {seoData.title}
            </Typography>
            <Button disableElevation
                variant="outlined" color="primary"
                startIcon={<InfoIcon />}
                onClick={openDialog}
                className={styles.desktop}>
              Legend
            </Button>
          </div>   
          <IconButton color="primary"
              aria-label="Table Legend"
              onClick={openDialog}
              className={styles.mobile}>
            <InfoIcon />
          </IconButton>
        </div>

        {children}

        <Modal 
            open={showModal}
            onClose={closeDialog}
            maxWidth={'md'}
            title={seoData.name + ' Table Legend'}>
          <ModalContent seoData={seoData}></ModalContent>
        </Modal>
      </div>
    </div>
  )
}

DbPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DbPageLayout
