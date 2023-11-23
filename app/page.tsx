import JobCard from "@/components/jobCard";
import { jobs } from "@/data";

const HomePage = () => {
  return (
    <div className="flex justify-center mt-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 border w-full">
        {jobs.map((job) => (
          <JobCard
            key={job.title}
            company={job.company}
            title={job.title}
            time={job.time}
            location={job.location}
            logo={job.logo}
            logoBg={job.logoBgColor}
            type={job.type}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
