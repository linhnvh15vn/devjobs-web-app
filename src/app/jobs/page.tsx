import React from 'react';

import JobCard from '@/components/job/job-card';
import Search from '@/components/search';

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/jobs');
  const data = await response.json();

  return (
    <div className="container space-y-14">
      <Search />
      <div className="grid grid-cols-1 gap-y-6 pb-52 md:grid-cols-2 md:gap-x-3 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
