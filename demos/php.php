<?php

use ID\Http\Handlers\v6\Cashier\CloseCashierHandler;
use ID\Http\Handlers\v6\Cashier\DeleteCashierHandler;
use ID\Http\Handlers\v6\Cashier\Deposits\FetchCashierDepositsHandler;
use ID\Http\Handlers\v6\Cashier\GetCashierFullHandler;
use ID\Http\Handlers\v6\Cashier\GetCashierHandler;
use ID\Http\Handlers\v6\Cashier\OpenCashierHandler;
use ID\Http\Handlers\v6\Cashier\Printers\AttachPrinterToCashierHandler;
use ID\Http\Handlers\v6\Cashier\Printers\DetachPrinterFromCashierHandler;
use ID\Http\Handlers\v6\Cashier\Printers\FetchPrintersOfCashierHandler;
use ID\Http\Handlers\v6\Cashier\Shifts\FetchCashierShiftsHandler;
use ID\Http\Handlers\v6\Cashier\UpdateCashierHandler;
use ID\Http\Handlers\v6\Spots\FetchSpotsOfCashierHandler;
use ID\Http\Middleware\v6\Cashiers\CheckCloseCashierStoreSetting;
use ID\Models\v4\ReferralGuide;
use Illuminate\Http\Request;
use ID\Http\Controllers\Controller;

namespace ID\Http\Controllers\v5;

class ElectronicBillController extends Controller
{
    public function sendEmail(Request $request)
    {
        try {
            $emails = $request->input('emails');
            /** @var Email $email */

            $electronicBill = \ID\Models\v4\ElectronicBill::find($request->uuid);

            if (!!$electronicBill) {
                foreach ($emails as $email) {
                    $electronicBill->service->sendBill($email);
                }
            } else {
                $referralGuide = ReferralGuide::find($request->uuid);
                foreach ($emails as $email) {
                    $referralGuide->service->sendBill($email);
                }
            }
            return response()->json(["message" => "Se envió correctamente."]);
        } catch (Exception $exception) {
            \Sentry::captureException($exception);
            return response()->json(["message" => $exception->getMessage()], 422);
        }
    }
}

Route::prefix('cashiers')->group(function () {

    Route::prefix('{cashier}')->group(function () {
        Route::get('/', GetCashierHandler::class);
        Route::get('/full', GetCashierFullHandler::class);
        Route::post('/open', OpenCashierHandler::class);
        Route::post('/close', CloseCashierHandler::class)
            ->middleware([CheckCloseCashierStoreSetting::class]);
        Route::patch('/', UpdateCashierHandler::class);
        Route::delete('/', DeleteCashierHandler::class);

        Route::prefix('/spots')->group(function () {
            Route::get('/', FetchSpotsOfCashierHandler::class);
        });
        Route::prefix('/deposits')->group(function () {
            Route::get('/', FetchCashierDepositsHandler::class);
        });
        Route::prefix('/shifts')->group(function () {
            Route::get('/', FetchCashierShiftsHandler::class);
        });

        Route::prefix('/printers')->group(function () {
            Route::get('/', FetchPrintersOfCashierHandler::class);

            Route::prefix('{printer}')->group(function () {
                Route::patch('/attach', AttachPrinterToCashierHandler::class);
                Route::patch('/detach', DetachPrinterFromCashierHandler::class);
            });
        });
    });
});
