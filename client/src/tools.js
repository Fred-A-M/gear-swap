//Fetch functions
export function sendRequest(senderId, receiverId) {
  fetch('http://localhost:3000/requests/send', {
    method: 'POST',
    body: JSON.stringify({ senderId, receiverId }),
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function acceptRequest(requestId) {
  await fetch(`http://localhost:3000/requests/${requestId}/accept`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function rejectRequest(requestId) {
  await fetch(`http://localhost:3000/requests/${requestId}/reject`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function createNewGearDB (id, instrument, make, model) {
    await fetch(`http://localhost:3000/profiles/${id}/gear`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({gear: {instrument, make, model}}),
     })
  }

  export async function createNewWishDB (id, gearId, instrument, make, model) {
    await fetch(`http://localhost:3000/profiles/${id}/wishlist`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({wishlist: {gearId, instrument, make, model}}),
    })
  }



//Mock profile
export const profile = {
  _id: '66ed71f65e2e1a631b4b4011',
  username: 'JamDonut97',
  email: 'jammyd@gmail.com',
  number: 7893321456,
  location: 'London',
  gear: [
    {
      instrument: 'Electric Guitar',
      make: 'Godin',
      model: 'Session HT',
      imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/477316/15111213_800.jpg',
      _id: '66f179442b937286b7c115bd'
    },
    {
      instrument: 'Synthesizer',
      make: 'Korg',
      model: 'Minilogue XD',
      imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/457066/14351333_800.jpg',
      _id: '66f179442b937286b7c115be'
    },
    {
      instrument: 'Turntable',
      make: 'Technics',
      model: 'SL-1200MK7',
      imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/479661/14704906_800.jpg',
      _id: '66f179442b937286b7c115bf'
    }
  ],
  wishlist: [
    {
      instrument: 'Sampler',
      make: 'Akai',
      model: 'MPC One',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Yamaha_DX7_synthesizer_-_combined_image_with_diagonal_and_top_views.jpg',
      _id: '66f179442b937286b7c115c0'
    },
    {
      instrument: 'Drum Machine',
      make: 'Korg',
      model: 'Volca Beats',
      imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_31/312844/8329173_800.jpg',
      _id: '66f179442b937286b7c115c1'
    },
    {
      instrument: 'Reverb Pedal',
      make: 'Strymon',
      model: 'BigSky',
      imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_32/325799/7930919_800.jpg',
      _id: '66f179442b937286b7c115c2'
    }
  ]
};