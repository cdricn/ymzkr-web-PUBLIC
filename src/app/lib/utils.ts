/**
 * Stylizes the MDY date from the database.
 *
 * @param {string} dateStr - The date from the database.
 * @returns {string} The new stylized MDY string.
*/
export const formatMDYDate = (dateStr: string) => {
  const date = dateStr.slice(0, 6) + "," + dateStr.slice( 6);
  return date;
}

/**
 * Stylizes the Y.M date from the database.
 *
 * @param {string} dateStr - The date from the database.
 * @returns {string} The new stylized YM string.
*/
export const formatYMDate = (dateStr: string) => {
  const date = dateStr.slice(0, 4) + "." + dateStr.slice(5);
  return date;
}

/**
 * Calculates the animation delay for an element based on its index.
 *
 * @param {number} increment - The delay for each subsequent element.
 * @param {number} delay - The time between the delays of each element.
 * @param {number} initial - The index of the element. Default value is 1.
 * @returns {object} An object containing the animDelay style property.
*/
export const animDelay = (increment: number, delay: number, initial: number = 1) => {
  return {
    animationDelay: `${(increment + initial) * delay}s`
  }
}

export const extractCharsToArray = (string: string) => {
  const charArr = []
  for (let i=0; i<string.length; i++) {
    charArr[i] = string[i]
  }
  return charArr;
}