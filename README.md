<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> An AI Podcast app for a seamless audio content experience, empowering users to convert text to speech based on their chosen topics. By leveraging AI technology, our goal is to transform written content into engaging audio, providing a convenient and personalized way for users to consume their favorite content.

### User Stories
- As a user, I want to input or select topics of interest, so the AI can generate an audio podcast relevant to my preferences.
- As a user, I want to customize the voice and speed of the generated audio, ensuring a personalized listening experience.
- As a user, I want the ability to save and share the generated audio files, enhancing the convenience of consuming content on-the-go.

### How It Works
1. **Topic Selection:** Users can input or choose specific topics of interest, ranging from news articles, blog posts, or any written content.
2. **AI Conversion:** Our advanced AI algorithms analyze the text, generating a natural-sounding audio file that captures the essence of the content.
3. **Customization Options:** Users can personalize the listening experience by adjusting voice preferences and playback speed.
4. **Save and Share:** The app allows users to save their favorite audio files for later listening and share them effortlessly.

By creating an intelligent and customizable podcast experience, we aim to redefine how users consume information, providing a tool that adapts to their preferences and schedules.


<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We developed the AI Podcast app by creating wireframes and mockups, refining the design through multiple iterations to achieve an intuitive layout for effortless navigation and an immersive user experience.

### Wireframes
| Topic Selection  | Customization |  Playback Controls |
| ---| ---| ---|
| ![Topic Selection](./readme/demo/1440x1024.png) | ![Customization](./readme/demo/1440x1024.png) | ![Playback Controls](./readme/demo/1440x1024.png) |

### Mockups
| Home Screen  | Generated Audio | Settings |
| ---| ---| ---|
| ![Home Screen](./readme/demo/1440x1024.png) | ![Generated Audio](./readme/demo/1440x1024.png) | ![Settings](./readme/demo/1440x1024.png) |

<br><br>

By employing wireframes and mockups, we ensured a visual representation of the app's flow and functionality. The intuitive design allows users to seamlessly navigate through topic selection, customization, and playback controls, creating a satisfying and personalized podcast experience.


<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Coffee Express app with the following features:

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen  | Menu Screen | Order Screen | Checkout Screen |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |

### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Coffee Express is built using the following technologies:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Coffee Express locally and explore its features.