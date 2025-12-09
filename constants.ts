import { NewsItem } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Netscape Navigator 1.0 Release Candidate 1 available via FTP",
    url: "ftp://ftp.netscape.com/pub/navigator/1.0",
    domain: "netscape.com",
    points: 412,
    user: "web_surfer_x",
    timeAgo: "2 hours ago",
    text: "After months of beta testing and anticipation, Netscape Communications Corp has finally released the first Release Candidate of its Navigator browser to the public. Available via anonymous FTP, this piece of software promises to dethrone NCSA Mosaic as the king of the World Wide Web. Early reports suggest it loads inline JPEGs significantly faster than its predecessors, a feature that is sure to clutter pages with high-resolution graphics everywhere.\n\nHowever, controversy is already brewing regarding the proprietary tags introduced, specifically the 'center' and 'blink' tags. Purists argue this violates the spirit of SGML and HTML as a semantic markup language, turning the web into a desktop publishing platform. Regardless of the philosophy, the speed improvements on a standard 14.4k modem are undeniable.\n\nIf you have a 386 or better with at least 4MB of RAM, you can download the installer now. Be warned that the FTP servers are currently hammered, so you might need to try a mirror site.",
    comments: [
      { id: 101, user: "jwz", text: "It's finally out. The throbbing N is going to haunt your dreams. If this doesn't kill Mosaic, I don't know what will.", indent: 0 },
      { id: 102, user: "sgml_purist", text: "The <blink> tag is an abomination. HTML is for structure, not flashiness. This is going to ruin the web.", indent: 1 },
      { id: 103, user: "geo_city", text: "Lighten up! I used blink on my 'Under Construction' sign and it looks rad.", indent: 2 },
      { id: 104, user: "mosaic_fan", text: "Mosaic is free. Netscape says it's free for 'evaluation' but they want $39 eventually. I'm not paying for a browser.", indent: 1 },
      { id: 105, user: "mcom_employee", text: "Software engineers need to eat too. Mosaic was government funded.", indent: 2 },
      { id: 106, user: "linux_usr", text: "When is the X11 release? I only see Windows and Mac binaries.", indent: 1 },
      { id: 107, user: "jwz", text: "Soon.", indent: 2 },
      { id: 108, user: "slow_modem", text: "I've been trying to download this for 3 hours. Resume support would be nice.", indent: 0 },
      { id: 109, user: "sysadmin_dave", text: "The progressive rendering is the real killer feature. You can read the text while the images load. Mosaic makes you wait for everything.", indent: 1 },
      { id: 110, user: "mac_guy", text: "It crashes my IIci if I have Extensions enabled. Conflict with After Dark?", indent: 0 },
      { id: 111, user: "tech_support", text: "Try allocating more memory to the application in Finder. 4MB isn't really enough.", indent: 1 },
      { id: 112, user: "future_web", text: "Does anyone else think 'Navigator' is a weird name? It should be something like 'Explorer'.", indent: 0 },
      { id: 113, user: "ms_fan", text: "Microsoft is working on a browser for Chicago. Just wait.", indent: 1 }
    ]
  },
  {
    id: 2,
    title: "Sony releases 'PlayStation' in Japan. A 3D console?",
    url: "http://www.sony.co.jp/playstation",
    domain: "sony.co.jp",
    points: 320,
    user: "tokyo_drifter",
    timeAgo: "5 hours ago",
    text: "Sony Computer Entertainment has officially launched the PlayStation in Japan, marking the electronics giant's first major foray into the video game console market. The grey box features a CD-ROM drive and dedicated 3D hardware capable of rendering 360,000 polygons per second. Launch titles include 'Ridge Racer', a nearly arcade-perfect port that is turning heads in Akihabara.\n\nIndustry analysts are skeptical, citing the failure of the Sega CD and the dominance of Nintendo's cartridge-based systems. The loading times of CD-ROMs are a significant concern for gamers used to instant-on action. However, the sheer storage capacity of 650MB could allow for full-motion video and high-fidelity audio that cartridges simply cannot match.\n\nIt remains to be seen if Sony can compete with the upcoming Sega Saturn and Nintendo's mysterious 'Project Reality'. Pricing is set at 39,800 yen.",
    comments: [
      { id: 201, user: "nintendo_4_life", text: "Sony makes Walkmans and TVs. They don't know games. Stick to cartridges, load times on CDs are unbearable.", indent: 0 },
      { id: 202, user: "sega_fan_94", text: "The Saturn is going to crush this. It has dual processors! Two is better than one.", indent: 1 },
      { id: 203, user: "dev_guy", text: "Actually, coding for dual CPUs is a nightmare. The PlayStation architecture is surprisingly clean.", indent: 2 },
      { id: 204, user: "import_gamer", text: "I paid $800 to import one. Ridge Racer is literally the arcade game. It's insane. 3D is the future.", indent: 0 },
      { id: 205, user: "sprite_lover", text: "Polygons look blocky and ugly. Detailed 2D sprites will always look better. Look at DKC.", indent: 1 },
      { id: 206, user: "rpg_fanatic", text: "Imagine the size of the RPGs you can fit on a CD though. Squaresoft should switch.", indent: 0 },
      { id: 207, user: "nintendo_4_life", text: "Square would never betray Nintendo.", indent: 1 },
      { id: 208, user: "hardware_hacker", text: "The controller handles weird. No joystick? Just a D-pad for 3D games?", indent: 0 },
      { id: 209, user: "sony_phile", text: "The shoulder buttons are innovative. L1/R1/L2/R2. Very clicky.", indent: 1 },
      { id: 210, user: "skeptic", text: "It's another 3DO or CD-i. Flash in the pan. Nintendo 64 (Project Reality) will wipe the floor with it.", indent: 0 }
    ]
  },
  {
    id: 3,
    title: "Show HN: I made a search engine called 'WebCrawler'",
    url: "http://webcrawler.com",
    domain: "webcrawler.com",
    points: 289,
    user: "bpinkerton",
    timeAgo: "7 hours ago",
    text: "I've been working on a project at the University of Washington that I call 'WebCrawler'. Unlike other directories that require manual submission and categorization (like Yahoo), my bot actually visits pages and indexes their full text content. This allows you to search for any word that appears on a webpage, not just the title or keywords.\n\nIt's running on a NeXT station right now. The index is growing rapidly as the web expands. I believe that as the number of websites passes 10,000, manual directories will become unsustainable. We need algorithmic search to find the needle in the haystack.\n\nPlease be gentle with the queries, the server load is already quite high.",
    comments: [
      { id: 301, user: "directory_fan", text: "I don't see the point. Yahoo's hierarchical list is much better for browsing. I want to see categories, not random pages.", indent: 0 },
      { id: 302, user: "info_scientist", text: "Full text search is computationally expensive. This will never scale to the whole web. There must be hundreds of thousands of pages soon.", indent: 1 },
      { id: 303, user: "sysadmin_bob", text: "Your bot is hammering my server! 50 requests in a minute! Is there a way to exclude it?", indent: 0 },
      { id: 304, user: "bpinkerton", text: "We're working on a standard for that. A file you place in the root directory.", indent: 1 },
      { id: 305, user: "search_nerd", text: "What algorithm are you using for ranking? Just term frequency?", indent: 0 },
      { id: 306, user: "newbie_surfer", text: "I searched for 'pictures' and got some... interesting results. Maybe some filters are needed?", indent: 0 },
      { id: 307, user: "academic", text: "This reminds me of the WAIS project, but over HTTP. Very promising.", indent: 0 }
    ]
  },
  {
    id: 4,
    title: "Doom II: Hell on Earth released. Productivity worldwide drops 90%",
    url: "ftp://ftp.idsoftware.com/doom2",
    domain: "idsoftware.com",
    points: 560,
    user: "deathmatch_king",
    timeAgo: "1 day ago",
    text: "id Software has unleashed Doom II: Hell on Earth upon the PC gaming world. Following the massive shareware success of the original, this retail release brings the marine back to Earth to fight an invasion of demons. The engine has been tweaked to support more concurrent enemies and larger, more complex map geometries.\n\nThe real star of the show, however, is the new Super Shotgun. This double-barreled weapon deals massive damage at close range and has quickly become a favorite in office Deathmatch LAN parties. The game also introduces new enemies like the Revenant and the Arch-Vile, which add significant tactical depth.\n\nSystem administrators are reporting massive network congestion due to IPX traffic on port 6667. Many universities have already banned the game from computer labs.",
    comments: [
      { id: 401, user: "concerned_mom", text: "This game is incredibly violent. The chainsaws? The blood? It's warping our children's minds.", indent: 0 },
      { id: 402, user: "frag_master", text: "It's just pixels, lady. It's a stress reliever. Nothing beats the SSG click-clack sound.", indent: 1 },
      { id: 403, user: "office_worker", text: "We played deathmatch for 6 hours straight after work. The office LAN is totally clogged.", indent: 0 },
      { id: 404, user: "net_admin", text: "I had to block UDP port 6666. You guys are killing the bandwidth.", indent: 1 },
      { id: 405, user: "tech_guru", text: "How does Carmack do it? The BSP tree rendering is seamless on my 486DX2.", indent: 0 },
      { id: 406, user: "level_designer", text: "Map01 is genius. Simple but flows perfectly for deathmatch.", indent: 1 },
      { id: 407, user: "cheat_seeker", text: "IDDQD. IDKFA. IDCLIP. You're welcome.", indent: 0 },
      { id: 408, user: "scared_player", text: "The Arch-Vile is terrifying. The way he resurrects other monsters... I panicked.", indent: 0 },
      { id: 409, user: "modder", text: "Can't wait for the level editors to update. I have some ideas for a Star Wars conversion.", indent: 0 }
    ]
  },
  {
    id: 5,
    title: "Linus Torvalds: Linux 1.2 is coming soon",
    url: "news:comp.os.linux.announce",
    domain: "comp.os.linux",
    points: 150,
    user: "penguin_power",
    timeAgo: "3 hours ago",
    text: "Linus Torvalds has announced on the kernel mailing list that version 1.2 of the Linux kernel is nearing completion. This release aims to solidify the OS's hardware support and stability. Key features expected include better TCP/IP networking, support for more PCI hardware, and improved virtual memory management.\n\nWhile still a hobbyist system compared to commercial Unixes like Solaris or AIX, Linux is gaining traction among students and universities due to its zero cost and open source nature. The ability to run a Unix-like environment on cheap 386 and 486 hardware is proving to be a killer application.\n\nTorvalds warns that 1.2 is 'stable', and development on the experimental 1.3 branch will begin shortly after release.",
    comments: [
      { id: 501, user: "bsd_bigot", text: "Why bother with this toy kernel? FreeBSD 2.0 is a complete OS with a real lineage. Linux is just a monolithic mess.", indent: 0 },
      { id: 502, user: "minix_student", text: "Microkernels are the future. Monolithic kernels like Linux are obsolete. Tanenbaum was right.", indent: 1 },
      { id: 503, user: "linus_fan", text: "Linux works. Now. On my hardware. That's what matters. I don't care about theoretical purity.", indent: 2 },
      { id: 504, user: "slackware_installer", text: "I spent all weekend downloading the floppies. Disk 14 was corrupt. I cried.", indent: 0 },
      { id: 505, user: "cdrom_user", text: "Buy a CD-ROM dist like Yggdrasil. Floppies are dead.", indent: 1 },
      { id: 506, user: "windows_user", text: "But can it run Word? No? Then it's useless for real work.", indent: 0 },
      { id: 507, user: "latex_user", text: "Real men use LaTeX. Word is for secretaries.", indent: 1 }
    ]
  },
  {
    id: 6,
    title: "Amazon.com? Someone is trying to sell books on the internet",
    url: "http://amazon.com",
    domain: "amazon.com",
    points: 89,
    user: "bookworm_seattle",
    timeAgo: "12 hours ago",
    text: "A new startup called Amazon.com has opened its virtual doors, claiming to be 'Earth's Biggest Bookstore'. Based in Seattle, the company plans to sell books via the internet and ship them to customers' homes. The website is text-heavy and functional, allowing users to search for titles and place orders via a secure web form—or by fax if you don't trust encryption.\n\nCritics point out that people enjoy the tactile experience of browsing bookstores, smelling the paper, and having coffee. The idea of buying a book without seeing it first seems alien to many. Furthermore, shipping costs could easily negate any price advantage offered by the lack of physical storefronts.",
    comments: [
      { id: 601, user: "mall_rat", text: "This will never work. People like to go to Barnes & Noble, drink coffee, and read the first chapter. You can't do that on a screen.", indent: 0 },
      { id: 602, user: "security_conscious", text: "Put my credit card number into a web form? Are you crazy? Hackers will steal it instantly.", indent: 0 },
      { id: 603, user: "netscape_user", text: "SSL encryption is actually pretty strong. It's safer than handing your card to a waiter.", indent: 1 },
      { id: 604, user: "finance_guy", text: "Margins on books are razor thin. Once you add shipping, they will lose money on every sale.", indent: 0 },
      { id: 605, user: "niche_reader", text: "I actually found a rare programming book on there that B&N never stocks. It's good for obscure stuff.", indent: 0 },
      { id: 606, user: "future_gazer", text: "If they can sell books, maybe they can sell CDs too? Or... dog food?", indent: 1 },
      { id: 607, user: "lol_wut", text: "Dog food by mail? That's the stupidest thing I've ever heard.", indent: 2 }
    ]
  },
  {
    id: 7,
    title: "Why C++ is becoming too complex with the new Templates proposal",
    url: "news:comp.lang.c++",
    domain: "comp.lang.c++",
    points: 210,
    user: "oop_master",
    timeAgo: "4 hours ago",
    text: "The C++ standardization committee is debating the inclusion of Templates and the Standard Template Library (STL). While proponents argue that generic programming allows for type-safe containers and algorithms without the overhead of virtual functions, detractors claim the syntax is becoming unreadable and the compilation times are exploding.\n\nError messages from template instantiation failures can be pages long, making debugging a nightmare. Some compiler vendors are struggling to implement the spec correctly. Is C++ losing its way? Is it trying to do too much, becoming a multi-paradigm monster rather than a better C?",
    comments: [
      { id: 701, user: "c_programmer", text: "I'll stick to C. If I can't see the assembly it generates in my head, I don't trust it. vtables were bad enough, now this?", indent: 0 },
      { id: 702, user: "stl_evangelist", text: "You don't understand. Alexander Stepanov has created something beautiful. `vector<int>` is safer than arrays and just as fast.", indent: 1 },
      { id: 703, user: "compiler_dev", text: "Implementing this is a nightmare. The 'export' keyword? Give me a break.", indent: 2 },
      { id: 704, user: "smalltalk_user", text: "If you want objects, use Smalltalk. C++ is a frankenstein.", indent: 0 },
      { id: 705, user: "java_lurker", text: "Sun has a new language called Oak. No pointers, garbage collection. It looks like C++ cleaned up. Watch this space.", indent: 1 }
    ]
  },
  {
    id: 8,
    title: "IBM OS/2 Warp 3.0: Better than Chicago (Windows 95)?",
    url: "http://www.ibm.com/os2",
    domain: "ibm.com",
    points: 180,
    user: "big_blue_fan",
    timeAgo: "6 hours ago",
    text: "IBM has launched OS/2 Warp 3.0 with a massive marketing campaign. It features a fully object-oriented interface called the Workplace Shell, true preemptive multitasking, and crash protection that isolates 16-bit Windows applications. On paper, it is technologically superior to the upcoming Windows 95 (codenamed Chicago).\n\nHowever, driver support remains a pain point, and installation can be tricky on non-IBM hardware. The 'BonusPak' includes internet connectivity tools, a word processor, and more, attempting to provide an out-of-the-box solution. Can Big Blue convince consumers to ditch Microsoft, or is the momentum of Windows too great to overcome?",
    comments: [
      { id: 801, user: "warp_user", text: "I'm running a BBS, compiling code, and formatting a floppy at the same time. Windows 3.1 would have choked and died. Warp is the real deal.", indent: 0 },
      { id: 802, user: "gamer_dude", text: "But does it run Doom? Fast?", indent: 1 },
      { id: 803, user: "warp_user", text: "Yes, in a DOS box. It runs better than native DOS sometimes because of the memory management.", indent: 2 },
      { id: 804, user: "pragmatist", text: "IBM's marketing is terrible. 'Warp'? Star Trek nerds love it, but businesses? And where are the native apps?", indent: 0 },
      { id: 805, user: "win95_beta_tester", text: "Chicago has the Start menu. It's so intuitive. OS/2's desktop is confusing. What is a 'Shadow'?", indent: 1 },
      { id: 806, user: "driver_hell", text: "I spent 3 days trying to get my SoundBlaster clone to work in Warp. In Windows it just works.", indent: 0 }
    ]
  },
  {
    id: 9,
    title: "HotWired launches first ever 'banner ad' from AT&T",
    url: "http://hotwired.com",
    domain: "hotwired.com",
    points: 95,
    user: "cyber_punk",
    timeAgo: "8 hours ago",
    text: "HotWired, the online offshoot of Wired magazine, has unveiled a new monetization strategy: the 'banner ad'. The first advertisement comes from AT&T and features a colorful graphic with the text 'Have you ever clicked your mouse right here? You will.' leading to a microsite.\n\nThis marks a significant shift from the text-only, non-commercial roots of the internet. While it provides revenue for content creators, users are worried about the cluttering of the web and the influence of corporate money on the free exchange of information. Will we soon see ads on every page?",
    comments: [
      { id: 901, user: "no_commercials", text: "The internet was built for research, not selling soap. This is the beginning of the end. September never ended.", indent: 0 },
      { id: 902, user: "marketing_guru", text: "It's brilliant. 'Have you ever clicked your mouse right here? You will.' The CTR must be 50%.", indent: 1 },
      { id: 903, user: "bandwidth_miser", text: "Great, now my 14.4k modem has to download useless graphics for ads. Who pays for my connection time?", indent: 0 },
      { id: 904, user: "realist", text: "Servers cost money. Content creators need to get paid. Unless you want a subscription internet, ads are inevitable.", indent: 1 },
      { id: 905, user: "optimist", text: "I'm sure we'll develop software to block these if they get too annoying.", indent: 2 }
    ]
  },
  {
    id: 10,
    title: "The Iomega Zip Drive: 100MB on a single disk",
    url: "http://iomega.com",
    domain: "iomega.com",
    points: 340,
    user: "backup_king",
    timeAgo: "1 day ago",
    text: "Iomega has introduced the Zip drive, a removable storage system that offers 100MB of capacity on a disk slightly thicker than a standard floppy. With hard drive prices still hovering around $1 per megabyte, the Zip drive offers a cost-effective way to back up data or transport large files—like high-res images or Quake WADs.\n\nThe drive connects via parallel port or SCSI, and the disks are priced around $20. This is a game changer for graphic designers and anyone tired of spanning ZIP files across 15 floppy disks.",
    comments: [
      { id: 1001, user: "designer_jane", text: "100MB is huge! I can fit my entire portfolio on one disk. No more SyQuest cartridges.", indent: 0 },
      { id: 1002, user: "sysadmin_tom", text: "The parallel port version is slow, but portable. The SCSI one screams. Highly recommended.", indent: 1 },
      { id: 1003, user: "click_of_death", text: "Mine makes a weird clicking sound sometimes. Should I be worried?", indent: 0 },
      { id: 1004, user: "engineer", text: "It's probably just the head parking. Iomega makes solid hardware.", indent: 1 },
      { id: 1005, user: "floppy_lover", text: "It's too expensive. $20 for a disk? I can buy a box of 10 floppies for $5.", indent: 0 },
      { id: 1006, user: "math_guy", text: "Do the math. 1 Zip = 70 floppies. It's actually cheaper per MB.", indent: 1 }
    ]
  },
  {
    id: 11,
    title: "Sun Microsystems 'Oak' language renamed to 'Java'",
    url: "http://sun.com/java",
    domain: "sun.com",
    points: 120,
    user: "coffee_lover",
    timeAgo: "10 hours ago",
    text: "Sun Microsystems has renamed its 'Oak' programming language to 'Java'. Originally designed for interactive television set-top boxes, the language is being repositioned for the World Wide Web. The key promise is 'Write Once, Run Anywhere'—achieved by compiling code to bytecode that runs on a virtual machine.\n\nCombined with the new 'applet' technology, Java could allow web pages to become fully interactive applications, bypassing the limitations of HTML. Netscape has announced plans to include a Java VM in the next version of Navigator.",
    comments: [
      { id: 1101, user: "cpp_veteran", text: "A virtual machine? It's going to be slow as molasses. Interpreted code never wins.", indent: 0 },
      { id: 1102, user: "web_visionary", text: "Speed doesn't matter if it runs in the browser. Imagine interactive stock charts or games right on the page!", indent: 1 },
      { id: 1103, user: "security_audit", text: "Letting a website run code on my machine? Sounds like a security nightmare. What if it deletes my files?", indent: 0 },
      { id: 1104, user: "sun_eng", text: "It runs in a sandbox. No file access allowed. It's perfectly safe.", indent: 1 }
    ]
  },
  {
    id: 12,
    title: "Weezer's Blue Album includes 'Buddy Holly' video on CD",
    url: "news:alt.music.weezer",
    domain: "geffen.com",
    points: 75,
    user: "alt_rock_fan",
    timeAgo: "5 hours ago",
    text: "In a move showcasing the potential of multimedia, Weezer's debut self-titled album (The Blue Album) includes the music video for their hit 'Buddy Holly' as an AVI file on the CD itself. The video, directed by Spike Jonze, places the band inside the TV show 'Happy Days'.\n\nThis is one of the first major examples of an Enhanced CD, bridging the gap between audio CD players and PC multimedia capabilities. Microsoft has reportedly licensed the video to be included on the Windows 95 installation CD to demonstrate the OS's video playback prowess.",
    comments: [
      { id: 1201, user: "win95_leak", text: "I have a beta of Chicago (Win95) and yes, the video is in there. It plays smooth!", indent: 0 },
      { id: 1202, user: "mac_user", text: "QuickTime has been doing this for years. Microsoft is playing catch up as usual.", indent: 1 },
      { id: 1203, user: "music_critic", text: "The song is catchy, but are we buying CDs for music or for low-res videos? It takes up space that could be used for bonus tracks.", indent: 0 }
    ]
  },
  {
    id: 13,
    title: "RSA Data Security vs PGP: The Crypto Wars heat up",
    url: "ftp://ftp.eff.org",
    domain: "eff.org",
    points: 230,
    user: "crypto_anarchist",
    timeAgo: "1 day ago",
    text: "The legal battle between RSA Data Security and Phil Zimmermann (author of PGP) is intensifying. The US government considers strong encryption (keys larger than 40 bits) to be a munition, subject to strict export controls. PGP, which uses 128-bit keys or larger, has spread globally via the internet, technically violating these laws.\n\nActivists argue that code is free speech and that privacy is a fundamental human right in the digital age. The government argues that uncrackable encryption aids terrorists and criminals. Zimmermann is currently under criminal investigation.",
    comments: [
      { id: 1301, user: "freedom_fighter", text: "I printed out the PGP source code in a book and mailed it to Oslo. Try arresting a book, Uncle Sam.", indent: 0 },
      { id: 1302, user: "fed_watcher", text: "They want to force the Clipper Chip on us. Key escrow so the NSA can listen in. We must resist.", indent: 1 },
      { id: 1303, user: "corp_suit", text: "We need exportable software. These laws are hurting US software companies. Netscape has to make a weak 'International' version.", indent: 0 }
    ]
  },
  {
    id: 14,
    title: "Review: The Power Macintosh 6100/60",
    url: "http://apple.com",
    domain: "macworld.com",
    points: 160,
    user: "mac_addict",
    timeAgo: "3 hours ago",
    text: "MacWorld has reviewed the entry-level Power Macintosh 6100/60. Powered by the new PowerPC 601 RISC processor running at 60MHz, it promises a significant speed boost over the 68k Macs. The 'pizza box' form factor is slim, but expansion is limited.\n\nThe transition to RISC architecture is a bold bet by Apple, IBM, and Motorola. While native PowerPC applications fly, older 68k software runs in emulation. The emulation is surprisingly robust, but users will notice the slowdown. Is this the machine that saves Apple?",
    comments: [
      { id: 1401, user: "risc_believer", text: "CISC is dead. Pentium is hitting a heat wall. PowerPC is the future of computing. 60Mhz RISC feels like 100Mhz Pentium.", indent: 0 },
      { id: 1402, user: "photoshop_user", text: "Photoshop 3.0 native on this thing is a dream. The gaussian blur filter is almost instant.", indent: 1 },
      { id: 1403, user: "classic_user", text: "But my extensions don't work! And it uses 72-pin SIMMs which are expensive.", indent: 0 }
    ]
  },
  {
    id: 15,
    title: "Python 1.1 released",
    url: "ftp://ftp.python.org",
    domain: "python.org",
    points: 60,
    user: "guido_fan",
    timeAgo: "2 days ago",
    text: "Guido van Rossum has announced Python 1.1. This release improves portability and adds new built-in functions. Python differentiates itself with its unique use of significant whitespace for block indentation, forcing readable code structure.\n\nWhile still a niche scripting language compared to Perl or Tcl, Python is gaining a following for its clean syntax and object-oriented features. It is often used for system administration tasks and educational purposes.",
    comments: [
      { id: 1501, user: "perl_monk", text: "Forced indentation? No thanks. I like my freedom. Perl allows me to write code how I want. TMTOWTDI.", indent: 0 },
      { id: 1502, user: "clean_code", text: "That's exactly why Perl is unreadable write-only garbage. Python forces you to be clean.", indent: 1 },
      { id: 1503, user: "tcl_user", text: "It's interesting, but Tcl/Tk is still the king for GUI scripting.", indent: 0 }
    ]
  },
  {
    id: 16,
    title: "Ask HN: Best 28.8k Modem?",
    url: "",
    domain: "self",
    points: 45,
    user: "baud_hunter",
    timeAgo: "4 hours ago",
    text: "I'm finally upgrading from my 14.4k modem. The V.34 standard seems to be finalizing. I'm looking for reliability and good handshake times. The US Robotics Sportster seems popular, but I've heard good things about Zoom and Hayes as well.\n\nAlso, are internal modems prone to noise? Should I stick to external serial port models?",
    comments: [
      { id: 1601, user: "usr_fanboy", text: "USR Sportster 28.8 external. Set DIP switches 1, 3, and 8. It holds the carrier through anything.", indent: 0 },
      { id: 1602, user: "zoom_user", text: "The Zoom modems are cheaper and use the same Rockwell chipset. Don't pay the USR tax.", indent: 1 },
      { id: 1603, user: "serial_guy", text: "Always go external. You get the blinking lights to debug connections, and you can reset it without rebooting the PC.", indent: 0 },
      { id: 1604, user: "uart_warning", text: "Make sure you have a 16550 UART! Older serial ports can't handle the interrupts for 28.8k.", indent: 1 }
    ]
  },
  {
    id: 17,
    title: "ThinkPad 755CD: First laptop with built-in CD-ROM",
    url: "http://ibm.com/thinkpad",
    domain: "ibm.com",
    points: 190,
    user: "mobile_pro",
    timeAgo: "9 hours ago",
    text: "IBM has released the ThinkPad 755CD, the world's first notebook computer with an integrated CD-ROM drive. It features a 486DX4-100 processor, a 10.4\" active matrix color screen, and sound capabilities. This makes it a portable multimedia powerhouse, ideal for sales presentations.\n\nThe downside? It weighs over 7 pounds and costs upwards of $7,500. The battery life is also questionable when spinning the disc.",
    comments: [
      { id: 1701, user: "heavy_lifter", text: "7.5 pounds? My shoulder hurts just thinking about it. But having Encarta on the road is amazing.", indent: 0 },
      { id: 1702, user: "sales_rep", text: "I expensed one. Clients are blown away when I show full motion video in the boardroom.", indent: 1 },
      { id: 1703, user: "trackpoint_fan", text: "The TrackPoint (red nipple) is so much better than those trackballs Apple uses. You never have to move your hands from the keys.", indent: 0 }
    ]
  },
  {
    id: 18,
    title: "Pulp Fiction: Nonlinear storytelling masterpiece",
    url: "news:rec.arts.movies",
    domain: "imdb.org",
    points: 300,
    user: "cinephile_la",
    timeAgo: "3 days ago",
    text: "Quentin Tarantino's 'Pulp Fiction' is tearing up the box office and confusing audiences with its nonlinear timeline. The film weaves together multiple crime stories in Los Angeles, anchored by sharp dialogue and eclectic music choices.\n\nDiscussions on Usenet are heated, dissecting the chronology of events and the contents of the briefcase. It marks a stylistic shift in independent cinema, moving away from grit towards stylized violence and pop culture references.",
    comments: [
      { id: 1801, user: "film_student", text: "I don't get the hype. It's just violence for violence's sake. The gimp scene was completely unnecessary.", indent: 0 },
      { id: 1802, user: "cool_guy_94", text: "You missed the point. It's about redemption. Jules walks the earth, Vincent dies on the toilet. Choices matter.", indent: 1 },
      { id: 1803, user: "travolta_fan", text: "Travolta is back! I thought he was washed up after Look Who's Talking. That dance scene is iconic.", indent: 0 },
      { id: 1804, user: "confused_viewer", text: "The timeline gave me a headache. Wait, he's alive at the end? But he died in the middle?", indent: 0 },
      { id: 1805, user: "dialogue_lover", text: "It's all about the dialogue. 'Royale with Cheese'. 'Ezekiel 25:17'. It's poetry.", indent: 1 },
      { id: 1806, user: "hater_1", text: "It's style over substance. Tarantino thinks he's Godard but he's just a video store clerk with a camera.", indent: 0 },
      { id: 1807, user: "surf_rocker", text: "The soundtrack is the real MVP. Misirlou!", indent: 1 }
    ]
  },
  {
    id: 19,
    title: "W3C formed by Tim Berners-Lee",
    url: "http://w3.org",
    domain: "w3.org",
    points: 250,
    user: "standard_bearer",
    timeAgo: "1 week ago",
    text: "Tim Berners-Lee has founded the World Wide Web Consortium (W3C) at MIT. The organization aims to create open standards for the web to ensure its long-term growth. This is seen as a direct counter to the proprietary tags being introduced by browser vendors like Netscape and Mosaic.\n\nThe consortium will work on specifications for HTML, HTTP, and URIs. Membership is open to organizations willing to pay the fee.",
    comments: [
      { id: 1901, user: "open_web", text: "Thank god. Netscape is trying to own the web with their <center> and <blink> tags. We need a neutral referee.", indent: 0 },
      { id: 1902, user: "pragmatist", text: "Standards bodies move too slow. The commercial web needs features NOW. Netscape is delivering what users want.", indent: 1 },
      { id: 1903, user: "academic", text: "If we lose interoperability, the web just becomes CompuServe 2.0. We must support the W3C.", indent: 0 }
    ]
  },
  {
    id: 20,
    title: "General Magic's Magic Cap: The future of PDAs?",
    url: "http://generalmagic.com",
    domain: "generalmagic.com",
    points: 110,
    user: "pda_fanatic",
    timeAgo: "6 hours ago",
    text: "General Magic, a spin-off from Apple, has released its Magic Cap operating system for Personal Intelligent Communicators (PICs) like the Sony Magic Link. The OS uses a 'room' metaphor where users tap on objects like a desk, a filing cabinet, or a postcard to launch applications.\n\nIt heavily relies on 'Telescript', an agent-based language designed for the network. The vision is a world of handheld devices constantly communicating over the airwaves. However, the devices are expensive, slow, and lack a killer app.",
    comments: [
      { id: 2001, user: "newton_owner", text: "The interface is too cutesy. A desk? A hallway? Just give me a file list. My Newton is more professional.", indent: 0 },
      { id: 2002, user: "agent_coder", text: "Telescript is revolutionary. Code that travels through the network and executes on servers? It's the future of commerce.", indent: 1 },
      { id: 2003, user: "palm_pilot_beta", text: "It's too heavy. Handhelds need to be fast and simple. Handwriting recognition is the bottleneck.", indent: 0 }
    ]
  },
  {
    id: 21,
    title: "PHP Tools 1.0 released (Personal Home Page Tools)",
    url: "http://lerdorf.com/php",
    domain: "lerdorf.com",
    points: 40,
    user: "rasmus_l",
    timeAgo: "1 day ago",
    text: "Rasmus Lerdorf has released a set of Perl scripts he calls 'Personal Home Page Tools' (PHP). They are designed to track visits to his online resume and add simple dynamic features to web pages. It includes a hit counter and a guestbook script.\n\nIt's a simple alternative to writing complex C programs for CGI. Users can embed special tags in their HTML files which are parsed on the server.",
    comments: [
      { id: 2101, user: "perl_guru", text: "Why reinvent the wheel? Just use Perl. This 'PHP' thing is just a wrapper.", indent: 0 },
      { id: 2102, user: "web_newbie", text: "I don't know C or Perl, but I got a hit counter working in 5 minutes with this. I love it.", indent: 1 },
      { id: 2103, user: "security_auditor", text: "Embedding logic in HTML templates? Seems messy. Separation of concerns, people!", indent: 2 }
    ]
  },
  {
    id: 22,
    title: "Myst becomes best-selling PC game of all time",
    url: "http://cyan.com",
    domain: "cyan.com",
    points: 135,
    user: "puzzle_solver",
    timeAgo: "2 days ago",
    text: "Cyan's 'Myst' has officially become the best-selling PC game of all time, driven by the adoption of CD-ROM drives. The game places players on a deserted island filled with mechanical puzzles and books linking to other ages. It features pre-rendered 3D graphics and high-quality sound.\n\nMyst is often credited with being the 'killer app' that convinced mainstream users to upgrade their PCs with CD-ROM drives and sound cards, moving beyond the era of floppy disks.",
    comments: [
      { id: 2201, user: "fps_gamer", text: "It's barely a game. It's a HyperCard stack with pretty pictures. No enemies, no death. Boring.", indent: 0 },
      { id: 2202, user: "immersion_fan", text: "You have no soul. The atmosphere is incredible. The sound of the wind, the machinery. It's art.", indent: 1 },
      { id: 2203, user: "stuck_player", text: "I've been stuck on the selenium puzzle for 3 weeks. No internet walkthroughs to help me!", indent: 2 }
    ]
  },
  {
    id: 23,
    title: "Using PGP to sign email",
    url: "news:comp.security.pgp",
    domain: "pgp.net",
    points: 88,
    user: "privacy_now",
    timeAgo: "5 hours ago",
    text: "A tutorial on how to use Pretty Good Privacy (PGP) to digitally sign your email messages. By signing, you prove the message came from you and hasn't been tampered with. This relies on the 'Web of Trust', where users sign each other's public keys at key signing parties.\n\nThe guide covers generating your keypair, uploading your public key to a keyserver, and configuring mail readers like Elm or Pine to use PGP.",
    comments: [
      { id: 2301, user: "elm_user", text: "It's too hard to use. Copying and pasting ASCII armor blocks is a pain. We need native integration in mail clients.", indent: 0 },
      { id: 2302, user: "govt_agent", text: "Why do you need encryption if you have nothing to hide?", indent: 1 },
      { id: 2303, user: "cypherpunk", text: "Because privacy is a right. Do you send all your snail mail on postcards?", indent: 2 }
    ]
  },
  {
    id: 24,
    title: "Is VR dead? Virtuality arcades struggling",
    url: "news:sci.virtual-worlds",
    domain: "vr_news",
    points: 65,
    user: "polygon_pusher",
    timeAgo: "12 hours ago",
    text: "The hype around Virtual Reality seems to be fading. Virtuality, the company behind the famous 'Dactyl Nightmare' arcade cabinets, is facing financial difficulties. The headsets are heavy (giving users 'VR neck'), the resolution is low, and the frame rates induce nausea.\n\nWhile the concept captured the public imagination (aided by movies like Lawnmower Man), the technology isn't ready for prime time. High costs prevent home adoption.",
    comments: [
      { id: 2401, user: "vr_victim", text: "I played Dactyl Nightmare at the mall. It cost $5 for 3 minutes and I almost threw up. The lag is unbearable.", indent: 0 },
      { id: 2402, user: "nintendo_insider", text: "Just wait for the Virtual Boy. True 3D at home for under $200. It's going to revolutionize gaming.", indent: 1 },
      { id: 2403, user: "red_headache", text: "I heard it's monochrome red. That sounds eye-straining.", indent: 2 }
    ]
  },
  {
    id: 25,
    title: "Apache HTTP Server Project starts",
    url: "http://apache.org",
    domain: "apache.org",
    points: 175,
    user: "open_src_dev",
    timeAgo: "4 days ago",
    text: "A group of webmasters has formed the Apache Group to support and maintain the NCSA HTTPd web server. With the key developer at NCSA leaving to join Netscape, the most popular server software was left in limbo.\n\nThe new server is 'a patchy' server, built from a collection of patches to the NCSA code. It aims to be robust, feature-rich, and free.",
    comments: [
      { id: 2501, user: "ncsa_admin", text: "Thank goodness. NCSA httpd has so many bugs and nobody is fixing them anymore.", indent: 0 },
      { id: 2502, user: "iis_manager", text: "Microsoft is building a web server into NT. It will be point-and-click. Unix command line servers are dinosaurs.", indent: 1 },
      { id: 2503, user: "unix_graybeard", text: "Good luck with security on NT. I'll stick to my patched source code.", indent: 2 }
    ]
  },
  {
    id: 26,
    title: "Apple licensing Mac OS to clone makers",
    url: "http://powercc.com",
    domain: "macweek.com",
    points: 220,
    user: "cupertino_observer",
    timeAgo: "6 hours ago",
    text: "In a desperate bid to increase market share, Apple has announced it will license the Mac OS to third-party hardware manufacturers. Companies like Power Computing and Radius will soon ship 'Mac Clones'—computers that run Mac OS but are sold by other vendors.\n\nThe goal is to expand the Mac platform's reach to compete with the Wintel duopoly. However, executives fear this might cannibalize Apple's own high-margin hardware sales.",
    comments: [
      { id: 2601, user: "bargain_hunter", text: "Finally! I want Mac OS but I can't afford Apple's prices. Power Computing is promising 100Mhz for half the price.", indent: 0 },
      { id: 2602, user: "shareholder", text: "This is suicide. Apple makes money on hardware. If everyone buys clones, Apple goes bankrupt.", indent: 1 },
      { id: 2603, user: "scully_fan", text: "It worked for Microsoft. The OS is the platform, not the box.", indent: 2 }
    ]
  },
  {
    id: 27,
    title: "DVD format announced by Philips, Sony, Toshiba, and Time Warner",
    url: "news:rec.video",
    domain: "variety.com",
    points: 195,
    user: "av_nerd",
    timeAgo: "2 hours ago",
    text: "Major electronics giants have agreed on a single standard for high-density optical discs, averting a format war similar to VHS vs Betamax. The new Digital Video Disc (DVD) format can hold 4.7GB of data, enough for a full-length movie in high quality video.\n\nThe format replaces the earlier competing SD and MMCD proposals. It promises to replace VHS tapes for home video and CD-ROMs for computer data storage.",
    comments: [
      { id: 2701, user: "laserdisc_holdout", text: "MPEG-2 compression creates artifacts. Laserdisc is analog and pure. I'm not switching.", indent: 0 },
      { id: 2702, user: "vhs_recorder", text: "But can you record on it? No? Then VHS stays. I need to tape X-Files.", indent: 1 },
      { id: 2703, user: "data_hoarder", text: "4.7GB! Imagine how many MP3s I can fit on that. Or the entire Encyclopedia Britannica.", indent: 0 }
    ]
  },
  {
    id: 28,
    title: "FreeBSD 2.0 released",
    url: "ftp://ftp.freebsd.org",
    domain: "freebsd.org",
    points: 140,
    user: "beastie_fan",
    timeAgo: "1 day ago",
    text: "The FreeBSD Project has released version 2.0. This is a landmark release as it declares itself free of any AT&T proprietary code, settling the long-standing legal disputes involving BSD Unix. It features 4.4BSD-Lite code base.\n\nIt is positioned as a robust, high-performance operating system for x86 servers, known for its network stack stability.",
    comments: [
      { id: 2801, user: "linux_convert", text: "The network stack is so much faster than Linux right now. For a high load web server, this is the choice.", indent: 0 },
      { id: 2802, user: "legal_eagle", text: "The lawsuit really hurt BSD's momentum. Linux filled the vacuum while the lawyers argued.", indent: 1 },
      { id: 2803, user: "installer_blues", text: "The installation is still for wizards only. Linux has Slackware, which is slightly easier.", indent: 0 }
    ]
  },
  {
    id: 29,
    title: "Top 10 BBS list for December 1994",
    url: "news:alt.bbs.lists",
    domain: "bbs_digest",
    points: 55,
    user: "modem_junkie",
    timeAgo: "8 hours ago",
    text: "The monthly list of top Bulletin Board Systems is out. Rusty n Edie's BBS remains a powerhouse with over 100 phone lines. The Software Creations BBS continues to be the premiere spot for Apogee and Epic shareware releases.\n\nHowever, traffic stats show a slight decline as more users migrate to SLIP/PPP connections for direct internet access.",
    comments: [
      { id: 2901, user: "lord_british", text: "BBSs are dying. The web is visual. ANSI art is cool, but JPEGs are cooler.", indent: 0 },
      { id: 2902, user: "fidonet_sysop", text: "The community on BBSs is better. The internet is just chaos and noise. Long live FidoNet!", indent: 1 },
      { id: 2903, user: "door_gamer", text: "I just want to play Legend of the Red Dragon. Can I do that on the web?", indent: 0 }
    ]
  },
  {
    id: 30,
    title: "Compuserve acquires Spry",
    url: "http://compuserve.com",
    domain: "compuserve.com",
    points: 70,
    user: "walled_garden_fan",
    timeAgo: "10 hours ago",
    text: "CompuServe has acquired Spry, the makers of 'Internet In A Box', for $100 million. This acquisition is intended to help CompuServe migrate its proprietary online service users to the open web.\n\n'Internet In A Box' was the first retail package to offer Windows users a complete suite of internet software (Mosaic, Mail, Gopher) and an easy signup wizard.",
    comments: [
      { id: 3001, user: "winsock_warrior", text: "Setting up Winsock manually is a rite of passage. These 'Internet in a Box' kits are for casuals.", indent: 0 },
      { id: 3002, user: "cis_user", text: "I like CompuServe's forums. They are moderated and civil. Usenet is a cesspool.", indent: 1 },
      { id: 3003, user: "aol_hater", text: "Just wait until AOL fully connects to the internet. Eternal September is coming.", indent: 0 }
    ]
  }
];

// Page 2 Items (31-60) - List only, no deep content needed
export const MORE_ITEMS: NewsItem[] = [
  { id: 31, title: "Bill Gates on 'The Road Ahead': Internet is a fad?", url: "news:alt.fan.bill-gates", domain: "microsoft.com", points: 150, user: "ms_watcher", timeAgo: "1 day ago", comments: [] },
  { id: 32, title: "Setting up a Gopher server on SunOS", url: "gopher://gopher.umn.edu", domain: "umn.edu", points: 89, user: "gopher_king", timeAgo: "12 hours ago", comments: [] },
  { id: 33, title: "JPEG vs GIF: The Unisys patent war begins", url: "news:comp.graphics", domain: "usenet", points: 210, user: "free_image", timeAgo: "5 hours ago", comments: [] },
  { id: 34, title: "Overclocking your 486DX2-66 to 80MHz: A cooling guide", url: "ftp://overclock.txt", domain: "hardware_zone", points: 305, user: "speed_demon", timeAgo: "2 hours ago", comments: [] },
  { id: 35, title: "The beauty of Mandelbrot fractals in VGA", url: "http://fractals.edu", domain: "math_dept", points: 120, user: "chaos_theory", timeAgo: "8 hours ago", comments: [] },
  { id: 36, title: "SimCity 2000: Optimal Arcology placement", url: "news:rec.games.computer", domain: "maxis.com", points: 180, user: "mayor_sim", timeAgo: "1 day ago", comments: [] },
  { id: 37, title: "Is 8MB RAM enough for Photoshop 3.0 layers?", url: "news:comp.graphics.apps.photoshop", domain: "adobe.com", points: 95, user: "pixel_pusher", timeAgo: "4 hours ago", comments: [] },
  { id: 38, title: "Email etiquette: WHY YOU SHOULD NOT USE ALL CAPS", url: "http://netiquette.org", domain: "netiquette", points: 300, user: "polite_user", timeAgo: "6 hours ago", comments: [] },
  { id: 39, title: "Interview with Id Software's John Carmack", url: "http://wired.com", domain: "wired.com", points: 250, user: "doom_god", timeAgo: "1 day ago", comments: [] },
  { id: 40, title: "BeOS: A new OS for the PowerPC?", url: "http://be.com", domain: "be.com", points: 110, user: "jean_louis", timeAgo: "10 hours ago", comments: [] },
  { id: 41, title: "Why I still use WordStar 4.0", url: "news:comp.editors", domain: "wordstar_fan", points: 80, user: "grrm", timeAgo: "2 days ago", comments: [] },
  { id: 42, title: "Looking for C code to parse HTML", url: "news:comp.lang.c", domain: "usenet", points: 45, user: "parser_boy", timeAgo: "3 hours ago", comments: [] },
  { id: 43, title: "First look at 'Toy Story' from Pixar", url: "http://disney.com", domain: "pixar", points: 190, user: "cgi_fan", timeAgo: "1 day ago", comments: [] },
  { id: 44, title: "Hacker's Manifesto: The Conscience of a Hacker", url: "phrack.org", domain: "phrack", points: 400, user: "mentor", timeAgo: "1 week ago", comments: [] },
  { id: 45, title: "How to compile the kernel in under an hour", url: "news:comp.os.linux.setup", domain: "linux_tips", points: 130, user: "compile_farm", timeAgo: "5 hours ago", comments: [] },
  { id: 46, title: "Sega Saturn imports: Is it worth $800?", url: "news:rec.games.video.sega", domain: "diehard_gamer", points: 70, user: "import_guy", timeAgo: "9 hours ago", comments: [] },
  { id: 47, title: "NCSA Mosaic 2.0 beta released", url: "ftp://ncsa.uiuc.edu", domain: "ncsa", points: 100, user: "mosaic_dev", timeAgo: "1 day ago", comments: [] },
  { id: 48, title: "Building a firewall with ipfwadm", url: "news:comp.security.firewalls", domain: "security_focus", points: 160, user: "admin_root", timeAgo: "7 hours ago", comments: [] },
  { id: 49, title: "Why X11 is too heavy for standard PCs", url: "news:comp.windows.x", domain: "usenet", points: 85, user: "cli_only", timeAgo: "12 hours ago", comments: [] },
  { id: 50, title: "Review: 1GB Hard Drives - Do we really need this much space?", url: "http://pcmag.com", domain: "pcmag", points: 220, user: "data_hoarder", timeAgo: "2 days ago", comments: [] },
  { id: 51, title: "Using 'finger' to check user status", url: "man:finger", domain: "unix_manual", points: 30, user: "plan_file", timeAgo: "1 hour ago", comments: [] },
  { id: 52, title: "The rise of the Cybercafe", url: "news:alt.culture.internet", domain: "wired_news", points: 115, user: "coffee_net", timeAgo: "10 hours ago", comments: [] },
  { id: 53, title: "WarCraft: Orcs & Humans - RTS innovation?", url: "http://blizzard.com", domain: "blizzard.com", points: 145, user: "zug_zug", timeAgo: "3 days ago", comments: [] },
  { id: 54, title: "V.34 modems: The final frontier of speed?", url: "news:comp.dcom.modems", domain: "telecom_digest", points: 90, user: "baud_rate", timeAgo: "6 hours ago", comments: [] },
  { id: 55, title: "Setting up SLIP with Trumpet Winsock", url: "http://trumpet.com.au", domain: "trumpet", points: 200, user: "win_user", timeAgo: "1 day ago", comments: [] },
  { id: 56, title: "IRC vs Talk: Realtime chat protocols", url: "news:alt.irc", domain: "efnet", points: 75, user: "op_me", timeAgo: "8 hours ago", comments: [] },
  { id: 57, title: "What is a 'Cookie'? Netscape's persistent state mechanism", url: "http://netscape.com/newsref/std/cookie_spec.html", domain: "netscape.com", points: 310, user: "web_dev", timeAgo: "1 day ago", comments: [] },
  { id: 58, title: "Linux on a floppy: MuLinux", url: "ftp://sunsite.unc.edu", domain: "sunsite", points: 125, user: "minimalist", timeAgo: "4 hours ago", comments: [] },
  { id: 59, title: "The First International WWW Conference", url: "http://www.cern.ch", domain: "cern.ch", points: 60, user: "timbl_fan", timeAgo: "1 week ago", comments: [] },
  { id: 60, title: "Writing a CGI script in C vs Perl", url: "news:comp.infosystems.www.authoring.cgi", domain: "usenet", points: 95, user: "code_warrior", timeAgo: "5 hours ago", comments: [] }
];

// New Items (Marginal/Weird/New Submissions)
export const NEW_ITEMS: NewsItem[] = [
  { id: 101, title: "My toaster plays a song when done using an 8051", url: "http://users.aol.com/~toaster", domain: "aol.com", points: 3, user: "hw_hacker", timeAgo: "10 minutes ago", comments: [] },
  { id: 102, title: "Found a bug in sendmail debug mode", url: "news:comp.mail.sendmail", domain: "cert.org", points: 5, user: "w0rm_guy", timeAgo: "20 minutes ago", comments: [] },
  { id: 103, title: "Recipe for 'hacker fuel' (Jolt + Espresso)", url: "news:alt.drinks.caffeine", domain: "usenet", points: 12, user: "sleep_deprived", timeAgo: "35 minutes ago", comments: [] },
  { id: 104, title: "ASCII art collection: Star Trek", url: "ftp://ftp.funet.fi", domain: "funet.fi", points: 8, user: "spock_fan", timeAgo: "1 hour ago", comments: [] },
  { id: 105, title: "Why spaces are better than tabs (flamewar)", url: "news:comp.editors", domain: "usenet", points: 1, user: "tab_hater", timeAgo: "1 hour ago", comments: [] },
  { id: 106, title: "Lisp on a microcontroller?", url: "news:comp.lang.lisp", domain: "lisp_machines", points: 15, user: "lambda_man", timeAgo: "1 hour ago", comments: [] },
  { id: 107, title: "UFO sightings in X-Files chatroom", url: "http://fox.com/xfiles", domain: "fox.com", points: 4, user: "mulder", timeAgo: "2 hours ago", comments: [] },
  { id: 108, title: "Is the CIA monitoring Usenet?", url: "news:alt.conspiracy", domain: "usenet", points: 2, user: "tinfoil", timeAgo: "2 hours ago", comments: [] },
  { id: 109, title: "Looking for a copy of 'Neuromancer' ebook", url: "news:alt.books", domain: "gutenberg", points: 6, user: "cyber_read", timeAgo: "2 hours ago", comments: [] },
  { id: 110, title: "Patching doom.exe for infinite ammo", url: "hex_editor", domain: "hex_hacker", points: 9, user: "cheater", timeAgo: "3 hours ago", comments: [] },
  { id: 111, title: "Who is this 'Kevin Mitnick' guy?", url: "news:2600", domain: "2600.com", points: 20, user: "phreaker", timeAgo: "3 hours ago", comments: [] },
  { id: 112, title: "My cat walked on my keyboard and posted this", url: "news:alt.test", domain: "self", points: 1, user: "fluffy", timeAgo: "3 hours ago", comments: [] },
  { id: 113, title: "Selling 4MB SIMM - $120", url: "news:misc.forsale.computers", domain: "usenet", points: 0, user: "ram_seller", timeAgo: "3 hours ago", comments: [] },
  { id: 114, title: "How to connect a camcorder to a Mac", url: "news:comp.sys.mac.video", domain: "av_club", points: 5, user: "videographer", timeAgo: "4 hours ago", comments: [] },
  { id: 115, title: "Fractal compression: The future of video?", url: "http://iterated.com", domain: "iterated", points: 18, user: "math_wiz", timeAgo: "4 hours ago", comments: [] },
  { id: 116, title: "Building a home cockpit for Flight Simulator 5.0", url: "news:rec.aviation.simulators", domain: "flight_sim", points: 25, user: "pilot_wannabe", timeAgo: "4 hours ago", comments: [] },
  { id: 117, title: "Is it safe to overclock a Pentium 60 to 66?", url: "news:comp.sys.intel", domain: "fire_hazard", points: 7, user: "risk_taker", timeAgo: "5 hours ago", comments: [] },
  { id: 118, title: "Best text editor for OS/2?", url: "news:comp.os.os2.apps", domain: "e_editor", points: 3, user: "warp_user", timeAgo: "5 hours ago", comments: [] },
  { id: 119, title: "Anyone successfully running Linux on a 386SX?", url: "news:comp.os.linux.hardware", domain: "low_end_pc", points: 11, user: "student_poor", timeAgo: "6 hours ago", comments: [] },
  { id: 120, title: "Sound Blaster 16 vs AWE32", url: "news:comp.sys.ibm.pc.soundcard", domain: "creative", points: 14, user: "audiophile", timeAgo: "6 hours ago", comments: [] },
  { id: 121, title: "Show HN: A clock in C++", url: "ftp://my_clock.zip", domain: "self", points: 2, user: "cpp_learner", timeAgo: "6 hours ago", comments: [] },
  { id: 122, title: "Why is 'rm -rf /' bad?", url: "news:comp.unix.questions", domain: "root_noob", points: 55, user: "oops_user", timeAgo: "7 hours ago", comments: [] },
  { id: 123, title: "Looking for ANSI artists for a new BBS", url: "news:alt.bbs.ads", domain: "bbs_scene", points: 4, user: "sysop_new", timeAgo: "7 hours ago", comments: [] },
  { id: 124, title: "Does anyone have the specs for the ISA bus?", url: "news:comp.sys.ibm.pc.hardware", domain: "hardware_book", points: 8, user: "engineer_joe", timeAgo: "8 hours ago", comments: [] },
  { id: 125, title: "Can I run Windows 95 on a 486 SLC?", url: "news:comp.os.ms-windows.setup", domain: "win_help", points: 3, user: "cyrix_user", timeAgo: "8 hours ago", comments: [] },
  { id: 126, title: "Review: QuickCam grayscale camera", url: "http://connectix.com", domain: "connectix", points: 22, user: "webcam_pioneer", timeAgo: "8 hours ago", comments: [] },
  { id: 127, title: "Writing a MUD in LPC", url: "news:rec.games.mud.lp", domain: "mud_dev", points: 13, user: "wizard_dev", timeAgo: "9 hours ago", comments: [] },
  { id: 128, title: "Is AI possible? Discussing 'The Emperor's New Mind'", url: "news:comp.ai.philosophy", domain: "penrose", points: 40, user: "thinker", timeAgo: "9 hours ago", comments: [] },
  { id: 129, title: "My mouse ball is dirty", url: "news:comp.periphs", domain: "cleaning_tips", points: 1, user: "sticky_mouse", timeAgo: "10 hours ago", comments: [] },
  { id: 130, title: "Hello World", url: "http://mysite.edu/~user/hello.html", domain: "mysite.edu", points: 0, user: "newbie", timeAgo: "12 hours ago", comments: [] }
];