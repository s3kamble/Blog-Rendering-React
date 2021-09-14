# <i>Travel-O-(B)log</i>
- This front-end-application renders list of travel-blogs you can read from.
- Click on any one from the list to read the complete Blog.

<br>

<details open="open">
<summary> <b> Table of Contents</b> </summary>
<ol> 
    <li>
        <a href="#overview">Overview</a>
        <ul>
          <li> <a href="#prerequisites">Prerequisites</a></li>
          <li> <a href="#built-with">Built with</a></li>
          <li> <a href="#keywords">Keywords</a></li>
        </ul>
    </li>
    <li>
        <a href="#getting-started">Getting started</a>
        <ul>
          <li> <a href="#dependencies">Dependencies</a></li>
          <li> <a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li>
      <a  href="#usage">Usage</a>
    </li>
    <li>
      <a  href="#functionalites-to-be-added">Functionalities to be added</a>
    </li>
    <li>
      <a  href="#directory-tree">Directory-tree</a>
    </li>

</ol>
</details>

<br>

# <i>Overview</i>

# <b>Prerequisites</b>
- Knowledge Of Javascript(ES5,ES6)
- React

# <b>Built with</b>
- React

# <b>Keywords</b>
- React functional components 
- React routing
- React fontawesome

<br>

# <i>Getting started</i>

# <b> Dependencies </b>
- Local Backend Server
<p>This frontend application fetches blog-data (images,content) from a backend server. </p>
<p>For proper functioning of the front end application,you will need to clone the backend server git repositiory and run it locally(on your system)</p>
<p>The below mentioned steps will guide you for setting up the the backend for the application </p>

1. Open the terminal window,navigate to the folder where you want the backend git repo to be cloned and type the following command: 
```sh
  git clone https://github.com/s3kamble/Blog-rendering
   ```

2. On successful clone, navigate to the currently created folder(backend folder) and type the following command to install all the required packages.
```sh
  npm install
   ```

3. To start the backend server,type the following command:
```sh
 npm run start
   ```
4. Keep this server on,while you are using the front-end application

5. For more information,on backend functionalities and features and its configurations,visit:
* [Backend for Blog rendering](https://github.com/s3kamble/Blog-rendering/README.md)

6. Else,you can use the backend server available (hosted on heroku).Follow the steps given to use the server.
  - Open "Blog.jsx" and use the heroku dataUrl(commented) insted of local url.
  - Open "Home.jsx" and use the heroku dataUrl(commented) insted of local url.
  - *** This url will only work if server is not on maintainence mode ,it is recommended configure local backend and use it***

# Installation

1. Open a new termainal window,navigate to the folder where you want the froent-end apllication sub-folder to be created

2. Type the following command:
```sh
  git clone https://github.com/s3kamble/Blog-rendering-React
   ```
3. On successful clone, navigate to the currently created folder(frontend folder) and type the following command to install all the required packages.
```sh
  npm install
   ```
4. Once the packages are installed,to start the frontend react application ,type the following command:
```sh
 npm start
   ```
5. You will now be able to see the home page of the application opened on your default browser.

<br>

# <i>Usage</i>
1. Navbar
   <ul>
    <li>  Navbar contains dummy links for:a)Contact b)Feedback  </li>
   </ul>
2. Main Page
   <ul>
    <li> Main page contains lists of blogs available </li>
    <li>Click on any blog image to read about the blog</li>
   </ul>
3. Particular Blog
   <ul>
    <li>This page displays information about the blog you clicked on.</li>
   </ul>
4. Related Links
   <ul>
     <li>This section of the page displays links of the blogs that you can read about.</li>
   </ul>
5. Footer
    <ul>
     <li>Footer contains dummy links for a)Travel-Image Gallery  b)Plan-A-Trip</li>
   </ul>

  <br>

# <i>Functionalities to be added</i>
- Travel Image Gallery
- Plan-A-Trip calender displaying current year consecutive holidays
-Theme change button






<br>

# <i>Directory tree</i>
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── close.jpg
    ├── components
    │   ├── Aside
    │   │   ├── Aside.jsx
    │   │   └── Aside.module.css
    │   ├── Blog
    │   │   ├── Blog.jsx
    │   │   └── Blog.module.css
    │   ├── Blogs
    │   │   ├── Blogs.jsx
    │   │   └── Blogs.module.css
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   ├── Hamburger
    │   │   ├── Hamburger.jsx
    │   │   └── Hamburger.module.css
    │   ├── Home
    │   │   ├── Home.jsx
    │   │   └── Home.module.css
    │   └── Nav
    │       ├── Nav.jsx
    │       └── Nav.module.css
    ├── index.css
    ├── index.js
    ├── logo.jpeg
    ├── logo.svg
    ├── menu-black.jpg
    ├── reportWebVitals.js
    ├── routing
    │   └── Approuter.js
    └── setupTests.js


```
