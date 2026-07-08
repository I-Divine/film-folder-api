import { Module } from '@nestjs/common';
import { AccountRegistrationService } from './account_registration.service';
import { AccountRegistrationController } from './account_registration.controller';

@Module({
  controllers: [AccountRegistrationController],
  providers: [AccountRegistrationService],
})
export class AccountRegistrationModule {}
