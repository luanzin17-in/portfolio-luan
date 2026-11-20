"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["/", "Home"], ["/sobre", "Sobre"], ["/academica", "Acadêmica"], ["/profissional", "Profissional"], ["/projetos", "Projetos"]];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <Link href="/" className="logo">LL</Link>
      <nav aria-label="Principal">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={path === href ? "on" : ""} aria-current={path === href ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
