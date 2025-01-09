import { FormFieldProps } from "../../../types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="w-full px-4 py-2 mt-4 rounded-md border border-amber-900 bg-gray-100 text-gray-900"
    />
    {error && (
      <span className="error-message text-sm font-semibold text-white">
        {error.message}
      </span>
    )}
  </>
);
export default FormField;
