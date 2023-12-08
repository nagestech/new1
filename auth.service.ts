import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

login(){
    return {user:"nages",password:"1234"}
}

signup(){
    return {name:"nages",email:"nageswaran102000@gmail.com",password:"1234"}
}

}
