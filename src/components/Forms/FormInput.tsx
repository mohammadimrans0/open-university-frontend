"use client"

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  label?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
}

const FormInput = ({ name, type, label, size, value, placeholder }: IInput) => {

  const { control, formState: { errors } } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

    return (
      <>
        {label ? label : null}
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            type === "password" ? (
              <Input.Password
                {...field}
                type={type}
                size={size}
                placeholder={placeholder}
                value={value ? value : field.value}
              />
            ) : (
              <Input
                {...field}
                type={type}
                size={size}
                placeholder={placeholder}
                value={value ? value : field.value}
              />
            )
          }
        />
        <small style={{color: 'red'}}>{errorMessage}</small>
      </>
    );
};

export default FormInput;