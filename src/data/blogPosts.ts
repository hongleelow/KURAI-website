export type BlogCategory =
  | 'ai-fun-facts'
  | 'parent-guides'
  | 'workshop-recaps'
  | 'student-spotlights';

export interface BlogPost {
  id: number;
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  readTime: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
  /** Full article body rendered as an array of content blocks */
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'quote'; text: string; attribution?: string };

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'how-does-a-robot-see-computer-vision',
    category: 'ai-fun-facts',
    title: 'How Does a Robot "See"? A Fun Guide to Computer Vision',
    excerpt:
      'Ever wondered how robots recognise faces or objects? Discover the basics of computer vision explained in a way children can understand and get excited about.',
    date: 'Mar 5, 2026',
    isoDate: '2026-03-05',
    readTime: '3 min read',
    featured: true,
    image: '/images/blog-1.jpg',
    imageAlt: 'Robot camera sensor demonstrating computer vision at KURAI',
    content: [
      {
        type: 'paragraph',
        text: 'When we look at the world, our eyes send signals to our brain, and our brain figures out what we are seeing. Robots do something similar, but instead of eyes and a brain, they use cameras and computer programmes. This process is called computer vision.',
      },
      {
        type: 'heading',
        text: 'Pixels: the building blocks of a picture',
      },
      {
        type: 'paragraph',
        text: 'Every digital image is made up of tiny squares called pixels. Each pixel has a colour value. When a computer looks at an image, it reads those colour values one by one — almost like reading a very long list of numbers. By analysing how those numbers are arranged, the computer can start to recognise shapes, edges, and patterns.',
      },
      {
        type: 'heading',
        text: 'How does a robot recognise a face?',
      },
      {
        type: 'paragraph',
        text: 'Imagine you are looking for your friend in a crowded room. You scan for familiar features — their hair colour, the shape of their face, their height. A robot does something similar. It compares the pattern of pixels in a photo against patterns it has already learned. If the patterns match closely enough, it says "I know this person!"',
      },
      {
        type: 'callout',
        text: 'At KURAI, our AI Explorers students train simple computer vision models to recognise objects like apples, bananas, and toy cars — all within a single class session.',
      },
      {
        type: 'heading',
        text: 'Where do we see computer vision every day?',
      },
      {
        type: 'list',
        items: [
          'Phone cameras that automatically focus on faces',
          'Self-checkout machines that identify products',
          'Cars that can detect pedestrians and other vehicles',
          'Social media filters that add funny effects to your face',
        ],
      },
      {
        type: 'paragraph',
        text: 'Computer vision is one of the most exciting areas of artificial intelligence, and it is already woven into the technology children use every day. Understanding how it works gives kids a head start in understanding the world around them.',
      },
      {
        type: 'heading',
        text: 'Try it at home',
      },
      {
        type: 'paragraph',
        text: 'Ask your child to draw a picture and then take a photo of it. Together, zoom in until you can see the individual pixels. Talk about how a computer would "read" those tiny squares to understand the image. It is a simple experiment that makes a complex idea very real.',
      },
    ],
  },
  {
    id: 2,
    slug: '5-signs-child-ready-for-ai-education',
    category: 'parent-guides',
    title: '5 Signs Your Child Is Ready for AI Education',
    excerpt:
      'Not sure if your child is old enough for structured tech learning? Here are five indicators that they\'re ready to start exploring AI and Robotics.',
    date: 'Feb 28, 2026',
    isoDate: '2026-02-28',
    readTime: '4 min read',
    featured: true,
    image: '/images/blog-2.jpg',
    imageAlt: 'Young child exploring technology with curiosity and focus',
    content: [
      {
        type: 'paragraph',
        text: 'Parents often ask us: "Is my child too young for AI classes?" The short answer is that most children aged five and above are ready — but every child is different. Here are five signs that suggest your child would thrive in a structured AI and Robotics programme.',
      },
      {
        type: 'heading',
        text: '1. They ask "why" and "how" about everything',
      },
      {
        type: 'paragraph',
        text: 'If your child constantly asks questions about how things work — why the sky is blue, how a phone knows their face, or how a robot moves — that natural curiosity is exactly what AI education channels. At KURAI, we turn those questions into hands-on learning experiences.',
      },
      {
        type: 'heading',
        text: '2. They enjoy puzzles, patterns, and problem-solving',
      },
      {
        type: 'paragraph',
        text: 'Children who gravitate towards jigsaw puzzles, LEGO builds, or pattern games already think in ways that align with computational thinking. AI education builds on these instincts by teaching children how to break problems into smaller steps and find logical solutions.',
      },
      {
        type: 'heading',
        text: '3. They can follow multi-step instructions',
      },
      {
        type: 'paragraph',
        text: 'Being able to follow a recipe, complete a craft project, or play a board game with rules shows that a child can handle sequential thinking. This is the foundation of programming and algorithmic reasoning.',
      },
      {
        type: 'heading',
        text: '4. They show interest in technology beyond passive consumption',
      },
      {
        type: 'paragraph',
        text: 'There is a difference between a child who watches videos all day and one who wants to know how the video was made. If your child has ever asked to create something on a device — a drawing, a game, a story — they are showing creative intent, which is a strong indicator of readiness.',
      },
      {
        type: 'heading',
        text: '5. They enjoy working with others',
      },
      {
        type: 'paragraph',
        text: 'AI and Robotics are team endeavours. If your child likes collaborative play, shares ideas during group activities, or enjoys explaining things to friends, they will thrive in the small-group environment at KURAI, where classes are capped at eight students.',
      },
      {
        type: 'callout',
        text: 'Not sure if your child is ready? Book a free trial class at KURAI. It is the best way to see how your child responds to structured AI learning in a real classroom setting.',
      },
      {
        type: 'paragraph',
        text: 'Readiness is not about knowing how to code. It is about being curious, willing to try, and open to learning something new. Our youngest students start at age five with visual, hands-on activities that require no prior experience.',
      },
    ],
  },
  {
    id: 3,
    slug: 'recap-first-open-day-success',
    category: 'workshop-recaps',
    title: 'Recap: Our First Open Day Was a Huge Success',
    excerpt:
      'Over 40 families joined us for our inaugural Open Day. See highlights from the demo classes, parent Q&A sessions, and student showcases.',
    date: 'Jan 20, 2026',
    isoDate: '2026-01-20',
    readTime: '5 min read',
    featured: true,
    image: '/images/blog-3.jpg',
    imageAlt: 'Families visiting KURAI education centre during Open Day event',
    content: [
      {
        type: 'paragraph',
        text: 'On Sunday 18 January, we opened our doors at the KURAI Centre in Horizon Hills for our very first Open Day — and the response was beyond anything we expected. Over 40 families came through, and the energy in the room was electric.',
      },
      {
        type: 'heading',
        text: 'What happened on the day',
      },
      {
        type: 'paragraph',
        text: 'The morning kicked off with guided tours of our centre, where parents could see our learning spaces, the equipment we use, and how we set up our classrooms for small-group instruction. Our instructors ran live demo classes so families could watch real lessons in action.',
      },
      {
        type: 'list',
        items: [
          'AI Explorers demo: children trained an image classifier to sort animals',
          'Robotics demo: students built and programmed a line-following robot',
          'Parent Q&A session with our founding team',
          'Hands-on activity corner for younger siblings',
        ],
      },
      {
        type: 'heading',
        text: 'What parents told us',
      },
      {
        type: 'quote',
        text: 'I was impressed by how hands-on everything is. My daughter was completely focused the entire session — she usually loses interest after ten minutes.',
        attribution: 'Parent of a 6-year-old attendee',
      },
      {
        type: 'paragraph',
        text: 'Several parents mentioned that they had been looking for something beyond the typical coding class — something more structured and less screen-dependent. That feedback validated our approach of combining physical robotics with AI concepts in a curriculum that builds week by week.',
      },
      {
        type: 'heading',
        text: 'What we learned',
      },
      {
        type: 'paragraph',
        text: 'Running our first Open Day taught us a lot. We learned that parents want to see their children in action before committing to a programme. We also learned that having a dedicated space for younger siblings makes the experience smoother for families with multiple children.',
      },
      {
        type: 'paragraph',
        text: 'Thank you to every family who joined us. Your enthusiasm and questions reminded us exactly why we started KURAI — to give children in Johor Bahru access to real, structured AI education that goes beyond surface-level exposure.',
      },
    ],
  },
  {
    id: 4,
    slug: 'meet-arif-minecraft-fan-to-ai-explorer',
    category: 'student-spotlights',
    title: 'Meet Arif: From Minecraft Fan to AI Explorer',
    excerpt:
      'Nine-year-old Arif joined KURAI with a passion for gaming. Three months later, he\'s building his own AI-powered quiz game. Read his story.',
    date: 'Feb 15, 2026',
    isoDate: '2026-02-15',
    readTime: '3 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'When Arif first walked into KURAI, he told us he wanted to build Minecraft mods. Three months later, he is building something even more impressive — an AI-powered quiz game that adapts its difficulty based on how the player answers.',
      },
      {
        type: 'heading',
        text: 'From player to builder',
      },
      {
        type: 'paragraph',
        text: 'Arif is nine years old and has been gaming since he was six. Like many children his age, he spent most of his screen time consuming content rather than creating it. His parents enrolled him at KURAI because they wanted to channel his tech enthusiasm into something productive.',
      },
      {
        type: 'paragraph',
        text: 'In his first few weeks, Arif learned about data patterns and how computers make decisions. He was fascinated by the idea that a programme could "learn" from data — the same way he learns enemy patterns in his favourite games.',
      },
      {
        type: 'heading',
        text: 'The quiz game project',
      },
      {
        type: 'paragraph',
        text: 'For his term project, Arif built a general knowledge quiz — but not a simple one. He wanted the game to get harder if the player was doing well and easier if they were struggling. With his instructor\'s guidance, he implemented a scoring algorithm that adjusts difficulty in real time.',
      },
      {
        type: 'quote',
        text: 'He used to just play games. Now he wants to make them. That shift in mindset is something I did not expect to happen so quickly.',
        attribution: 'Arif\'s father',
      },
      {
        type: 'heading',
        text: 'What Arif says',
      },
      {
        type: 'paragraph',
        text: 'When we asked Arif what he liked most about KURAI, he said: "I like that I can actually make things. In school, we just learn about stuff. Here, I build it." That sums up the KURAI philosophy — learning by doing, not just watching.',
      },
      {
        type: 'callout',
        text: 'Want your child to go from consumer to creator? Explore our AI Explorers programme for children aged 8 to 11.',
      },
    ],
  },
  {
    id: 5,
    slug: 'what-is-machine-learning-explained-with-cookies',
    category: 'ai-fun-facts',
    title: 'What Is Machine Learning? Explained with Cookies',
    excerpt:
      'We use a fun cookie-sorting analogy to explain how machine learning works — perfect for curious children (and their parents).',
    date: 'Feb 10, 2026',
    isoDate: '2026-02-10',
    readTime: '3 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Machine learning is one of those terms that sounds complicated but is actually based on a simple idea. Let us explain it using something everyone loves: cookies.',
      },
      {
        type: 'heading',
        text: 'The cookie sorting challenge',
      },
      {
        type: 'paragraph',
        text: 'Imagine you have a big box of cookies — chocolate chip, oatmeal raisin, and sugar cookies all mixed together. Your job is to sort them into three piles. As a human, you would look at each cookie, recognise its type based on appearance, and place it in the right pile. Easy.',
      },
      {
        type: 'paragraph',
        text: 'Now imagine teaching a computer to do the same thing. You cannot just tell it "this is a chocolate chip cookie" — the computer does not know what chocolate chips look like. Instead, you show it hundreds of examples. Over time, it spots patterns: dark spots mean chocolate chip, visible oats mean oatmeal raisin.',
      },
      {
        type: 'heading',
        text: 'That is machine learning',
      },
      {
        type: 'paragraph',
        text: 'Machine learning is the process of teaching a computer to recognise patterns by showing it many examples. The computer does not follow a fixed set of rules — it develops its own rules based on the data it has seen. The more examples it sees, the better it gets.',
      },
      {
        type: 'heading',
        text: 'Where children see machine learning every day',
      },
      {
        type: 'list',
        items: [
          'YouTube recommending videos based on what you have watched',
          'Voice assistants understanding what you say',
          'Photo apps grouping pictures by faces',
          'Spelling and grammar correction on tablets',
        ],
      },
      {
        type: 'heading',
        text: 'Try it at home',
      },
      {
        type: 'paragraph',
        text: 'Gather a collection of objects — buttons, LEGO bricks, fruit — and ask your child to sort them into groups without telling them the rules. Let them decide the categories. Then ask them to explain why they grouped things the way they did. This is exactly what a machine learning model does: find patterns and create categories.',
      },
      {
        type: 'callout',
        text: 'At KURAI, children train their own machine learning models using visual tools — no coding required for beginners. See our AI Explorers programme for details.',
      },
    ],
  },
  {
    id: 6,
    slug: 'screen-time-vs-learning-time-how-kurai-is-different',
    category: 'parent-guides',
    title: 'Screen Time vs. Learning Time: How KURAI Is Different',
    excerpt:
      'Worried about more screen time? Learn how structured AI education differs from passive device use and why it builds real skills.',
    date: 'Feb 5, 2026',
    isoDate: '2026-02-05',
    readTime: '4 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'As parents, we are constantly told to limit screen time. So it might seem contradictory to enrol your child in a technology class. But there is a fundamental difference between passive screen consumption and active, structured learning with technology.',
      },
      {
        type: 'heading',
        text: 'Passive vs. active screen time',
      },
      {
        type: 'paragraph',
        text: 'Passive screen time is watching videos, scrolling, or playing games designed to keep you tapping. Active screen time is creating — writing a programme, designing a robot\'s behaviour, training an AI model. It\'s the difference between watching someone cook on television and cooking a meal yourself.',
      },
      {
        type: 'heading',
        text: 'What happens in a KURAI class',
      },
      {
        type: 'paragraph',
        text: 'In a typical KURAI session, students spend roughly half their time away from screens entirely — building robots with physical components, discussing ideas with classmates, sketching solutions on whiteboards. The time they do spend on screens is purposeful: programming a robot, testing an AI model, or reviewing results.',
      },
      {
        type: 'list',
        items: [
          'Maximum 8 students per class for direct instructor guidance',
          'Physical robotics components used in every Robotics session',
          'Whiteboard planning before any screen work begins',
          'Group discussion and presentation at the end of each class',
        ],
      },
      {
        type: 'heading',
        text: 'Skills that transfer beyond the screen',
      },
      {
        type: 'paragraph',
        text: 'The skills children build at KURAI are not limited to technology. Computational thinking, problem decomposition, teamwork, and presenting ideas — these are life skills that apply everywhere, from school projects to future careers.',
      },
      {
        type: 'quote',
        text: 'I was worried about adding more screen time, but after watching a class, I realised this is completely different. She is thinking, building, and collaborating — not just staring at a screen.',
        attribution: 'Mother of a 7-year-old KURAI student',
      },
      {
        type: 'heading',
        text: 'Our advice to parents',
      },
      {
        type: 'paragraph',
        text: 'Do not think of AI education as adding screen time. Think of it as replacing passive consumption with active creation. The goal is not to put children in front of more devices — it is to teach them how to think clearly, solve problems, and use technology as a tool rather than a distraction.',
      },
      {
        type: 'callout',
        text: 'Still unsure? Book a free trial class and watch your child in action. You will see the difference within the first fifteen minutes.',
      },
    ],
  },
  {
    id: 7,
    slug: 'holiday-camp-highlights-robot-builders',
    category: 'workshop-recaps',
    title: 'Holiday Camp Highlights: Robot Builders Edition',
    excerpt:
      'Our December holiday camp saw 24 students build and programme their own robots. Here\'s what happened and what they learned.',
    date: 'Jan 28, 2026',
    isoDate: '2026-01-28',
    readTime: '5 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'During the December school holidays, 24 students aged 5 to 11 joined our Robot Builders Camp at the KURAI Centre in Horizon Hills. Over three action-packed days, they designed, built, and programmed their own robots — and the results were genuinely impressive.',
      },
      {
        type: 'heading',
        text: 'Day 1: Design and plan',
      },
      {
        type: 'paragraph',
        text: 'The first day focused on understanding what a robot is and what it needs to function. Students learned about sensors, motors, and controllers. They then sketched their robot designs on paper before touching any components. This planning phase is something we emphasise at KURAI — good engineering starts with a clear plan.',
      },
      {
        type: 'heading',
        text: 'Day 2: Build and test',
      },
      {
        type: 'paragraph',
        text: 'Day two was all about construction. Working in pairs, students assembled their robots using our modular robotics kits. The classroom buzzed with conversation as teams troubleshot connection issues, debated wheel placement, and celebrated small victories. By the end of the day, every team had a functioning robot.',
      },
      {
        type: 'heading',
        text: 'Day 3: Programme and present',
      },
      {
        type: 'paragraph',
        text: 'On the final day, students programmed their robots to complete a challenge course — navigating around obstacles, following a line, and stopping at a designated point. The day ended with each team presenting their robot to parents, explaining their design choices and what they learned.',
      },
      {
        type: 'quote',
        text: 'He came home every day bursting with excitement. He has never been this engaged in any holiday programme before.',
        attribution: 'Parent of a camp participant, aged 8',
      },
      {
        type: 'heading',
        text: 'What students took away',
      },
      {
        type: 'list',
        items: [
          'How to plan before building — the importance of design thinking',
          'Teamwork and communication skills from pair programming',
          'Basic programming concepts: sequences, loops, and conditions',
          'Confidence in presenting their work to an audience',
        ],
      },
      {
        type: 'callout',
        text: 'Our next holiday camp is the AI Discovery Camp on 24–26 March. Spots are limited to 24 students. Register on our Events page.',
      },
    ],
  },
  {
    id: 8,
    slug: 'spotlight-nadia-taught-computer-to-draw',
    category: 'student-spotlights',
    title: 'Spotlight: Nadia, Age 7 — "I Taught the Computer to Draw!"',
    excerpt:
      'Nadia\'s journey from shy beginner to confident creator is exactly why we do what we do. Her mum shares the transformation.',
    date: 'Jan 20, 2026',
    isoDate: '2026-01-20',
    readTime: '3 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'When Nadia started at KURAI three months ago, she barely spoke above a whisper. Today, she is one of the most enthusiastic students in her class — and she recently trained an AI model to generate drawings from her prompts.',
      },
      {
        type: 'heading',
        text: 'A quiet start',
      },
      {
        type: 'paragraph',
        text: 'Nadia joined our AI Explorers programme for five- to seven-year-olds. In her first class, she sat quietly and observed while other students jumped in. Her instructor noticed and gently paired her with a slightly older student who was also on the quieter side. By the second week, the two of them were working together confidently.',
      },
      {
        type: 'heading',
        text: 'The breakthrough moment',
      },
      {
        type: 'paragraph',
        text: 'The turning point came during a pattern recognition session. Students were training an image classifier to sort hand-drawn shapes. Nadia drew stars that the model kept misclassifying as flowers. Instead of getting frustrated, she studied the problem, redrew her stars with sharper points, and retrained the model. It worked. "I taught the computer to see stars!"',
      },
      {
        type: 'quote',
        text: 'She used to come home and say nothing about her activities. Now she cannot stop talking about what she built. She explains AI concepts to her younger brother at the dinner table.',
        attribution: 'Nadia\'s mother',
      },
      {
        type: 'heading',
        text: 'What we see in Nadia',
      },
      {
        type: 'paragraph',
        text: 'Nadia reminds us that confidence does not always come naturally — sometimes it needs the right environment. A small class size, patient instructors, and genuinely engaging content can transform a child\'s relationship with learning. Nadia now volunteers to present her work at the end of every session.',
      },
      {
        type: 'callout',
        text: 'Every child learns differently. At KURAI, our maximum class size of 8 ensures every student gets the attention they need. Book a free trial to see our approach in action.',
      },
    ],
  },
  {
    id: 9,
    slug: 'can-ai-be-creative-what-children-think',
    category: 'ai-fun-facts',
    title: 'Can AI Be Creative? What Children Think About Art and Machines',
    excerpt:
      'We asked our students whether AI can make art. Their answers were surprising, thoughtful, and genuinely inspiring.',
    date: 'Jan 15, 2026',
    isoDate: '2026-01-15',
    readTime: '4 min read',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Can a machine be creative? It is one of the biggest questions in AI today — and children have surprisingly strong opinions. We asked our students what they think, and their responses were striking.',
      },
      {
        type: 'heading',
        text: 'The experiment',
      },
      {
        type: 'paragraph',
        text: 'We showed our students two sets of drawings — one made by a human artist and one generated by an AI model. Without telling them which was which, we asked them to guess. Most students guessed correctly, but not for the reasons we expected.',
      },
      {
        type: 'paragraph',
        text: 'One student said the AI drawings were "too perfect" and that real art has "mistakes that make it interesting." Another said the human drawings "felt like someone was trying to say something" while the AI drawings "just looked nice."',
      },
      {
        type: 'heading',
        text: 'What children understand about creativity',
      },
      {
        type: 'paragraph',
        text: 'Children seem to grasp something that even adults struggle with: creativity is not just about the output. It is about intention. When a child draws a picture, they are expressing an idea, an emotion, a story. An AI generates images based on statistical patterns. The result might look similar, but the process is fundamentally different.',
      },
      {
        type: 'quote',
        text: 'The computer can draw, but it does not know why it is drawing. I draw because I want to show something.',
        attribution: 'KURAI student, aged 10',
      },
      {
        type: 'heading',
        text: 'Why this matters for AI education',
      },
      {
        type: 'paragraph',
        text: 'Understanding the difference between human creativity and machine pattern generation is essential for any child growing up in an AI-driven world. It helps them appreciate what makes human thinking unique while also understanding what AI is genuinely good at.',
      },
      {
        type: 'list',
        items: [
          'AI is excellent at generating variations and combinations',
          'Humans bring meaning, context, and emotional intent',
          'The best results often come from humans and AI working together',
          'Understanding AI\'s limitations is just as important as understanding its capabilities',
        ],
      },
      {
        type: 'heading',
        text: 'The takeaway',
      },
      {
        type: 'paragraph',
        text: 'Our students reminded us that children are natural philosophers. Given the right environment and questions, they can engage with complex ideas about technology, creativity, and what it means to be human. That is exactly the kind of thinking we want to nurture at KURAI.',
      },
      {
        type: 'callout',
        text: 'Want your child to explore the intersection of AI and creativity? Our AI Explorers programme covers these topics through hands-on projects. Book a free trial today.',
      },
    ],
  },
];

/** Helper: look up a single post by its URL slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Helper: get the human-readable label for a blog category */
export function getCategoryLabel(id: string): string {
  const labels: Record<string, string> = {
    'ai-fun-facts': 'AI Fun Facts',
    'parent-guides': 'Parent Guides',
    'workshop-recaps': 'Workshop Recaps',
    'student-spotlights': 'Student Spotlights',
  };
  return labels[id] ?? id;
}

/** Colour classes for category badges */
export const categoryColorMap: Record<string, { bg: string; text: string }> = {
  'ai-fun-facts': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'parent-guides': { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'workshop-recaps': { bg: 'bg-amber-50', text: 'text-amber-700' },
  'student-spotlights': { bg: 'bg-rose-50', text: 'text-rose-700' },
};

/** Top border colours for category cards */
export const categoryBorderMap: Record<string, string> = {
  'ai-fun-facts': 'border-t-purple-400/40',
  'parent-guides': 'border-t-emerald-400/40',
  'workshop-recaps': 'border-t-amber-400/40',
  'student-spotlights': 'border-t-rose-400/40',
};
