import { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { parse } from 'date-fns';
import MonthPicker from '../components/monthPicker';

export default function Invoice() {
  const [date, setDate] = useState<Date | null>(new Date());
  useEffect(() => {
    // Update the document title using the browser API
    console.log(date);
  }, [date]);
  return (
    <Box sx={{ ml: 3, mt: 3 }}>
      <MonthPicker onSelectDate={setDate} />
    </Box>
  );
}
