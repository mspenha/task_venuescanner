<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;


/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{

    /**
     * @var User
     */
    private $users;

    /**
     * UserController constructor.
     * @param User $users
     */
    public function __construct(User $users)
    {
        $this->users = $users;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function listUsers()
    {
        return $this->users->listUsers();
    }

    /**
     * @param Request $data
     * @return \Exception|\Illuminate\Http\JsonResponse|\Mockery\Exception
     */
    public function newUser(Request $data)
    {
        return $this->users->saveUser($data);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUser($id)
    {
        return $this->users->deleteUser($id);
    }

    public function getUserbyId($id)
    {
        return $this->users->getUserById($id);
    }

    public function editUser(Request $data)
    {
        return $this->users->editUser($data);
    }

}
