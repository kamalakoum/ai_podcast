<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RssFeed;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;

class RssFeedController extends Controller
{
    public function createRssFeed(Request $request)
    {
        $request->validate([
            'source' => 'required|string|max:50',
            'url' => 'required|string|max:500',
            'topic_id' => 'required|exists:topics,id',
        ]);

        $user = Auth::user();
        if ($user && $user->user_type_id === 2) {
            $rssFeed = RssFeed::create([
                'source' => $request->input('source'),
                'url' => $request->input('url'),
                'topic_id' => $request->input('topic_id'),
            ]);

            return response()->json(['message' => 'RssFeed created successfully', 'rssFeed' => $rssFeed], 201);
        } else {
            return response()->json(['message' => 'Unauthorized']);
        }
    }
}

