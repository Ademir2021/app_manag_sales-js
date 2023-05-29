import "../assets/dist/css/bootstrap.min.css"

type PropsNavBar = {
    home: string;
    register: string;
    update: string;
    login: string;
    sale: string
    person: string;
    product: string
    listPerson: string;
    listProduct: string;
}

export function NavBar(props: PropsNavBar): JSX.Element {

    let isHome = 'Home'
    let isLogin = 'Entrar'
    let isRegister = 'Criar conta'
    let isUpdate = ''
    let isSale = 'Compras'
    let isCadastros = 'Atendimento'
    let isPerson = ''
    let isProduct = ''
    let isListagem = 'Listagem'
    let isListPerson = ''
    let isListProduct = ''
    const res: any = localStorage.getItem('u')
    if (JSON.parse(res) !== null) {
        isHome = "Painel Usuário"
        isLogin = 'Sair'
        isRegister = ''
        isUpdate = 'Atualizar conta'
        isSale = 'Comprar'
        isCadastros = 'Cadastros'
        isPerson = "Novo Cliente"
        isProduct = 'Novo Produto'
        isListagem = "Listagem"
        isListPerson = "Listar Pessoas"
        isListProduct = 'Listar Produtos'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo da Empresa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu Principal</h5>
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">{isCadastros}</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={props.person}>{isPerson}</a></li>
                                    <li><a className="dropdown-item" href={props.product}>{isProduct}</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Vazio</a></li>
                                    <li><a className="dropdown-item" href="#">Vazio</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">{isListagem}</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={props.listPerson}>{isListPerson}</a></li>
                                    <li><a className="dropdown-item" href={props.listProduct}>{isListProduct}</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Vazio</a></li>
                                    <li><a className="dropdown-item" href="#">Vazio</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3 mt-lg-0" role="search">
                            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}