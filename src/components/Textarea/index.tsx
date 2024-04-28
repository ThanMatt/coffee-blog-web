import {
  Textarea as NXTArea,
  TextAreaProps as NXTAreaProps,
} from "@nextui-org/react";

export type TextareaProps = {
  error?: string;
} & NXTAreaProps;

export const Textarea = ({
  placeholder,
  className,
  error,
  ...props
}: TextareaProps) => {
  return <NXTArea isInvalid={!!error} errorMessage={error} {...props} />;
};
