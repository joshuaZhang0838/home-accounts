import { useState, useEffect, Fragment } from 'react';
import { Box } from '@mui/material';
import useSWR from 'swr';
import axios from 'axios';

import MonthPicker from '../components/monthPicker';
import { getYear, getMonth } from 'date-fns';

export default function Invoice() {
  //const [date, setDate] = useState<Date>(new Date());
  const [st, setSt] = useState<string>('');

  const fetchUser =  (date: Date) => {
    // const fetcher = (url:string) => axios.get<string>(url).then(res => res.data)
    // let url = '/api/invoices';
    // const ff = useSWR(url,fetcher);
    // console.log(ff);
    //setSt(ff.data.name);
    let year = getYear(date);
    let month = getMonth(date) + 1;
    console.log(`the year is ${year}`);
    console.log(`the month is ${month}`);
    
  };
  // useEffect(() => {ya
  //   fetchUser();
  // }, [date]);
  return (
    <Fragment>
      <Box sx={{ ml: 3, mt: 3 }}>
        <MonthPicker onSelectDate={fetchUser} />
      </Box>
      <Box>{st}</Box>
    </Fragment>
  );
}
