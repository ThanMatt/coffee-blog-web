import { InputProps } from "@nextui-org/react";
import { FormAdapter, FormAdapterProps } from "./FormAdapter";
import { TextField } from "../TextField";
import { Control, FieldError } from "react-hook-form";

export type FormTextFieldProps = {
  name: string;
  control: Control<any>;
  error?: FieldError;
} & InputProps;

export const FormTextField = ({
  name,
  control,
  error,
  ...textFieldProps
}: FormTextFieldProps) => {
  return (
    <FormAdapter
      name={name}
      control={control}
      renderComponent={({ onChange, ...controllerProps }) => {
        return (
          <TextField
            error={error?.message}
            onChange={onChange}
            {...controllerProps}
            {...textFieldProps}
          />
        );
      }}
    />
  );
};
