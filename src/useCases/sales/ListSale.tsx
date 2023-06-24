import { useState } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import api from '../../services/api/api'
import { BackHome } from "../../components/utils/backHome/BackHome";
import { InputSearch } from "../../components/inputSearch/InputSearch";

type TSaleList = {
  id_sale: string;
  created_at: 'date' | string | any;
  fk_name_pers: number;
  val_rec: number;
  disc_sale: number;
  total_sale: number
};

export function ListSales() {

  const [sales, setSales] = useState<TSaleList[]>([]);
  const [created_int, setInt] = useState<Date | any>('')
  const [created_end, setEnd] = useState<Date | any>('')

  function searchSales() {
    setSales([])
    setInt(created_int)
    setEnd(created_end)
    getSales()
  };

  const getSales = async () => {
    try {
      await api.get<TSaleList[]>('/sales')
        .then(response => {
          const res:TSaleList[] = response.data
          let data_sale:TSaleList[] = []
          for(let i = 0; res.length > i; i++){
            if(res[i].created_at >= created_int  && res[i].created_at <= created_end){
              data_sale.push((res[i]))
              setSales(data_sale)
            }
          }
        })
    } catch (err) {
      alert("error occurred !!: " + err);
    }
  };

  return (
    <>
      <BackHome />
            <InputSearch
            created_int = {created_int}
            created_end = {created_end}
            setInt = {setInt}
            setEnd = {setEnd}
            searchSales = {searchSales}
             />

      {sales.length === 0 ? <p style={{
        display:'flex', flexDirection:'column', alignItems:'center'
      }}>Carregando...</p> : (
        sales.map((sale: TSaleList) => (
          <SalesList
            key={sale.id_sale}
            id={sale.id_sale}
            create={FormatDate(sale.created_at)}
            name={sale.fk_name_pers}
            total_prod={sale.val_rec}
            disc_sale={sale.disc_sale}
            total_note={sale.total_sale}
          />
        )))}
    </>
  )
}