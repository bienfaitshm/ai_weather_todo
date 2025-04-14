import { getClientIPAddress } from "remix-utils/get-client-ip-address";
import { getLocation } from "@/lib/location";


/**
 * Retrieves the geographical position of the client based on their IP address.
 * If the IP address cannot be determined, a default IP is used for testing purposes.
 *
 * @param request - The incoming HTTP request object.
 * @returns A promise resolving to an object containing the client's IP address,
 *          city, latitude, longitude, region, timezone, and country.
 */
export async function getPosition(request: Request): Promise<{
    ip: string;
    city: string;
    latitude: number;
    longitude: number;
    region: string;
    timezone: string;
    country: string;
}> {
    const defaultIp = "41.243.2.163"; // Default IP for testing purposes
    const clientIp = getClientIPAddress(request) || defaultIp;

    const location = getLocation(clientIp);

    return {
        ip: clientIp,
        city: location?.city ?? "Unknown",
        latitude: location?.latitude ?? 0,
        longitude: location?.longitude ?? 0,
        region: location?.region ?? "Unknown",
        timezone: location?.timezone ?? "Unknown",
        country: location?.country ?? "Unknown",
    };
}