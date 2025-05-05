<?php

namespace App\Domain\Ingredient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Domain\Ingredient\ValueObject\Quantity;
use app\Models\Unit;
use app\Models\User;
use Illuminate\Support\Str;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'quantity',
        'unit_id',
        'expires_at',
    ];

    protected $casts = [
        'expires_at' => 'date',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($ingredient) {
            do {
                // 10桁の表示用ID
                $ingredient->display_id = Str::random(10);
            } while (static::where('display_id', $ingredient->display_id)->exists());
        });
    }

    public function getRouteKeyName()
    {
        return 'display_id';
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function consume(Quantity $amount): void
    {
        $this->quantity = max(0, $this->quantity - $amount->toInt());
        $this->save();
    }

    public function isExpired(): bool
    {
        return $this->expires_at !== null && $this->expires_at->isPast();
    }

    public function getDIsplayQuantityAttribute(): string
    {
        return '{$this->quantity}{$this->unit->symbol}';
    }
}
