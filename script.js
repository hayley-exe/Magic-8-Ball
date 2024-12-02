let userName = prompt("Hi, who might you be?");
userName ? document.getElementById('greeting').innerText = (`Hello, ${userName}!`) :
  document.getElementById('greeting').innerText = 'Hello!';

function shakeMagic8Ball() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  let responseImg = ''


  let userQuestion = prompt('What is your question for the almighty 8-Ball?')

  if (randomNumber >= 0) {
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        responseImg = 'imgs/certain.jpg'
        break;
      case 1:
        eightBall = 'It is decidedly so';
        responseImg = 'imgs/yeh.jpg'
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        responseImg = 'imgs/hazy.jpg'
        break;
      case 3:
        eightBall = 'Cannot predict now';
        responseImg = 'imgs/um.webp'
        break;
      case 4:
        eightBall = 'Do not count on it';
        responseImg = 'imgs/dcoi.jpg'
        break;
      case 5:
        eightBall = 'My sources say no';
        responseImg = 'imgs/nerp.png'
        break;
      case 6:
        eightBall = 'Outlook not so good';
        responseImg = 'imgs/nuhuh.jpg'
        break;
      case 7:
        eightBall = 'Signs point to yes';
        responseImg = 'imgs/signyes.png'
        break;
    }

    console.log(eightBall);
    document.getElementById('response-text').innerText = `${userName} has asked the Magic 8-Ball ${userQuestion} The almighty all knowing 8-Ball has replied ${eightBall}`
    document.getElementById('response-image').src = responseImg
  }
}
