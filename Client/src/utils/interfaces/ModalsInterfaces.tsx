export interface ModalSuccessInterface {
    isOpenModal: boolean,
    setIsOpenModal: (value: boolean) => void,
    status: string,
    message?: string
    onAccept?: () => void
}