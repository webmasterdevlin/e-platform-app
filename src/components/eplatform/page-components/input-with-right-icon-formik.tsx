import React, { FormEvent } from 'react';
import PlainErrorMessage from './plain-error-message';
type Props = {
  handleOnChange?: (input: FormEvent<HTMLInputElement>) => void;
  handleOnBlur?: (input: FormEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  icon?: string;
  handleOnIconClick?: () => void;
};

const InputWithRightIconFormik: React.FC<Props> = ({
  handleOnChange,
  handleOnBlur,
  id,
  label,
  value,
  placeholder,
  icon,
  handleOnIconClick,
}) => (
  <div className={'mb-5'}>
    <label className={'font-weight-bold'} htmlFor={id}>
      {label}
    </label>
    <div className="input-with-icon righticon">
      <div>
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <a onClick={handleOnIconClick}>
          <i className={`${icon}`} />
        </a>
      </div>
    </div>
    <PlainErrorMessage id={id} />
  </div>
);

export default InputWithRightIconFormik;
