<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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

        if (Auth::attempt($credentials)) {
          // User authenticated successfully
          return response()->json(['message' => 'Login successful'], 200);
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
        
          // Optionally: Log the user in after registration
          // Auth::login($user); // Uncomment if desired
        
          return response()->json(['message' => 'User registered successfully'], 201);
    }


}
