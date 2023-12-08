import { Controller,Post } from '@nestjs/common';
import { PaymentgatewayService } from './paymentgateway.service';

@Controller('paymentgateway')
export class PaymentgatewayController {

    constructor(private paymentGatewayservice:PaymentgatewayService){}
    @Post('netbank')
    netbank(){
return this.paymentGatewayservice.netbank()    }
    @Post('upi')
    upi(){
        return this.paymentGatewayservice.upi()
    }
    @Post('card')
    card(){
        return this.paymentGatewayservice.card()
    }
}
