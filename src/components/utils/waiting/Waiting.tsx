export function Waiting(props:any) {
    return (
            <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color:"green"
            }}>{props.waiting}</p>
    )
}