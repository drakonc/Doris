<?php

namespace App\Http\Controllers\ApiJS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator, Auth;

class ConnectController extends Controller
{
    public function PostLogin(Request $request){
        $rule = [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ];

        $messages = [
            'email.required' => __('lg.connect.v_email_required'),
            'email.email' => __('lg.connect.v_email_email'),
            'password.required' => __('lg.connect.v_password_required'),
            'password.min' => __('lg.connect.v_password_min'),
        ];

        $vaidator = Validator::make($request->all(),$rule,$messages);
        if($vaidator->fails()){
            $data = ['type' => 'error', 'title' => __('lg.general.error'), 'msg' => __('lg.general.error_validation'), 'msgs' => json_encode($vaidator->errors()->all())];
        }
        else{
            if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                $data = ['type' => 'success'];
            }
            else{
                $data = ['type' => 'error', 'title' => __('lg.general.error'), 'msg' => __('lg.connect.connect_fail')];
            }
        }

        return response()->json($data);
    }
}
