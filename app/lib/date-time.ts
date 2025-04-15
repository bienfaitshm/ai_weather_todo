import { format, parse } from 'date-fns'
import { fr } from 'date-fns/locale'

export const FORMAT_DATE = {
    HOME_TIME:"HH : mm",
    HOME_DATE:"EEEE | MMMM dd",
    DETAIL_DATE:"dd MMMM",
    SECOND:"ss",
    DATE:"yyyy-MM-dd"
} as const

export function formatDateTime(date:Date, _format:string = FORMAT_DATE.HOME_DATE): string{
    return format(date,_format,{locale: fr})
}

export function parseDate(date:string, _format: string= FORMAT_DATE.DATE){
    return parse(date, _format, new Date())
}