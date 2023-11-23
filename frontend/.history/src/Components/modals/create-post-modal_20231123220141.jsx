import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import postService from "../../services/postService";
import uuid4 from "uuid4";
import { Image } from "cloudinary-react";
import { UserContext } from "../../Context/UserContext";
import Axios from "axios";

const CreatPostModal = ({ isOpen, setCloseModal }) => {
    const [previewImage, setPreviewImage] = useState();
    const [postContent, setPostContent] = useState("");
    const [selectedOption, setSelectedOption] = useState("Công khai");
    const [isPosted, setIsPosted] = useState(false); // Thêm state mới để kiểm tra xem đã đăng bài thành công chưa
    const [imageSelected, setImageSelected] = useState(null);
    const { userData } = useContext(UserContext);
    const userId = userData.id;

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const uploadImage = async () => {
        console.log(imageSelected);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "umbkkwi4");

        Axios.post(
            "https://api.cloudinary.com/v1_1/da0ikowpn/image/upload",
            formData
        ).then((response) => {
            console.log(response);
            console.log("url: " + response.data.url);
            setPreviewImage(response.data.url);
        });
    };

    // const handleOnChange = (e) => {
    //     setPreviewImage(URL.createObjectURL(e.target.files[0]));
    // };

    const handleContentChange = (event) => {
        const value = event.target.value;
        setPostContent(value);
    };

    const handleAddPost = async () => {
        try {
            const response = await postService.addPost({
                id_post: uuid4(),
                user: {
                    id: userId,
                },
                noidung: postContent,
                image: previewImage,
                privacy: selectedOption,
                like: 0,
                likedUsers: "",
            });
            alert("Đăng bài thành công");
            console.log("Post added successfully:", response.data);
            setIsPosted(true); // Đánh dấu là đã đăng bài thành công
        } catch (error) {
            alert("Đăng bài thất bại");
            console.error("Error adding post:", error);
        }
    };

    useEffect(() => {
        if (isPosted) {
            // Nếu đã đăng bài thành công, ẩn component
            setCloseModal(false);
        }
    }, [isPosted, setCloseModal]);

    return (
        <>
            {isOpen && (
                <div
                    className={`bg-[rgba(0,0,0,0.6)]  h-[100vh] flex items-center justify-center fixed inset-0`}
                >
                    <div
                        className=" absolute top-[10px]  right-[10px] cursor-pointer text-[30px]"
                        onClick={() => setCloseModal(false)}
                    >
                        <AiOutlineClose />
                    </div>
                    <div className="w-[500px] rounded-2xl bg-white min-h-[500px]">
                        <header className="rounded-2xl text-center py-[10px] border-[1px] border-gray-50">
                            <p className="text-[30px]  font-bold">
                                Tạo bài viết
                            </p>
                        </header>
                        <div className="">
                            <div className=" flex items-center gap-[10px] font-[18px]">
                                <div className="rounded-full w-[60px] overflow-hidden m-2">
                                    <img
                                        src="https://i.pinimg.com/564x/70/aa/7e/70aa7e05c32e9bbe11031420ca342c9c.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <p>User Name</p>
                                <div>
                                    <select
                                        className="flex items-center rounded-lg border-solid border-2 border-black m-2 py-1 px-3"
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                    >
                                        <option>Công khai</option>
                                        <option>Riêng tư</option>
                                        <option>Bạn bè</option>
                                    </select>
                                </div>
                            </div>
                            <textarea
                                className="min-w-[485px] min-h-[70px] mt-[10px] m-2 "
                                placeholder=" Bạn đang nghĩ gì..."
                                name="content"
                                value={postContent}
                                onChange={handleContentChange}
                            />
                            <div className="h-[350px] relative p-2">
                                {previewImage && (
                                    <img
                                        className="h-[100%] w-[100%]"
                                        alt="Post Upload"
                                    />
                                )}
                                <div
                                    onClick={() => setPreviewImage("")}
                                    className="bg-amber-300 absolute top-[10px] right-[10px] cursor-pointer"
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div>
                                <label className="ml-2" htmlFor="file">
                                    Thêm vào bài viết của bạn{" "}
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={(e) => {
                                        console.log("Đã chọn hình");
                                        setImageSelected(e.target.files[0]);
                                    }}
                                />
                            </div>
                            <button
                                className="rounded-xl bg-indigo-500 font-bold text-white w-[485px] m-2 h-[45px]"
                                onClick={async (e) => {
                                    console.log("Đang xử lý");
                                    await uploadImage();
                                    await handleAddPost();
                                    console.log("Đã xong");
                                }} // Add onClick event handler
                            >
                                Đăng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreatPostModal;