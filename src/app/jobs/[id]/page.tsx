import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  params: {
    id: number;
  };
}

// fix later
export default async function Page({ params }: Props) {
  const response = await fetch(`http://localhost:3000/api/jobs/${params.id}`);
  if (!response.ok) {
    return <h1>Loadiing...</h1>;
  }

  const job = await response.json();

  console.log(job);

  return (
    <div className="space-y-20">
      <div className="container max-w-3xl space-y-8">
        <Card className="items-center gap-10 md:flex">
          <CardHeader className="relative md:p-0">
            <div
              className="absolute -top-1/2 left-1/2 flex size-[50px] -translate-x-1/2 items-center rounded-2xl md:relative md:size-[140px] md:rounded-none"
              style={{ backgroundColor: `${job.logoBackground}` }}
            >
              <Image
                src={job.logo}
                fill
                alt="company"
                className="object-none md:object-contain md:px-6"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 text-center md:p-0 md:text-left">
            <h3>{job.company}</h3>
            <p>scoot.com</p>
          </CardContent>
          <CardFooter className="flex justify-center md:p-0 md:pr-10">
            <Link href="/" className={buttonVariants({ variant: 'default' })}>
              Company Site
            </Link>
          </CardFooter>
        </Card>

        <Card className="md:p-4">
          <CardHeader className="flex items-start justify-between gap-12 md:flex-row md:items-center">
            <div className="space-y-2">
              <p>
                {job.postedAt} - {job.contract}
              </p>
              <h1 className="text-xl md:text-[28px]">{job.position}</h1>
              <h4>{job.location}</h4>
            </div>
            <Link
              href="/"
              className={cn(
                'w-full md:w-fit',
                buttonVariants({ variant: 'default' }),
              )}
            >
              Apply Now
            </Link>
          </CardHeader>
          <CardContent className="space-y-10">
            <p>{job.description}</p>

            <div className="space-y-6">
              <h3>Requirements</h3>
              <p>{job.requirements.content}</p>
              <ul className="list-inside list-disc">
                {job.requirements.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3>What You Will Do</h3>
              <p>{job.role.content}</p>
              <ul className="list-inside list-decimal">
                {job.role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer>
        <Card>
          <div className="container max-w-3xl items-center justify-between p-6 md:flex">
            <div className="hidden md:block">
              <h3>{job.position}</h3>
              <p>So Digital Inc.</p>
            </div>
            <Link
              href="/"
              className={cn(
                'w-full md:w-fit',
                buttonVariants({ variant: 'default' }),
              )}
            >
              Apply Now
            </Link>
          </div>
        </Card>
      </footer>
    </div>
  );
}
