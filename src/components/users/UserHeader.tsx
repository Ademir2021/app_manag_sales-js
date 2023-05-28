
type PropsHeader = {
    name:string;
}

export function Header(props: PropsHeader) {
    return (
        <legend><h3>{props.name}</h3></legend>
    )
}

