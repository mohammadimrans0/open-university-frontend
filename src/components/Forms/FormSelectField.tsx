"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  label?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  options,
  name,
  label,
  size,
  placeholder
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select onChange={onChange} options={options} value={value} placeholder={placeholder} size={size} style={{
            width: '100%'
          }} />
        )}
      />
    </>
  );
};

export default FormSelectField;
