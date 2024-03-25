import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility";
import location2 from "../assets/icons/location2.png";
import money from "../assets/icons/money.png";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <>
      <div>
        <div className="relative bg-[#7E90FE0D] h-[400px]">
          <img className="absolute bottom-0" src={bg1} alt="" />
          <h1 className="absolute top-[50%] left-[50%]">Applied Jobs</h1>
          <img className=" absolute top-0 right-0" src={bg2} alt="" />
        </div>
      </div>
      <div className="container mx-auto mb-32">
        <div className="flex justify-end mb-6">
          <details className="dropdown">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>

        <div>
          {displayJobs.map((job) => (
            <div
              key={job.id}
              className=" flex items-center gap-6 text-left p-10 rounded-lg border mb-6"
            >
              <img
                className="mb-8 bg-[#F4F4F4] rounded-lg px-12 py-24"
                src={job.logo}
                alt=""
              />
              <div className="flex items-center w-full">
                <div className="flex-grow">
                  <div>
                    <h1 className="mb-2 text-[#474747] text-2xl font-extrabold">
                      {job.job_title}
                    </h1>
                    <p className="mb-4 text-[#474747] text-xl font-semibold">
                      {job.company_name}
                    </p>
                    <div className="flex gap-6 mb-4">
                      <div className="border border-[#7E90FE] rounded-lg px-5 py-2 text-[#7E90FE] font-extrabold">
                        {job.remote_or_onsite}
                      </div>
                      <div className="border border-[#7E90FE] rounded-lg px-5 py-2 text-[#7E90FE] font-extrabold">
                        {job.job_type}
                      </div>
                    </div>
                  </div>
                  <div className="md:flex gap-6 mb-4 text-[#474747] text-xl font-semibold">
                    <div className="flex mb-4">
                      <img className="" src={location2} alt="" />
                      <p>{job.location}</p>
                    </div>
                    <div className="flex mb-4">
                      <img src={money} alt="" />
                      <p>Salary : {job.salary}</p>
                    </div>
                  </div>
                </div>

                <Link className="" to={`/job/${job.id}`}>
                  <button className="px-5 py-3 bg-[#7E90FE] rounded-md text-xl font-extrabold text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
