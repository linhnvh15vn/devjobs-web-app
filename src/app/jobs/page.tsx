import React from 'react';

import JobCard from '@/components/job/job-card';
import data from '@/data.json';

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8">
      {data.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
