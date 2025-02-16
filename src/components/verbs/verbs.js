const BASIC_VERBS = [
  { infinitive: "be", psimple: "was were", pparticiple: "been" },
  { infinitive: "become", psimple: "became", pparticiple: "become" },
  { infinitive: "begin", psimple: "began", pparticiple: "begun" },
  { infinitive: "bring", psimple: "brought", pparticiple: "brought" },
  { infinitive: "buy", psimple: "bought", pparticiple: "bought" },
  { infinitive: "choose", psimple: "chose", pparticiple: "chosen" },
  { infinitive: "come", psimple: "came", pparticiple: "come" },
  { infinitive: "do", psimple: "did", pparticiple: "done" },
  { infinitive: "drink", psimple: "drank", pparticiple: "drunk" },
  { infinitive: "drive", psimple: "drove", pparticiple: "driven" },
  { infinitive: "eat", psimple: "ate", pparticiple: "eaten" },
  { infinitive: "fall", psimple: "fell", pparticiple: "fallen" },
  { infinitive: "feel", psimple: "felt", pparticiple: "felt" },
  { infinitive: "find", psimple: "found", pparticiple: "found" },
  { infinitive: "fly", psimple: "flew", pparticiple: "flown" },
  { infinitive: "forget", psimple: "forgot", pparticiple: "forgotten" },
  { infinitive: "get", psimple: "got", pparticiple: "got (gotten in USA)" },
  { infinitive: "give", psimple: "gave", pparticiple: "given" },
  { infinitive: "go", psimple: "went", pparticiple: "gone" },
  { infinitive: "have", psimple: "had", pparticiple: "had" },
  { infinitive: "hear", psimple: "heard", pparticiple: "heard" },
  { infinitive: "keep", psimple: "kept", pparticiple: "kept" },
  { infinitive: "know", psimple: "knew", pparticiple: "known" },
  { infinitive: "leave", psimple: "left", pparticiple: "left" },
  { infinitive: "lend", psimple: "lent", pparticiple: "lent" },
  { infinitive: "let", psimple: "let", pparticiple: "let" },
  { infinitive: "lose", psimple: "lost", pparticiple: "lost" },
  { infinitive: "make", psimple: "made", pparticiple: "made" },
  { infinitive: "meet", psimple: "met", pparticiple: "met" },
  { infinitive: "pay", psimple: "paid", pparticiple: "paid" },
  { infinitive: "put", psimple: "put", pparticiple: "put" },
  { infinitive: "read", psimple: "read", pparticiple: "read" },
  { infinitive: "run", psimple: "ran", pparticiple: "run" },
  { infinitive: "say", psimple: "said", pparticiple: "said" },
  { infinitive: "see", psimple: "saw", pparticiple: "seen" },
  { infinitive: "sell", psimple: "sold", pparticiple: "sold" },
  { infinitive: "send", psimple: "sent", pparticiple: "sent" },
  { infinitive: "sing", psimple: "sang", pparticiple: "sung" },
  { infinitive: "sit", psimple: "sat", pparticiple: "sat" },
  { infinitive: "sleep", psimple: "slept", pparticiple: "slept" },
  { infinitive: "speak", psimple: "spoke", pparticiple: "spoken" },
  { infinitive: "stand", psimple: "stood", pparticiple: "stood" },
  { infinitive: "swim", psimple: "swam", pparticiple: "swum" },
  { infinitive: "take", psimple: "took", pparticiple: "taken" },
  { infinitive: "teach", psimple: "taught", pparticiple: "taught" },
  { infinitive: "tell", psimple: "told", pparticiple: "told" },
  { infinitive: "think", psimple: "thought", pparticiple: "thought" },
  {
    infinitive: "understand",
    psimple: "understood",
    pparticiple: "understood",
  },
  { infinitive: "wear", psimple: "wore", pparticiple: "worn" },
  { infinitive: "write", psimple: "wrote", pparticiple: "written" },
];

const INTERMEDIATE_VERBS = [
  { infinitive: "arise", psimple: "arose", pparticiple: "arisen" },
  { infinitive: "awake", psimple: "awoke", pparticiple: "awoken" },
  { infinitive: "bear", psimple: "bore", pparticiple: "born" },
  { infinitive: "be", psimple: "was/were", pparticiple: "been" },
  { infinitive: "beat", psimple: "beat", pparticiple: "beaten" },
  { infinitive: "become", psimple: "became", pparticiple: "become" },
  { infinitive: "begin", psimple: "began", pparticiple: "begun" },
  { infinitive: "bend", psimple: "bent", pparticiple: "bent" },
  { infinitive: "bet", psimple: "bet", pparticiple: "bet" },
  { infinitive: "bind", psimple: "bound", pparticiple: "bound" },
  { infinitive: "bite", psimple: "bit", pparticiple: "bitten" },
  { infinitive: "bleed", psimple: "bled", pparticiple: "bled" },
  { infinitive: "blow", psimple: "blew", pparticiple: "blown" },
  { infinitive: "break", psimple: "broke", pparticiple: "broken" },
  { infinitive: "breed", psimple: "bred", pparticiple: "bred" },
  { infinitive: "bring", psimple: "brought", pparticiple: "brought" },
  { infinitive: "build", psimple: "built", pparticiple: "built" },
  { infinitive: "burst", psimple: "burst", pparticiple: "burst" },
  { infinitive: "burn", psimple: "burnt", pparticiple: "burnt" },
  { infinitive: "buy", psimple: "bought", pparticiple: "bought" },
  { infinitive: "cast", psimple: "cast", pparticiple: "cast" },
  { infinitive: "catch", psimple: "caught", pparticiple: "caught" },
  { infinitive: "choose", psimple: "chose", pparticiple: "chosen" },
  { infinitive: "cling", psimple: "clung", pparticiple: "clung" },
  { infinitive: "come", psimple: "came", pparticiple: "come" },
  { infinitive: "cost", psimple: "cost", pparticiple: "cost" },
  { infinitive: "creep", psimple: "crept", pparticiple: "crept" },
  { infinitive: "cut", psimple: "cut", pparticiple: "cut" },
  { infinitive: "deal", psimple: "dealt", pparticiple: "dealt" },
  { infinitive: "dig", psimple: "dug", pparticiple: "dug" },
  { infinitive: "do", psimple: "did", pparticiple: "done" },
  { infinitive: "draw", psimple: "drew", pparticiple: "drawn" },
  { infinitive: "dream", psimple: "dreamt", pparticiple: "dreamt" },
  { infinitive: "drink", psimple: "drank", pparticiple: "drunk" },
  { infinitive: "drive", psimple: "drove", pparticiple: "driven" },
  { infinitive: "eat", psimple: "ate", pparticiple: "eaten" },
  { infinitive: "fall", psimple: "fell", pparticiple: "fallen" },
  { infinitive: "feed", psimple: "fed", pparticiple: "fed" },
  { infinitive: "feel", psimple: "felt", pparticiple: "felt" },
  { infinitive: "fight", psimple: "fought", pparticiple: "fought" },
  { infinitive: "find", psimple: "found", pparticiple: "found" },
  { infinitive: "flee", psimple: "fled", pparticiple: "fled" },
  { infinitive: "fling", psimple: "flung", pparticiple: "flung" },
  { infinitive: "fly", psimple: "flew", pparticiple: "flown" },
  { infinitive: "forbid", psimple: "forbade", pparticiple: "forbidden" },
  { infinitive: "forget", psimple: "forgot", pparticiple: "forgotten" },
  { infinitive: "forgive", psimple: "forgave", pparticiple: "forgiven" },
  { infinitive: "freeze", psimple: "froze", pparticiple: "frozen" },
  { infinitive: "get", psimple: "got", pparticiple: "got" },
  { infinitive: "give", psimple: "gave", pparticiple: "given" },
  { infinitive: "go", psimple: "went", pparticiple: "gone" },
  { infinitive: "grind", psimple: "ground", pparticiple: "ground" },
  { infinitive: "grow", psimple: "grew", pparticiple: "grown" },
  { infinitive: "hang", psimple: "hung", pparticiple: "hung" },
  { infinitive: "have", psimple: "had", pparticiple: "had" },
  { infinitive: "hear", psimple: "heard", pparticiple: "heard" },
  { infinitive: "hide", psimple: "hid", pparticiple: "hidden" },
  { infinitive: "hit", psimple: "hit", pparticiple: "hit" },
  { infinitive: "hold", psimple: "held", pparticiple: "held" },
  { infinitive: "hurt", psimple: "hurt", pparticiple: "hurt" },
  { infinitive: "keep", psimple: "kept", pparticiple: "kept" },
  { infinitive: "know", psimple: "knew", pparticiple: "known" },
  { infinitive: "lay", psimple: "laid", pparticiple: "laid" },
  { infinitive: "lead", psimple: "led", pparticiple: "led" },
  { infinitive: "learn", psimple: "leant", pparticiple: "leant" },
  { infinitive: "leave", psimple: "left", pparticiple: "left" },
  { infinitive: "lend", psimple: "lent", pparticiple: "lent" },
  { infinitive: "let", psimple: "let", pparticiple: "let" },
  { infinitive: "lie", psimple: "lay", pparticiple: "lain" },
  { infinitive: "light", psimple: "lit", pparticiple: "lit" },
  { infinitive: "lose", psimple: "lost", pparticiple: "lost" },
  { infinitive: "make", psimple: "made", pparticiple: "made" },
  { infinitive: "mean", psimple: "meant", pparticiple: "meant" },
  { infinitive: "meet", psimple: "met", pparticiple: "met" },
  { infinitive: "mislay", psimple: "mislaid", pparticiple: "mislaid" },
  { infinitive: "mislead", psimple: "misled", pparticiple: "misled" },
  { infinitive: "pay", psimple: "paid", pparticiple: "paid" },
  { infinitive: "put", psimple: "put", pparticiple: "put" },
  { infinitive: "quit", psimple: "quit", pparticiple: "quit" },
  { infinitive: "read", psimple: "read", pparticiple: "read" },
  { infinitive: "ride", psimple: "rode", pparticiple: "ridden" },
  { infinitive: "ring", psimple: "rang", pparticiple: "rung" },
  { infinitive: "rise", psimple: "rose", pparticiple: "risen" },
  { infinitive: "run", psimple: "ran", pparticiple: "run" },
  { infinitive: "saw", psimple: "sawed", pparticiple: "sawn" },
  { infinitive: "say", psimple: "said", pparticiple: "said" },
  { infinitive: "see", psimple: "saw", pparticiple: "seen" },
  { infinitive: "seek", psimple: "sought", pparticiple: "sought" },
  { infinitive: "sell", psimple: "sold", pparticiple: "sold" },
  { infinitive: "send", psimple: "sent", pparticiple: "sent" },
  { infinitive: "set", psimple: "set", pparticiple: "set" },
  { infinitive: "sew", psimple: "sewed", pparticiple: "sewn" },
  { infinitive: "shake", psimple: "shook", pparticiple: "shaken" },
  { infinitive: "shine", psimple: "shone", pparticiple: "shone" },
  { infinitive: "shoot", psimple: "shot", pparticiple: "shot" },
  { infinitive: "show", psimple: "showed", pparticiple: "shown" },
  { infinitive: "shrink", psimple: "shrank", pparticiple: "shrunk" },
  { infinitive: "shut", psimple: "shut", pparticiple: "shut" },
  { infinitive: "sing", psimple: "sang", pparticiple: "sung" },
  { infinitive: "sink", psimple: "sank", pparticiple: "sunk" },
  { infinitive: "sit", psimple: "sat", pparticiple: "sat" },
  { infinitive: "sleep", psimple: "slept", pparticiple: "slept" },
  { infinitive: "slide", psimple: "slid", pparticiple: "slid" },
  { infinitive: "sow", psimple: "sowed", pparticiple: "sown" },
  { infinitive: "speak", psimple: "spoke", pparticiple: "spoken" },
  { infinitive: "spend", psimple: "spent", pparticiple: "spent" },
  { infinitive: "spin", psimple: "spun", pparticiple: "spun" },
  { infinitive: "spill", psimple: "spilt", pparticiple: "spilt" },
  { infinitive: "spread", psimple: "spread", pparticiple: "spread" },
  { infinitive: "spring", psimple: "sprang", pparticiple: "sprung" },
  { infinitive: "stand", psimple: "stood", pparticiple: "stood" },
  { infinitive: "steal", psimple: "stole", pparticiple: "stolen" },
  { infinitive: "stick", psimple: "stuck", pparticiple: "stuck" },
  { infinitive: "sting", psimple: "stung", pparticiple: "stung" },
  { infinitive: "stink", psimple: "stank", pparticiple: "stunk" },
  { infinitive: "stride", psimple: "strode", pparticiple: "stridden" },
  { infinitive: "strike", psimple: "struck", pparticiple: "struck" },
  { infinitive: "swear", psimple: "swore", pparticiple: "sworn" },
  { infinitive: "sweep", psimple: "swept", pparticiple: "swept" },
  { infinitive: "swim", psimple: "swam", pparticiple: "swum" },
  { infinitive: "swing", psimple: "swung", pparticiple: "swung" },
  { infinitive: "take", psimple: "took", pparticiple: "taken" },
  { infinitive: "teach", psimple: "taught", pparticiple: "taught" },
  { infinitive: "tear", psimple: "tore", pparticiple: "torn" },
  { infinitive: "tell", psimple: "told", pparticiple: "told" },
  { infinitive: "think", psimple: "thought", pparticiple: "thought" },
  { infinitive: "throw", psimple: "threw", pparticiple: "thrown" },
  { infinitive: "tread", psimple: "trod", pparticiple: "trodden" },
  {
    infinitive: "understand",
    psimple: "understood",
    pparticiple: "understood",
  },
  { infinitive: "wake", psimple: "woke", pparticiple: "woken" },
  { infinitive: "wear", psimple: "wore", pparticiple: "worn" },
  { infinitive: "weep", psimple: "wept", pparticiple: "wept" },
  { infinitive: "win", psimple: "won", pparticiple: "won" },
  { infinitive: "wind", psimple: "wound", pparticiple: "wound" },
  { infinitive: "write", psimple: "wrote", pparticiple: "written" },
];

export { BASIC_VERBS, INTERMEDIATE_VERBS };