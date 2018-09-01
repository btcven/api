Bitcoin Venezuela API v2
===

## Cómo instalar la versión sólo BTCVES:

**Debe tener instalado y configurado:**

* Nodejs

 * *Aquí una pequeña guía para la instalación y configuración para Digital Ocean Ubuntu:*
  https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

* Redis

 * *Aquí una pequeña guía para la instalación y configuración para Digital Ocean Ubuntu:*
  https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04

* Forever
 
 * *ejecute el comando `npm install forever`*

**Para usar Docker en cojunto con docker-compose.yml

- [Tener instalado Docker](https://docs.docker.com/install/)
- [Contar con CLI de Dokcer Compose](https://docs.docker.com/compose/install/)

```
git clone https://github.com/btcven/api
cd api
docker-compose up -d
```

Con tu navegador vas a poder acceder a la API a través del puerto 3000

http://localhost:3000


**Instalacion y ejecucion:**

- Open Port 3000
- Cree o ubiquese en la carpeta donde alojara el codigo fuente
- Clone repo -> git clone https://github.com/btcven/api.git
- Ubiquese en la capeta -> "api"
- Ejecute el comando -> "npm install"
- Ejecute el comando -> "forever start main.js" y "forever stop main.js" para detener
- Done -> Solicite la https://addresserver:3000/coin desde cualquier navegador

## How to enable BTCVES-only mode:

**You need to have installed and already set:**
- Nodejs
- Redis
- Forever
 _run the command "npm install forever"

**Installation and execution:**

- Open Port 3000
- Create or go to the directory where you will run the source code from
- Clone repo -> git clone https://github.com/btcven/api.git
- Go to the directory -> "api"
- Run the command -> "npm install"
- Run the command -> "forever start main.js" and "forever stop main.js" to stop it
- Done -> You can visit https://addresserver:3000/coin from any browser


Bitcoin Venezuela API *(v1)*
===
Bitcoin Venezuela API shows the current price of Bitcoin in these currencies: **USD**, **EUR**, **VEF**, **ARS**

Exchange rates:

- EUR _per_ USD
- VEF _per_ USD
- ARS _per_ USD
- XVE _per_ USD
- XVE _per_ EUR
- XAR _per_ USD

~~Current LocalBitcoins' coupons price: **USD**, **VEF**~~ *(deprecated)*

### Options

You can use the data of this API making requests to `https://api.bitcoinvenezuela.com`

~~It could also be embedded as an iframe with this options:~~

- ~~Show as HTML: https://api.bitcoinvenezuela.com?html=yes [&ltc=yes] [&msc=yes] [&rates=yes] [&coupons=yes]~~

- ~~Show Litecoin prices: &ltc=yes~~

- ~~Show Mastercoin prices: &msc=yes~~

- ~~Show exchange rates: &rates=yes~~

- ~~Show LocalBitcoins' coupons price: &coupons=yes~~


### Calculator

`https://api.bitcoinvenezuela.com/?html=no&currency= _currency_ &amount= _amount_ [&to= _currency_ ]`

?html=no _*_

&currency= _*_: **BTC**, **USD**, **EUR**, **VEF**, **ARS**. Gives the amount of bitcoins for this currency.

&amount= _*_: amount of the given currency.

&to= : set this field to calculate BTC, LTC ~~or MSC~~ to this _currency_. If not set the default currency used is VEF.

_* required_

### Historical

Show the recorded prices for Bitcoin and Litecoin in USD, EUR, VEF and ARS.

https://api.bitcoinvenezuela.com/historical/[?coin=_coin_][?pair=_pair_]

Historical data can be filtered by coin: **BTC**, **LTC**, ~~**MSC**~~

Or to a specific pair of currencies: **BTCUSD**, **BTCEUR**, **BTCVEF**, **BTCARS**, **LTCUSD**, **LTCEUR**, **LTCVEF**, **LTCARS**, **LTCBTC**, ~~**MSCUSD**, **MSCEUR**, **MSCVEF**, **MSCARS**, **MSCBTC**~~


### ~~DolarToday~~

~~Data taken from DolarToday.com can be accessed here~~

~~https://api.bitcoinvenezuela.com/DolarToday.php?json=yes~~


# Donations

<a href="bitcoin:1VenCBSjJWDi6PDgEDppZzXsNWHiwitzT">1VenCBSjJWDi6PDgEDppZzXsNWHiwitzT</a>
