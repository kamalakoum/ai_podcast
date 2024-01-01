<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|string|email|max:100|unique:users',
            'user_type_id' => 'integer',
            'password' => 'required|string|min:6',
        ]);
    
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'user_type_id' => $request->user_type_id ?? 1,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    
        $token = Auth::login($user);
        
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    

    // public function register(Request $request){
    //     $request->validate([
    //         'first_name' => 'required|string|max:50',
    //         'last_name' => 'required|string|max:50',
    //         'password' => 'required|string|min:6',
    //     ]);

    //     $user = User::create([
    //         'first_name' => $request->first_name,            
    //         'last_name' => $request->last_name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     $token = Auth::login($user);
    //     return response()->json([
    //         'status' => 'success',
    //         'message' => 'User created successfully',
    //         'user' => $user,
    //         'authorisation' => [
    //             'token' => $token,
    //             'type' => 'bearer',
    //         ]
    //     ]);
    // }

    // public function register(Request $request)
    // {
    //     try {
    //         $request->validate([
    //             'first_name' => 'required|string|max:50',
    //             'last_name' => 'required|string|max:50',
    //             'email' => 'required|string|email|max:100|unique:users',
    //             'password' => 'required|string|min:6',
    //         ]);

    //         $user = User::create([
    //             'first_name' => $request->first_name,            
    //             'last_name' => $request->last_name,
    //             'email' => $request->email,
    //             'password' => Hash::make($request->password),
    //         ]);

    //         $token = Auth::login($user);

    //         return response()->json([
    //             'status' => 'success',
    //             'message' => 'User created successfully',
    //             'user' => $user,
    //             'authorization' => [
    //                 'token' => $token,
    //                 'type' => 'bearer',
    //             ]
    //         ]);

    //     } catch (\Exception $e) {
    //         // Log the exception or handle it in a way that makes sense for your application
    //         // You might want to log the error, return a custom error response, etc.
    //         // For now, let's log the error and return a generic error response.

    //         \Log::error('Error during registration: ' . $e->getMessage());

    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'An error occurred during registration. Please try again later.',
    //             'error' => $e,
    //         ], 500); // 500 Internal Server Error
    //     }
    // }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}
