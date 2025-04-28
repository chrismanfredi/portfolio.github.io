"use client";
import { useEffect, useState } from "react";
export default function TypingTextEffect({
  fullText,
  classes,
}: {
  fullText: string;
  classes?: string;
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 90); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [fullText, index]);

  return (
    <p className={classes ? classes : ""}>
      {displayText}
      {fullText.length != displayText.length ? (
        <span className="animate-pulse">_</span>
      ) : (
        ""
      )}
    </p>
  );
}