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
Route::post('/auth/login', 'AuthenticateController@authenticate');

Route::post('auth/refresh', 'AuthenticateController@refresh');
Route::get('auth/logout', 'AuthenticateController@logout');

Route::group(['middleware' => 'jwt.auth'], function (){
    Route::get('auth/me', 'AuthenticateController@getAuthenticatedUser');
});

Route::get('/user/list', 'UserController@listUsers');
Route::get('/user/{id}/delete', 'UserController@deleteUser');
Route::get('/user/{id}/get', 'UserController@getUserbyId');
Route::post('/user/new', 'UserController@newUser');
Route::put('/user/edit', 'UserController@editUser');
