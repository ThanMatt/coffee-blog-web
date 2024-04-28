import { FormAdapter } from "./FormAdapter";
import { Control, FieldError } from "react-hook-form";
import { Textarea, TextareaProps } from "../Textarea";
import { TextAreaProps } from "@nextui-org/react";

export type FormTextareaProps = {
  name: string;
  control: Control<any>;
  error?: FieldError;
} & TextAreaProps;

export const FormTextarea = ({
  name,
  control,
  error,
  ...textareaProps
}: FormTextareaProps) => {
  return (
    <FormAdapter
      name={name}
      control={control}
      renderComponent={({ onChange, ...controllerProps }) => {
        return (
          <Textarea
            error={error?.message}
            onChange={onChange}
            {...controllerProps}
            {...textareaProps}
          />
        );
      }}
    />
  );
};
