import React from "react";

// next
import Link from "next/link";

// props
export type ListItemProps = {
  id: string;
  link: string;
  jaTitle: string;
  enTitle: string;
};

const ListItem = ({ id, link, jaTitle, enTitle }: ListItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="hidden sm:block sm:mr-10 sm:text-center sm:group"
    >
      <p className="text-xs ">{jaTitle}</p>
      <h3 className="text-base">{enTitle}</h3>
    </Link>
  );
};

export default ListItem;
