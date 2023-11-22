import React from "react";
import { Modal,ModalBody,ModalOverlay,ModalContent} from "@chakra-ui/react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
const ModelUser=({onClose,isOpen, handleDeletePost})=>{
    return(
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="rounded-none text-red-500 py-3 text-center border-b-2" >
                <button className="" onClick={handleDeletePost}>Xóa bài viết</button>
            </div>
            <div className='flex items-between w-full py-4 px-5 border-b-2'>
                <div className="flex basis-4/5 items-center">
                    <FaEarthAmericas className="h-10 w-10 " />
                    <div className="pl-2">
                    <p className='font-semibold text-sm'>Công khai</p>
                    <p className='font-thin text-sm' >Bất kì ai cũng có thể thấy </p>
                    </div>
                </div>
                
                <input type="radio" value="Male" name="gender" className="basis-1/5" />
            </div>
            <div className='flex items-between w-full py-4 px-5 border-b-2' aria-checked>
                <div className="flex basis-4/5 items-center">
                    <FaUserFriends className="h-10 w-10 " />
                    <div className="pl-2">
                    <p className='font-semibold text-sm'>Bạn bè</p>
                    <p className='font-thin text-sm' >Chỉ bạn bè của bạn có thể thấy </p>
                    </div>
                </div>
                
                <input type="radio" value="Male" name="gender" className="basis-1/5" />
            </div>
            
            
          </ModalBody>

        </ModalContent>
      </Modal>
    )
}
export default ModelUser;