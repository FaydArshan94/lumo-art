"use client";

import GlobalCursor from "../components/cursor/GlobalCursor";

export default function ClientProviders({ children }) {
  return (
    <>
      <GlobalCursor />
      {children}
    </>
  );
}
