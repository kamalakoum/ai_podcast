<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'topic_name' => 'required|string|max:100',
        ]);

        $topic = Topic::create([
            'topic_name' => $request->input('topic_name'),
        ]);

        return response()->json(['message' => 'Topic created successfully', 'topic' => $topic], 201);
    }
}
