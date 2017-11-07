A dark Discord-inspired theme for Rocket.Chat, customized for hgvmp.com

## Install

### WARNING
Our theme set the usernames color inside messages to their respective role color, just like Discord...

*Before proceeding with the installation, you must make sure you don't have any Role with spaces in the "Role" field. Using this theme you will be able to use spaces only in the "Description" field.*

### Manual install
1. Copy the contents of `dist/custom.css` or `dist/custom.min.css`
2. Go to Administration > Layout in Rocket.Chat
3. Paste the copied contents into "Custom CSS"
4. Copy the contents of `dist/logged_out.js`
5. Go to Administration > Layout in Rocket.Chat
6. Paste the copied contents into "Custom Script for logged out users"
7. Copy the contents of `dist/logged_in.js`
8. Go to Administration > Layout in Rocket.Chat
9. Paste the copied contents into "Custom Script for logged in users"

### Automatic install
1. `npm install`
2. `npm run deploy`

### Custom additions
We're using a customized version of 0x1234 theme. You will find the source code of the theme inside `/src`, all our CSS customization made over 0x1234 theme is located inside `src/custom.styl`.

### App color settings
All colors should be set to the defaults. I haven't tested with anything but
the defaults (except for the background color; see the next heading).

### Background color of the mobile bar
To color the background of the top bar in mobile, you should set the "Primary
Background Color" under Administration > Layout > Colors. To set it as the primary
background color this theme uses (recommended).

### Set role color
To set a role color you must add some code into `/src/custom.styl`. 

Write the following inside `custom.styl` after the line `// Roles`:
```
// Roles
.role-MyRoleName {
	color: yellow !important;
}
```

Replace `MyRoleName` with your role name, and set the color you want to use. In this example, I will set the color of the role `bot` and `ProjectManager`:
```
// Roles
.role-bot {
	color: yellow !important;
}

.role-ProjectManager {
	color: #32fcbe !important;
}
```

By default, the following roles are ignored:
```
const ignoredRoles = [
  "user",
  "admin",
  "owner",
  "leader",
  "moderator",
  "anonymous",
  "guest",
  "livechat-agent",
  "livechat-manager",
  "livechat-guest"
];
```
Feel free to modify the ignored roles inside the JS files located in `/src/js`.

## Building
1. `npm install`
2. `npm run build`

If you want to minify the CSS code, after building/deploying, open `/lib/deploy.json` and set `minify` to `true`. 

deploy.json example:
```
{
  "authToken": "x-xxxxxxxxxxx-xxxxxxxxxxxxx-",
  "userId": "xxxxxxxxxxxxxx",
  "minify": true,
  "url": "https://rocketchat.yourwebsite.com"
}

```

## Development
1. `npm install`
2. `npm run watch`
3. Edit source in `src`

## Screenshots

