/**
 * Отсортировать массив объектов по полю date
 */

const arr = [
  { date: '10.01.2017' },
  { date: '21.13.2002' },
  { date: '05.11.2016' },
];

// const getDate = ({ date }) => new Date(...date.split('.').reverse())
// const sorter = (o1, o2) => getDate(o1) - getDate(o2)

const sorter = () => true;

console.log(arr.sort(sorter));
