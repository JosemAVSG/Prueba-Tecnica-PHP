<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoDocumentSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipo_document')->insert([
            [
                'TIP_ID' => 1,
                'TIP_NOMBRE' => 'Instructivo',
                'TIP_PREFIJO' => 'INS',
            ],
            [
                'TIP_ID' => 2,
                'TIP_NOMBRE' => 'Manual',
                'TIP_PREFIJO' => 'MAN',
            ],
            [
                'TIP_ID' => 3,
                'TIP_NOMBRE' => 'Procedimiento',
                'TIP_PREFIJO' => 'PROC',
            ],
            [
                'TIP_ID' => 4,
                'TIP_NOMBRE' => 'Guía',
                'TIP_PREFIJO' => 'GUI',
            ],
            [
                'TIP_ID' => 5,
                'TIP_NOMBRE' => 'Informe',
                'TIP_PREFIJO' => 'INF',
            ],
        ]);
    }
}
