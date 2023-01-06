import { useState, useEffect, Fragment } from 'react';
import { Box } from '@mui/material';
import useSWR, { Key, Fetcher } from 'swr';
import type { Data } from '../pages/api/invoices';
import axios from 'axios';

import MonthPicker from '../components/monthPicker';
import { getYear, getMonth } from 'date-fns';

export default function Invoice() {
  const [st, setSt] = useState<string>('');
  const fetcher: Fetcher<Data, string> = (url: string) =>
    fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR('/api/invoices', fetcher);
  const fetchUser = (date: Date) => {
    let year = getYear(date);
    let month = getMonth(date) + 1;
    console.log(`the year is ${year}`);
    console.log(`the month is ${month}`);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  // useEffect(() => {ya
  //   fetchUser();
  // }, [date]);
  return (
    <Fragment>
      <Box sx={{ ml: 3, mt: 3 }}>
        <MonthPicker onSelectDate={fetchUser} />
      </Box>

      <div>{data?.name}</div>
    </Fragment>
  );
}
