export const formatDate = (d: string) => {
  const date = new Date(d);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];

  return `${month}月${day}日 (${dayOfWeekStr})`;
};
