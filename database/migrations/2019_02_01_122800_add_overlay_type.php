<?php

use App\Configs;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddOverlayType extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
//		if (Schema::hasTable('configs')) {
//
//			DB::table('configs')->insert([
//				['key'   => 'image_overlay_type',
//				 'value' => 'exif'
//				],
//			]);
//		}
//		else {
//			echo "Table configs does not exists\n";
//		}
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
//		if (env('DB_DROP_CLEAR_TABLES_ON_ROLLBACK', false)) {
//			Configs::where('key', '=', 'image_overlay_type')->delete();
//		}
	}
}
