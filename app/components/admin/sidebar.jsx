import React from "react";
import Link from "next/link";
const sidebar = () => {
  return (
    <>
      <div className="flex flex-col px-5 py-5 min-h-[80vh] bg-slate-400">
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/category">Category</Link>
        </li>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
        <li>
          <Link href="/admin/users">Users</Link>
        </li>
        <li>
          <Link href="/admin/orders">Orders</Link>
        </li>
      </div>
    </>
  );
};

export default sidebar;
