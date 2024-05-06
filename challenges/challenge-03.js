import data from "../data/schedule.json";

/**
 * Loop through the schedule, and find all the acts that are playing - Then populate a new array with the name (string) of the acts.
 * - Check the `/data/schedule.json` file for JSON structure
 * - Remove acts called **`break`**
 * - Remove acts that have been **cancelled**
 *
 * @example
 *   import data from '../data/schedule.json'
 *
 *   buildArtistList(data) => [
 *    "AC/DC",
 *    "Abbott and Sons",
 *    "Auer - Towne",
 *    ...
 *   ]
 *
 * @param schedule
 * @returns {Array<string>}
 */
export function buildArtistList(schedule = data) {
  const artistList = [];
  // Add code here ‍💻

  return artistList;
}
