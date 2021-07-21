import { Header } from "../Header"
import { ContainerModal } from "./style"
import { BiTrash } from 'react-icons/bi'
import toast from "react-hot-toast"

export const ModalTec = ({ title, status, deleteTech, show, id }) => {

    return (
        <ContainerModal id={id} className='title'>
            <Header>{title}</Header>
            <button onClick={() => {
                
                toast('Tecnologia Deletada', {
                    icon: '😢'
                })

                deleteTech(id)
            }}><BiTrash /></button>
            <div>
                <p>{status}</p>
            </div>
        </ContainerModal>
    )
}