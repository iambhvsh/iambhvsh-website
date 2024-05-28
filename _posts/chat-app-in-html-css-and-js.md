---
title: 'Chat App in Html, CSS & JS'
excerpt: 'In this post, we are going to learn that How to create a Chat App in Html, CSS & JS...'
coverImage: '/assets/blog/chat-app-in-html-css-and-js/post.jpg'
date: '2024-05-22T05:35:07.322Z'
author:
  name: Bhavesh Patil
  picture: '/assets/blog/authors/iambhvsh.png'
ogImage:
  url: '/assets/blog/chat-app-in-html-css-and-js/post.jpg'
---

## Introduction:

The Real-Time Chat Application is a web-based platform that enables users to communicate with each other in real-time using text messages. It provides a seamless and interactive chatting experience, fostering instant communication and collaboration between users. The application utilizes HTML, CSS, and JavaScript to create an attractive and user-friendly interface.

## Key Features:

- Stores Username in Localstorage & Firebase
- Real-Time Messaging: The application allows users to send and receive messages instantly, providing a smooth and responsive chat experience
- Gray & Blue Bubbles 💬 UI inspired by Apple Messenger
- Emojis Support
- Message History: The chat application maintains a message history, allowing users to scroll back and view previous conversations.

## Source Code

##### HTML

```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<title>Chatify ❤️</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<!-- Primary Meta Tags -->

<title>Chatify ❤️</title>

<meta name="title" content="Chatify ❤️" />

<meta name="description" content="Chat App created in Html, CSS and JS by Bhavesh." />

<link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/468px-IMessage_logo.svg.png">

<!-- Open Graph / Facebook -->

<meta property="og:type" content="website" />

<meta property="og:url" content="https://iambhvshchat.vercel.app" />

<meta property="og:title" content="Chatify ❤️" />

<meta property="og:description" content="Chat App created in Html, CSS and JS by Bhavesh." />

<meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV7B9-tofQw_Q-GtISvw8_SQbX76BV4PZXUdchJXvEEgJCBqgZTndu8uk&s=10" />
  
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:url" content="https://metatags.io/" />

<meta property="twitter:title" content="Chatify ❤️" />

<meta property="twitter:description" content="Chat App created in Html, CSS and JS by Bhavesh." />
  
</head>

<body class="bg-black">

<div class="max-w-screen-lg mx-auto flex flex-col h-screen">

<!-- Chat Messages -->

<div class="flex-grow flex flex-col justify-end p-4">

<ul id="messages" class="overflow-auto mb-14"></ul>

</div>

<!-- Input Box -->

<div class="bg-black backdrop-filter backdrop-blur-md bg-opacity-40 flex p-4 fixed bottom-0 w-full">

<input id="message" type="text" placeholder="Enter message and press enter" class="flex-grow bg-gray-900 rounded-full px-4 py-2 focus:outline-none text-white">

</div>

</div>

<!-- Username Modal -->

<div id="usernameModal" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center hidden">

<div class="bg-gray-900 p-8">

<h2 class="text-2xl font-semibold text-white mb-2">Chatify ❤️</h2>

<p class="text-xl text-white mb-4">Get started by entering your Username!</p>

<input id="usernameInput" type="text" placeholder="Username" class="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none">

<button id="submitUsername" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">Submit</button>

</div>

</div>

<!-- Reset Username -->

<button id="clearUsername" class="mt-2 mr-2 px-4 py-2 top-0 right-0 bg-red-500 text-white rounded-full focus:outline-none fixed hidden">Reset</button>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

<script src='https://cdn.firebase.com/js/client/2.4.1/firebase.js'></script>

<script src='/script.js'></script>

</body>

</html>
```
