# Echo

Live demo: https://ctp-echo.herokuapp.com/

Echo is a gamified social media platform Inspired by decentralization and gamification aiming to prevent closed social bubbles. Comparable to Twitter users can submit content, called an echo, and readers can re-echo, like retweeting. Echo posts differ, however, in that instead of getting posted to a user's dashboard, they are delivered to a number of random users, re-echo's also are delivered randomly. Every user has an account level, which determines the strength of their echo; how many people their echo will reach. Users gain experience to level up based on their activity on the platform, mostly through creating posts that receive a lot of echos. 

## Getting Started

### Prerequisites

Have Node installed
https://nodejs.org/en/


### Installing

Deveopment Build:
```bash
1. clone project
2. cd to server directory: npm install (install Express dependencies)
3. cd to client directory: npm install (install React dependencies)
4. to start Express server: npm start (under server directory)
5. to start React server: npm start (under client directory)
```

Production Build:
```bash
1. cd to client
2. npm run build
3. a folder called 'build' will be created
4. production build will be hosted on the Express server
```

## Design Documentation Assets

### Route Map
![Alt text](drafting/routermap.png?raw=true "RouteMap")


### Site Map
![Alt text](drafting/sitemap.png?raw=true "SiteMap")

### Login
![Alt text](drafting/wireframeLogin.png?raw=true "Login")

### Dashboard
![Alt text](drafting/wireframeDashboard.png?raw=true "Dashboard")

### Inbox
![Alt text](drafting/wireframeInbox.png?raw=true "Inbox")

### Top Tags
![Alt text](drafting/wireframeTopTags.png?raw=true "Top Tags")

### Profile
![Alt text](drafting/wireframeProfile.png?raw=true "Profile")
