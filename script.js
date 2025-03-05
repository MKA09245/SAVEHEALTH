const arrayOfHealthWishes = [
 "Wishing you endless energy and vitality as you prioritize your health every day.",
 "May you always find the strength to stay active, eat well, and take care of your mind and body.",
 "I hope you enjoy restful nights and wake up feeling refreshed and ready to tackle each new day.",
 "May stress never weigh you down, and may peace and relaxation fill your life.",
 "Wishing you a long and healthy life full of happiness, laughter, and positive moments.",
 "May you always be surrounded by supportive people who encourage your well-being.",
 "I hope you find joy in every step of your health journey, and may your efforts bring you lasting health.",
 "Wishing you the wisdom to take care of your body and mind, and the happiness that comes from good health.",
 "May your heart stay strong, your mind clear, and your body in perfect harmony.",
 "Here’s to a life filled with good health, love, and endless opportunities for wellness.",
 ]
    
    
    document.getElementById('btn_health_wishes').addEventListener('click',() => {
        let index = Math.floor(Math.random() * arrayOfHealthWishes.length)
        document.getElementById("health-wishes").innerText=arrayOfHealthWishes[index]
    })

    let countOfPills = 5 
    document.getElementById("count-of-tablets").innerText = "💊".repeat (
     countOfPills
    )
    document.getElementById("btn_health_wishes").addEventListener("click",() =>{
        let index = Math.floor(Math.random() * arrayOfHealthWishes.length);
        document.getElementById("p-health-wishes").innerText = 
         arrayOfHealthWishes[index];


    countOfPills --;
    console.log(countOfPills);

    document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
     console.log("💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills));

     if (countOfPills == 0) {
        console.log("countOfPills = 0");
        document.getElementById("btn_health_wishes").style.display = "none"
    
     }
    })
    
    document.getElementById("btn-buy-tablets").addEventListener("click",() => {
        countOfPills = 5 
        console.log(countOfPills);
        document.getElementById("count-of-tablets").innerText = "💊".repeat(
            countOfPills
        );
        document.getElementById("btn_health_wishes").style.display = "inline-block";
    })


    