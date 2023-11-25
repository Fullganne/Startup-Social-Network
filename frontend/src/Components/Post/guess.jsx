import React from "react";
import { Modal,ModalBody,ModalOverlay,ModalContent, useDisclosure} from "@chakra-ui/react";
import ModalFriend from "./modalFriend";

const ModelGuess=({onClose,isOpen, idpost})=>{
  const { onOpen } = useDisclosure()
  const handleOpenModel=()=>{
    onOpen()
};
    return(
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
    
          <ModalBody>
            <div className="rounded-none text-red-500 py-3 text-center border-b-2" >
                <button className=""onClick={handleOpenModel} >Báo cáo bài viết</button>
                <div></div>
            </div>
            <ModalFriend idpost={idpost} isOpen={isOpen} onClose={onClose}/>
            
        
          </ModalBody>

        </ModalContent>
      </Modal>
    )
}
export default ModelGuess;