export type IUser = {
  name: string;
  username: string;
  password: string;
  psw_repeat: string;
}

export type IUserLogin = {
  username: string;
  password: string;
}

export type IUsers = {
  id:string;
  created_at:string;
  name:string;
  username:string;
  password:string;
  update?:any;
}

export type IUpdUsers ={
  id:number;
  created_at?:any
  name:string;
  username:string;
  password?:string;
}