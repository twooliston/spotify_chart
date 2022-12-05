const ListensDays = (data) => {
  const newData = {};
  for (const dataPart of data) {
    for (const item of dataPart) {
      const time = item.endTime.split(" ")[0];
      newData[time] = newData[time] ? newData[time] + 1 : 1;
    }
  }
  return newData;
};

export const ListensHour = (data) => {
  const newData = [];
  let count = 0;
  for (const dataPart of data) {
    for (const item of dataPart) {
      let time = +item.endTime.split(" ")[1].slice(0, 2); // + at the start removes leading 0s
      newData[time] = newData[time] ? newData[time] + 1 : 1;
    }
  }
  return newData;
};

// const Cinema3Plays = (data) => {
//   const newData = {};

//   for (const item of data) {
//     if (item.artistName === "BROCKHAMPTON") {
//       if (item.trackName === "CINEMA 3") {
//         const time = item.endTime.split(" ")[0];
//         newData[time] = newData[time] ? newData[time] + 1 : 1;
//       }
//     }
//   }
//   return newData;
// };

export default ListensDays;
