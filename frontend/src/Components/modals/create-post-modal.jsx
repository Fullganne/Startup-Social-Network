import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CreatPostModal = ({ isOpen, setCloseModal }) => {
  const [previewImage, setPreviewImage] = useState();
  const handleOnChange = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      {isOpen && (
        <div
          className={`bg-[rgba(0,0,0,0.6)] h-[100vh] flex items-center justify-center fixed inset-0`}
        >
          <div
            className="absolute top-[10px] right-[10px] cursor-pointer text-[30px]"
            onClick={() => setCloseModal(false)}
          >
            <AiOutlineClose />
          </div>
          <div className="w-[500px]  bg-white min-h-[500px]">
            <header className="text-center py-[10px] border-[1px] border-gray-50">
              <p className="text-[30px]  font-bold">Tạo bài viết</p>
            </header>
            <div className="">
              <div className=" flex items-center gap-[10px] font-[18px]">
                <div className="rounded-full w-[60px] overflow-hidden m-2">
                  <img
                    src="https://i.pinimg.com/564x/70/aa/7e/70aa7e05c32e9bbe11031420ca342c9c.jpg"
                    alt="avatar"
                  />
                </div>
                <span>User Name</span>
                <div>Công khai</div>
              </div>
              <textarea className="min-w-[485px] min-h-[70px] mt-[10px] m-2 " placeholder=" Bạn đang nghĩ gì..." name="content" />
              <div className="h-[200px]">
                {previewImage && (
                  <img
                    src={previewImage}
                    className="h-[100%]"
                    alt="Post Upload"
                  />
                )}
                
              </div>
              <div>
                <label className="ml-2" htmlFor="file">Thêm vào bài viết của bạn </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleOnChange}
                />
              </div>
              <button className=" rounded-xl bg-indigo-500 front-bold front-[50px] w-[480px] m-2 h-[45px]">Đăng</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatPostModal;
