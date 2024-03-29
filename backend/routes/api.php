<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\RssFeedController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'register']);
Route::post('/logout', [AuthController::class,'logout'])->middleware('auth:api');
Route::post('/userprofile',[UserController::class,'updateProfile'])->middleware('auth:api');
Route::get('/userprofile', [UserController::class, 'getUserDetails'])->middleware('auth:api');

Route::post('/adminlogin', [UserController::class, 'adminLogin']);
Route::post('/add/topic', [TopicController::class, 'createTopic'])->middleware('auth:api');
Route::get('/topics', [TopicController::class, 'getAllTopics'])->middleware('auth:api');

Route::post('/addRssFeed',[RssFeedController::class,"createRssFeed"])->middleware('auth:api');
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
