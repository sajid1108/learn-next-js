"use client";
import { useState, useEffect } from "react";

export function About() {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue("Ini About, Namaku Sajid");
  }, [value]);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
