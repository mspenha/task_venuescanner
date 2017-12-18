<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mockery\Exception;

/**
 * Class User
 * @package App
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'surname', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'firstname' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function listUsers()
    {
        $users = User::all();
        return $users;
    }

    /**
     * @param $data
     * @return \Exception|\Illuminate\Http\JsonResponse|Exception
     */
    public function saveUser($data)
    {
        try {

             User::create([
                'firstname' => $data["firstname"],
                'surname' => $data["surname"],
                'email' => $data["email"],
                'password' => bcrypt($data["password"]),
            ]);

            return response()->json(['success'], 200);

        }catch (Exception $exception){
            return $exception;
        }
    }

    public function editUser($data)
    {
        $user = User::find($data["id"]);

        $user->firstname = $data["firstname"];
        $user->surname = $data["surname"];
        $user->email = $data["email"];

        $user->save();

        return response()->json(['success'], 200);

    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUser($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['success'], 200);
    }

    public function getUserById($id){
        $user = User::find($id);
        return response()->json($user, 200);
    }
}
