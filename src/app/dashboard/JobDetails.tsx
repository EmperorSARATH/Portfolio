"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function JobDetails() {
  const selectedJob = useSelector((state: RootState) => state.job.selectedJob);

  if (!selectedJob) {
    return <p>No job selected.</p>;
  }


  return (
    <div className="p-4 rounded-xl bg-white shadow-md w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Frontend Developer</h2>

      <div className="space-y-2 text-sm sm:text-base text-gray-700">
        <p>
          <span className="font-semibold">Company:</span> TechSpark Inc.
        </p>
        <p>
          <span className="font-semibold">Location:</span> Remote / Bangalore
        </p>
        <p>
          <span className="font-semibold">Salary:</span> ₹10 - ₹15 LPA
        </p>
        <p>
          <span className="font-semibold">Experience:</span> 2+ years
        </p>
        <p>
          <div className="mt-4 flex flex-wrap gap-2">
            <p>Skills Required: </p> {selectedJob?.skills.map((skill) => (
              <span key={skill.objectId} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </p>

        <p className="mt-4 text-gray-600">
          {selectedJob?.description}
        </p>
      </div>
    </div>
  );
}

