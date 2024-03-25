import { Link } from "react-router-dom";
import location2 from "../assets/icons/location2.png";
import money from "../assets/icons/money.png";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="text-left p-10 rounded-lg border">
      <img className="mb-8" src={logo} alt="" />
      <div>
        <h1 className="mb-2 text-[#474747] text-2xl font-extrabold">
          {job_title}
        </h1>
        <p className="mb-4 text-[#474747] text-xl font-semibold">
          {company_name}
        </p>
        <div className="flex gap-6 mb-4">
          <div className="border border-[#7E90FE] rounded-lg px-5 py-2 text-[#7E90FE] font-extrabold">
            {remote_or_onsite}
          </div>
          <div className="border border-[#7E90FE] rounded-lg px-5 py-2 text-[#7E90FE] font-extrabold">
            {job_type}
          </div>
        </div>
      </div>
      <div className="md:flex gap-6 mb-4 text-[#474747] text-xl font-semibold">
        <div className="flex mb-4">
          <img className="" src={location2} alt="" />
          <p>{location}</p>
        </div>
        <div className="flex mb-4">
          <img src={money} alt="" />
          <p>Salary : {salary}</p>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="px-5 py-3 bg-[#7E90FE] rounded-md text-xl font-extrabold text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
