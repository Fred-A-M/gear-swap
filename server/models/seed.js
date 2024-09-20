const mongoose = require('mongoose');
const {Profile} = require('./dbconnect');

const profiles = [
  {
    _id: '66ed71f65e2e1a631b4b4011',
    username: 'JamDonut97',
    email: 'jammyd@gmail.com',
    number: 7893321456,
    gear: [
      {
        instrument: 'Electric Guitar',
        make: 'Godin',
        model: 'Session HT',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/477316/15111213_800.jpg'
      },
      {
        instrument: 'Delay Pedal',
        make: 'Eventide',
        model: 'TimeFactor',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_11/110385/8470153_800.jpg'
      },
      {
        instrument: 'Turntable',
        make: 'Technics',
        model: 'SL-1200MK7',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/479661/14704906_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Synthesizer',
        make: 'Yamaha',
        model: 'DX7',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Yamaha_DX7_synthesizer_-_combined_image_with_diagonal_and_top_views.jpg'
      },
      {
        instrument: 'Electric Guitar',
        make: 'ESP',
        model: 'LTD EC-1000',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_19/192156/12195607_800.jpg'
      },
      {
        instrument: 'Sampler',
        make: 'Akai',
        model: 'MPC One',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/567619/18293734_800.jpg'
      }
    ]
  },
  {
    username: 'KingWillis',
    email: 'KW1934@gmail.com',
    number: 740440046,
    gear: [
      {
        instrument: 'Microphone',
        make: 'Sure',
        model: 'SM58',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/591224/19122453_800.jpg'
      },
      {
        instrument: 'Drum Machine',
        make: 'Roland',
        model: 'TR-08',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_41/419461/12505132_800.jpg'
      },
    ],
    wishlist: [
      {
        instrument: 'Tape Recorder',
        make: 'Tascam',
        model: 'Porta02',
        imageURL: 'https://rvb-img.reverb.com/image/upload/s--IaJOdtD---/t_card-square/v1646242008/pnmpfyvdbcu9psxxrbfp.jpg'
      }
    ]
  },
  {
    username: 'SoundWave23',
    email: 'wave23@musicmail.com',
    number: 7892123456,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Korg',
        model: 'Minilogue XD',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/457066/14351333_800.jpg'
      },
      {
        instrument: 'Guitar Amp',
        make: 'Marshall',
        model: 'DSL40C',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_42/422013/12894607_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Keyboard',
        make: 'Yamaha',
        model: 'PSR-E373',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/535707/17446146_800.jpg'
      }
    ]
  },
  {
    username: 'IEatGreggs58',
    email: 'groovem@musician.net',
    number: 7881231234,
    gear: [
      {
        instrument: 'DJ Controller',
        make: 'Pioneer',
        model: 'DDJ-SX3',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_44/444859/13335486_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Turntable',
        make: 'Technics',
        model: 'SL-1200MK7',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_47/479661/14704906_800.jpg'
      },
      {
        instrument: 'Monitor Speakers',
        make: 'KRK',
        model: 'Rokit 5 G4',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_57/575642/18993171_800.jpg'
      }
    ]
  },
  {
    username: 'VinylVicky',
    email: 'vibesvinyl@beats.com',
    number: 7976543210,
    gear: [
      {
        instrument: 'Sampler',
        make: 'Akai',
        model: 'MPC Live II',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_49/493555/15229383_800.jpg'
      },
      {
        instrument: 'Headphones',
        make: 'Beyerdynamic',
        model: 'DT 770 Pro',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/585368/18935548_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar',
        make: 'PRS',
        model: 'Custom 24',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/539616/18866847_800.jpg'
      },
      {
        instrument: 'Audio Interface',
        make: 'Focusrite',
        model: 'Scarlett 2i2', 
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_46/467950/14226632_800.jpg'
      }
    ]
  },
  {
    username: 'EchoesX',
    email: 'echoesx@loops.net',
    number: 7492342345,
    gear: [
      {
        instrument: 'Drum Machine',
        make: 'Elektron',
        model: 'Digitakt',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/589677/19114413_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Reverb Pedal',
        make: 'Strymon',
        model: 'BigSky',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_32/325799/7930919_800.jpg'
      },
      {
        instrument: 'Delay Pedal',
        make: 'Eventide',
        model: 'TimeFactor',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_11/110385/8470153_800.jpg'
      }
    ]
  },
  {
    username: 'SmellySocks88',
    email: 'wavjunkie@beatsource.com',
    number: 7984562312,
    gear: [
      {
        instrument: 'Bass Guitar',
        make: 'Ibanez',
        model: 'SR500'
      },
      {
        instrument: 'Amp',
        make: 'Ampeg',
        model: 'SVT Classic'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar Pedal',
        make: 'Boss',
        model: 'DS-1'
      },
      {
        instrument: 'Audio Interface',
        make: 'Universal Audio',
        model: 'Apollo Twin X'
      }
    ]
  },
  {
    username: 'SynthKnight',
    email: 'synthknight@loopmail.com',
    number: 7355676345,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Roland',
        model: 'JUNO-DS88'
      },
      {
        instrument: 'Drum Machine',
        make: 'Arturia',
        model: 'DrumBrute Impact'
      },
      {
        instrument: 'Mixer',
        make: 'Yamaha',
        model: 'MG10XU'
      }
    ],
    wishlist: [
      {
        instrument: 'Synthesizer',
        make: 'Moog',
        model: 'Subsequent 37'
      },
      {
        instrument: 'Compressor',
        make: 'dbx',
        model: '160A'
      }
    ]
  },
  {
    username: 'BeatChef',
    email: 'beatchef@mixmasters.com',
    number: 7676543213,
    gear: [
      {
        instrument: 'Turntable',
        make: 'Denon',
        model: 'VL12 Prime'
      },
      {
        instrument: 'Monitor Speakers',
        make: 'JBL',
        model: '305P MkII'
      }
    ],
    wishlist: [
      {
        instrument: 'DJ Mixer',
        make: 'Allen & Heath',
        model: 'Xone:96'
      }
    ]
  },
  {
    username: 'SneakyDave',
    email: 'bassb@loopaudio.com',
    number: 7234321123,
    gear: [
      {
        instrument: 'Bass Guitar',
        make: 'Fender',
        model: 'Jazz Bass'
      },
      {
        instrument: 'Bass Amp',
        make: 'Markbass',
        model: 'Little Mark III'
      }
    ],
    wishlist: [
      {
        instrument: 'Bass Synthesizer',
        make: 'Moog',
        model: 'Minitaur'
      }
    ]
  },
  {
    username: 'RetroBruce',
    email: 'retrobeat@disco.net',
    number: 7123456789,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Yamaha',
        model: 'DX7',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Yamaha_DX7_synthesizer_-_combined_image_with_diagonal_and_top_views.jpg'
      },
      {
        instrument: 'Drum Machine',
        make: 'Roland',
        model: 'TR-909',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_49/498683/15344382_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Analog Synth',
        make: 'Sequential',
        model: 'Prophet-6',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_35/357640/10078165_800.jpg'
      },
      {
        instrument: 'Guitar Pedal',
        make: 'Electro-Harmonix',
        model: 'Big Muff Pi',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_14/147853/9324708_800.jpg'
      }
    ]
  },
  {
    username: 'FishSticks93',
    email: 'funkyv@musicnow.com',
    number: 7893456789,
    gear: [
      {
        instrument: 'Keyboard',
        make: 'Nord',
        model: 'Stage 3'
      },
      {
        instrument: 'Monitor Speakers',
        make: 'Genelec',
        model: '8040B'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar',
        make: 'Fender',
        model: 'Stratocaster'
      },
      {
        instrument: 'Guitar Pedal',
        make: 'MXR',
        model: 'Carbon Copy Analog Delay'
      }
    ]
  },
  {
    username: 'HeavyRiffs',
    email: 'heavyriffs@metalmail.com',
    number: 7234567891,
    gear: [
      {
        instrument: 'Electric Guitar',
        make: 'ESP',
        model: 'LTD EC-1000',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_19/192156/12195607_800.jpg'
      },
      {
        instrument: 'Guitar Amp',
        make: 'Orange',
        model: 'Rockerverb 50 MKIII',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/595657/19286596_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Distortion Pedal',
        make: 'Pro Co',
        model: 'RAT 2',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_18/185691/18201582_800.jpg'
      }
    ]
  },
  {
    username: 'TurkeyTwizzler',
    email: 'chillbeats@relax.com',
    number: 7345678912,
    gear: [
      {
        instrument: 'Drum Machine',
        make: 'Korg',
        model: 'Volca Beats'
      },
      {
        instrument: 'Synthesizer',
        make: 'Teenage Engineering',
        model: 'OP-1'
      }
    ],
    wishlist: [
      {
        instrument: 'Sampler',
        make: 'Akai',
        model: 'MPC One'
      }
    ]
  },
  {
    username: 'LoopLabJohn',
    email: 'looplab@sonicmail.com',
    number: 7456789123,
    gear: [
      {
        instrument: 'Looper Pedal',
        make: 'Boss',
        model: 'RC-505'
      },
      {
        instrument: 'Synthesizer',
        make: 'Behringer',
        model: 'DeepMind 12'
      }
    ],
    wishlist: [
      {
        instrument: 'Midi Controller',
        make: 'Novation',
        model: 'Launchkey 49'
      }
    ]
  },
  {
    username: 'AcousticSoul',
    email: 'acousticsoul@strum.com',
    number: 7567891234,
    gear: [
      {
        instrument: 'Acoustic Guitar',
        make: 'Taylor',
        model: '814ce'
      },
      {
        instrument: 'Microphone',
        make: 'Rode',
        model: 'NT1-A'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar Pedal',
        make: 'Electro-Harmonix',
        model: 'Holy Grail Reverb'
      }
    ]
  },
  {
    username: 'ModularMind',
    email: 'modular@patchcable.com',
    number: 7678912345,
    gear: [
      {
        instrument: 'Modular Synth',
        make: 'Make Noise',
        model: '0-Coast'
      },
      {
        instrument: 'Eurorack Module',
        make: 'Mutable Instruments',
        model: 'Plaits'
      }
    ],
    wishlist: [
      {
        instrument: 'Oscillator',
        make: 'Moog',
        model: 'Mother-32'
      }
    ]
  },
  {
    username: 'PercMaster',
    email: 'percmaster@drumloop.com',
    number: 7789123456,
    gear: [
      {
        instrument: 'Electronic Drum Kit',
        make: 'Alesis',
        model: 'Strike Pro'
      }
    ],
    wishlist: [
      {
        instrument: 'Drum Trigger',
        make: 'Roland',
        model: 'RT-30HR'
      }
    ]
  },
  {
    username: 'MixKing',
    email: 'mixking@beatmail.com',
    number: 7984562123,
    gear: [
      {
        instrument: 'DJ Controller',
        make: 'Pioneer',
        model: 'DDJ-SX3'
      },
      {
        instrument: 'Monitor Speakers',
        make: 'KRK',
        model: 'Rokit 5 G4'
      }
    ],
    wishlist: [
      {
        instrument: 'Mixer',
        make: 'Allen & Heath',
        model: 'Xone:96'
      }
    ]
  },
  {
    username: 'LofiLord',
    email: 'lofiking@chill.com',
    number: 7893456213,
    gear: [
      {
        instrument: 'Sampler',
        make: 'Akai',
        model: 'MPC Live II'
      },
      {
        instrument: 'Synthesizer',
        make: 'Korg',
        model: 'Minilogue XD'
      }
    ],
    wishlist: [
      {
        instrument: 'Synthesizer',
        make: 'Teenage Engineering',
        model: 'OP-1'
      },
      {
        instrument: 'Audio Interface',
        make: 'Focusrite',
        model: 'Scarlett 2i2'
      }
    ]
  },
  {
    username: 'BassMonkey',
    email: 'bassmonkey@deepbass.com',
    number: 7912345678,
    gear: [
      {
        instrument: 'Bass Guitar',
        make: 'Fender',
        model: 'Jazz Bass'
      },
      {
        instrument: 'Bass Amp',
        make: 'Markbass',
        model: 'Little Mark III'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar Pedal',
        make: 'Boss',
        model: 'DS-1'
      }
    ]
  },
  {
    username: 'ToneWizard',
    email: 'tonewizard@soundmail.com',
    number: 7654321234,
    gear: [
      {
        instrument: 'Electric Guitar',
        make: 'ESP',
        model: 'LTD EC-1000',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_19/192156/12195607_800.jpg'
      },
      {
        instrument: 'Reverb Pedal',
        make: 'Strymon',
        model: 'BigSky',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_32/325799/7930919_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Delay Pedal',
        make: 'Eventide',
        model: 'TimeFactor',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_11/110385/8470153_800.jpg'
      }
    ]
  },
  {
    username: 'AnalogAddict',
    email: 'analogaddict@retrogear.com',
    number: 7489321456,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Yamaha',
        model: 'DX7',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Yamaha_DX7_synthesizer_-_combined_image_with_diagonal_and_top_views.jpg'
      },
      {
        instrument: 'Drum Machine',
        make: 'Roland',
        model: 'TR-909',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_49/498683/15344382_800.jpg'
      }
    ],
    wishlist: [
      {
        instrument: 'Analog Synth',
        make: 'Moog',
        model: 'Subsequent 37',
        imageURL: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_41/419761/12368382_800.jpg'
      }
    ]
  },
  {
    username: 'BeatBender',
    email: 'beatbender@loopmasters.com',
    number: 7123456891,
    gear: [
      {
        instrument: 'Turntable',
        make: 'Technics',
        model: 'SL-1200MK7'
      },
      {
        instrument: 'DJ Controller',
        make: 'Pioneer',
        model: 'DDJ-SX3'
      }
    ],
    wishlist: [
      {
        instrument: 'Monitor Speakers',
        make: 'JBL',
        model: '305P MkII'
      }
    ]
  },
  {
    username: 'SonicWarrior',
    email: 'sonicwarrior@warpsound.com',
    number: 7345678912,
    gear: [
      {
        instrument: 'Electric Guitar',
        make: 'PRS',
        model: 'Custom 24'
      },
      {
        instrument: 'Guitar Amp',
        make: 'Marshall',
        model: 'DSL40C'
      }
    ],
    wishlist: [
      {
        instrument: 'Distortion Pedal',
        make: 'Pro Co',
        model: 'RAT 2'
      }
    ]
  },
  {
    username: 'LoopFreak',
    email: 'loopfreak@loopy.com',
    number: 7890345678,
    gear: [
      {
        instrument: 'Looper Pedal',
        make: 'Boss',
        model: 'RC-505'
      }
    ],
    wishlist: [
      {
        instrument: 'Synthesizer',
        make: 'Behringer',
        model: 'DeepMind 12'
      }
    ]
  },
  {
    username: 'GroovePilot',
    email: 'groovepilot@beats.com',
    number: '07564578923',
    gear: [
      {
        instrument: 'Drum Machine',
        make: 'Roland',
        model: 'TR-08'
      }
    ],
    wishlist: [
      {
        instrument: 'Midi Controller',
        make: 'Novation',
        model: 'Launchkey 49'
      }
    ]
  },
  {
    username: 'NoiseCraft',
    email: 'noisecraft@sonicboom.com',
    number: 7856341278,
    gear: [
      {
        instrument: 'Modular Synth',
        make: 'Make Noise',
        model: '0-Coast'
      }
    ],
    wishlist: [
      {
        instrument: 'Eurorack Module',
        make: 'Mutable Instruments',
        model: 'Plaits'
      }
    ]
  },
  {
    username: 'DrumLord',
    email: 'drumlord@rhythmbox.com',
    number: 7623456789,
    gear: [
      {
        instrument: 'Electronic Drum Kit',
        make: 'Alesis',
        model: 'Strike Pro'
      }
    ],
    wishlist: [
      {
        instrument: 'Drum Trigger',
        make: 'Roland',
        model: 'RT-30HR'
      }
    ]
  },
  {
    username: 'EchoStation',
    email: 'echostation@reverbradio.com',
    number: 7856723489,
    gear: [
      {
        instrument: 'Reverb Pedal',
        make: 'Strymon',
        model: 'BigSky'
      }
    ],
    wishlist: [
      {
        instrument: 'Delay Pedal',
        make: 'Eventide',
        model: 'TimeFactor'
      }
    ]
  },
  {
    username: 'BassCaptain',
    email: 'basscaptain@deepgrooves.com',
    number: 7783456213,
    gear: [
      {
        instrument: 'Bass Guitar',
        make: 'Ibanez',
        model: 'SR500'
      },
      {
        instrument: 'Bass Amp',
        make: 'Ampeg',
        model: 'SVT Classic'
      }
    ],
    wishlist: [
      {
        instrument: 'Bass Synthesizer',
        make: 'Moog',
        model: 'Minitaur'
      }
    ]
  },
  {
    username: 'SpaceChords',
    email: 'spacechords@cosmicmail.com',
    number: 7234512312,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Korg',
        model: 'Minilogue XD'
      },
      {
        instrument: 'Synthesizer',
        make: 'Roland',
        model: 'JUNO-DS88'
      }
    ],
    wishlist: [
      {
        instrument: 'Synthesizer',
        make: 'Moog',
        model: 'Mother-32'
      }
    ]
  },
  {
    username: 'TapeDeckHero',
    email: 'tapedeckhero@analog.com',
    number: 7956723489,
    gear: [
      {
        instrument: 'Tape Recorder',
        make: 'Tascam',
        model: 'Porta02'
      }
    ],
    wishlist: [
      {
        instrument: 'Monitor Speakers',
        make: 'Genelec',
        model: '8040B'
      }
    ]
  },
  {
    username: 'ChillGuitar',
    email: 'chillguitar@harmony.com',
    number: 7893451234,
    gear: [
      {
        instrument: 'Acoustic Guitar',
        make: 'Taylor',
        model: '814ce'
      }
    ],
    wishlist: [
      {
        instrument: 'Guitar Pedal',
        make: 'MXR',
        model: 'Carbon Copy Analog Delay'
      }
    ]
  },
  {
    username: 'GrooveCrafter',
    email: 'groovecrafter@beats.com',
    number: 7345678912,
    gear: [
      {
        instrument: 'DJ Controller',
        make: 'Pioneer',
        model: 'DDJ-SX3'
      }
    ],
    wishlist: [
      {
        instrument: 'Turntable',
        make: 'Technics',
        model: 'SL-1200MK7'
      }
    ]
  },
  {
    username: 'ModularMind2',
    email: 'modular2@patchcable.com',
    number: 7567893412,
    gear: [
      {
        instrument: 'Modular Synth',
        make: 'Make Noise',
        model: '0-Coast'
      },
      {
        instrument: 'Eurorack Module',
        make: 'Mutable Instruments',
        model: 'Plaits'
      }
    ],
    wishlist: [
      {
        instrument: 'Oscillator',
        make: 'Moog',
        model: 'Mother-32'
      }
    ]
  },
  {
    username: 'VinylJunkie',
    email: 'vinyljunkie@spinmail.com',
    number: 7123456789,
    gear: [
      {
        instrument: 'Turntable',
        make: 'Technics',
        model: 'SL-1200MK7'
      }
    ],
    wishlist: [
      {
        instrument: 'DJ Mixer',
        make: 'Allen & Heath',
        model: 'Xone:96'
      }
    ]
  },
  {
    username: 'Dreamscaper',
    email: 'dreamscaper@soundmail.com',
    number: 7234678923,
    gear: [
      {
        instrument: 'Synthesizer',
        make: 'Roland',
        model: 'JUNO-DS88'
      },
      {
        instrument: 'Reverb Pedal',
        make: 'Strymon',
        model: 'BigSky'
      }
    ],
    wishlist: [
      {
        instrument: 'Delay Pedal',
        make: 'Eventide',
        model: 'TimeFactor'
      }
    ]
  }
];


(async function seedDB () {
  try {
    await Profile.deleteMany({}); // Clear the collection first
    await Profile.insertMany(profiles); // Insert predefined cards
    console.log('Database seeded with profiles!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
})();