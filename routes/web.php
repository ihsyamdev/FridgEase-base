<?php

use Illuminate\Support\Facades\Route;

// すべてのリクエストをReactにリダイレクト
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
