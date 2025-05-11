import { Module } from '@nestjs/common';
import { AppModule as ServiceModule } from '@apps/service';

@Module({
  imports: [ServiceModule],
})
export class AppModule {

}
