import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subMonths, getMonth } from 'date-fns';

interface dateFuncProps {
  onSelectDate: (date: Date) => void;
}

const MonthPicker = ({ onSelectDate }: dateFuncProps) => {
  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();
  const [selectDate, setSelectDate] = useState<Date>(new Date());

  const setInitialDate = () => {
    const now = new Date();
    const min = subMonths(now, 6);
    setMaxDate(now);
    setMinDate(min);
  };
  useEffect(() => {
    setInitialDate();
  }, []);
  return (
    <DatePicker
      openTo="month"
      views={['year', 'month']}
      label="Year and Month"
      inputFormat="yyyy/MM"
      minDate={minDate}
      maxDate={maxDate}
      value={selectDate}
      onMonthChange={(newDate) => {
        setSelectDate(newDate);
        onSelectDate(newDate);
      }}
      onChange={() => {}}
      renderInput={(params) => <TextField {...params} helperText={null} />}
    />
  );
};

export default MonthPicker;
