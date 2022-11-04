<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConnectController extends Controller
{

    public function __construct() {
        $this->middleware('guest');
    }

    public function getLogin() {
        return view('connect.login');
    }
}
