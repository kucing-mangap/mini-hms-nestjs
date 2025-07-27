import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AdminsService } from "src/admins/admins.service";
import { DoctorsService } from "src/doctors/doctors.service";
import { PatientsService } from "src/patients/patients.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private adminService: AdminsService,
    private doctorService: DoctorsService,
    private patientService: PatientsService
  ) {
    const secret = process.env.JWT_SECRET
    if (!secret)
      throw new Error('JWT_SECRET is not defined in environment variables.')
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret
    })
  }

  async validate(payload: { userId: number; userType: 'admin' | 'doctor' | 'patient' }) {
    const { userId, userType } = payload;
    console.log(userId, userType)

    let user: any;

    switch (userType) {
      case 'admin':
        user = await this.adminService.findOne(userId)
        break;

      case 'doctor':
        user = await this.doctorService.findOne(userId)
        break;

      case 'patient':
        user = await this.patientService.findOne(userId)
        break;
    
      default:
        throw new UnauthorizedException('Invalid user type')
    }

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    return { ...user, userType }
  }
}