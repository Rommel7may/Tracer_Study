<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataController;
use App\Http\Controllers\AlumniController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\JobpostController;
use App\Http\Controllers\DraftsController;
Route::get('/', function () {
   
    return  Inertia::render('dashboard');
})->middleware('auth')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('/alumni', AlumniController::class);
Route::resource('/data', DataController::class);
Route::resource('/analytics', AnalyticsController::class);
Route::resource('/jobpost', JobpostController::class);
Route::resource('/drafts', DraftsController::class);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
