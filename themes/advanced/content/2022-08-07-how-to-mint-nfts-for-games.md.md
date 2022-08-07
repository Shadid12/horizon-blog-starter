---
title: How to mint NFTs for Games
description: In this tutorial we learn minting NFTs as in game items
datePublished: 2022-08-07T04:17:47.808Z
dateModified: 2022-08-07T04:17:47.818Z
cover: images/nft.webp
coverAlt: nft
slug: nft
category: tech
tags:
  - programming
  - blockchain
  - nft
---
# Arbore radiantibus illi membra

## Quoque virginem quoquam captabat

Lorem markdownum coniuge proles lorisque, celate Nereaque vindicta, nisi ut et.
Tela iuveni porrigis videri, pulcherrime, [insania](http://quisvel.io/),
dederant, humumque suum. Nostris pectore marisque tamen manibus, tinctas utero.
Madent et lacertos potestas dicti, locumque tuus.

- Circumdatus reddat
- Ego servat ramos tabula
- Iamque montes
- Dictaque somnoque genitor draconis poteram adicit

```js
'use strict';

// import faunadb driver
const faunadb = require('faunadb')
const q = faunadb.query;

// initialize fauna client
const serverClient = new faunadb.Client({ 
  secret: process.env.FAUNA_ROOT_KEY,
  domain: process.env.FAUNA_DOMAIN,
});

module.exports.handler = async (event, context) => {
  console.log('bookFlight', JSON.stringify(event, null, 2));

  // Fake a delay for external API call
  await new Promise(resolve => setTimeout(resolve, 3000));

  if (event.flightId === -1) {
    throw new Error(event.reservation.id);
  }

  try {
    const updateBooking = await serverClient.query(
      q.Update(
        q.Ref(q.Collection('Vacation'), event.reservation.id),
        { 
          data: {
            status: 'confirmed',
            flightStatus: 'confirmed',
          }
        },
      )
    )
    return {
      updateBooking,
      statusCode: 200
    };
  } catch (error) {
    throw new Error(error);
  }
};

```

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

