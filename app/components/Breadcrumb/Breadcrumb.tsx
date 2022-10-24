import React from "react";

type BreadcrumbProps = { children: React.ReactNode };

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-between items-center lg:px-28 px-10 py-8 border-b border-white/10">
      {children}
    </div>
  );
};

export default Breadcrumb;
