<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Unit;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Unit::insert([
            ['name' => 'グラム', 'symbol' => 'g'],
            ['name' => 'キログラム', 'symbol' => 'kg'],
            ['name' => 'ミリリットル', 'symbol' => 'ml'],
            ['name' => 'リットル', 'symbol' => 'l'],
            ['name' => '個', 'symbol' => '個'],
        ]);
    }
}
