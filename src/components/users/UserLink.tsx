import './UserLink.css'

type Links = {
    title:string;
    link:any;
}

export function UserLink ({title, link}:Links){

    return(
        <>
        <span>{title}!&nbsp; 
        {link}</span>
        </>
    )
}
