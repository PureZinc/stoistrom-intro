import Intro from "../components/Intro";
import JobDetail from "../components/WorkWithUs/JobDetail";

export default function WorkWithUs() {
    return (
      <div className="my-3">
          <Intro 
            title="Stoistrom is Hiring!"
            subtitle="We're a small group of devs building a big project!"
          />
          <JobDetail />
      </div>
    )
  }