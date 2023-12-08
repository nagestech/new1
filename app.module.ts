import { Module ,NestModule,,RequestMethod,MiddlewareConsumer} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PaymentgatewayModule } from './paymentgateway/paymentgateway.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports :[AppModule,AuthModule,PaymentgatewayModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer   
         .apply(LoggerMiddleware)
         .forRoutes({path:'auth',method:RequestMethod.ALL});
  }

}
