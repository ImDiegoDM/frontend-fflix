import { getCookie } from './cookie';

export const isAuth = function(){
  let token = getCookie('token');
  if(token!=""){
    let user={
      name:getCookie('name'),
      email:getCookie('email'),
      login:getCookie('login')
    }
    return {user:user,token:token};
  }else return null;
}
