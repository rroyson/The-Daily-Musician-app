require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

const profiles = [
  {
    _id: 'venue_reds_icehouse_charleston_sc_234153452jlj',
    venueName: 'Reds Icehouse',
    contactName: 'Ian Dante',
    contact_id: 'contact_ian_dante_ian@redsicehouse.com',
    address: '124 Coleman Blvd, Charleston, SC 29412',
    phone: '843-222-2222',
    email: 'ian@reds.com',
    photo: 'https://fillmurray/300/300',
    type: 'venue'
  },
  {
    _id: 'venue_smoke_bbq_charleston_sc_2142355234523j',
    venueName: 'Smoke BBQ',
    contactName: 'Michael Smoke',
    contact_id: 'contact_michael_smoke_michael@smokebbq.com',
    address: '1334 Coleman Blvd, Charleston, SC 29412',
    phone: '843-333-3333',
    email: 'smoke_michael@smokebbq.com',
    photo: 'https://fillmurray/300/300',
    type: 'venue'
  }

  // {
  //   _id: 'profile_garret_eanes_frontiersons@gmail.com',
  //   firstName: 'Garret',
  //   lastName: 'Eanes',
  //   email: 'frontiersons@gmail.com',
  //   dob: '1/2/1987',
  //   gender: 'M',
  //   bandName: 'Frontier Sons',
  //   genre: 'Rock',
  //   type: 'profile',
  //   photo: 'https://fillmurray/200/200',
  //   contacts: [
  //     {
  //       contact_id: 'contact_ian_dante_ian@redsicehouse.com',
  //       venue_id: 'reds_icehouse_charleston_sc_234153452jlj'
  //     },
  //     {
  //       contact_id: 'contact_zack_bennifield_zack@blacksheep.com',
  //       venue_id: 'venue_blacksheep_charleston_sc_24251t355234ewrq'
  //     },
  //     {
  //       contact_id: 'contact_dan_bladykis_dan@guitar.com',
  //       venue_id: 'venue_chucktown_sound_llc_charleston_sc_234jk24'
  //     }
  //   ]
  // },
  //
  // {
  //   _id: 'contact_dan_bladykis_dan@guitar.com',
  //   firstName: 'Dan',
  //   type: 'contact',
  //   lastName: 'Bladykis',
  //   email: 'dan@guitar.com',
  //   phone: '843-222-2222',
  //   company: 'Chucktown Sound LLC',
  //   photo: 'https://fillmurray/100/100',
  //   venueId: 'venue_chucktown_sound_llc_charleston_sc_234jk24'
  // },
  // {
  //   _id: 'contact_zack_bennifield_zack@blacksheep.com',
  //   firstName: 'Ian',
  //   type: 'contact',
  //   lastName: 'Dante',
  //   email: 'zack@blacksheep.com',
  //   phone: '843-333-3333',
  //   company: 'Blacksheep',
  //   photo: 'https://fillmurray/100/100',
  //   venueId: 'venue_blacksheep_charleston_sc_24251t355234ewrq'
  // },
  // {
  //   _id: 'contact_michael_smoke_michael@smokebbq.com',
  //   firstName: 'Michael',
  //   type: 'contact',
  //   lastName: 'Smoke',
  //   email: 'smoke_michael@smokebbq.com',
  //   phone: '843-444-4444',
  //   company: 'Smoke BBQ',
  //   photo: 'https://fillmurray/100/100',
  //   venueId: 'venue_smoke_bbq_charleston_sc_2142355234523j'
  // }
]

console.log(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db.bulkDocs(profiles, function(err, res) {
  if (err) return console.log(err)
  console.log(res)
})

// db.info().then(res => console.log(res))
