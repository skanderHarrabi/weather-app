export const convertUnixTimestampToTime = (unixTimestamp: number): string => {
  const milliseconds = unixTimestamp * 1000;

  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the time as "HH:MM:SS" (24-hour format)
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedTime;
};

export const convertUnixTimestampToDate = (unixTimestamp: number): string => {
  const milliseconds = unixTimestamp * 1000;
  const date = new Date(milliseconds);

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const year = date.getFullYear();

  // Format the date as "DD/MM/YYYY"
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  return formattedDate;
};
