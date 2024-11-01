import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid2 } from '@mui/material';
import { StylesOrganism } from '../StylesOrganism';
import PrimaryButtom from '@/components/atoms/buttoms/PrimaryButtom';
import { ModalSuccessInterface } from '@/utils/interfaces/ModalsInterfaces';

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
    setIsOpenModal,
    status,
    message,
    onAccept
}: ModalSuccessInterface) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsOpenModal(false);
    };
    const { classes: stylesOrganism } = StylesOrganism();

    const handleAcceptAtion = () => {
        handleClose();
        onAccept && onAccept();
    };

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
                                {status === 'success' && 'Hecho!'}
                                {status === 'error' && 'Algo ha fallado'}
                                {status === 'question' && 'Advertencia'}
                            </Typography>
                        </Box>

                        <Box className={stylesOrganism.modalBody}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {message}
                            </Typography>
                        </Box>

                        <Box className={stylesOrganism.modalFooter}>

                            {onAccept && (
                                <Button onClick={handleClose}>
                                    Cancelar
                                </Button>
                            )}

                            <PrimaryButtom
                                text='Aceptar'
                                onClick={handleAcceptAtion}
                            />

                        </Box>
                    </Grid2>
                </Box>
            </Modal>
        </Grid2>
    )
}

export default ModalSuccess