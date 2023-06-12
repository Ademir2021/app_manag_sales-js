import './styles.css'

type TListItens = {
    itens: any[];
    editar: string | number | any
}

export function ListItens(props: TListItens) { 
                    
    const editar = <></>

    const content = props.itens.map((item) =>
        <div className='container-list-itens' >
            <div className='main-list-itens'>
                <span key={item.id}>ID:{item.id} </span>
                <span>Item:{item.id} </span>
                <span>{item.descric} </span>
                <span>{item.amount}</span>
                <span>X{item.valor}</span>
                <span>=R${item.tItem}</span>
                <span><strong> {props.editar}</strong></span>
            </div>
        </div>
    );
    return (
        <>
            {content} {editar}
        </>
    );
}