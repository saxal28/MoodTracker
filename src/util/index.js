//===========================================
// date | formatting, data structures...etc
//===========================================

const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thr",
    5: "Fri",
    6: "Sat"
};

const daysArr = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thr",
    "Fri",
    "Sat"
];

const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}

// Jan 12
const formatFullDate =  (date) => {
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
}

//====================================
// FAKE DATA for TESTING
//====================================

const fakeData = [
  {date: new Date(2017, 11, 1), weight: 193, mood: "sad"},
  {date: new Date(2017, 11, 2), weight: 192, mood: "sad"},
  {date: new Date(2017, 11, 3), weight: 191, mood: "sad"},
  {date: new Date(2017, 11, 4), weight: 192.2, mood: "confident"},
  {date: new Date(2017, 11, 5), weight: 190, mood: "axious"},
  {date: new Date(2017, 11, 6), weight: 190.8, mood: "depressed"},
  {date: new Date(2017, 11, 7), weight: 189, mood: "happy"},
  {date: new Date(2017, 11, 8), weight: 187, mood: "happy"},
  {date: new Date(2017, 11, 9), weight: 186, mood: "happy"},
  {date: new Date(2017, 11, 10), weight: 184, mood: "sad"},
  {date: new Date(2017, 11, 11), weight: 184, mood: "sad"},
  {date: new Date(2017, 11, 12), weight: 184, mood: "sad"},
  {date: new Date(2017, 11, 13), weight: 181, mood: "sad"},
  {date: new Date(2017, 11, 14), weight: 181, mood: "confident"},
  {date: new Date(2017, 11, 15), weight: 180.5, mood: "axious"},
  {date: new Date(2017, 11, 16), weight: 180, mood: "depressed"},
  {date: new Date(2017, 11, 17), weight: 179, mood: "happy"},
  {date: new Date(2017, 11, 18), weight: 179, mood: "happy"},
  {date: new Date(2017, 11, 19), weight: 179, mood: "happy"},
  {date: new Date(2017, 11, 20), weight: 179, mood: "sad"},
  ];

  const sortData = (data) => {
        return data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
  };

  const findAverage = (data) => {
        let sum = 0;
        data.forEach(data => sum += data.weight);
        return sum / data.length;
  }


//===================================
// EXPORT
//===================================

export { days, daysArr, months, formatFullDate, fakeData, sortData, findAverage };

