import { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Styles {
  marginTop: string;
}

function RangePicker() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  let styles: Styles = {
    marginTop: "20px",
  };
  const adapter:any = AdapterDateFns;
  return (
    <div>
      <h4>Date Time Picker</h4>
      <LocalizationProvider dateAdapter={adapter}>
        <Stack spacing={3}>
          <MobileDateTimePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDateTimePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Date & Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}

export default RangePicker;
/*  */
