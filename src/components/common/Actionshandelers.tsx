import React, { useState, useEffect } from "react";
import Button from "src/components/common/Button";
import styles from "styles/Table.module.css";
import Modal from "src/components/common/Modal";
import TinyModal from "src/components/common/Modal/TinyModal";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { PATCH } from "src/utilities/webService";
import { APPROVED_STATUS_OF_PROGRAM } from "src/utilities/APIUrls";

export default function Actionshandelers({el, setupdate}:any) {
  const [Approved, setApproved] = useState(false);
  const [Rejected, setRejected] = useState(false);
  const [confirmApprove, setConfirmApprove] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);
  const router = useRouter();

  useEffect(() => {}, []);

  let handleApproved = (elId: any, status: string) => {
    
    // return 
    let obj = {
      _id: elId?._id,
      status: status,
    };
    PATCH(APPROVED_STATUS_OF_PROGRAM, obj)
      .then((res: any) => {
        handleClose()
        setConfirmApprove(false);
        status.includes('APPROVED_BY_LENDER') ? setApproved(true) : setRejected(true);
        setConfirmReject(false);
        setupdate(res)
        // setRejected(true);
        
      })
      .catch((error: any) => {
        throw error;
      });
  };


  let handleClose =()=>{
    setTimeout(()=>{
        
        setRejected(false);
        setApproved(false)
    },2000)
  }

  const ConfirmApproveModal = () => {
    return (
      <Modal
        isModalOpen={Boolean(confirmApprove)}
        closeModal={() => setConfirmApprove(false)}
        headerClass={"border-none"}
      >
        <div className="ml-8 mr-4">
          <div>{`I approve this party ${el?.anchorId?.organisationId?.name} to be added to this program - ${el?.anchorId?.generatedProgramId}`}</div>
          <div className="flex justify-around my-4">
            <Button
              variant="outlined"
              color="darkBlue"
              className="bg-[#2E77AE] font-bold w-24 text-white text-center py-1 px-3 lg:px-0 mr-6 lg:mr-44 md:rounded-full"
              onClick={() => {
                handleApproved(el, "APPROVED_BY_LENDER");
              }}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              color="red"
              className="font-bold w-24 text-center py-1 rounded-full"
              onClick={() => setConfirmApprove(false)}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    );
  };

  const ConfirmRejectModal = () => {
    return (
      <Modal
        isModalOpen={Boolean(confirmReject)}
        closeModal={() => setConfirmReject(false)}
        headerClass={"border-none"}
      >
        <div className="ml-8 mr-4">
          <div className="flex justify-center">
            {`Are you sure you want to Reject this party`}
          </div>
          <div className="flex justify-around my-6">
            <Button
              variant="outlined"
              color="darkBlue"
              className="bg-[#2E77AE] font-bold w-24 text-white text-center py-1 px-3 lg:px-0 mr-6 lg:mr-44 md:rounded-full"
              onClick={() => {
                handleApproved(el, "REJECTED_BY_LENDER");
              }}
              // onClick={() => {
              // 	setConfirmReject(false)
              // 	setRejected(true)
              // }}
            >
              Yes
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="red"
              className=" font-bold  w-24 text-center py-1 rounded-full"
              onClick={() => setConfirmReject(false)}
            >
              NO
            </Button>
          </div>
        </div>
      </Modal>
    );
  };

  const showApprovedModal = () => {
    return (
      <TinyModal
        isModalOpen={Boolean(Approved)}
        closeModal={handleClose}
        title={`${el?.anchorId?.organisationId?.name} has been successfully approved`}
        titleStyle="text-green"
        icon={
          <BsCheckCircle
            className="text-green flex justify-center items-center mx-4"
            size={40}
            onClick={() => setApproved(false)}
          />
        }
      />
    );
  };

  const showRejectedModal = () => {
    return (
      <TinyModal
        isModalOpen={Boolean(Rejected)}
        closeModal={handleClose}
        title={`${el?.anchorId?.organisationId?.name} was rejected ! `}
        titleStyle="text-red"
        icon={
          <BsExclamationCircle
            className="text-red flex justify-center items-center mx-4"
            size={40}
            onClick={() => setRejected(false)}
          />
        }
      />
    );
  };

  return (
    <div
      className={`lg:p-5 ${styles.tabledata} font-medium  border-r border-white text-center`}
    >
      <div
        className={`flex justify-center lg:justify-around ${
            'flex-row' 
        } lg:flex-row`}
      >
        <Button
          type="submit"
          variant="contained"
          className="bg-green w-24 my-2 md:my-0 font-bold px-4 text-white text-center py-2 rounded-full md:rounded-full"
          onClick={() => {
            setConfirmApprove(true);
          }}
        >
          Approve
        </Button>
        <Button
          type="submit"
          variant="outlined"
          color="red"
          className="font-bold w-24 my-2 md:my-0 px-4 text-red text-center py-2 rounded-full"
          onClick={() => {
            setConfirmReject(true);
          }}
        >
          Reject
        </Button>
        {/* {showView && (
					<Button
						type='submit'
						variant='outlined'
						className='bg-[#E0EAF5] w-24 my-2 md:my-0 font-bold text-darkBlue text-center py-2 rounded-full'
						onClick={() => router.push(`/entity-approvals/${el?.entityId}`)}
					>
						View
					</Button>
				)} */}
      </div>
      {ConfirmApproveModal()}
      {showApprovedModal()}
      {ConfirmRejectModal()}
      {showRejectedModal()}
    </div>
  );
}
