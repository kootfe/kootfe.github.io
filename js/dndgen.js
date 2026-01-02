const traits = {
  darkvision: {
    name: "Darkvision",
    short: "See in darkness up to 60 ft",
    tags: ["sensory"]
  },
  superior_darkvision: {
    name: "Superior Darkvision",
    short: "See in darkness up to 120 ft",
    tags: ["sensory"]
  },
  fey_ancestry: {
    name: "Fey Ancestry",
    short: "Advantage against charm; cannot be magically put to sleep",
    tags: ["defense"]
  },
  trance: {
    name: "Trance",
    short: "Meditate for 4 hours instead of sleeping",
    tags: ["utility"]
  },
  keen_senses: {
    name: "Keen Senses",
    short: "Proficiency in Perception",
    tags: ["proficiency"]
  },
  halfling_luck: {
    name: "Halfling Luck",
    short: "Reroll 1s on attacks, ability checks, and saving throws",
    tags: ["luck"]
  },
  brave: {
    name: "Brave",
    short: "Advantage on saves against being frightened",
    tags: ["defense"]
  },
  nimbleness: {
    name: "Halfling Nimbleness",
    short: "Move through the space of any creature larger than you",
    tags: ["movement"]
  },
  dwarven_resilience: {
    name: "Dwarven Resilience",
    short: "Advantage vs poison; resistance to poison damage",
    tags: ["resistance", "defense"]
  },
  dwarven_combat_training: {
    name: "Dwarven Combat Training",
    short: "Weapon proficiencies: battleaxe, handaxe, light hammer, warhammer",
    tags: ["proficiency", "combat"]
  },
  tool_proficiency: {
    name: "Tool Proficiency",
    short: "Proficiency with one artisan's tool",
    tags: ["proficiency"]
  },
  stonecunning: {
    name: "Stonecunning",
    short: "Double proficiency on stonework History checks",
    tags: ["knowledge"]
  },
  gnome_cunning: {
    name: "Gnome Cunning",
    short: "Advantage on INT, WIS, CHA saves vs magic",
    tags: ["defense"]
  },
  draconic_ancestry: {
    name: "Draconic Ancestry",
    short: "Choose a dragon type; defines breath weapon and resistance",
    tags: ["racial", "combat"]
  },
  breath_weapon: {
    name: "Breath Weapon",
    short: "Use an action to exhale elemental energy",
    tags: ["combat"]
  },
  damage_resistance: {
    name: "Damage Resistance",
    short: "Resistance based on draconic ancestry",
    tags: ["resistance"]
  },
  infernal_legacy: {
    name: "Infernal Legacy",
    short: "Thaumaturgy cantrip; Hellish Rebuke and Darkness later",
    tags: ["magic"]
  },
  hellish_resistance: {
    name: "Hellish Resistance",
    short: "Resistance to fire damage",
    tags: ["resistance"]
  },
  menacing: {
    name: "Menacing",
    short: "Proficiency in Intimidation",
    tags: ["proficiency"]
  },
  relentless_endurance: {
    name: "Relentless Endurance",
    short: "When reduced to 0 HP, drop to 1 HP instead (1/long rest)",
    tags: ["survival"]
  },
  savage_attacks: {
    name: "Savage Attacks",
    short: "On crit, add one extra weapon die to melee damage",
    tags: ["combat"]
  },
  skill_versatility: {
    name: "Skill Versatility",
    short: "Gain two extra skill proficiencies",
    tags: ["proficiency"]
  },
  fleet_of_foot: {
    name: "Fleet of Foot",
    short: "Walking speed becomes 35 ft",
    tags: ["movement"]
  },
  mask_of_the_wild: {
    name: "Mask of the Wild",
    short: "Hide in lightly obscured natural phenomena",
    tags: ["stealth"]
  },
  extra_language: {
    name: "Extra Language",
    short: "Learn one additional language",
    tags: ["utility"]
  },
  martial_training: {
    name: "Martial Training",
    short: "Elf weapon proficiencies (depends on subrace)",
    tags: ["proficiency", "combat"]
  }
};

const bgs = {
    criminal: {
        name: "Criminal",
        traits: [
            "I always look for the fastest escape route in every room.",
            "I talk in circles and dodge questions like a pro.",
            "I keep a calm face even when everything is burning.",
            "I prefer bribes over arguments — easier, cleaner, faster.",
            "I stay quiet and watch people before I decide what to say.",
            "I flick small objects between my fingers when I'm nervous.",
            "I instinctively distrust authority, no matter who they are.",
            "I crack jokes when things get tense, even if it annoys everyone."
        ],
        flaws: [
            "I lie even when it makes my life harder.",
            "I can’t resist a risky opportunity, no matter how stupid.",
            "I hold grudges forever — I never forgive betrayal.",
            "When I’m stressed, I fall back into old illegal habits.",
            "I hate authority so much I’ll sabotage myself to spite them.",
            "I don’t trust allies and I assume every kindness hides a trap."
        ],
        bonds: [
            "I owe a massive debt to a dangerous person, and they will collect.",
            "Someone I care about is still stuck in the life I escaped.",
            "I carry a token from my old crew — I’ll never abandon it.",
            "A guard once spared me; I still don’t know why, but I owe them.",
            "My last heist went bad and someone died. I can’t forget it.",
            "I’m loyal to a criminal organization that expects favors… often."
        ],
        ideals: [
            "Freedom — No chains, no masters. Nobody owns me. (Chaotic)",
            "Greed — If I’m not getting paid, why am I here? (Evil)",
            "Loyalty — My crew comes first. Always. (Neutral)",
            "Justice — The law failed me, so I make my own rules. (Chaotic Good)",
            "Efficiency — A job done sloppily is worse than no job at all. (Lawful)",
            "Survival — I do whatever keeps me breathing one more day. (Any)"
        ],
        skills: ["deception", "stealth"],
        tools: ["thieves_tools", "gaming_set"],
        equipment: ["pouch with 15gp", "crowbar", "dark common clothes with a hood"],
        feature: "criminal_contact"
    },

    acolyte: {
        name: "Acolyte",
        skills: ["insight", "religion"],
        languages: ["any", "any"],
        equipment: ["holy symbol", "prayer book", "5 sticks of incense", "vestments", "common clothes", "15gp"],
        feature: "shelter_of_the_faithful"
    },

    charlatan: {
        name: "Charlatan",
        skills: ["deception", "sleight_of_hand"],
        tools: ["disguise_kit", "forgery_kit"],
        equipment: ["disguise kit", "tools of the con", "fine clothes", "15gp"],
        feature: "false_identity"
    },

    entertainer: {
        name: "Entertainer",
        skills: ["acrobatics", "performance"],
        tools: ["disguise_kit", "musical_instrument"],
        equipment: ["musical instrument", "favor of admirer", "costume", "15gp"],
        feature: "by_popular_demand"
    },

    folk_hero: {
        name: "Folk Hero",
        skills: ["animal_handling", "survival"],
        tools: ["artisan_tools", "land_vehicles"],
        equipment: ["artisan tools", "shovel", "iron pot", "common clothes", "10gp"],
        feature: "rustic_hospitality"
    },

    guild_artisan: {
        name: "Guild Artisan",
        skills: ["insight", "persuasion"],
        tools: ["artisan_tools"],
        languages: ["any"],
        equipment: ["artisan tools", "letter of introduction", "traveler’s clothes", "15gp"],
        feature: "guild_membership"
    },

    hermit: {
        name: "Hermit",
        skills: ["medicine", "religion"],
        tools: ["herbalism_kit"],
        languages: ["any"],
        equipment: ["scroll case of notes", "winter blanket", "common clothes", "herbalism kit", "5gp"],
        feature: "discovery"
    },

    noble: {
        name: "Noble",
        skills: ["history", "persuasion"],
        languages: ["any"],
        equipment: ["fine clothes", "signet ring", "scroll of pedigree", "25gp"],
        feature: "position_of_privilege"
    },

    outlander: {
        name: "Outlander",
        skills: ["athletics", "survival"],
        tools: ["musical_instrument"],
        languages: ["any"],
        equipment: ["staff", "hunting trap", "trophy", "traveler’s clothes", "10gp"],
        feature: "wanderer"
    },

    sage: {
        name: "Sage",
        skills: ["arcana", "history"],
        languages: ["any", "any"],
        equipment: ["bottle of ink", "quill", "small knife", "letter from colleague", "common clothes", "10gp"],
        feature: "researcher"
    },

    sailor: {
        name: "Sailor",
        skills: ["athletics", "perception"],
        tools: ["navigator_tools", "water_vehicles"],
        equipment: ["belaying pin", "silk rope (50ft)", "lucky charm", "common clothes", "10gp"],
        feature: "ship's_passage"
    },

    soldier: {
        name: "Soldier",
        skills: ["athletics", "intimidation"],
        tools: ["gaming_set", "land_vehicles"],
        equipment: ["rank insignia", "trophy from fallen", "bone dice or card deck", "common clothes", "10gp"],
        feature: "military_rank"
    },

    urchin: {
        name: "Urchin",
        skills: ["sleight_of_hand", "stealth"],
        tools: ["disguise_kit", "thieves_tools"],
        equipment: ["small knife", "map of city", "pet mouse", "token of memory", "common clothes", "10gp"],
        feature: "city_secrets"
    }
}

const races = {
    human: {
        name: "Human",
        speed: 30,
        size: "mid"
    },
}
