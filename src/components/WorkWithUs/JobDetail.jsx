import { jobDetails } from "./jobDetails"
import useLoad from "../../hooks/useLoad";
import { useState } from "react";
import JobTitle from "./JobTitle";

export default function JobDetail() {
    const jobs = jobDetails;
    const { dataIndex: jobIndex } = useLoad(jobDetails);
    const [modal, setModal] = useState(false);

    function openModal(name) {
        setModal(!modal);
    }

  return (
    <>
    <div className="grid-container-2-1">
        {jobs.map((job, index) => (
            <div
                key={index}
                className={`main-card ${index <= jobIndex && 'fade-in'}`}
                onClick={() => openModal(job.title)}
            >
                <h3>{job.title}</h3>
                <p>{job.description}</p>
            </div>
        ))}
    </div>
    <JobTitle isOpen={modal} setIsOpen={setModal} />
    </>
  )
}
