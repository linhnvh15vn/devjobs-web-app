import React from 'react';

import qs from 'querystring';

import JobCard from '@/components/job/job-card';
import Search from '@/components/search';
import { type Job } from '@/types';

interface Props {
  searchParams: {
    location?: string;
  };
}

const fetchJobs = async ({ searchParams }): Promise<Job[]> => {
  const response = await fetch(
    `http://localhost:8080/jobs?${qs.stringify(searchParams)}`,
  );
  if (!response.ok) {
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Job[] = await response.json();

  return data;
};

export default async function Page({ searchParams }: Props) {
  const jobs = await fetchJobs({ searchParams });

  return (
    <div className="container space-y-14">
      <Search />
      <div className="grid grid-cols-1 gap-y-6 pb-52 md:grid-cols-2 md:gap-x-3 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
