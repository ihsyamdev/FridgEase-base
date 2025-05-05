<?php

namespace App\Http\Controllers;

use App\Domain\Ingredient\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class IngredientController extends Controller
{
    public function get(Ingredient $ingredient): JsonResponse
    {
        return response()->json([
            'ingredient' => $ingredient,
        ], 200);
    }

    public function create(Request $request): JsonResponse
    {
        $ingredient = Ingredient::create($request->all());
        return response()->json([
            'ingredient' => $ingredient,
        ], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $ingredient = Ingredient::where('id', $id)->first();
        if ($ingredient) {
            $ingredient->update($request->all());
            return response()->json([
                'ingredient' => $ingredient,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Ingredient not found',
            ], 404);
        }
    }
}
