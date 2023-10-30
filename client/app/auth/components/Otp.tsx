import React from "react";

type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  handleOtp: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Otp = ({ value, valueLength, onChange, handleOtp }: Props) => {
  const RE_DIGIT = new RegExp(/^\d+$/);

  const valueItems = React.useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Enter your OTP</h1>
      <form onSubmit={(e) => handleOtp(e)} className="flex flex-col gap-5 w-full">
        <p className="text-gray-500 text-xs font-[500] opacity-80">
          We emailed you a code. Please input the code here for account
          verification
        </p>
        <div className="grid grid-cols-6 aspect-square max-h-[50px] gap-5">
          {" "}
          {valueItems.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={valueLength}
              className="border text-gray-500 outline-none rounded-lg flex justify-center items-center text-center font-semibold text-2xl"
              value={digit}
              onChange={(e) => inputOnChange(e, idx)}
              onKeyDown={inputOnKeyDown}
              onFocus={inputOnFocus}
            />
          ))}
        </div>
        <button className="h-[50px] bg-primary rounded-lg text-white border-primary border-2  hover:bg-white hover:text-primary hover:border-primary hover:border-2 duration-200 transition-all hover:font-semibold">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Otp;
