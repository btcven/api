Bitcoin Venezuela API
===

Bitcoin Venezuela API shows the current price of Bitcoin in these currencies: ***USD***, ***EUR***, ***VEF***, ***ARS***

Exchange rates:

- EUR/USD
- VEF/USD
- ARS/USD
- XVE/USD
- XVE/EUR
- XAR/USD

Current LocalBitcoins' coupons price: ***USD***, ***VEF***

===

You can use the data of this API making requests to http://api.bitcoinvenezuela.com

It could also be embedded as an iframe with this options:

- Show as HTML: http://api.bitcoinvenezuela.com?html=yes [&rates=yes] [&coupons=yes]

- Show exchange rates: &rates=yes

- Show LocalBitcoins' coupons price: &coupons=yes

===

Calculator
===

http://api.bitcoinvenezuela.com/?html=no&currency=_currency_&amount=_amount_ [&to=_currency_]

?html=no (_required_).

&currency (_required_): ***btc***, ***usd***, ***eur***, ***vef***, ***ars***. Gives the amount of bitcoins for this currency.

&amount (_required_): amount of the given currency.

&to (_optional_): set this field to calculate BTC to this _currency_. If not set the default currency used is VEF.

===

Data taken from DolarToday.com can be accessed here http://api.bitcoinvenezuela.com/DolarToday.php?json=yes



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/btcven/api/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

