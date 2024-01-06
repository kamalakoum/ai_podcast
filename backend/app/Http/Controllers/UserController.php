<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function updateProfile(Request $request) {
        $user = Auth::user();

        $validatedData = $request->validate([
            'first_name' => 'nullable|string|max:50',
            'last_name' => 'nullable|string|max:50',
            'email' => 'nullable|email|unique:users,email,' . $user->id, 
            'password' => 'nullable|string|min:6',
        ]);

        $user = User::findOrFail($user->id);

        $updateData = array_filter($validatedData);

        $user->update($updateData);

        return response()->json($user);
    }

    public function getUserDetails()
    {
        $user = auth()->user();

        if ($user) {
            return [
                'first_name' => $user->first_name,
                'last_name'  => $user->last_name,
                'email'      => $user->email,
                'password'   => $user->password,
            ];
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }


    public function adminLogin(Request $request)
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
        if($user && $user->user_type_id === 2) {
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }
    }

}
