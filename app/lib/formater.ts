
/**
 * Converts latitude and longitude coordinates into a query string format.
 * 
 * @param latitude - The latitude coordinate.
 * @param longitude - The longitude coordinate.
 * @returns A string in the format "latitude,longitude".
 */
export function formatCoordinatesToQuery(latitude: number, longitude: number): string {
    return `${latitude},${longitude}`;
}