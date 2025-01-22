function handleCommand(event) {
  if (event.key === "Enter") {
    const commandInput = document.getElementById("command-input");
    const command = commandInput.value.trim();
    commandInput.value = "";

    const terminalOutput = document.querySelector(".terminal-output");
    terminalOutput.innerHTML += `<p><span class="prompt">$ </span><span class="output-text">${command}</span></p>`;

    setTimeout(() => {
      executeCommand(command);
    }, 500);
  }
}

function executeCommand(command) {
  const terminalOutput = document.querySelector(".terminal-output");

  switch (command) {
    case "ls":
      terminalOutput.innerHTML += `<p>launcher.html retrobowl cookieclicker slope appel blockblast watermelon consolepong 2048-CUPCAKES solitare spider/spider.htm shapez request.html</p>`;
      break;
    case "cd":
      terminalOutput.innerHTML += `<p>Changing directory... (not implemented)</p>`;
      break;
    case "clear":
      terminalOutput.innerHTML = `<p><span class="prompt">$ </span><span class="output-text">Welcome to Webbite Terminal. Type a command below:</span></p>`;
      break;
    case "help":
      terminalOutput.innerHTML += `
          <p>Available commands:</p>
          <ul>
            <li>ls - List directory contents</li>
            <li>cd - Change directory</li>
            <li>clear - Clear the terminal</li>
            <li>help - Show this help</li>
            <li>whoami - Show current user</li>
            <li>date - Show current date and time</li>
            <li>time - Show current time</li>
            <li>uptime - Show server uptime</li>
            <li>hostname - Show system hostname</li>
            <li>cat - Make the terminal meow</li>
            <li>chicken - Makes a chicken noise</li>
            <li>knock - Knock knock joke</li>
            <li>fortune - Show a random fortune</li>
            <li>ping - Ping a server (or not)</li>
            <li>echo - Echo a message (or not)</li>
            <li>bless - Bless your soul</li>
            <li>sudo - Pretend to run as root</li>
            <li>meme - Show a random meme link</li>
            <li>weather - Show a "weather report"</li>
            <li>shutdown - Make the system "sleep"</li>
            <li>reboot - Reboot with a dance party</li>
            <li>catdog - Make the terminal show both cat and dog</li>
            <li>minecraft - Open the Minecraft launcher</li>
            <li>retrobowl - Play Retro Bowl</li>
            <li>cookieclicker - Open Cookie Clicker</li>
            <li>slope - Play Slope</li>
            <li>appel - Open Appel</li>
            <li>blockblast - Play Block Blast</li>
            <li>watermelon - Open Watermelon</li>
            <li>consolepong - Play Console Pong</li>
            <li>2048-CUPCAKES - Play 2048-CUPCAKES</li>
            <li>solitare - Play Solitare</li>
            <li>spider - Play Spider (spider.htm)</li>
            <li>shapez - Play Shapez</li>
            <li>request - Request something (request.html)</li>
            <li>EXC - Play EXC</li>
          </ul>
        `;
      break;
    case "whoami":
      terminalOutput.innerHTML += `<p>Speedslicer (aka Terminal Wizard)</p>`;
      break;
    case "date":
      terminalOutput.innerHTML += `<p>${new Date().toDateString()}</p>`;
      break;
    case "time":
      terminalOutput.innerHTML += `<p>${new Date().toLocaleTimeString()}</p>`;
      break;
    case "uptime":
      terminalOutput.innerHTML += `<p>System uptime: 24 hours, 42 minutes, and 7 seconds (Still rocking!)</p>`;
      break;
    case "hostname":
      terminalOutput.innerHTML += `<p>hostname: Webbite-Server-Of-Doom</p>`;
      break;
    case "cat":
      terminalOutput.innerHTML += `<p>Meow! 😺</p>`;
      break;
    case "chicken":
      terminalOutput.innerHTML += `<p>Cluck cluck! 🐔</p>`;
      break;
      case "knock":
        const jokes = [
          { setup: "Knock knock.", punchline: "Who's there? It's a mystery..." },
          { setup: "Knock knock.", punchline: "Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!" },
          { setup: "Knock knock.", punchline: "Who's there? Cow says. Cow says who? No, cow says moooo!" },
          { setup: "Knock knock.", punchline: "Who's there? Boo. Boo who? Don't cry, it's just a joke!" },
          { setup: "Knock knock.", punchline: "Who's there? Atch. Atch who? Bless you!" }
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        terminalOutput.innerHTML += `<p>${joke.setup}</p><p>${joke.punchline}</p>`;
        break;
    case "fortune":
      const fortunes = [
        "You will find a great fortune in your next cookie.",
    "You will soon be the proud owner of a llama.",
    "Beware of the duck in your future.",
    "The code you write will soon compile without errors. Wait, what?",
    "You will have a great dinner tonight. Pizza? Maybe.",
    "A new opportunity is coming your way. Embrace it!",
    "You will discover a hidden talent in the near future.",
    "Your luck is about to take a turn for the better.",
    "A surprise awaits you at the end of the week.",
    "You will soon receive news from an old friend.",
    "A long-awaited project will soon come to fruition.",
    "Your creativity will lead to something amazing.",
    "The answer to your question is within you.",
    "You will find joy in the simplest of things today.",
    "Your hard work will soon pay off in unexpected ways.",
    "You will receive a compliment from an unlikely source.",
    "Your next adventure will be both exciting and rewarding.",
    "Good things are coming your way. Stay positive!",
    "A chance encounter will lead to something great.",
    "You will soon solve a problem that has been bothering you.",
    "Your kindness will be repaid in ways you never expected.",
    "A new friend will bring unexpected joy into your life.",
    "You will soon be faced with a decision that will change everything.",
    "Success is closer than you think. Keep going!",
    "You will find balance in your life, both in work and play.",
    "A creative idea will lead to success in your next endeavor.",
    "An unexpected gift will brighten your day soon.",
    "You will gain clarity on a situation that has been confusing.",
    "An important decision is on the horizon. Trust your instincts.",
    "You will soon embark on a journey of self-discovery."
      ];
      terminalOutput.innerHTML += `<p>${
        fortunes[Math.floor(Math.random() * fortunes.length)]
      }</p>`;
      break;
    case "ping":
      terminalOutput.innerHTML += `<p>Pinging... google.com... PONG! 🏓</p>`;
      break;
    case "echo":
      terminalOutput.innerHTML += `<p>Echo echo echo... Is this thing on?</p>`;
      break;
    case "bless":
      terminalOutput.innerHTML += `<p>You have been blessed with good vibes! ✨</p>`;
      break;
    case "sudo":
      terminalOutput.innerHTML += `<p>Permission denied... Just kidding! You're always sudo in my eyes.</p>`;
      break;
    case "meme":
        const memes = [
            "https://www.reddit.com/r/ProgrammerHumor/comments/19cc2ql/arraylist/",
            "https://www.reddit.com/r/ProgrammerHumor/",
            "https://www.reddit.com/r/techsupportmemes/",
            "https://www.reddit.com/r/ProgrammingMemes/",
            "https://www.reddit.com/r/codingmemes/",
            "https://www.reddit.com/r/techhumor/",
            "https://www.reddit.com/r/DevHumor/",
            "https://www.reddit.com/r/ComputerScience/",
            "https://www.reddit.com/r/learnprogramming/",
            "https://www.reddit.com/r/CodeNewbie/",
            "https://www.reddit.com/r/javascriptmemes/",
            "https://www.reddit.com/r/PythonMemes/",
            "https://www.reddit.com/r/linuxmemes/",
            "https://www.reddit.com/r/webdevmemes/"
        ];
        
      terminalOutput.innerHTML += `<p>Here's a meme for you: <a href="${
        memes[Math.floor(Math.random() * memes.length)]
      }" target="_blank">Click me for a meme!</a></p>`;
      break;
    case "weather":
      terminalOutput.innerHTML += `<p>The weather today: 100% chance of awesome.</p>`;
      break;
    case "shutdown":
      terminalOutput.innerHTML += `<p>Shutting down... just kidding! I'm still here. 😜</p>`;
      break;
    case "reboot":
      terminalOutput.innerHTML += `<p>Rebooting... with a dance party! 🕺💃</p>`;
      break;
    case "catdog":
      terminalOutput.innerHTML += `<p>Here's a cat and dog for you:</p><p>🐱 + 🐶 = ❤️</p>`;
      break;
    case "minecraft":
      window.open("launcher.html", "_blank");
      break;
    case "retrobowl":
      window.open("retrobowl", "_blank");
      break;
    case "cookieclicker":
      window.open("cookieclicker", "_blank");
      break;
    case "slope":
      window.open("slope", "_blank");
      break;
    case "appel":
      window.open("appel", "_blank");
      break;
    case "blockblast":
      window.open("blockblast", "_blank");
      break;
    case "watermelon":
      window.open("watermelon", "_blank");
      break;
    case "consolepong":
      window.open("consolepong", "_blank");
      break;
    case "2048-CUPCAKES":
      window.open("2048-CUPCAKES", "_blank");
      break;
    case "solitare":
      window.open("solitare", "_blank");
      break;
    case "spider":
      window.open("spider/Spider.htm", "_blank");
      break;
    case "shapez":
      window.open("shapez", "_blank");
      break;
    case "request":
      window.open("request.html", "_blank");
      break;
    case "EXC":
      window.open("exc.html", "_blank");
      break;
    default:
      terminalOutput.innerHTML += `<p>Unknown command: ${command} — Try typing "help" for a list of commands!</p>`;
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
