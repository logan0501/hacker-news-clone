"use client";

import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { NAV_LINK_ITEMS, NAV_ROUTES } from "./navbar.constant";

import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.navContainer}>
        <li className={styles.brand}>
          <Image
            src="/logo.svg"
            alt="Hacker news logo"
            width={18}
            height={18}
          />
        </li>
        <li>
          <Link
            href={NAV_ROUTES.HOME}
            className={clsx({
              [styles.navItemSelected]: pathname === NAV_ROUTES.HOME,
            })}
          >
            <strong>Hacker News</strong>
          </Link>
        </li>
        <span className={styles.navItemsContainer}>
          {NAV_LINK_ITEMS.map((linkItem) => (
            <li key={linkItem?.path}>
              <Link
                href={linkItem?.href}
                className={clsx({
                  [styles.navItemSelected]: pathname === linkItem?.href,
                })}
              >
                {linkItem?.label}
              </Link>
            </li>
          ))}
        </span>
      </ul>
    </nav>
  );
}
