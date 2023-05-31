import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import api from '../../services/api/api'
import { BackHome } from "../../components/utils/backHome/BackHome";

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

  const getSales = async () => {
    try {
      await api.get<TSaleList[]>('/sales')
        .then(response => {
          setSales(response.data)
        })
    } catch (err) {
      alert("error occurred !!: " + err);
    }
  }

  useEffect(() => {
    getSales()
  }, []);

  return (
    <>
      <BackHome />
      {sales.length === 0 ? <p>Carregando...</p> : (
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