// src/utils/math.js
export const getRandomFloat = (min, max) => 
  Math.random() * (max - min) + min;

export const getRandomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;