import React, { useState } from "react";
import { Modal, ModalBody, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import emailjs from 'emailjs-com';
import userService from "../../services/userService";

const ModalResetPassword = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState("");
  const [check,setCheck]=useState(false)

  function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  // Sử dụng hàm để tạo mật khẩu ngẫu nhiên với chiều dài mong muốn
  const randomPassword = generateRandomPassword(6);
  console.log(randomPassword);
  

  // Đặt Public Key của bạn ở đây
  emailjs.init('ZhPDrbfPlvjsGZzBK');

  const sendEmail = async () => {
    const tmp=await userService.getUserByEmail(email)
    console.log(tmp)
    if(tmp.data){
      const templateParams = {
        to_name: tmp.data.username, // Tên người nhận
        message: `New password : ${randomPassword}`, // Nội dung email
        to_email: email,
      };

      await userService.updateById(tmp.data.id,{password:randomPassword})
  
      emailjs.send('service_2qr30nr', 'template_cad0rlh', templateParams, 'ZhPDrbfPlvjsGZzBK')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
        onClose();
    }else{
      setCheck(true)
    }
  
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div>Nhập email để lấy lại mật khẩu</div>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <button className="p-10" onClick={sendEmail}>Send</button>
{check?<div>Tai khoan khong ton tai !</div>:""}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalResetPassword;
