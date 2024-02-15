const arr = [2, 5, 3, 6, 4, 1];

const analyzeArray = (arr) => {
  const min = arr.reduce((prev, curr) => Math.min(prev, curr));
  const max = arr.reduce((prev, curr) => Math.max(prev, curr));
  const average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  const len = arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: len,
  };
};

// console.log(analyzeArray(arr));

export { analyzeArray };
