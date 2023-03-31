export type ISale = {
    id_sale:string;
    created_at:Date | string | undefined | any;
    fk_name_pers:number;
    val_rec:number;
    disc_sale:number;
    total_sale:number
};
