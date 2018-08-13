# Bitcoin Venezuela API V2

How to enable BTCVEF-only mode:

**Debe tener instalado y configurado:**

- Nodejs

 _Aqui una pequeña guia para la instalacion y configuracion para Digital Ocean Ubuntu:
  https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

- Redis

 _Aqui una pequeña guia para la instalacion y configuracion para Digital Ocean Ubuntu:
  https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis

- Forever
 _ejecute el comando "npm install forever"


**Instalacion y ejecucion**

- Open Port 3000 
- Cree o ubiquese en la carpeta donde alojara el codigo fuente
- Clone repo -> git clone https://github.com/btcven/api.git
- Ubiquese en la capeta -> "api"
- Ejecute el comando -> "npm install"
- Ejecute el comando -> "forever start main.js" y "forever stop main.js" para detener
- Done -> Solicite la http://addresserver:3000/coin desde cualquier navegador.



Bitcoin Venezuela API
===

_Note: this repo is outdated and doesn't reflect the code currently in the production server_

Bitcoin Venezuela API shows the current price of Bitcoin in these currencies: **USD**, **EUR**, **VEF**, **ARS**

Exchange rates:

- EUR _per_ USD
- VEF _per_ USD
- ARS _per_ USD
- XVE _per_ USD
- XVE _per_ EUR
- XAR _per_ USD

Current LocalBitcoins' coupons price: **USD**, **VEF**

# Options

You can use the data of this API making requests to http://api.bitcoinvenezuela.com

It could also be embedded as an iframe with this options:

- Show as HTML: http://api.bitcoinvenezuela.com?html=yes [&ltc=yes] [&msc=yes] [&rates=yes] [&coupons=yes]

- Show Litecoin prices: &ltc=yes

- Show Mastercoin prices: &msc=yes

- Show exchange rates: &rates=yes

- Show LocalBitcoins' coupons price: &coupons=yes


# Calculator

[http://api.bitcoinvenezuela.com/](http://api.bitcoinvenezuela.com/)?html=no&currency=_currency_&amount=_amount_ [&to=_currency_]

?html=no _*_

&currency= _*_: **BTC**, **USD**, **EUR**, **VEF**, **ARS**. Gives the amount of bitcoins for this currency.

&amount= _*_: amount of the given currency.

&to= : set this field to calculate BTC, LTC or MSC to this _currency_. If not set the default currency used is VEF.

_* required_


# Historical

Show the recorded prices for Bitcoin and Litecoin in USD, EUR, VEF and ARS.

[http://api.bitcoinvenezuela.com/historical/](http://api.bitcoinvenezuela.com/historical/) [?coin=_coin_] [?pair=_pair_]

Historical data can be filtered by coin: **BTC**, **LTC**, **MSC**

Or to a specific pair of currencies: **BTCUSD**, **BTCEUR**, **BTCVEF**, **BTCARS**, **LTCUSD**, **LTCEUR**, **LTCVEF**, **LTCARS**, **LTCBTC**, **MSCUSD**, **MSCEUR**, **MSCVEF**, **MSCARS**, **MSCBTC**


# DolarToday

Data taken from DolarToday.com can be accessed here http://api.bitcoinvenezuela.com/DolarToday.php?json=yes


# Donations

bitcoin:1VenCBSjJWDi6PDgEDppZzXsNWHiwitzT
