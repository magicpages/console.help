# Console.help

A simple, user-friendly guide to help people open the developer console in different browsers and operating systems.

## Description

Console.help provides straightforward instructions for accessing the browser developer console across multiple browsers (Chrome, Firefox, Safari, Edge, Opera) and operating systems (Windows, macOS, Linux). The site automatically detects the user's browser and OS to show relevant instructions.

## Development Setup

1. Clone the repository
   ```
   git clone https://github.com/magicpages/console.help.git
   cd console.help
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Build the CSS
   ```
   npm run build
   ```

4. Start the development server
   ```
   npm start
   ```

5. Visit http://localhost:3000 in your browser

## Production Deployment

### Using Docker (recommended)

1. Build and start the Docker container
   ```
   docker-compose up -d
   ```

2. The website will be available at http://localhost

### Manual Deployment

1. Build the CSS for production
   ```
   npm run build
   ```

2. Deploy the following files to your web server:
   - index.html
   - script.js
   - dist/styles.css
   - node_modules/@fontsource/inter (directory)

## Project Structure

- `index.html` - Main HTML file
- `script.js` - Browser/OS detection and user interface logic
- `src/styles.css` - Source CSS file (with Tailwind directives)
- `dist/styles.css` - Compiled and minified CSS
- `Dockerfile` - Docker configuration
- `docker-compose.yml` - Docker Compose configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Created By

This tool is maintained by [Magic Pages](https://www.magicpages.co/) to help developers and non-technical users access the browser console more easily. 