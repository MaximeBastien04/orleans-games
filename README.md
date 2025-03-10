# Orleans Games
Orleans Games is a videogame website marketed towards children

## How to Run
1. Open the project in a code editor.
2. Open the terminal.
3. Open the `react` folder by writing `cd react` in the terminal.
4. Open the localhost link provided in the terminal  

## How to Develop
Follow these steps to contribute to or modify the project:
### Prerequisites
 - Basic knowledge of react and web development workflows.
### Development Setup
- Clone the [**repository**](https://github.com/MaximeBastien04/orleans-games.git).
### Additional Contribution
For any further contribution, please check the `CONTRIBUTING.md`.

## How to Export
1. Open the terminal.
2. Write `npm run build` in the terminal.
3. Find the build project in the `/dist` folder.

## How to Upload
1. Open the `/dist` folder in this project.
2. Open FileZilla and connect with the Orleans Games website server.
3. Navigate to the `/www/vite-react` folder in the server.
4. Replace the files inside the `/vite-react` with the files inside the `/dist` folder (if you didn't add or change an image you don't need to replace the `/images` folder).
5. After adding the files to the FileZilla server, don't forget to change the file extension of `index.html` to `index.php`.

## Folder Structure
- `/index.html` main page that will be loaded when the site is opened.
- `/public` contains all the images for the website and the thumbnails for the games.
    - `/images` folder containing all the images.
        - `/assets` folder containing all the images for the website.
        - `/games-thumbnails` folder containing all the thumbnail-images for the games.
- `/src` 
    - `/components` contains components files that are reused on the website (e.g.: Nav, Footer)
    - `/css` folder containing all the CSS files.
        - `/reset.css` CSS file that server as a reset for an equal experience on every browser.
        - `/media.css` CSS file for all responsive code for viewing the site on other devices.
    - `/data` contains the JSON-file with all the info for the games.
    - `/pages` contains different pages of the website.
    - `App.jsx` file containing components and pages.
    - `index.css` main CSS file containing all the styling code.
    - `main.jsx` root of the project.
- `index.html` loads the `main.jsx` file.

## License
This project is developed by **Maxime Bastien**.

This project is licensed under the MIT License. See the full license text in the LICENSE file.