import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { title } from "process";

interface cars{
    modal:string,

}
interface Props{
    title: string,
    carOptions: cars[]
}

 function SingleSelect(props : Props) {
  return (
      <div>
          <h4>{props.title}</h4>
        <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
            id="tags-outlined"
            options={props.carOptions}
            getOptionLabel={(option) => option.modal}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField
                {...params}
                label="filterSelectedOptions"
                placeholder="Search"
            />
            )}
        />
        </Stack>
      </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top


export default SingleSelect;