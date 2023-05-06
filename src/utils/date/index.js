export const getChatTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const getChatDate = (date) => {
  const year = date.getFullYear();
  const mounth = date.getMonth() + 1;
  const dates = date.getDate();

  return `${year}-${mounth}-${dates}`;
};
