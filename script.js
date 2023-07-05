const gameLoop = ((x, y) => {
    if (x === "stone" && y === "stone") {
      return 0
    }
    else if (x === "stone" && y === "scissor") {
      return 1
    }
    else if (x === "stone" && y === "paper") {
      return -1
    }
    else if (x === "paper" && y === "paper") {
      return 0
    }
    else if (x === "paper" && y === "scissor") {
      return -1
    }
    else if (x === "paper" && y === "stone") {
      return 1
    }
    else if (x === "scissor" && y === "scissor") {
      return 0
    }
    else if (x === "scissor" && y === "stone") {
      return -1
    }
    else if (x === "scissor" && y === "paper") {
      return 1
    }
  })
  
  const bot = ((value) => {
    if (value === 0) {
      return "stone"
    }
    else if (value === 1) {
      return "paper"
    }
    else {
      return "scissor"
    }
  })
  
  let player = document.getElementById('user-side')
  let system = document.getElementById('bot-side')
  
  // system.firstElementChild.attributes[1].nodeValue = 'rock10.png'
  
  let btn1 = document.getElementById('btn-1')
  let btn2 = document.getElementById('btn-2')
  let btn3 = document.getElementById('btn-3')
  
  let sc = document.getElementById('score')
  let resc = document.getElementById('re-score')
  let score = 0
  resc.addEventListener('click', function() {
    sc.innerHTML = '0'
    player.firstElementChild.attributes[1].nodeValue = 'stone.png'
    system.firstElementChild.attributes[1].nodeValue = 'stone.png'
    score = 0
  })
  
  
  btn1.addEventListener('click', function() {
    player.firstElementChild.attributes[1].nodeValue = 'stone.png'
    system.firstElementChild.attributes[1].nodeValue = 'stone.png'
  
    player.firstElementChild.classList.toggle('shaking')
    system.firstElementChild.classList.toggle('shaking')
  
    let delay = setTimeout(function() {
      player.firstElementChild.classList.toggle('shaking')
      system.firstElementChild.classList.toggle('shaking')
  
      player.firstElementChild.attributes[1].nodeValue = 'stone.png'
      let sys = bot(Math.floor(Math.random() * 3))
      // console.log(sys)
      system.firstElementChild.attributes[1].nodeValue = `${sys}.png`
      let x = gameLoop('stone', sys)
      score += x
      // console.log(x)
      sc.innerHTML = score
    }, 1000)
  })
  
  btn2.addEventListener('click', function() {
    player.firstElementChild.attributes[1].nodeValue = 'stone.png'
    system.firstElementChild.attributes[1].nodeValue = 'stone.png'
  
    player.firstElementChild.classList.toggle('shaking')
    system.firstElementChild.classList.toggle('shaking')
  
    let delay = setTimeout(function() {
      player.firstElementChild.classList.toggle('shaking')
      system.firstElementChild.classList.toggle('shaking')
  
      player.firstElementChild.attributes[1].nodeValue = 'paper.png'
      let sys = bot(Math.floor(Math.random() * 3))
      // console.log(sys)
      system.firstElementChild.attributes[1].nodeValue = `${sys}.png`
      let x = gameLoop('paper', sys)
      score += x
      // console.log(x)
      sc.innerHTML = score
    }, 1000)
  })
  
  btn3.addEventListener('click', function() {
    player.firstElementChild.attributes[1].nodeValue = 'stone.png'
    system.firstElementChild.attributes[1].nodeValue = 'stone.png'
  
    player.firstElementChild.classList.toggle('shaking')
    system.firstElementChild.classList.toggle('shaking')
  
    let delay = setTimeout(function() {
      player.firstElementChild.classList.toggle('shaking')
      system.firstElementChild.classList.toggle('shaking')
  
      player.firstElementChild.attributes[1].nodeValue =     
      'scissor.png'
      let sys = bot(Math.floor(Math.random() * 3))
      // console.log(sys)
      system.firstElementChild.attributes[1].nodeValue = 
     `${sys}.png`
      let x = gameLoop('scissor', sys)
      score += x
      // console.log(x)
      sc.innerHTML = score
    }, 1000)
  })
  
  