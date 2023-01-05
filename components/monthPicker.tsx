import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subMonths } from 'date-fns';

interface dateFuncProps {
  onSelectDate: (date: Date) => void;
}

const MonthPicker = (props: dateFuncProps) => {
  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();
  const [selectDate, setSelectDate] = useState<Date>(new Date());
  //const [selectDate, setSelectDate] = useState<Date>();

  const setInitialDate = () => {
    const now = new Date();
    const min = subMonths(now, 6);
    setMaxDate(now);
    setMinDate(min);
  };
  useEffect(() => {
    setInitialDate();
  }, []);
  // useEffect(() => {
  //   props.onSelectDate(selectDate as Date);
  // }, [selectDate]);
  return (
    <DatePicker
      views={['year', 'month']}
      label="Year and Month"
      minDate={minDate}
      maxDate={maxDate}
      value={selectDate}
      onChange={(newDate) => {
        console.log(`newDate is ${newDate}`);
        setSelectDate(newDate as Date);
      }}
      // onClose={() => {
      //   console.log(`selectDate is ${selectDate}`);
      //   props.onSelectDate(selectDate as Date);
      //   //setSelectDate(tempDate);
      // }}
      renderInput={(params) => <TextField {...params} helperText={null} />}
    />
  );
};

export default MonthPicker;
