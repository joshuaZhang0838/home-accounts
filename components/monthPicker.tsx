import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subMonths } from 'date-fns';

interface dateFuncProps {
  onSelectDate: (date: Date | null) => void;
}

const MonthPicker = (props: dateFuncProps) => {
  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();
  const [tempDate, setTempDate] = useState<Date | null>(new Date());
  const [selectDate, setSelectDate] = useState<Date | null>(null);

  const setInitialDate = () => {
    const now = new Date();
    const min = subMonths(now, 6);
    setMaxDate(now);
    setMinDate(min);
  };
  useEffect(() => {
    setInitialDate();
  }, []);
  useEffect(() => {
    props.onSelectDate(selectDate);
  }, [selectDate]);
  return (
    <DatePicker
      views={['year', 'month']}
      label="Year and Month"
      minDate={minDate}
      maxDate={maxDate}
      value={tempDate}
      onChange={(newDate) => {
        setTempDate(newDate);
      }}
      onClose={() => {
        setSelectDate(tempDate);
      }}
      renderInput={(params) => <TextField {...params} helperText={null} />}
    />
  );
};

export default MonthPicker;
