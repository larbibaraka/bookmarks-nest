import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signin(){
        return "sign in!!"
    }

    signup(){
        return "sign up!!"
    }

}