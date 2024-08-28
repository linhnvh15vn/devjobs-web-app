'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const schema = z.object({
  q: z.string().nullish(),
  location_like: z.string().nullish(),
  ft: z.boolean().nullish(),
});

export default function Search() {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    // Construct the query string
    const queryString = new URLSearchParams(values).toString();
    // Push the new URL with query params
    router.push(`/jobs?${queryString}`);
  };

  return (
    <Form {...form}>
      <form
        className="flex h-20 items-center gap-6 rounded-lg bg-white px-4 lg:px-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem className="flex flex-1 basis-2/5 items-center space-y-0">
              <Image
                src="/assets/desktop/icon-search.svg"
                width={24}
                height={24}
                alt="search"
                className="hidden md:block"
              />
              <FormControl>
                <Input
                  type="search"
                  className="flex-1 text-ellipsis border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Filter by title, companies, expertise…"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="hidden md:block" />
        <FormField
          control={form.control}
          name="location_like"
          render={({ field }) => (
            <FormItem className="hidden basis-1/5 items-center space-y-0 md:flex">
              <Image
                src="/assets/desktop/icon-location.svg"
                width={17}
                height={24}
                alt="search"
              />
              <FormControl>
                <Input
                  className="flex-1 text-ellipsis border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Filter by location..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="hidden md:block" />
        <FormField
          control={form.control}
          name="ft"
          render={({ field }) => (
            <FormItem className="hidden basis-1/5 items-center gap-4 space-y-0 md:flex">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Full Time</FormLabel>
            </FormItem>
          )}
        />
        <Image
          src="/assets/mobile/icon-filter.svg"
          width={20}
          height={20}
          alt="filter"
          className="md:hidden"
        />
        <Button type="button" size="icon" className="md:hidden">
          <SearchIcon />
        </Button>
        <Button type="submit" className="hidden flex-1 md:block">
          Search
        </Button>
      </form>
    </Form>
  );
}
