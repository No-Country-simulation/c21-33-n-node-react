import { Button } from '@mui/material'
import { StylesButtoms } from './StylesButtoms'
//import { useNavigate } from 'react-router-dom';

interface PrimaryButtonProps {
    text: string,
    onClick?: () => void
    //navigateTo?: string
}

const DeleteButton: React.FC<PrimaryButtonProps> = ({
    //navigateTo,
    text,
    onClick
}) => {

    const { classes: styles } = StylesButtoms();
    //const navigate = useNavigate();

    /* const handleNavigate = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    }; */

    return (
        <Button
            className={styles.deleteButton}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default DeleteButton