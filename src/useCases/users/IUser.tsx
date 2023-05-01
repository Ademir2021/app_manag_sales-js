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
  link?:any;
}

export type IUpdUsers ={
  id:number;
  name:string;
  username:string;
  password?:string;
}