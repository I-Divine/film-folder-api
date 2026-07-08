import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService){}

    async signIn (loginDetails:LoginDto){
        let userDetails : User|null = await this.prisma.user.findUnique({where:{email: loginDetails.email}})
        let passwordCorrect = await compare(loginDetails.password, userDetails?.passwordHash ?? "")
        if(!passwordCorrect){
            throw new UnauthorizedException;
        } 

        let payload = {email: userDetails?.email, sub: userDetails?.userId}
        let access_token = await this.jwtService.signAsync(payload)

        return {access_token}
    }
}
