import { Input, InputProps } from "@nextui-org/react";

export type TextFieldProps = {
  error?: string;
} & InputProps;

export const TextField = ({ error, ...props }: TextFieldProps) => {
  return (
    <Input
      color={error ? `danger` : `default`}
      errorMessage={error}
      {...props}
    />
  );
};
