//===========================================
// date | formatting, data structures...etc
//===========================================

const daysArr = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thr",
    5: "Fri",
    6: "Sat"
};

const monthsArr = {
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
    const month = monthsArr[date.getMonth()];
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
  ];


//===================================
// EXPORT
//===================================

export { daysArr, monthsArr, formatFullDate, fakeData };

