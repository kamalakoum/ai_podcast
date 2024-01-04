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
            // 'password' => 'nullable|string|min:6',
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


}