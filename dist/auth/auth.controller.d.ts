import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authenticateDto: AuthenticateDto): {
        statusCode: HttpStatus;
        response: import("./interfaces/user.interface").IAuthenticate;
    };
    profile(req: any, res: any): any;
}
