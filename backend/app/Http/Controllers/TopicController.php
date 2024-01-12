<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\Topic; 

class TopicController extends Controller
{
    public function createTopic(Request $request)
    {
        $request->validate([
            'topic_name' => 'required|string|max:100',
        ]);

        $user = Auth::user();
        if($user && $user->user_type_id === 2){
            $topic = Topic::create([
                'topic_name' => $request->input('topic_name'),
            ]);
    
            return response()->json(['message' => 'Topic created successfully', 'topic' => $topic], 201);
        }
        else{
            return response()->json(['message' => 'Unautherized']);
        }
        
    }

    public function getAllTopics(){
        $user = Auth::user();
        if($user && $user->user_type_id === 2){
            $topics = Topic::all();

            return response()->json(['topics' => $topics], 200);
        }
    }
}
