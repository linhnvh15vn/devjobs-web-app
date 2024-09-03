'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { type Job } from '@/types';

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const router = useRouter();

  return (
    <Card
      className="mt-6 cursor-pointer"
      onClick={() => router.push(`/jobs/${job.id}`)}
    >
      <CardHeader className="relative">
        <div
          className="absolute -top-1/2 flex size-[50px] items-center rounded-2xl"
          style={{ backgroundColor: `${job.logoBackground}` }}
        >
          <Image src={job.logo} fill alt="com" className="object-none" />
        </div>
      </CardHeader>

      <CardContent className="space-y-1">
        <p className="text-muted-foreground">
          {job.postedAt} - {job.contract}
        </p>
        <h3 className="hover:text-muted-foreground">{job.position}</h3>
        <p className="text-muted-foreground">{job.company}</p>
      </CardContent>

      <CardFooter>
        <h4 className="text-primary">{job.location}</h4>
      </CardFooter>
    </Card>
  );
}
