<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () { });


Route::get('/login','ConnectController@getLogin')->name('getLogin');

Route::prefix('/api-js')->group(function (){

    //Modulo de Conexion
    Route::post('/connect/login', 'ApiJS\ConnectController@PostLogin');

});
