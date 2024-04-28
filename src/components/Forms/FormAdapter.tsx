import { Controller } from "react-hook-form";
import type { Control, ControllerRenderProps } from "react-hook-form";

export type FormAdapterProps = {
  name: string;
  control: Control<any>;
  renderComponent: (params: ControllerRenderProps) => JSX.Element;
};
export const FormAdapter = ({
  name,
  control,
  renderComponent,
}: FormAdapterProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return renderComponent(field);
      }}
    />
  );
};
