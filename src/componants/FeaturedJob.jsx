import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="text-center container mx-auto">
      <h1 className="text-5xl">Featured Jobs {jobs.length}</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-2 gap-6 justify-center items-center mt-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <button onClick={()=> setDataLength(jobs.length)} className=" mt-7 px-5 py-3 bg-[#7E90FE] rounded-md text-xl font-extrabold text-white">
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
