<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // APIエンドポイントをCSRF対応から除外
        // TODO: CSRF対応を実装する
        $middleware->validateCsrfTokens(except: ['/api/*']);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
