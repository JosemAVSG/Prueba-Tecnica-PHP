<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
 

class ProcesosSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $procesos=[
            [
                
                'PRO_NOMBRE'=>'Ingeneria',
                'PRO_PREFIJO'=>'ING',
            ],
            [
                
                'PRO_NOMBRE'=>'Recursos Humanos',
                'PRO_PREFIJO'=>'RRHH',
            ],
            [
               
                'PRO_NOMBRE'=>'Ventas',
                'PRO_PREFIJO'=>'VEN',
            ],
            [
                
                'PRO_NOMBRE'=>'Marketing',
                'PRO_PREFIJO'=>'MAR',
            ],
            [
                
                'PRO_NOMBRE'=>'Informatica',
                'PRO_PREFIJO'=>'INF',
            ],


        ];

        DB::table('pro_procesos')->insert($procesos);
    }
}
