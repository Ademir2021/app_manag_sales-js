

import './header.css'

type PropsHeader={
    counter:number;
    subtotal:number;
}

export function Header(props:PropsHeader){
    return(
        <>
        <div className='header-home'>
        <strong className='header-home-fale-conosco'>Fale conosco</strong>
        <strong className='header-home-carrinho' ></strong>
        <strong className='header-home-counter'>{props.counter}</strong>
        <strong className='header-home-sub-total'> {'SubTotal ' + props.subtotal}</strong>
        </div>
        </>
    )
}