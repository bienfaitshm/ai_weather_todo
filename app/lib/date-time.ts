import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export const FORMAT_DATE = {
    HOME_TIME:"HH : mm",
    HOME_DATE:"EEEE | MMMM dd",
    DETAIL_DATE:"dd MMMM",
    SECOND:"ss"
} as const

export function formatDateTime(date:Date, _format:string = FORMAT_DATE.HOME_DATE): string{
    return format(date,_format,{locale: fr})
}
