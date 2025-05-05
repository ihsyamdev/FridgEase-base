<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Support\Js;

class UserController
{
  public function getMe(Request $request): JsonResponse
  {
    try {
      $user = $request->user();
      return response()->json([
        'user' => new UserResource($user),
      ], 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'ユーザーが見つかりません',
        'error' => $e->getMessage(),
      ], 404);
    }
  }

  public function get(User $user): JsonResponse
  {
    return response()->json([
      'user' => new UserResource($user),
    ], 200);
  }

  public function getAll(): JsonResponse
  {
    try {
      $users = User::all();
      return response()->json([
        'users' => UserResource::collection($users),
      ], 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'ユーザーが見つかりません',
        'error' => $e->getMessage(),
      ], 404);
    }
  }

  public function getIngredients(User $user): JsonResponse
  {
    return response()->json($user->ingredients);
  }
}
