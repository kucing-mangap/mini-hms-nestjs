import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }

  async login(email: string, password: string, userType: string) {
    let user: any = null

    user = await this.prisma.admin.findUnique({ where: { email }})
    
    if (!user) {
      user = await this.prisma.doctor.findUnique({ where: { email }})
    } 
    
    if (!user) {
      user = await this.prisma.patient.findUnique({ where: { email }})
    }

    if (!user) {
      throw new NotFoundException(`No user found with email ${email}`)
    }

    const isPasswordValid = this.comparePassword(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid expression')
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id, userType }),
      userType
    }

  }
}
