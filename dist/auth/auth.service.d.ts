import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';
export declare class AuthService {
    users: {
        id: string;
        userName: string;
        password: string;
        role: Role;
    }[];
    authenticate(authenticateDto: AuthenticateDto): IAuthenticate;
}
