import bcrypt from "bcryptjs-react";



export function crypt(user: any) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user, salt);
  return hash
}

export function UsersValFields(user:any) {
  let msg = ''
  if (user.name == '') { msg += 'Digite o seu Nome Completo!!\n' };
  if (user.username == '') { msg += 'Digite um Email válido!!\n' };
  if (user.password == '') { msg += "Digite sua Senha !!\n" };
  if (user.psw_repeat != user.password) { msg += "Senha digitada errado\n" };
  if (msg != '') {
    alert(msg)
    return false;
  };
  return true;
};
