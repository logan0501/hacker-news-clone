export const getDomainNameFromURL = (url) => {
  const domainName = url?.replace(/(https?:\/\/)?(www.)?/i, "").split("/")[0];
  return domainName;
};

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const timeAgo = (timestamp) => {
  const now = Date.now();
  const inputDate = new Date(timestamp * 1000);
  console.log(now, timestamp);
  const diffInSeconds = Math.floor((now - inputDate) / 1000);
  console.log(diffInSeconds);

  if (diffInSeconds < MINUTE) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < HOUR) {
    const minutesAgo = Math.floor(diffInSeconds / MINUTE);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < DAY) {
    const hoursAgo = Math.floor(diffInSeconds / HOUR);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 7 * DAY) {
    const daysAgo = Math.floor(diffInSeconds / DAY);
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return inputDate.toLocaleDateString("en-US", options);
  }
};

export const createPagination = (currentPage, totalPages) => {
  if (totalPages < 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
