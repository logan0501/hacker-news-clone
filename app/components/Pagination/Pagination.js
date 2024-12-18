"use client";

import clsx from "clsx";

import { createPagination } from "@/app/lib/utils";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import styles from "./pagination.module.css";

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pages = createPagination(currentPage, totalPages);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={styles.paginationContainer}>
      <Link href={createPageURL(currentPage - 1)}>
        <button disabled={currentPage <= 1} className={styles.pageBtn}>
          Prev
        </button>
      </Link>
      {pages.map((page) =>
        page === "..." ? (
          "..."
        ) : (
          <Link href={createPageURL(page)} key={page}>
            <button
              onClick={() => createPageURL(page)}
              className={clsx(
                { [styles.selected]: currentPage === page },
                styles.pageBtn
              )}
            >
              {page}
            </button>
          </Link>
        )
      )}
      <Link href={createPageURL(currentPage + 1)}>
        <button disabled={currentPage >= totalPages} className={styles.pageBtn}>
          Next
        </button>
      </Link>
    </div>
  );
}
