<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AuthenticateController extends Controller
{
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        // attempt to verify the credentials and create a token for the user
        if (! $token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }
        $user = $this->jwtAuth->authenticate($token);
        // all good so return the token
        return response()->json(compact('token', 'user'));
    }

    public function getAuthenticatedUser()
    {

        if (! $user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['user_not_found'], 404);
        }

        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }

    public function refresh(){

        $token = $this->jwtAuth->getToken();
        $tokenRefresh = $this->jwtAuth->refresh($token);

        return response()->json(compact('tokenRefresh'));

    }

    public function logout(){

        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);

        return response()->json(['lougout'], 200);

    }
}
