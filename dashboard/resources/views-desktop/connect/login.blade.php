<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="routeName" content="{{ Route::currentRouteName() }}">
    <meta name="auth" content="{{ Auth::check() }}">

    <title>{{ __('lg.connect.login') }} - Doris APP</title>

    <link rel="icon" href="{{ url('/favicon.ico') }}" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="{{ url('/static/css/mdalert.css?v='.time()) }}">
    <link rel="stylesheet" href="{{ url('/static/css/connect.css?v='.time()) }}">

</head>
<body>
    @include('components.loader_action')
    @include('components.mdalert')
    <div class="wrapper">
        <div class="page">
            <div class="box">
                <div class="logo">
                    <img src="{{ url('/static/images/logo.png') }}" alt="{{ config("cms.app_name") }}">
                </div>
                <h2 class="title mtop16"> {{ __('lg.connect.login') }} </h2>
                <div class="form mtop16">
                    {!! Form::open(['url' => '/', 'id' => 'form_connect_login','autocomplete' => 'off']) !!}

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

                        {!! Form::submit(__('lg.connect.connect'),['class' => 'btn mtop16']) !!}
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
    
    <script type="text/javascript" src="{{ url('/static/js/app.js?v='.time()) }}"></script>
    <script type="text/javascript" src="{{ url('/static/js/mdalert.js?v='.time()) }}"></script>
    <script type="text/javascript" src="{{ url('/static/js/connect.js?v='.time()) }}"></script>
</body>
</html>
