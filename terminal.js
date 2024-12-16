function handleCommand(event) {
    if (event.key === 'Enter') {
      const commandInput = document.getElementById('command-input');
      const command = commandInput.value.trim();
      commandInput.value = '';  
  
      const terminalOutput = document.querySelector('.terminal-output');
      terminalOutput.innerHTML += `<p><span class="prompt">$ </span><span class="output-text">${command}</span></p>`;
  
      setTimeout(() => {
        executeCommand(command);
      }, 500);  
    }
  }
  
  function executeCommand(command) {
    const terminalOutput = document.querySelector('.terminal-output');
  
    switch (command) {
      case 'ls':
        terminalOutput.innerHTML += `<p>launcher.html retrobowl cookieclicker slope appel blockblast watermelon consolepong 2048-CUPCAKES solitare spider/spider.htm shapez request.html</p>`;
        break;
      case 'cd':
        terminalOutput.innerHTML += `<p>Changing directory... (not implemented)</p>`;
        break;
      case 'clear':
        terminalOutput.innerHTML = `<p><span class="prompt">$ </span><span class="output-text">Welcome to Webbite Terminal. Type a command below:</span></p>`;
        break;
      case 'help':
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
          </ul>
        `;
        break;
      case 'whoami':
        terminalOutput.innerHTML += `<p>Speedslicer (aka Terminal Wizard)</p>`;
        break;
      case 'date':
        terminalOutput.innerHTML += `<p>${new Date().toDateString()}</p>`;
        break;
      case 'time':
        terminalOutput.innerHTML += `<p>${new Date().toLocaleTimeString()}</p>`;
        break;
      case 'uptime':
        terminalOutput.innerHTML += `<p>System uptime: 24 hours, 42 minutes, and 7 seconds (Still rocking!)</p>`;
        break;
      case 'hostname':
        terminalOutput.innerHTML += `<p>hostname: Webbite-Server-Of-Doom</p>`;
        break;
      case 'cat':
        terminalOutput.innerHTML += `<p>Meow! 😺</p>`;
        break;
      case 'chicken':
        terminalOutput.innerHTML += `<p>Cluck cluck! 🐔</p>`;
        break;
      case 'knock':
        terminalOutput.innerHTML += `<p>Knock knock.</p><p>Who's there? It's a mystery...</p>`;
        break;
      case 'fortune':
        const fortunes = [
          "You will find a great fortune in your next cookie.",
          "You will soon be the proud owner of a llama.",
          "Beware of the duck in your future.",
          "The code you write will soon compile without errors. Wait, what?",
          "You will have a great dinner tonight. Pizza? Maybe.",
        ];
        terminalOutput.innerHTML += `<p>${fortunes[Math.floor(Math.random() * fortunes.length)]}</p>`;
        break;
      case 'ping':
        terminalOutput.innerHTML += `<p>Pinging... google.com... PONG! 🏓</p>`;
        break;
      case 'echo':
        terminalOutput.innerHTML += `<p>Echo echo echo... Is this thing on?</p>`;
        break;
      case 'bless':
        terminalOutput.innerHTML += `<p>You have been blessed with good vibes! ✨</p>`;
        break;
      case 'sudo':
        terminalOutput.innerHTML += `<p>Permission denied... Just kidding! You're always sudo in my eyes.</p>`;
        break;
      case 'meme':
        const memes = [
          "https://www.reddit.com/r/ProgrammerHumor/comments/19cc2ql/arraylist/",
          "https://www.reddit.com/r/ProgrammerHumor/",
          "https://www.reddit.com/r/techsupportmemes/",
        ];
        terminalOutput.innerHTML += `<p>Here's a meme for you: <a href="${memes[Math.floor(Math.random() * memes.length)]}" target="_blank">Click me for a meme!</a></p>`;
        break;
      case 'weather':
        terminalOutput.innerHTML += `<p>The weather today: 100% chance of awesome.</p>`;
        break;
      case 'shutdown':
        terminalOutput.innerHTML += `<p>Shutting down... just kidding! I'm still here. 😜</p>`;
        break;
      case 'reboot':
        terminalOutput.innerHTML += `<p>Rebooting... with a dance party! 🕺💃</p>`;
        break;
      case 'catdog':
        terminalOutput.innerHTML += `<p>Here's a cat and dog for you:</p><p>🐱 + 🐶 = ❤️</p>`;
        break;
      case 'minecraft':
        window.open('launcher.html', '_blank');
        break;
      case 'retrobowl':
        window.open('retrobowl', '_blank');
        break;
      case 'cookieclicker':
        window.open('cookieclicker', '_blank');
        break;
      case 'slope':
        window.open('slope', '_blank');
        break;
      case 'appel':
        window.open('appel', '_blank');
        break;
      case 'blockblast':
        window.open('blockblast', '_blank');
        break;
      case 'watermelon':
        window.open('watermelon', '_blank');
        break;
      case 'consolepong':
        window.open('consolepong', '_blank');
        break;
      case '2048-CUPCAKES':
        window.open('2048-CUPCAKES', '_blank');
        break;
      case 'solitare':
        window.open('solitare', '_blank');
        break;
      case 'spider':
        window.open('spider/spider.htm', '_blank');
        break;
      case 'shapez':
        window.open('shapez', '_blank');
        break;
      case 'request':
        window.open('request.html', '_blank');
        break;
      case 'shapez':
        window.open('shapez', '_blank');
        break;
      default:
        terminalOutput.innerHTML += `<p>Unknown command: ${command} — Try typing "help" for a list of commands!</p>`;
    }
  
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  