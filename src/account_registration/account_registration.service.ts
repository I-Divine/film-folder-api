import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account_registration.dto';
import { UpdateAccountDto } from './dto/update-account_registration.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class AccountRegistrationService {

  constructor(private prisma: PrismaService){}

  async create(accountdetails: CreateAccountDto) {
    let passwordHash: string = await hash(accountdetails.password, 10)
    return this.prisma.user.create({data:{
      username: accountdetails.username,
      email: accountdetails.email,
      passwordHash: passwordHash,
      updatedAt: new Date()
    }});
  }

  
}
