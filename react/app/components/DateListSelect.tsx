'use client';

import { Dispatch, SetStateAction } from "react";

interface DateListSelectProps {
  setDisplayPeriod: Dispatch<SetStateAction<string>>;
}

const DateListSelect = ({ setDisplayPeriod }: DateListSelectProps) => {
  return (
    <div className="max-w-fit inline-block justify-self-end">
      <select defaultValue='last 7' onChange={(e) => {
        setDisplayPeriod(e.target.value);
      }} className="w-full text-sm p-3 text-gray-800 rounded-lg appearance-none hover:bg-neutral-300">
        <option value='today'>Today only</option>
        <option value='last 7'>Last 7 days</option>
        <option value='last 30'>Last 30 days</option>
        <option value='last year'>Last year</option>
        <option value='all'>All</option>
      </select>
    </div>
  )
};

export default DateListSelect;