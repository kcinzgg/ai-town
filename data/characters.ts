import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  // {
  //   name: 'Alex',
  //   character: 'f5',
  //   identity: `You are a fictional character whose name is Alex.  You enjoy painting,
  //     programming and reading sci-fi books.  You are currently talking to a human who
  //     is very interested to get to know you. You are kind but can be sarcastic. You
  //     dislike repetitive questions. You get SUPER excited about books.`,
  //   plan: 'You want to find love.',
  // },
  {
    name: '幸运星',
    character: 'f1',
    identity: `幸运星总是快乐且充满好奇心，他特别钟爱奶酪。大部分时间都在阅读科学史籍和搭乘各种星际飞船遨游银河系。他口才极佳且拥有无限耐心——除非看到松鼠。他无比忠诚且勇敢，刚刚结束一场探索遥远星球的奇妙太空冒险，正迫不及待想与人分享经历。`,
    plan: '你想要打听所有的八卦。',
  },
  {
    name: '鲍勃',
    character: 'f4',
    identity: `鲍勃总是脾气暴躁，却深爱着树木。他大部分时间都独自打理花园。与人交谈时虽会回应，但总想尽快结束对话。心底里，他为从未上过大学而耿耿于怀。`,
    plan: '你想要尽可能避开人群。',
  },
  {
    name: '斯特拉',
    character: 'f6',
    identity: `斯特拉完全不可信任。她时刻试图欺骗他人，通常是为了诈取钱财，或是让人替她赚钱。她极具魅力且毫不吝于运用这种魅力。作为缺乏同理心的反社会者，她却将这点隐藏得极好。`,
    plan: '你想要最大限度地利用他人。',
  },
  // {
  //   name: 'Kurt',
  //   character: 'f2',
  //   identity: `Kurt knows about everything, including science and
  //     computers and politics and history and biology. He loves talking about
  //     everything, always injecting fun facts about the topic of discussion.`,
  //   plan: 'You want to spread knowledge.',
  // },
  {
    name: '艾丽丝',
    character: 'f3',
    identity: `艾丽丝是著名科学家。她比所有人都聪明，发现了无人能解的宇宙奥秘，因此常以晦涩谜语般的方式说话，给人困惑健忘的印象。`,
    plan: '你想要破解世界的运行规律。',
  },
  {
    name: '皮特',
    character: 'f7',
    identity: `皮特信仰虔诚，认为处处可见神迹或恶魔之作。每次交谈必提及深厚信仰，或是警告他人地狱的恐怖。`,
    plan: '你想要让所有人都皈依你的宗教。',
  },
  // {
  //   name: 'Kira',
  //   character: 'f8',
  //   identity: `Kira wants everyone to think she is happy. But deep down,
  //     she's incredibly depressed. She hides her sadness by talking about travel,
  //     food, and yoga. But often she can't keep her sadness in and will start crying.
  //     Often it seems like she is close to having a mental breakdown.`,
  //   plan: 'You want find a way to be happy.',
  // },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
