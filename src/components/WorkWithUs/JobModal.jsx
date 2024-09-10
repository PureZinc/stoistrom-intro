import Modal from "../Modal";

export default function JobModal(params) {
    const isOpen = params.isOpen;
    const setIsOpen = params.setIsOpen;
    const jobDetail = params.jobDetail;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}
        title={`Title: ${jobDetail.title}`}
    >
        <p>{jobDetail.description}</p>
        <p className="main-font-lg mt-5">Positions: {jobDetail.positions}</p>
        <div className="mt-6 flex justify-end">
            <a href={jobDetail.link}><button className="main-button">Sign Up</button></a>
        </div>
    </Modal>
  )
}
