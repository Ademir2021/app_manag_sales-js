import "../assets/dist/css/bootstrap.min.css"

type PropsNavBar = {
    home?: string;
    register?: string;
    update?: string;
    login?: string;
    sale?: string
    person?: string;
    product?: string
    listPerson?: string;
    listProduct?: string;
    listSale?:string;
    usersList?:string;
    upPerson?:string;
    uṕProduct?:string;
    list?: HTMLSelectElement | HTMLOptionElement | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined | any;
    descric?:string;
}

export function NavBar(props: PropsNavBar): JSX.Element {
    let isHome = 'Home'
    let isLogin = 'Entrar'
    let isRegister = 'Criar conta'
    let isUpdate = ''
    let isSale = 'Compras'
    let isCadastros = 'Cadastros'
    let isPerson = ''
    let isProduct = ''
    let isListagem = 'Consultas'
    let isListPerson = ''
    let isListProduct = ''
    let isListSale =''
    let isListUser = ''
    let isUpPerson = ''
    let isUpProduct = ''
    const res: any = localStorage.getItem('u')
    if (JSON.parse(res) !== null) {
        isHome = "Painel Usuário"
        isLogin = 'Sair'
        isRegister = ''
        isUpdate = 'Atualizar conta'
        isSale = 'Comprar'
        isCadastros = 'Cadastrar'
        isPerson = "Novo Cliente"
        isProduct = 'Novo Produto'
        isListagem = "Consultar"
        isListPerson = "Listar Clientes"
        isListProduct = 'Listar Produtos'
        isListSale = 'Listar Vendas'
        isListUser = 'Listar Usuários'
        isUpPerson = "Atualizar Clientes"
        isUpProduct ="Atualizar Produtos"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:'gray'}} aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color:'gray'}} href="/dashboard">{ 'Sistema de Gestão de Vendas'}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" style={{backgroundColor:'gray'}} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">SIS - Gestão de Vendas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={props.home}>{isHome}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={props.register}>{isRegister}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={props.update}>{isUpdate}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={props.login}>{isLogin}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={props.sale}>{isSale}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">{isCadastros}</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={props.person}>{isPerson}</a></li>
                                    <li><a className="dropdown-item" href={props.product}>{isProduct}</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href={props.upPerson}>{isUpPerson}</a></li>
                                    <li><a className="dropdown-item" href={props.uṕProduct}>{isUpProduct}</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">{isListagem}</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={props.listPerson}>{isListPerson}</a></li>
                                    <li><a className="dropdown-item" href={props.listProduct}>{isListProduct}</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href={props.listSale}>{isListSale}</a></li>
                                    <li><a className="dropdown-item" href={props.usersList}>{isListUser}</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form onSubmit={props.handleSubmit} className="d-flex mt-3 mt-lg-0" role="search">
                            <datalist id='data-itens' >{props.list}</datalist>
                            <input className="form-control me-2" type="search" placeholder="Pesquisar Produtos" aria-label="Search"
                            list='data-itens' name='descric' value={props.descric}
                            onChange={props.handleChange}/>
                            <button className="btn btn-primary" type="submit">Buscar</button>
                        </form >
                    </div>
                </div>
            </div>
        </nav>
    )
}