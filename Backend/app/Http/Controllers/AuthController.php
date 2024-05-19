<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    //

    public function login(Request $request, Response $response)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
       
        $credentials = $request->only('email', 'password');

        $remember = $request->has('remember');

        if (Auth::attempt($credentials, $remember)) {
 
          Session::regenerate();
   
          return response()->json(['message' => 'Login successful'], 200 );
        } else {
          // Invalid credentials
          return response()->json(['message' => 'Invalid login credentials'], 401);
        }
    }

    public function register(Request $request)
    {
      

        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users', // Ensure unique email
            'password' => 'required',
          ]);
        
          $user = User::create($validatedData);
        
          Auth::login($user); 
          $request->session()->regenerate();
          return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function logout( )
    {
        Auth::logout();
        
        Session::invalidate();
        Session::regenerateToken();

        return response()->json(['message' => 'User logged out successfully'], 200);
    }

}
