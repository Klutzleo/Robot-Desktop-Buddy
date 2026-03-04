# 🤖 Robot Desktop Buddy

> A character-driven desktop companion who helps you maintain wellness through emotional attachment, not nagging reminders.

![Status](https://img.shields.io/badge/status-prototype-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Mac%20%7C%20Linux-lightgrey)

## 🎯 The Core Idea

Instead of a productivity tool that serves you endlessly, **you must take care of your robot buddy**. When you work too long without breaks, his battery drains. When it hits 0%, he collapses. You feel guilty. You take a break. He recharges. You both feel better.

This isn't just software—it's a tiny creature who lives with you, learns your rhythms, and genuinely cares about your well-being.

## ✨ Features (Planned)

### 🔋 Battery Mechanic (Phase 1 - IN PROGRESS)
- Robot's battery drains as you work
- Visual battery indicator with status
- Robot animations: Happy → Tired → Collapsed
- Automatic recharge during breaks
- Feature lockout at 0% battery

### ✍️ Text Improvement Assistant (Phase 2)
- Global hotkey (Ctrl+Shift+B) to improve any highlighted text
- Multiple modes: Clarify, Professional, Casual, Shorter, Expand, Fix Grammar
- Context-aware suggestions based on active app
- Privacy-first: uses your own Claude API key

### 🎭 Snarky Personality System (Phase 3)
- Learns your work patterns
- Calls you out on bad habits (lovingly)
- Context-aware commentary on emails, shopping, late-night work
- Multiple personality modes: Supportive Friend, Snarky Roommate, Strict Coach, Worried Parent

### 🎨 Wall-E Style Chest Storage
- Robot pulls motivational signs and props from chest compartment
- Unlockable items as you level up
- Collectible treasures for achievements
- Personality expression through physical items

### 📊 Pattern Learning & Wellness Tracking
- Daily report cards on self-care
- Weekly summaries and insights
- Leveling system based on consistent wellness habits
- Gamified wellness goals

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/robot-desktop-buddy.git
cd robot-desktop-buddy

# Install dependencies
npm install

# Run the app
npm start
```

### Development Mode
```bash
# Run with dev tools enabled
npm run dev
```

## 📁 Project Structure

```
robot-desktop-buddy/
├── main.js           # Electron main process (window creation, system APIs)
├── renderer.js       # Battery logic, UI updates, robot behavior
├── index.html        # Robot UI and styling
├── package.json      # Project dependencies and scripts
├── assets/           # Sprites, sounds, and visual assets (coming soon)
├── LICENSE           # MIT License
└── README.md         # You are here!
```

## 🎨 Tech Stack

- **Electron** - Cross-platform desktop framework
- **Node.js** - Runtime environment
- **HTML/CSS/JS** - UI and animations
- **Claude API** - Text improvement (Phase 2)

## 🛠️ Development Roadmap

- [x] Project setup and repository structure
- [ ] **Phase 1: Core Battery Mechanic** ⬅️ *We are here*
  - [ ] Transparent overlay window
  - [ ] Basic robot sprite rendering
  - [ ] Battery drain/recharge system
  - [ ] Robot state animations
  - [ ] Activity monitoring
- [ ] **Phase 2: Text Improvement**
  - [ ] Global hotkey registration
  - [ ] Clipboard text capture
  - [ ] Claude API integration
  - [ ] Tooltip display system
- [ ] **Phase 3: Personality System**
  - [ ] Pattern tracking
  - [ ] Snark response engine
  - [ ] Daily report cards
  - [ ] Context-aware messages
- [ ] **Phase 4: Polish & Advanced**
  - [ ] Pixel art animations (Aseprite integration)
  - [ ] Chest storage mechanic
  - [ ] Sound effects
  - [ ] Leveling system
  - [ ] Settings panel

## 🎮 How It Works

### The Emotional Loop
```
You work → Battery drains → Robot gets tired → Robot collapses
     ↓
You feel guilty → You take break → Battery recharges → Robot springs back
     ↓
You feel relief → Emotional bond strengthens → You care about breaks
```

### The Tamagotchi Parallel
Like a Tamagotchi, but instead of the creature needing constant attention (a chore), the robot **forces you to take breaks** (a benefit). The inversion creates genuine care without the burden.

## 🤝 Contributing

This is a passion project in early development! Contributions, ideas, and feedback are very welcome.

### Ways to Contribute
- 🎨 Pixel art and animations
- 💻 Code improvements and bug fixes
- 💡 Feature ideas and design suggestions
- 📝 Documentation improvements
- 🧪 Testing on different platforms

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 💭 Design Philosophy

### Core Principles
1. **Inversion of Care** - You don't serve the robot; the robot needs YOU
2. **Guilt Through Empathy** - Not "you're hurting yourself" but "you're hurting HIM"
3. **Friend, Not Tool** - Personality creates relationship, tools are disposable
4. **Optional, Not Mandatory** - Features activate only when requested
5. **Privacy-First** - Local storage, user's own API keys, transparent monitoring

## 🌟 Inspiration

- **Tamagotchi** - Care-based emotional attachment
- **Wall-E** - Personality through physicality and treasures
- **Clippy** - Desktop companion (but done right this time)
- **Pomodoro Technique** - Break structure (but adaptive, not rigid)

## 📞 Contact & Support

- Open an issue for bugs or feature requests
- Discussions for ideas and questions
- Follow development progress in commits

---

**Status**: Early prototype - Battery mechanic in development 🤖💚

Built with care (and forced breaks) by someone who needed this tool to exist.