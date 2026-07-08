import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {expiresIn: 60}
  })],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController]
})
export class AuthModule {}
