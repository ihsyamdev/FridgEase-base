<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IngredientController;
use Illuminate\Support\Facades\Route;

// API関連エンドポイント
Route::prefix('api')->group(function () {
    // ユーザー関連エンドポイント
    Route::middleware('auth:sanctum')->get('/users/me', [UserController::class, 'getMe']);
    Route::get('/users/{user}', [UserController::class, 'get']);
    Route::get('/users', [UserController::class, 'getAll']);
    // 認証関連エンドポイント
    Route::post('/auth/signup', [AuthController::class, 'signUp']);
    Route::post('/auth/signin', [AuthController::class, 'signIn']);
    Route::post('/auth/signout', [AuthController::class, 'signOut']);
    Route::middleware('auth:sanctum')->post('auth/password/reset', [AuthController::class, 'resetPassword']);
    // 食材関連エンドポイント
    Route::get('/ingredients/{ingredient}', [IngredientController::class, 'get']);
    Route::put('/ingredients/{id}', [IngredientController::class, 'update']);
    Route::get('/users/{user}/ingredients', [UserController::class, 'getIngredients']);
});

// ページ関連エンドポイント。SPAのため、全てのリクエストをReactに渡す
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
