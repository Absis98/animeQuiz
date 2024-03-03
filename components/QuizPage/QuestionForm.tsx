import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export function QuestionForm(props: any) {
  const [selectedOption, setSelectedOption] = useState(null as any);

  const handleSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    props.setAnswer(event.target.value);
  };

  return (
    <Box width={"75%"}>
      <Box 
        display='flex'
        justifyContent='center'
        sx={{
            fontSize: '2rem',
            fontWeight: 'strong',
            marginX: 'auto'
        }}
    >
        {props.questionData?.questionText}
    </Box>

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={selectedOption}
          onChange={handleSelectAnswer}
        >
          {props.options?.map((option: any) => {
            return (
              <FormControlLabel
                key={option + props.questionData?.id}
                sx={{
                  border: "1px solid lightgrey",
                  width: "100%",
                  margin: "8px 0",
                  borderRadius: "8px",
                  padding: '4px 8px'
                }}
                value={option}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

function handleSelectAnswer(event: Event | undefined, arg1: any) {
  throw new Error("Function not implemented.");
}

function setValue(value: string) {
  throw new Error("Function not implemented.");
}
