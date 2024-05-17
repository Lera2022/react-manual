import { TextField } from "@material-ui/core";
import { useState, useCallback } from "react";

export default function Example() {
    const [value, setValue] = useState("");

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <TextField
            style={{ margin: '20px' }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            onChange={handleChange}
        />
    );
}

<Fab color="secondary" aria-label="edit">
    Edit!
</Fab>