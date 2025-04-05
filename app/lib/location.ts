
import geoip from "geoip-lite"


export function getLocation(ip: string) {
    const geo = geoip.lookup(ip)
    if (!geo) {
        return null
    }
    const { country, region, city, ll, area, timezone } = geo
    return {
        country,
        region,
        city,
        area: area ? area : 0,
        latitude: ll[0],
        longitude: ll[1],
        timezone,
    }
}