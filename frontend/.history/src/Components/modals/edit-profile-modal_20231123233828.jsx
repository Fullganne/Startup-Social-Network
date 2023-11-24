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
import { useState } from "react";
function EditProfileModal({ isOpen, onClose }) {
    const [previewAvatar, setPreviewAvatar] = useState();
    const [imageSelected, setImageSelected] = useState(null);

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
                                    previewAvatar ||
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
                                placeholder="Nhập Lại PassWord mới"
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
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
