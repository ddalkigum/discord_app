/**
 * 
 * @param date yyyy-MM-ddThh:mm:ssZ
 */
export const getDatetimeToKor = (datetime: string) => {
  const [date, time] = datetime.slice(0, datetime.length - 1).split('T')
  const [year, month, day] = date.split('-');
  let [hour, minute, second] = time.split(':');

  let hourPrefix = '오전';

  if (Number(hour) > 11) {
    hourPrefix = '오후';
    hour = String(Number(hour) - 12);
  }

  return `${year}.${month}.${day} ${hourPrefix} ${hour}:${minute}`
}