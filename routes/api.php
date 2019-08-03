<?php

use Illuminate\Http\Request;

// Usuario
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/products', 'ProductController');
