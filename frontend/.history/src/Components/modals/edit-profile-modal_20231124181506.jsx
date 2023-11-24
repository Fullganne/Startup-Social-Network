import {
    Modal,
    ModalBody,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalContent,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import Axios from "axios";
import userService from "../../services/userService";
import { UserContext } from "../../Context/UserContext";
import { Image } from "cloudinary-react";

function EditProfileModal({ isOpen, onClose }) {
    const [previewAvatar, setPreviewAvatar] = useState(null);
    const [imageSelected, setImageSelected] = useState(null);
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "umbkkwi4");

        try {
            const response = await Axios.post(
                "https://api.cloudinary.com/v1_1/da0ikowpn/image/upload",
                formData
            );
            console.log(response);
            console.log("url cần thêm: " + response.data.url);
            return response.data.url; // return the URL
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error; // rethrow the error
        }
    };

    const handleUpdateUser = async (imageUrl) => {
        try {
            console.log("URL đang lưu: " + imageUrl);
            const response = await userService.updateById(userData.id, {
                // id: userData.id,
                email: email,
                username: name,
                password: password,
                avatar: imageUrl,
            });
            alert("Cập nhật thành công");
            console.log("Post added successfully:", response.data);
        } catch (error) {
            alert("Cập nhật thất bại");
            console.error("Error adding post:", error);
        }
    };

    const handleOnChange = (e) => {
        setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    Edit your profile
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="items-center">
                        {/* avatar */}
                        <div className="flex items-center justify-center mb-5 flex-col">
                            <img
                                width={100}
                                className="rounded-full"
                                src={
                                    userData.avatar ||
                                    "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAJIDucKftY7-i33wKHSqG4m1WYctmHDPrc_LNd2SzuuaZzNXtTM7H3oMbD9VjdBGjsl47owQl_REnpAi7HrpgqiVp4sQ=w1910-h922"
                                }
                                alt="Avatar"
                            />
                            <label
                                htmlFor="avatar"
                                className="rounded-md p-2 bg-slate-400 mt-2"
                            >
                                Change avatar
                            </label>
                            <input
                                className="hidden"
                                id="avatar"
                                name="avatar"
                                type="file"
                                onChange={(e) => {
                                    console.log("Đã chọn hình");
                                    setImageSelected(e.target.files[0]);
                                    handleOnChange(e);
                                }}
                            />
                        </div>

                        {/* User name */}
                        <div className="flex items-center">
                            <label htmlFor="name" className="w-[23%]">
                                Tên
                            </label>
                            <input
                                id="name"
                                className="w-full max-h-[50px] p-2 ml-7  mt-2 mb-4"
                                type="text"
                                placeholder="Nhập tên mới của bạn"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* gmail */}
                        <div className="flex items-center">
                            <label htmlFor="gmail" className="w-[23%]">
                                Gmail
                            </label>
                            <input
                                id="gmail"
                                className="w-full max-h-[50px] p-2 ml-7 mt-2 mb-4"
                                type="email"
                                placeholder="Nhập Gmail mới"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        {/* pass word */}

                        <div className="flex items-center">
                            <label htmlFor="pass" className="w-[23%]">
                                Password
                            </label>
                            <input
                                id="pass"
                                className="w-full max-h-[50px] p-2 ml-7  mt-2 mb-4"
                                type="text"
                                placeholder="Nhập PassWord mới"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="repass" className="w-[23%]">
                                ReType Password
                            </label>
                            <input
                                id="repass"
                                className="w-full max-h-[50px] p-2 ml-7  mt-2 mb-4"
                                type="text"
                                placeholder="Nhập PassWord mới"
                                onChange={(e) =>
                                    setReenteredPassword(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={async (e) => {
                            console.log("Đang xử lý");

                            if (password != reenteredPassword) {
                                alert(
                                    "Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại."
                                );
                                return;
                            }

                            try {
                                let imageUrl = null;
                                if (imageSelected == null) {
                                    imageUrl = userData.avatar;
                                } else {
                                    imageUrl = await uploadImage();
                                }

                                await handleUpdateUser(imageUrl);
                                console.log("Đã xong");

                                onClose();
                                setPreviewAvatar(null);
                                setImageSelected(null);
                                setName("");
                                setEmail("");
                                setPassword("");
                                setReenteredPassword("");

                                handleFetchUsers();
                            } catch (error) {
                                console.error("Error:", error);
                            }
                        }}
                    >
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default EditProfileModal;
