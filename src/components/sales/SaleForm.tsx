import './styles.css'

type TSaleForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
  handleEdit: any;
  handleNew: any;
  modalRef?: any;
  className?: string;
  close?: any;
  list: HTMLSelectElement | HTMLOptionElement | any;
  item: any
  amount: number
}

export function SaleForm({
  handleChange,
  handleSubmit,
  children,
  handleEdit,
  handleNew,
  modalRef,
  className,
  close,
  list,
  item,
  amount
}: TSaleForm) {

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div className="container">
        <div className="main">
          <button className="btn-modal" onClick={close}>Voltar</button>
          <div className='f-form'>
            <form onSubmit={handleSubmit}>
              <label className='sale-label-item'>{item}</label>
              <datalist id="data-itens">
                {list}
              </datalist>
              <input className='sale-input-item'
                type="search"
                list="data-itens"
                name="descric"
                value={children.descric || ""}
                placeholder='Busque um Item'
                onChange={handleChange}
              />
              <label className='sale-label-amount' >{amount}</label>
              <input className='sale-input-amount'
                type="number"
                name="amount"
                value={children.amount || 1}
                placeholder='Quant'
                onChange={handleChange}
              />
              <button className='sale-send'>Salvar</button>
            </form>
            <form onClick={handleEdit}>
              <button className='sale-edit'>Editar</button>
            </form>
            <form onSubmit={handleNew}>
              <button className='sale-delete'>Deletar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}