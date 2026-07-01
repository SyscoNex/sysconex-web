import Link from "next/link";

export default function NavLink({ to, children, ...props }) {
  // Map "to" prop to Next.js "href"
  return (
    <Link href={to} {...props}>
      {children}
    </Link>
  );
}
