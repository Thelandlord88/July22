// src/utils/geoHandler.js

// 1. Import the raw data directly from the JSON file.
//    The `assert { type: 'json' }` is a modern security and performance feature
//    that ensures the file is parsed as JSON, not executed as JavaScript.
import suburbData from '../data/suburbs.json' assert { type: 'json' };

/**
 * @typedef {object} Suburb
 * @property {string} name - The full name of the suburb.
 * @property {string} slug - A URL-friendly version of the name.
 * @property {string} postcode - The 4-digit postcode.
 * @property {string[]} landmarks - A list of notable landmarks.
 * @property {{lat: number, lng: number}} coords - The geographical coordinates.
 */

/**
 * This static array is the SINGLE SOURCE OF TRUTH for all suburb-related data.
 * It is used during the build process on the SERVER to generate static pages.
 * There is no need for a separate client-side fetching function.
 * @type {Suburb[]}
 */
export const suburbs = suburbData;
/**
 * Returns the static suburb data. Used during the build process.
 * @returns {Suburb[]}
 */
export function loadSuburbData() {
  return suburbs;
}

// The misleading and redundant `loadSuburbDataClient` function has been correctly removed.
// All access to this data should be through the direct import of the `suburbs` constant.