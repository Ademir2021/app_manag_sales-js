import '../global-module.css'
import './index.css'

type TRegisterSaleForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
  handleDelete: any;
  handleSaveUpdate: any;
  handleSearchItem: any;
  list: HTMLSelectElement | HTMLOptionElement | any;
  item: any
  amount: number | string;
  valor:number | string 
  statusBtnSaveUpdate: "Salvar" | "Atualizar";
  statusBtnSaleSubmit:"Iniciar" | "Enviar";
  loadItens:string | any;
  totalItens:number | string;
  item_img:any;
}

export function RegisterSaleForm({
  handleChange,
  handleSubmit,
  children,
  handleDelete,
  handleSaveUpdate,
  handleSearchItem,
  list,
  item,
  amount,
  valor,
  statusBtnSaveUpdate,
  statusBtnSaleSubmit,
  loadItens,
  totalItens,
  item_img
}: TRegisterSaleForm) {

  return (
      <div className="container_">
        <div className="main_">
          {/* <div>Check out de controle de Vendas</div> */}
          <img className='item-img' src={item_img} alt='image'></img>
          <div className='form_'>
            <form onSubmit={handleSaveUpdate}>
              <label className='sale-label-descric'>{item}</label>
              <datalist id="data-itens">
                {list}
              </datalist>
              <input className='sale-input-descric'
                type="search"
                list="data-itens"
                name="descric"
                value={children.descric}
                placeholder='Busque um Item'
                required
                onChange={handleChange}
              />
              <label className='sale-label-amount' >{amount}</label>
              <input className='sale-input-amount'
                type="number"
                name="amount"
                value={children.amount}
                placeholder='Quant'
                onChange={handleChange}
                required
              />
               <input className='sale-input-id'
                type="text"
                name="id"
                value={children.id || "ID"}
                placeholder='ID'
                onChange={handleChange}
                disabled
              />
               <input className='sale-input-item'
                type="text"
                name="item"
                value={children.item || "Item"}
                placeholder='Item'
                onChange={handleChange}
                disabled
              />
              <input className='sale-input-val-max'
                type="text"
                name="valor"
                value={children.tItem || "Unitário"}
                placeholder='Valor'
                onChange={handleChange}
                disabled
              />
              <span className='load-list-itens' >{loadItens}</span>
              <label className='sale-label-valor' >{valor}</label>
              <label className='sale-label-total-itens' >{totalItens}</label>
              <button className='sale-save-update'>{statusBtnSaveUpdate}</button>
            </form>
            <form onClick={handleSubmit}>
              <button className='sale-submit'>{statusBtnSaleSubmit}</button>
            </form>
            <form onSubmit={handleDelete}>
              <button className='sale-delete'>Deletar</button>
            </form>
            <form onSubmit={handleSearchItem}>
              <button className='sale-search-item'>Buscar Item</button>
            </form>
          </div>
        </div>
      </div>
  );
}