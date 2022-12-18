export const arrayShuffle = (array) => {
  const clonedArray = [...array];
  for (let i = clonedArray.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = clonedArray[randomIndex];

    clonedArray[randomIndex] = clonedArray[i];
    clonedArray[i] = itemAtIndex;
  }
  return clonedArray;
};
