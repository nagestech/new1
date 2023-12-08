import { Module } from '@nestjs/common';
import { PaymentgatewayController } from './paymentgateway.controller';
import { PaymentgatewayService } from './paymentgateway.service';

@Module({
  controllers: [PaymentgatewayController],
  providers: [PaymentgatewayService]
})
export class PaymentgatewayModule {}
