import { Modal } from "@/components/modal/Modal";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";

type IProps = {
  showStoreInfoModal: boolean;
  setShowStoreInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const StoreInfoModal = ({
  showStoreInfoModal,
  setShowStoreInfoModal,
}: IProps) => {
  return (
    <div>
      <Modal.Frame
        open={showStoreInfoModal}
        onClose={() => setShowStoreInfoModal(false)}
      >
        <>
          <Modal.Head>
            <h2 className="text-2xl">Store Information</h2>
          </Modal.Head>

          <Modal.Body>
            <>
              <div className="" style={{ fontFamily: "Roboto" }}>
                <div className="flex items-center gap-x-4">
                  <h4>Phone Number</h4>
                  <h4 className="p-2 tracking-widest border">
                    {" "}
                    (234) 294-1205
                  </h4>
                </div>

                <div className="">
                  <h4>Address</h4>
                  <h4 className="text-sm text-gray-400">
                    1914 C. City Center Enugu
                  </h4>
                </div>
                <hr className="my-2" />

                <div className="">
                  <h6 className="mb-2">Open Hours for TuesDay, Jan 17</h6>
                  <h6>Business</h6>
                  <h6>6am - 9am</h6>
                </div>
                <hr className="my-2" />

                <div className="">
                  <h6>Cards Accepted</h6>
                  <div className="flex">
                    <Image
                      src={images.MasterCardImage}
                      className="object-contain h-14 w-14"
                      alt="Master Card"
                    />
                    <Image
                      src={images.VisaCardImage}
                      className="object-contain h-14 w-14"
                      alt="Visa Card"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="px-3 py-1 tracking-widest text-black border rounded-md outline-none hover:bg-blue-400"
                    onClick={() => {
                      setShowStoreInfoModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          </Modal.Body>
        </>
      </Modal.Frame>
    </div>
  );
};

export default StoreInfoModal;
