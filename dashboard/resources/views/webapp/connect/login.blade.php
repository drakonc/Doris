<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="routeName" content="{{ Route::currentRouteName() }}">
    <meta name="currency" content="{{ Config::get('madecms.currency') }}">
    <meta name="auth" content="{{ Auth::check() }}">

    <title>{{ __('lg.connect.login') }} - Doris APP</title>

    <link rel="icon" href="{{ url('/favicon.ico') }}" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="{{ url('/static/css/connect.css?v='.time()) }}">

</head>
<body>
    <div class="page page_app">
        <div class="box">
            <div class="logo">
                <img src="{{ url('/static/images/logo-white.png') }}" alt="{{ config("cms.app_name") }}">
            </div>
            <h2 class="title mtop16"> {{ __('lg.connect.login') }} </h2>
            <div class="form mtop16">
                {!! Form::open(['url' => '/', 'id' => 'form_connect','autocomplete' => 'off']) !!}

                    <label for="email">{{ __('lg.connect.email') }}:</label>
                    <div class="group">
                        <i class="bi bi-envelope"></i>
                        {!! Form::email('email',null,['class' => 'input']) !!}
                    </div>

                    <label for="password" class="mtop16">{{ __('lg.connect.password') }}:</label>
                    <div class="group">
                        <i class="bi bi-fingerprint"></i>
                        {!! Form::password('password',null,['class' => 'input']) !!}
                    </div>

                    {!! Form::submit(__('lg.connect.connect'),['class' => 'btn transition mtop16']) !!}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</body>
</html>
