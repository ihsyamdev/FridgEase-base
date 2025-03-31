<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Js;

class AuthController extends Controller
{
    public function signUp(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            // NOTE: confirmedオプションにより、password_confirmationが自動的に生成される
            'password' => 'required|string|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|confirmed',
        ], [
            'name.required' => '名前は必須です',
            'name.max' => '名前は255文字以内で入力してください',
            'email.required' => 'メールアドレスは必須です',
            'email.email' => 'メールアドレスの形式で入力してください',
            'email.max' => 'メールアドレスは255文字以内で入力してください',
            'email.unique' => 'メールアドレスが既に登録されています',
            'password.required' => 'パスワードは必須です',
            'password.min' => 'パスワードは8文字以上で入力してください',
            'password.regex' => 'パスワードは英大文字、英小文字、数字をそれぞれ1文字以上含めてください',
            'password.confirmed' => 'パスワードが一致しません',
        ]);

        try {
            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password'])
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'message' => 'ユーザーが登録されました',
                'user' => new UserResource($user),
                'token' => $token,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'ユーザー登録に失敗しました',
                'error' => $e->getMessage(),
            ], 400);
        }
    }

    public function signIn(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ], [
            'email.required' => 'メールアドレスは必須です',
            'email.email' => 'メールアドレスの形式で入力してください',
            'email.max' => 'メールアドレスは255文字以内で入力してください',
            'password.required' => 'パスワードは必須です',
        ]);

        try {
            $user = User::where('email', $validated['email'])->firstOrFail();
            if (!Hash::check($validated['password'], $user->password)) {
                return response()->json([
                    'message' => 'ユーザーが見つかりません'
                ], 401);
            }
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'message' => 'ログインしました',
                'user' => new UserResource($user),
                'token' => $token,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => '内部エラーが発生しました',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function signout(): JsonResponse
    {
        try {
            auth()->user->tokens()->delete();
            return response()->json([
                'message' => 'ログアウトしました',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'ログアウトに失敗しました',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
