<?php 

use Illuminate\Support\Facades\Route;
// Auth Routes
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register'] );

Route::post('/login',[App\Http\Controllers\AuthController::class, 'login']);

Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);

// Document Routes
Route::get('/documents', [App\Http\Controllers\DocumentController::class, 'index']);

Route::get('/document/{id}', [App\Http\Controllers\DocumentController::class, 'getDocumentbyId']);

Route::post('/document', [App\Http\Controllers\DocumentController::class, 'createDocument']);

Route::put('/documents/{id}', [App\Http\Controllers\DocumentController::class, 'updateDocument']);

Route::delete('/document/{id}', [App\Http\Controllers\DocumentController::class, 'deleteDocument']);

?>