export const truncateString = (
  str,
  startLength = 6,
  endLength = 4,
  separator = "...."
) => {
  if (!str || str.length <= startLength + endLength) {
    return str; // Return the original string if it's too short to truncate
  }
  return `${str.slice(0, startLength)}${separator}${str.slice(-endLength)}`;
};
