import DeleteButton from "@/components/atoms/buttoms/DeleteButton";
import PrimaryButtom from "@/components/atoms/buttoms/PrimaryButtom";
import InputTextDisabled from "@/components/organisms/inputTextDisabled/InputTextDisabled";
import ModalSuccess from "@/components/organisms/modalSuccess/ModalSuccess";
import { updateEmployes } from "@/redux/features/employes/employes";
import { RootState } from "@/redux/store";
import { EmployeProfileStyles } from "@/styles/componets/EmployeProfileStyles";
import { MainStyles } from "@/styles/MainStyles";
import { EmployeData } from "@/utils/interfaces";
import { routesLinkTo } from "@/utils/routesPath/routesPath";
import { getDate } from "@/utils/utilities/Utilities";
import { Container, Grid2, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

const EmployeProfile = () => {

    const { classes: styles } = MainStyles();
    const { classes: stylesEmployeProfile } = EmployeProfileStyles();
    const navigate = useNavigate();
    const { employes } = useSelector((state: RootState) => state.employes);
    const handleNavigate = () => {
        navigate(routesLinkTo.editEmployeInfo)
    };
    const [userData, setUserData] = useState<EmployeData>();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        status: '',
        message: ''
    })
    const { id } = useParams();
    const dispatch = useDispatch()

    const handleUnsubscribeEmploye = () => {
        setModalInfo({
            status: 'question',
            message: 'Seguro que deseas realizar esta accion?'
        });
        setIsOpenModal(true)
    }

    const ifUnsuscribeEmploye = () => {
        //console.log('Unsuscribed', { userData, employes })
        const employeUnsuscribe: EmployeData = { ...userData, status: 'inactive', finishDate: getDate().formattedDate };
        const employeIndex = employes.findIndex(employe => employe.legado === id);
        const newEmployeList: EmployeData[] = [...employes];
        newEmployeList[employeIndex] = employeUnsuscribe;
        console.log({ employeUnsuscribe, newEmployeList })
        dispatch(updateEmployes(newEmployeList));
    };

    useEffect(() => {
        console.log(id);
        const getUserById = () => {
            const employe = employes.find(employe => employe.legado === id);
            if (employe) {
                setUserData(employe);
                console.log({ employe })
            } else {
                console.log('No se encontro usuario')
            }
        }
        getUserById();
    }, [id]);

    return (
        <Container>
            <ModalSuccess
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                status={modalInfo.status}
                message={modalInfo.message}
                onAccept={ifUnsuscribeEmploye}
            />
            <Grid2
                size={{ xs: 12 }}
                className={stylesEmployeProfile.container_headerSection}
            >
                <PrimaryButtom
                    text="Modificar datos"
                    onClick={handleNavigate}
                />

                <DeleteButton
                    text="Dar de baja"
                    onClick={handleUnsubscribeEmploye}
                />
            </Grid2>

            <Typography className={styles.titleSection}>
                Perfil del empleado
            </Typography>

            <Grid2 container spacing={2} className={stylesEmployeProfile.container_MainSection}>

                <Grid2
                    size={{ xs: 12 }}
                    className={stylesEmployeProfile.employeNumber_box}
                >
                    <Typography
                        className={stylesEmployeProfile.employeNumber_box_text}
                    >
                        Nro de Legajo
                    </Typography>

                    <InputTextDisabled
                        label={''}
                        value={userData?.legado || 'No especificado'}
                        size={6}
                    />

                </Grid2>

                <InputTextDisabled
                    label={'Fecha de inicio'}
                    value={userData?.startDate || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Fecha de finalizacion'}
                    value={userData?.finishDate || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Correo electronico'}
                    value={userData?.email || 'No especificado'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Nombres'}
                    value={userData?.firstName || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Apellidos'}
                    value={userData?.lastName || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Direccion'}
                    value={userData?.streetAddress || 'No especificado'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Piso'}
                    value={userData?.floor || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Departamento'}
                    value={userData?.apartment || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'DNI'}
                    value={userData?.dni || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Fecha de nacimiento'}
                    value={userData?.birthDate || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Pasaporte'}
                    value={userData?.passport || 'No especificado'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Pais'}
                    value={userData?.country || 'No especificado'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Localidad'}
                    value={userData?.city || 'No especificado'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Celular'}
                    value={userData?.phone || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Telefono hogar'}
                    value={userData?.phoneHouse || 'No especificado'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Codigo postal'}
                    value={userData?.postalCode || 'No especificado'}
                    size={6}
                />

            </Grid2>

        </Container>
    )
}

export default EmployeProfile