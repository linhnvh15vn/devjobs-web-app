import React from 'react';

import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface Props {
  job: any;
}

export default function JobCard({ job }: Props) {
  return (
    <Card className="mt-6">
      <CardHeader className="relative">
        <div
          className="absolute -top-1/2 flex size-[50px] items-center rounded-2xl"
          style={{ backgroundColor: `${job.logoBackground}` }}
        >
          <Image src={job.logo} fill alt="com" className="object-none" />
        </div>
      </CardHeader>

      <CardContent>
        <p>
          {job.postedAt} - {job.contract}
        </p>
        <h3>{job.position}</h3>
        <p>{job.company}</p>
      </CardContent>

      <CardFooter>
        <h4>{job.location}</h4>
      </CardFooter>
    </Card>
  );
}
