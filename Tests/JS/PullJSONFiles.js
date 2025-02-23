const GetFuelPrices = function (fuelbrand,fueltargeturl){ 

 
const http = require('https');
const fs = require('fs');

const fileUrl = fueltargeturl;
const destination = "./Tests/JS/"+fuelbrand + 'fuelprices.json';

const file = fs.createWriteStream(destination);

http.get(fileUrl, (response) => {
    response.pipe(file);
    file.on('finish', () => {
        file.close(() => {
            console.log('File downloaded successfully');
        });
    });
}).on('error', (err) => {
    fs.unlink(destination, () => {
        console.error('Error downloading file:', err);
    });
});
};
GetFuelPrices("AppleGreen","https://applegreenstores.com/fuel-prices/data.json" );
GetFuelPrices("ASDA","https://storelocator.asda.com/fuel_prices_data.json");
GetFuelPrices("ASCONA","https://fuelprices.asconagroup.co.uk/newfuel.json");
GetFuelPrices("BP","https://www.bp.com/en_gb/united-kingdom/home/fuelprices/fuel_prices_data.json");
GetFuelPrices("ESSO","https://fuelprices.esso.co.uk/latestdata.json");
GetFuelPrices("JETLOCAL","https://jetlocal.co.uk/fuel_prices_data.json");
GetFuelPrices("MORRISONS","https://www.morrisons.com/fuel-prices/fuel.json");
GetFuelPrices("KRL","https://api2.krlmedia.com/integration/live_price/krl");
GetFuelPrices("MOTO","https://moto-way.com/fuel-price/fuel_prices.json");
GetFuelPrices("MOTORFUELGROUP","https://fuel.motorfuelgroup.com/fuel_prices_data.json");
GetFuelPrices("RONTEC","https://www.rontec-servicestations.co.uk/fuel-prices/data/fuel_prices_data.json");
GetFuelPrices("SAINSBURYS","https://api.sainsburys.co.uk/v1/exports/latest/fuel_prices_data.json");
GetFuelPrices("SGN","https://www.sgnretail.uk/files/data/SGN_daily_fuel_prices.json");
GetFuelPrices("SHELL","https://www.shell.co.uk/fuel-prices-data.html");
//GetFuelPricesTesco("","");

