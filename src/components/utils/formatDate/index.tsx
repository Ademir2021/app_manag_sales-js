import {format , parseISO} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const  FormatDate = (date:string ) => {
    return format (parseISO(date), "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
        locale: ptBR
    })
}
