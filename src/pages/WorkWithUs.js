import Intro from "../components/Intro";
import useLoad from "../hooks/useLoad";

export default function WorkWithUs() {

    const jobDetails = [
        {
            title: "Developer",
            description: `Build and maintain our UI/UX and logic with ReactNative. Create screens that
              bring self-improvement to life and programmatically efficient code that makes productivity easy!`
        },
        {
            title: "Marketer",
            description: `Bring attention to our app as a Marketer, creating compelling campaigns
              and promoting our message of self-improvement anywhere on Social Media!`
        },
    ]

    const { dataIndex: jobIndex } = useLoad(jobDetails);

    return (
      <div className="my-3">
          <Intro 
            title="Stoistrom is Hiring!"
            subtitle="We're a small group of devs building a big project!"
          />
          <div className="grid md:grid-cols-2 grid-cols-1">
            {jobDetails.map((job, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-center items-center text-center hover:scale-90
                    bg-gradient-to-t from-orange-100 to-white p-4 m-4 border border-dashed border-black
                    transition-all duration-300 opacity-0 cursor-pointer ${index <= jobIndex && 'fade-in'}`}
                >
                    <h3 className="text-3xl mb-3">{job.title}</h3>
                    <p>{job.description}</p>
                </div>
            ))}
          </div>
      </div>
    )
  }