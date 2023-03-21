const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const reset = document.querySelector('#reset')
const container = document.querySelector('.container')
const audioMoan = document.querySelector('#moan')
const audioNani = document.querySelector('#nani')

const jokes = ["What did the snail who was riding on the turtle's back say? Wheeeee!",
                "I was going to tell a time traveling joke, but you guys didn't like it.",
                "What do you call a lazy kangaroo? A pouch potato.",
                "I used to run a dating service for chickens, but I was struggling to make hens meet.",
                "Why do we tell actors to 'break a leg?' Because every play has a cast.",
                "What does a pig put on dry skin? Oinkment.",
                "What do you call it when a snowman throws a tantrum? A meltdown.",
                "My uncle named his dogs Timex and Rolex. They're his watch dogs.",
                "Did you hear about the guy whose left side was cut off? He's all right now.",
                "How do you open a banana? With a mon-key."]

function writeJokes(){
    var text = document.createElement('h2');
    text.className = 'joke'
    document.querySelectorAll('h2').forEach(h2 => {
        h2.remove()
    })
    
    audioMoan.play()

    text.innerHTML = randomJokes(jokes);
    container.append(text); 

    reset.style.display = 'block'

}

function resetJokes(){
    document.querySelector('h2').remove();
    reset.style.display = 'none'
    
    audioNani.play()
}

function randomJokes(parameter){
    return parameter[Math.floor(Math.random()*parameter.length)];
}   

// if(h2){
//     console.log('sup');
//     reset.style.display = 'block';
//     }
