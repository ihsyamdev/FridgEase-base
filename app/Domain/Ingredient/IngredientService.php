<?php

namespace App\Domain\Ingredient;

use App\Domain\Ingredient\Ingredient;
use App\Domain\Ingredient\ValueObject\Quantity;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Collection;

class IngredientService
{
  public function create(array $data): Ingredient
  {
    return Ingredient::create([
      'user_id' => Auth::id(),
      ...$data,
    ]);
  }

  public function consume(Ingredient $ingredient, int $amount): Ingredient
  {
    $ingredient->consume(Quantity::fromInt($amount));
    return $ingredient;
  }

  public function getExpiringSoon(int $days = 3): Collection
  {
    return Ingredient::where('user_id', Auth::id())
      ->whereDate('expires_at', '<=', now()->addDays($days))
      ->with('unit')
      ->get();
  }
}
