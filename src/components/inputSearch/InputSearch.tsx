
import './index.css'


export function InputSearch(props:any) {

  return (
    <div className='input-search-container_'>
      <div className='input-search-main_'>
      <form className='input-search-form_'>
        <input className="input-created-init"
          type="date" value={props.created_int}
          onChange={(e:any) => props.setInt(e.target.value)} />
        <input className="input-created-end"
          type="date" value={props.created_end}
          onChange={(e:any) => props.setEnd(e.target.value)} />
        <button className="btn-search"
          onClick={props.searchSales}>Buscar</button>
      </form>
      </div>
    </div>

  )
}