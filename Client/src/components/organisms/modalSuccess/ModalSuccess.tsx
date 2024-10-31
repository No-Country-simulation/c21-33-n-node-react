import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid2 } from '@mui/material';
import { StylesOrganism } from '../StylesOrganism';
import PrimaryButtom from '@/components/atoms/buttoms/PrimaryButtom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: 300,
        md: 450
    },
    bgcolor: 'custom.quinary',
    boxShadow: 24,
    borderRadius: '.5rem'
};

const ModalSuccess = ({
    isOpenModal,
    setIsOpenModal
}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsOpenModal(false);
    };
    const { classes: stylesOrganism } = StylesOrganism();

    React.useEffect(() => {
        isOpenModal && handleOpen();
    }, [isOpenModal]);

    return (
        <Grid2>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid2 className={stylesOrganism.modalContainer}>
                        <Box className={stylesOrganism.modalHeader}>
                            <Typography className={stylesOrganism.modalTitle}>
                                !Hecho!
                            </Typography>
                        </Box>

                        <Box className={stylesOrganism.modalBody}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                La accion se ha completado con exito
                            </Typography>
                        </Box>

                        <Box className={stylesOrganism.modalFooter}>
                            <PrimaryButtom
                                text='Aceptar'
                                onClick={handleClose}
                            />
                        </Box>
                    </Grid2>
                </Box>
            </Modal>
        </Grid2>
    )
}

export default ModalSuccess