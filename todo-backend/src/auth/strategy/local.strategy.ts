import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const user: User = await this.userService.findUserByEmail(email);
    if (user && user.password == password) return user;
    if (user == undefined)
      throw new UnauthorizedException('User not found: '+ email);
    if (user.password != password)
      throw new UnauthorizedException('Invalid Password!');
  }
}
