import React from 'react';

import qs from 'query-string';

import JobCard from '@/components/job/job-card';
import Search from '@/components/search';
import { type Job } from '@/types';

interface Props {
  searchParams: {
    q: string;
    location: string;
    ft: boolean; // full-time contract filter
  };
}

const fetchJobs = async (
  params: Record<string, string | boolean>,
): Promise<Job[]> => {
  const url = qs.stringifyUrl(
    {
      url: 'http://localhost:8080/jobs',
      query: params,
    },
    { skipNull: true },
  );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }

  const data = (await response.json()) as Job[];

  return data;
};

export default async function Page({ searchParams }: Props) {
  const jobs = await fetchJobs(searchParams);

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
