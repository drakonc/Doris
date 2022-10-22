<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SeederFirstUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'status'=> '1',
            'role'=> '1',
            'name'=> 'Jose Castro',
            'email' => 'drakonc@gmail.com',
            'password' => Hash::make('Passw0rd!!'),
            'phone'=> '3017880021',
            'permissions'=> json_encode(['all' => true])
        ]);
    }
}
