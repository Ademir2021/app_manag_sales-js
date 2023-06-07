import bcrypt from "bcryptjs-react";

export function crypt(user: any) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user, salt);
  return hash
}

export function UsersValFields(user:any) {
  let msg = ""
  if (user.name === "") { msg += "Digite o seu nome completo !\n" };
  if (user.username === "") { msg += "Digite um email válido !\n" };
  if (user.password === "") { msg += "Digite sua senha !\n" };
  if (user.psw_repeat !== user.password) { msg += "Senha digitada está errada !\n" };
  if (msg !== "") {
    alert(msg)
    return false;
  };
  return true;
};
