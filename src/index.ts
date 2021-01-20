import { useEffect, useState } from 'react';

export const useEkko = (name, initialValue = null): [string, (string) => void] => {
  const initialStoredValue: string = window.localStorage.getItem(name) !== undefined ? JSON.parse(window.localStorage.getItem(name)) : initialValue;

  const [value, setValue] = useState<string>(initialStoredValue);

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}
