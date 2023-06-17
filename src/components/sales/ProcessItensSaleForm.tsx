import './register-sale-module.css'

type TProcessItensSaleForm= {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
}

export function ProcessItensSaleForm({
  handleChange,
  handleSubmit,
  children,

}: TProcessItensSaleForm) {

  return (
      <div className="container" >
        <div className="main">
          <div className='f-form'>
            <form style={{fontSize:'12px'}} onSubmit={handleSubmit}>
              <header>
              <div>
              <strong><span>Filial </span>{children.filial}</strong>
              </div>
              <div>
              <strong><span>User </span>{children.user_id}</strong>
              <strong><span> </span>{children.user}</strong>
              </div>
              <div>
              <strong><span>Cliente </span>{children.fk_name_pers}</strong>
              <strong><span> </span>{children.name_pers}</strong>
              </div>
              </header>

              <main>
                <strong><span>Total Produtos: R$ </span>{children.tItens}</strong>
                <div>
                <strong><span>Desconto </span>{children.disc_sale}</strong>
                </div>
                <strong><span>Total Nota: R$</span>{children.tNote}</strong>
              </main>

              <input className='sale-input-disc_sale'
                type='number'
                name="disc_sale"
                value={children.disc_sale }
                placeholder='Desconto'
                required
                onChange={handleChange}
                />
              <button className='sale-save-update'>Gravar Venda</button>
            </form>
            </div>
          </div>
        </div>
  );
}