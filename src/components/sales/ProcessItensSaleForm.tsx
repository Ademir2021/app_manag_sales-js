import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

import '../global-module.css'
import './index.css'

type TProcessItensSaleForm= {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
  loadItens?:any
}

export function ProcessItensSaleForm({
  handleChange,
  handleSubmit,
  children,
  loadItens
}: TProcessItensSaleForm) {

  return (
      <div className="container_" >
        <div className="main_">
          <div className='form_'>
          
            <form onSubmit={handleSubmit}>
              <header>
              <div>
              <div><>Filial </>{children.filial}</div>
              </div>
              <div>
              <div><>User_ID </>{children.user_id}</div>
              <div><>User_email </>{children.user}</div>
              </div>
              <div>
              <div><>Cliente_ID </>{children.fk_name_pers}</div>
              <div><>Cliente </>{children.name_pers}</div>
              </div>
              </header>
              <main style={{color:"aqua"}} >
                <div><>Total Produtos </>{currencyFormat(children.tItens)}</div>
                <div>
                <div><>Desconto </>{currencyFormat(children.disc_sale)}</div>
                </div>
                <div><>Total Nota </>{currencyFormat(children.tNote)}</div>
                <div>
                <div><>Pagamento </>{currencyFormat(children.paySale)}</div>
                </div>
              </main>

              <input className='sale-input-payment-sale'
                type='number'
                name="paySale"
                value= {children.paySale || ""}
                placeholder="Pagamento"
                required
                onChange={handleChange}
                />

              <input className='sale-input-disc_sale'
                type='number'
                name="disc_sale"
                value={children.disc_sale || ""}
                placeholder='Desconto'
                required
                onChange={handleChange}
                />
              <button className='sale-send-sale'>Gravar Venda</button>
              <span className='load-list-itens' >{loadItens}</span>
            </form>
            </div>
            </div>
          </div>
  ); 
}