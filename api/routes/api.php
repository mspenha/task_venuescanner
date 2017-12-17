<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user/list', 'UserController@listUsers');
Route::get('/user/{id}/delete', 'UserController@deleteUser');
Route::post('/user/new', 'UserController@newUser');
