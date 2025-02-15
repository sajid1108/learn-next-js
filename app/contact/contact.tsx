"use client";
import { useState, useEffect } from "react";

export function Contact() {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue("nomer wa +6285728163159");
  }, [value]);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
