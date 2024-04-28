import {
  Button as NXTButton,
  type ButtonProps as NXTButtonProps,
} from "@nextui-org/react";

export type ButtonProps = {
  label: string;
  as?: any;
  href?: string;
} & NXTButtonProps;

export const Button = ({
  label,
  color,
  size,
  variant,
  onClick,
  href,
  as,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <NXTButton
      className={className}
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      as={as}
      href={href}
    >
      {label}
    </NXTButton>
  );
};
