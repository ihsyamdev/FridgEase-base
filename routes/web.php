<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// ユーザー関連エンドポイント
Route::get('/users/{display_id}', [UserController::class, 'get']);
Route::get('/users', [UserController::class, 'getAll']);

Route::get('/', function () {
    return view('welcome');
})->where('any', '.*');
