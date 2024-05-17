<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    //

    public function login(Request $request, Response $response)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
       
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
    }


}
