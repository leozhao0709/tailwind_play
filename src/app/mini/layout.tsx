import Link from 'next/link';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <Link
        className="fixed bottom-5 right-5 text-blue-500 underline underline-offset-4 "
        href="../"
      >
        ← Go Back
      </Link>
    </main>
  );
};

export default layout;
