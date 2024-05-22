<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
  //

  public function login(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
      'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['message' => $validator->errors()], 400);
    }

    $credentials = $request->only('email', 'password');



    if (Auth::attempt($credentials)) {

      $user = User::where('email', $request->email)->firstOrFail();

      $token = $user->createToken('auth_token')->plainTextToken;

      return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer'], 200);
    } else {
      // Invalid credentials
      return response()->json(['message' => 'Invalid login credentials'], 401);
    }
  }

  public function register(Request $request)
  {

    $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:255',
      'email' => 'required|email|unique:users', // Ensure unique email
      'password' => 'required|string|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json(['message' => $validator->errors()], 400);
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);
    $token = $user->createToken('auth_token')->plainTextToken;
    return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer'], 201);
  }

  public function logout()
  {
    auth()->user()->tokens()->delete();
  

    return response()->json(['message' => 'User logged out successfully'], 200);
  }
}
