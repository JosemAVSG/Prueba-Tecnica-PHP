<?php

use Illuminate\Support\Facades\Route;

//

Route::get('/', function () {
    return view('welcome');
});

// Auth
Route::get('/login', function () {
    $message = 'login';
    echo $message;
});

Route::get('/register', function () {
    $message = 'register';
    echo $message;
});
// Routes Documentos
Route::get('/documents', function () {
    $message = 'create';
    echo $message;
});

Route::post('/create', function () {
    $message = 'register';
    echo $message;
});

Route::put('/edit', function () {
    $message = 'register';
    echo $message;
});

Route::delete('/delete', function () {
    $message = 'register';
    echo $message;
});