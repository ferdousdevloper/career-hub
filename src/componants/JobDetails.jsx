import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("You have applied successfully");
  };

  return (
    <>
      <div>
        <div className="relative bg-[#7E90FE0D] h-[400px] mb-24">
          <img className="absolute bottom-0" src={bg1} alt="" />
          <h1 className="absolute top-[50%] left-[50%]">Job Details</h1>
          <img className=" absolute top-0 right-0" src={bg2} alt="" />
        </div>
      </div>
      <div className="container mx-auto mb-32">
        
        <div className="md:grid grid-cols-3 gap-8">
          <div className="col-span-2 leading-10">
            <p>
              <strong>Job Description: </strong>
              {job_description}
            </p>
            <p>
              <strong>Job Responsibility: </strong>
              {job_responsibility}
            </p>
            <h1>
              <strong>Educational Requirements:</strong>
            </h1>
            <p>{educational_requirements}</p>
            <h1>
              <strong>Experiences:</strong>
            </h1>
            <p>{experiences}</p>
          </div>
          <div className="col-span-1 bg-[#7E90FE1A] p-8 rounded-lg leading-10">
            <h1>
              <strong>Job Detailes</strong>
            </h1>
            <hr />
            <p>
              <strong>Salary: </strong>
              {salary}
            </p>
            <p>
              <strong>Job Title: </strong>
              {job_title}
            </p>
            <h1>
              <strong>Contact Information</strong>
            </h1>
            <hr />
            <p>
              <strong>Phone: </strong>
              {contact_information.phone}
            </p>
            <p>
              <strong>Email: </strong>
              {contact_information.email}
            </p>
            <p>
              <strong>Address: </strong>
              {contact_information.address}
            </p>

            <button
              onClick={handleApplyJob}
              className="w-full px-5 py-3 bg-[#7E90FE] rounded-md text-xl font-extrabold text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default JobDetails;
