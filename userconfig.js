// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Berlin",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
    },
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://Skiftstar.github.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Skifty",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "YouTube",
              url: "https://youtube.com",
              icon: "movie",
              icon_color: palette.green,
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Dev",
          links: [
            {
              name: "Github",
              url: "https://www.github.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "Bitbucket",
              url: "https://bitbucket.com",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
