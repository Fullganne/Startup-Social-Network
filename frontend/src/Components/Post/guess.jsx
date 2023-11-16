import React from "react";
import { Modal,ModalBody,ModalOverlay,ModalContent} from "@chakra-ui/react";

const ModelGuess=({onClose,isOpen})=>{
    return(
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
    
          <ModalBody>
            <div className="rounded-none text-red-500 py-3 text-center border-b-2" >
                <button className="">Báo cáo bài viết</button>
            </div>
            
            
        
          </ModalBody>

        </ModalContent>
      </Modal>
    )
}
export default ModelGuess;