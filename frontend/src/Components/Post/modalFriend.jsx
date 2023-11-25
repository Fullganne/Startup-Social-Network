import React, { useContext, useState } from "react";
import { Modal, ModalBody, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import emailjs from 'emailjs-com';
import userService from "../../services/userService";
import { UserContext } from "../../Context/UserContext";

const ModalFriend = ({ onClose, isOpen,idpost }) => {
  const [email, setEmail] = useState("");
  const [check,setCheck]=useState(false)
const {userData}=useContext(UserContext)

  // Đặt Public Key của bạn ở đây
  emailjs.init('ZhPDrbfPlvjsGZzBK');

  const sendEmail = async () => {
    // const tmp=await userService.getUserByEmail(email)
    // console.log(tmp)
    // if(tmp.data){
      const templateParams = {
        to_name: userData.username, // Tên người nhận
        message: `Id Post vi phạm : ${idpost} - Nội dung vi phạm : ${email}`, // Nội dung email
        from_email: userData.email,
      };

      // await userService.updateById(tmp.data.id,{})
  
      emailjs.send('service_2qr30nr', 'template_lwe4zzf', templateParams, 'ZhPDrbfPlvjsGZzBK')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
        onClose();
    // }else{
      // setCheck(true)
    // }
  
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div>Nhập thông tin báo cáo :</div>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <button className="p-10" onClick={sendEmail}>Send</button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalFriend;