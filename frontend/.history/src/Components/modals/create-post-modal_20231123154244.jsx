import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import postService from "../../services/postService";
import uuid4 from "uuid4";
import UserContext from "../../Context/UserContext";

const CreatPostModal = ({ isOpen, setCloseModal }) => {
    const [previewImage, setPreviewImage] = useState();
    const [postContent, setPostContent] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    // const { userData } = useContext(UserContext);
    // const userId = userData.id;

    const { UserContext } = useContext(UserContext); // Use useContext to access UserContext
    const userId = UserContext.userData.id;

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOnChange = (e) => {
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleAddPost = () => {
        // Call the addPost method from postService to add the post
        postService
            .addPost({
                id_post: uuid4(),
                user: {
                    id: userId,
                },
                noidung: postContent,
                image: previewImage,
                privacy: selectedOption,
                like: 0,
                likedUsers: "",
            })
            .then((response) => {
                // Handle successful response, e.g., show a success message
                console.log("Post added successfully:", response.data);
            })
            .catch((error) => {
                // Handle error, e.g., show an error message
                console.error("Error adding post:", error);
            });
    };

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
                            />
                            <div className="h-[350px] relative p-2">
                                {previewImage && (
                                    <img
                                        src={previewImage}
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
                                    onChange={handleOnChange}
                                />
                            </div>
                            <button
                                className="rounded-xl bg-indigo-500 font-bold text-white w-[485px] m-2 h-[45px]"
                                onClick={handleAddPost} // Add onClick event handler
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
