import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

const CreatPostModal = ({ isOpen, setCloseModal }) => {
  const [previewImage, setPreviewImage] = useState();
  const handleOnChange = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
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
                <p>User Name</p>
                <select className=" flex items-center rounded-lg border-solid border-2 border-black m-2 py-1 px-3" >
                  <option>
                    Công khai
                  </option>
                  <option>
                    Riêng tư
                  </option>
                  <option>
                    Bạn bè
                  </option>
                </select>
              
              </div>
              <textarea className="min-w-[485px] min-h-[70px] mt-[10px] m-2 " placeholder=" Bạn đang nghĩ gì..." name="content" />
              <div className="h-[350px] p-2">
                {previewImage && (
                  <img
                    src={previewImage}
                    className="h-[100%] w-[100%]"
                    alt="Post Upload"
                  />
                )}
                 <div onClick={()=>setPreviewImage('')} className="bg-slate-50 absolute top-[270px] right-[160px]">
                    <AiOutlineClose/>
                    
                 </div>

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
