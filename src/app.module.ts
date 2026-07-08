import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountRegistrationModule } from './account_registration/account_registration.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [PrismaModule, AccountRegistrationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
