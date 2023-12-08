import { Injectable } from '@nestjs/common';

@Injectable({})
export class PaymentgatewayService {

netbank(){

    return {bankname:"canara",acno:546741232789,name:"nages"}
}
upi(){
    return {upiname:"canara",upiid:"7685632343@ybl"}
}
card(){
    return {bankname:"canara",name:"nages" ,cardno:"156413251658"}
}

}
