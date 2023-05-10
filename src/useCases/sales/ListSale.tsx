import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import { ISale } from "./ISale";
import api from '../../services/api/api'
import { Links } from "../../components/dashboard/Links";

export function ListSales() {

  const [sales, setSales] = useState<ISale[]>([]);

  const getSales = async () => {
    try {
      await api.get<ISale[]>('/sales')
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
    <Links/>
      <div style={{ fontSize: '18px' }}>Lista de Vendas</div>
      {sales.length === 0 ? <p>Carregando...</p> : (
        sales.map((sale: ISale) => (
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