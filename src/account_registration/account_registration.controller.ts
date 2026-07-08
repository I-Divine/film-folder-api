import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountRegistrationService } from './account_registration.service';
import { CreateAccountDto } from './dto/create-account_registration.dto';
import { UpdateAccountDto } from './dto/update-account_registration.dto';

@Controller('account-registration')
export class AccountRegistrationController {
  constructor(private readonly accountRegistrationService: AccountRegistrationService) {}

  @Post()
  create(@Body() accountDetails: CreateAccountDto) {
    return this.accountRegistrationService.create(accountDetails);
  }


}
