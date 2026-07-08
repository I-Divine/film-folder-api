import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account_registration.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
