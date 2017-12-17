<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    private $users;

    public function __construct(User $users)
    {
        $this->users = $users;
    }

    public function listUsers()
    {
        return $this->users->listUsers();
    }

    public function newUser(Request $data)
    {
        return $this->users->saveUser($data);
    }

    public function deleteUser($id)
    {
        return $this->users->deleteUser($id);
    }

}
