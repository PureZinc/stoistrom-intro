import { jobDetails } from "./jobDetails"
import useLoad from "../../hooks/useLoad";
import { useState } from "react";
import JobModal from "./JobModal";

export default function JobDetail() {
    const jobs = jobDetails;
    const { dataIndex: jobIndex } = useLoad(jobDetails);
    const [modal, setModal] = useState(false);
    const [jobDetail, setJobDetail ] = useState(0);

    function openModal(job) {
        setModal(!modal);
        setJobDetail(job);
    }

  return (
    <>
    <div className="grid-container-2-1">
        {jobs.map((job, index) => (
            <div
                key={index}
                className={`main-card ${index <= jobIndex && 'fade-in'}`}
                onClick={() => openModal(job)}
            >
                <h3>{job.title}</h3>
                <p>{job.description}</p>
            </div>
        ))}
    </div>
    <JobModal isOpen={modal} setIsOpen={setModal} jobDetail={jobDetail} />
    </>
  )
}
