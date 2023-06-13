import './styles.css'

type TSaleForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
  handleDelete: any;
  handleSaveUpdate: any;
  handleSearchItem: any
  modalRef?: any;
  className?: string;
  close?: any;
  list: HTMLSelectElement | HTMLOptionElement | any;
  item: any
  amount: number | string;
  valor:number | string
  statusBtn: string;
}

export function SaleForm({
  handleChange,
  handleSubmit,
  children,
  handleDelete,
  handleSaveUpdate,
  handleSearchItem,
  modalRef,
  className,
  close,
  list,
  item,
  amount,
  valor,
  statusBtn
}: TSaleForm) {

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div className="container">
        <div className="main">
          <button className="btn-modal" onClick={close}>Voltar</button>
          <div className='f-form'>
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
                onChange={handleChange}
              />
              <label className='sale-label-amount' >{amount}</label>
              <input className='sale-input-amount'
                type="number"
                name="amount"
                value={children.amount}
                placeholder='Quant'
                onChange={handleChange}
              />
               <input className='sale-input-id'
                type="text"
                name="id"
                value={children.id }
                placeholder='Quant'
                onChange={handleChange}
                disabled
              />
               <input className='sale-input-item'
                type="text"
                name="item"
                value={children.item}
                placeholder='Quant'
                onChange={handleChange}
                disabled
              />

              <label className='sale-label-valor' >{valor}</label>
              
              <button className='sale-save-update'>{statusBtn}</button>
            </form>
            <form onClick={handleSubmit}>
              <button className='sale-submit'>Enviar</button>
            </form>
            <form onSubmit={handleDelete}>
              <button className='sale-delete'>Deletar</button>
            </form>
            <form onSubmit={handleSearchItem}>
              <button className='sale-search-item'>Ver Preço</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}