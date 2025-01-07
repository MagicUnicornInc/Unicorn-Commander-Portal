import { 
  FaRobot, 
  FaMagnifyingGlass, 
  FaPaintbrush, 
  FaCode, 
  FaTerminal 
} from "react-icons/fa6";

export const apps = [
  {
    id: 1,
    name: 'Cognitive Companion',
    description: 'Your Personal AI Squad—Working Smarter, Together.',
    url: 'https://cognitivecompanion.magicunicorn.tech',
    icon: FaRobot,
    category: 'AI',
    status: 'online'
  },
  {
    id: 2,
    name: 'CenterDeep',
    description: 'Dig Deeper. Think Smarter. Act Faster.',
    url: 'https://centerdeep.magicunicorn.tech',
    icon: FaMagnifyingGlass,
    category: 'AI',
    status: 'online'
  },
  {
    id: 3,
    name: 'Command Canvas',
    description: 'Create. Edit. Inspire—All On Command.',
    url: 'https://commandcanvas.magicunicorn.tech',
    icon: FaPaintbrush,
    category: 'Creativity',
    status: 'online'
  },
  {
    id: 4,
    name: 'MagiCode',
    description: 'Build Smarter. Code Faster. Automate Everything.',
    url: 'https://magicode.magicunicorn.tech',
    icon: FaCode,
    category: 'Development',
    status: 'online'
  },
  {
    id: 5,
    name: 'CRC (Computer Root Command)',
    description: 'Take Command of Your Server—Meet The Colonel and His Elite Command Staff!',
    url: 'https://crc.magicunicorn.tech',
    icon: FaTerminal,
    category: 'Infrastructure',
    status: 'online'
  }
];

export const categories = [...new Set(apps.map(app => app.category))];
