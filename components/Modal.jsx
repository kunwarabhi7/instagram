import React, { useRef, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import modalState from "../atoms/modalAtoms";
import { Dialog, Transition } from "@headlessui/react";
import { FcCamcorderPro } from "react-icons/fc";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create a Post
                  </Dialog.Title>
                  {selectedFile ? 
                    <img
                      src={selectedFile}
                      className="w-full object-contain cursor-pointer"
                      onClick={() => setSelectedFile(null)}
                    />
                   : 
                    <div
                      className="mt-2 "
                      onClick={() => filePickerRef?.current?.click()}
                    >
                      {" "}
                      <FcCamcorderPro
                        className="ml-44 cursor-pointer"
                        size={30}
                      />
                    </div>
                  }

                  <div className="mt-2">
                    <input
                      type="text"
                      // ref={captionRef}
                      className="border-none focus:ring-0 w-full text-center"
                      placeholder="Enter a caption"
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      onChange={addImageToPost}
                      hidden
                      ref={filePickerRef}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Upload Post
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
