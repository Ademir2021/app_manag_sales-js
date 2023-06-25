import './index.css'

type Props = {
  int:string;
  end:string;
  setInt:HTMLInputElement | any;
  setEnd:HTMLInputElement | any;
  searchHandle:HTMLButtonElement | any;
}

export function InputSearch(props:Props) {
  return (
    <div className='input-search-container_'>
      <div className='input-search-main_'>
      <form className='input-search-form_'>
        <input className="input-created-init"
          type="date" value={props.int}
          onChange={(e) => props.setInt(e.target.value)} />
        <input className="input-created-end"
          type="date" value={props.end}
          onChange={(e) => props.setEnd(e.target.value)} />
        <button className="btn-search"
          onClick={props.searchHandle}>Buscar</button>
      </form>
      </div>
    </div>

  )
}