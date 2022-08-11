export type Gender = 'male' | 'female';

export interface BodyParts {
  longHair: number,
  lowerRightArm: number,
  rightHand: number,
  upperRightArm: number,
  rightShoulder: number,
  rightFoot: number,
  lowerRightLeg: number,
  upperRightLeg: number,
  leftFoot: number,
  lowerLeftLeg: number,
  pelvis: number,
  upperLeftLeg: number,
  tummy: number,
  torso: number,
  head: number,
  leftHand: number,
  upperLeftArm: number,
  lowerLeftArm: number,
  leftShoulder: number,
}

export interface BodyColors {
  skin: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  hair: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  primary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  secondary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  accent: {
    color: `#${string}`;
    shade: `#${string}`;
  };
}

export interface Pets {
  dog1: boolean;
  dog2: boolean;
  dog3: boolean;
  panther: boolean;
  bear: boolean;
}

export type WeaponName = 'fan' | 'keyboard' | 'knife'
  | 'leek' | 'mug' | 'sai'
  | 'racquet' | 'axe' | 'bumps'
  | 'flail' | 'fryingPan' | 'hatchet'
  | 'mammothBone' | 'morningStar'
  | 'trombone' | 'baton' | 'halbard'
  | 'lance' | 'trident' | 'whip'
  | 'noodleBowl' | 'piopio' | 'shuriken'
  | 'broadsword' | 'scimitar' | 'sword';

export type WeaponType = 'fast' | 'sharp' | 'heavy' | 'long' | 'thrown' | 'blunt';

export type WeaponAnimation = 'fist' | 'slash' | 'estoc' | 'whip';

export interface Weapon {
  name: WeaponName;
  odds: number;
  types: WeaponType[];
  tempo: number;
  counter: number;
  evasion: number;
  block: number;
  accuracy: number;
  precision: number;
  disarm: number;
  combo: number;
  damage: number;
  toss: number;
  reach: number;
  animation: WeaponAnimation;
}

export type SkillName = 'herculeanStrength' | 'felineAgility' | 'lightningBolt'
  | 'vitality' | 'immortality' | 'reconnaissance' | 'weaponsMaster'
  | 'martialArts' | 'sixthSense' | 'hostility'
  | 'fistsOfFury' | 'shield' | 'armor'
  | 'toughenedSkin' | 'untouchable' | 'sabotage'
  | 'shock' | 'bodybuilder' | 'relentless'
  | 'survival' | 'leadSkeleton' | 'balletShoes' | 'determination'
  | 'firstStrike' | 'resistant' | 'counterAttack' | 'ironHead'
  | 'thief' | 'fierceBrute'
  | 'tragicPotion' | 'net' | 'bomb'
  | 'hammer' | 'cryOfTheDamned' | 'hypnosis' | 'flashFlood' | 'tamer'
  | 'regeneration' | 'chef' | 'spy' | 'saboteur' | 'backup'
  | 'hideaway' | 'monk';

export type SuperName = 'thief' | 'fierceBrute' | 'tragicPotion'
  | 'net' | 'bomb' | 'hammer' | 'cryOfTheDamned' | 'hypnosis' | 'flashFlood' | 'tamer';

export type SkillType = 'passive' | 'booster' | 'super' | 'talent';

export interface Skill {
  name: SkillName;
  icon: string;
  odds: number;
  type: SkillType;
  toss?: number;
  uses?: number;
}

export type PetName = 'dog1' | 'dog2' | 'dog3' | 'panther' | 'bear';

export interface Stat {
  stat: number;
  modifier: number;
  value: number;
}

export interface Brute {
  name: string;
  rank: number;
  destiny_path: (0 | 1)[];
  data: {
    user: string;
    level: number;
    xp: number;
    stance?: number;
    stats: {
      hp: number;
      endurance: Stat;
      strength: Stat;
      agility: Stat;
      speed: Stat;
    }
    ranking: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    gender: Gender;
    body: BodyParts;
    colors: BodyColors;
    weapons: WeaponName[];
    skills: SkillName[];
    pets: Pets;
    master: string;
    victories: number;
    pupils: number;
    clan?: {
      id: number;
      name: string;
    },
    tournament?: string;
  };
}

export interface User {
  id: string;
  name: string;
  token: string;
  brutes?: Brute[];
}

export interface Log {
  id: number;
  current_brute: number;
  type: 'win' | 'lose' | 'child' | 'childup'
  | 'up' | 'lvl' | 'survive';
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  brute?: string;
  fight?: number;
  xp?: number;
}

export type Stats = 'endurance' | 'strength' | 'agility' | 'speed';

export interface LevelUpChoice {
  type: 'skill' | 'weapon' | 'pet' | 'stats';
  name: SkillName | WeaponName | PetName | Stats | [Stats, Stats];
  stats?: 2 | [1, 1];
}

export interface DestinyChoice {
  brute: string;
  path: (0 | 1)[];
  choice: LevelUpChoice;
}

export interface DetailedFighter {
  // Metadata
  name: string;
  type: 'brute' | 'pet';
  // Follower/Backup variables
  master?: string;
  arrivesAtInitiative?: number;
  leavesAtInitiative?: number;
  // Raw stats
  maxHp: number;
  hp: number,
  strength: number,
  agility: number,
  speed: number,
  // Initiative
  initiative: number, // Lower attacks next
  tempo: number, // Lower is better
  // hit stats
  baseDamage: number,
  counter: number,
  autoReversalOnBlock: boolean,
  triggerReversal: boolean,
  reversal: number,
  combo: number,
  block: number,
  accuracy: number,
  armor: number,
  disarm: number,
  evasion: number,
  // Passives
  // Destroys one enemy's weapon per hit
  sabotage: boolean,
  // tempo -25% for heavy weapons
  bodybuilder: boolean,
  // Survive with 1 HP on first death
  survival: boolean,
  // First hit of the fight is evaded
  balletShoes: boolean,
  // 70% chance of re-attacking on misses (evasion or block)
  determination: boolean,
  retryAttack: boolean,
  // 30% chance of disarming when being hit
  ironHead: boolean,
  // Max 20% max HP per hit
  resistant: boolean,
  // Available skills
  skills: Skill[],
  // Available weapons
  weapons: Weapon[],
  // Shield state
  shield: boolean,
  // Active skills
  activeSkills: Skill[],
  // Active weapon
  activeWeapon: Weapon | null,
  keepWeaponChance: number,
  // Pre fight sabotage
  saboteur: boolean,
  sabotagedWeapon: Weapon | null,
  // Status effects
  poisoned: boolean,
  trapped: boolean,
}

export interface Fighter {
  name: string;
  type: 'brute' | 'pet';
  master?: string;
  maxHp: number;
  hp: number,
  skills: Skill[];
  weapons: Weapon[];
  shield: boolean;
}

export interface SaboteurStep {
  action: 'saboteur';
  brute: string;
  weapon: WeaponName;
}

export interface LeaveStep {
  action: 'leave';
  type: 'brute' | 'pet';
  name: string;
}

export interface ArriveStep {
  action: 'arrive';
  type: 'brute' | 'pet';
  name: string;
}

export interface TrashStep {
  action: 'trash';
  brute: string;
  name: WeaponName;
}

export interface StealStep {
  action: 'steal';
  brute: string;
  name: WeaponName;
  target: string;
}

export interface TrapStep {
  action: 'trap';
  brute: string;
  target: string;
}

export interface HealStep {
  action: 'heal';
  brute: string;
  amount: number;
}

export interface ResistStep {
  action: 'resist';
  brute: string;
}

export interface SurviveStep {
  action: 'survive';
  brute: string;
}

export interface HitStep {
  action: 'hit' | 'flashFlood' | 'hammer' | 'poison';
  brute: string;
  target: string;
  weapon: WeaponName | SuperName | null;
  damage: number;
  thrown?: boolean;
}

export interface HypnotiseStep {
  action: 'hypnotise';
  brute: string;
  pet: PetName;
}

export interface MoveStep {
  action: 'moveTo';
  fighter: string;
  fighterType: 'brute' | 'pet';
  target: string;
  targetType: 'brute' | 'pet';
}

export interface EatStep {
  action: 'eat';
  brute: string;
  target: string;
  heal: number;
}

export interface MoveBackStep {
  action: 'moveBack';
  fighter: string;
}

export interface EquipStep {
  action: 'equip';
  brute: string;
  name: WeaponName;
}

export interface AttemptHitStep {
  action: 'attemptHit';
  fighter: string;
  target: string;
}

export interface BlockStep {
  action: 'block';
  fighter: string;
}

export interface EvadeStep {
  action: 'evade';
  fighter: string;
}

export interface BreakStep {
  action: 'break';
  fighter: string;
  opponent: string;
}

export interface SabotageStep {
  action: 'sabotage';
  fighter: string;
  opponent: string;
  weapon: WeaponName;
}

export interface DisarmStep {
  action: 'disarm';
  fighter: string;
  opponent: string;
  weapon: WeaponName;
}

export interface DeathStep {
  action: 'death';
  fighter: string;
  type: 'brute' | 'pet';
}

export interface ThrowStep {
  action: 'throw';
  fighter: string;
  opponent: string;
  opponentType: 'brute' | 'pet';
  weapon: WeaponName;
}

export interface EndStep {
  action: 'end';
  winner: string;
  loser: string;
}

export interface CounterStep {
  action: 'counter';
  fighter: string;
  opponent: string;
}

export interface SkillActivateStep {
  action: 'skillActivate';
  brute: string;
  skill: SkillName;
}

export interface SkillExpireStep {
  action: 'skillExpire';
  brute: string;
  skill: SkillName;
}

export type FightStep = SaboteurStep | LeaveStep | ArriveStep
  | TrashStep | StealStep | TrapStep | HealStep | ResistStep
  | SurviveStep | HitStep | HypnotiseStep | MoveStep | EatStep
  | MoveBackStep | EquipStep | AttemptHitStep | BlockStep | EvadeStep
  | BreakStep | SabotageStep | DisarmStep | DeathStep | ThrowStep | EndStep
  | CounterStep | SkillActivateStep | SkillExpireStep;

export interface DetailedFight {
  brute_1: string;
  brute_2: string;
  data: {
    fighters: DetailedFighter[];
    steps: FightStep[];
    initiative: number;
    winner: string;
    loser: string;
  }
}

export interface Fight {
  brute_1: string;
  brute_2: string;
  data: {
    fighters: Fighter[];
    steps: FightStep[];
    winner: string;
    loser: string;
  }
}