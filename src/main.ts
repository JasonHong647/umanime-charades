import "./style.css";
import epstein from "./assets/epstein.jpg";
import driverD from "./assets/driver_d.png";

let score = 0;
const prompts = [
    { text: "Driver D", imageURL: driverD },
    { text: "Shinji Chair", imageURL: "https://media1.tenor.com/m/2tmFzIpCJTYAAAAd/shinji-shinji-ikari.gif" },
    { text: "Walter White", imageURL: "https://media1.tenor.com/m/hNXLU2QmnaQAAAAd/breaking-bad-walter-white.gif" },
    { text: "Haruhi Suzumiya Dance", imageURL: "https://media1.tenor.com/m/_qC15cY02NMAAAAd/anime-haruhi.gif" },
    { text: "Donald Trump", imageURL: epstein },
    { text: "Steel Ball Run", imageURL: "https://img.youtube.com/vi/jAX8xeMLdVY/maxresdefault.jpg" },
    { text: "Uma Musume", imageURL: "https://preview.redd.it/its-sad-to-know-that-haru-urara-according-to-some-news-i-v0-u6pwl7odn5of1.gif?width=498&auto=webp&s=b929e017f2e40b5d50067507eac097ca67c7c917" },
    { text: "All Might", imageURL: "https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Toshinori_Yagi_Golden_Age_Hero_Costume_%28Anime%29.png/revision/latest?cb=20250602032423" },
    { text: "You are my special", imageURL: "https://media1.tenor.com/m/6kXYuuoc_r4AAAAd/gojo-backshots.gif" },
    { text: "Chika Fujiwara Dance", imageURL: "https://media1.tenor.com/m/ZNMWudRKW3YAAAAd/fujiwara-chika-dance.gif" },
    { text: "I'll take a potato chip, and EAT IT!", imageURL: "https://media1.tenor.com/m/MEEuuRlZCdcAAAAd/death-note-chips.gif" },
    { text: "Aggressively writing in Death Note", imageURL: "https://media1.tenor.com/m/1ybUFYQpNDgAAAAd/death-note-light-yagami.gif" },
    { text: "Bocchi the Rock! solo", imageURL: "https://media1.tenor.com/m/7eszxPXzF0wAAAAd/bocchi-bocchi-the-rock.gif" },
    { text: "Jotaro vs. Dio", imageURL: "https://media1.tenor.com/m/JVb8rYQ9QKgAAAAd/jojos-bizarre-adventure-dio.gif" },
    { text: "President Seth Paras", imageURL: "https://media1.tenor.com/m/hYzJPjRmvWAAAAAd/clown.gif" },
    { text: "Naoya Zenin", imageURL: "https://media1.tenor.com/m/0ygyRijGsvgAAAAd/naoya-zenin-choso.gif" },
    { text: "", imageURL: "https://media1.tenor.com/m/6COMq6z3l5oAAAAd/bosnov-67.gif" }, // 67
    { text: "Subaru Stairs", imageURL: "https://media1.tenor.com/m/PnhcKYF8UaQAAAAd/subaru-subaru-stairs.gif" },
    { text: "Truck-kun", imageURL: "https://media1.tenor.com/m/vO-Mvo8NBDoAAAAd/truck-two-trucks.gif" },
    { text: "Running with toast in your mouth", imageURL: "https://media1.tenor.com/m/fcv9amtFLZIAAAAd/bread-lets-get-this.gif" },
    { text: "Super Saiyan", imageURL: "https://media1.tenor.com/m/bWkE0Y8JaBgAAAAd/dragon-ball-super-saiyan.gif" },
    { text: "K-ON!", imageURL: "https://media1.tenor.com/m/Iu-7SwIxyeIAAAAd/k-on.gif" },
    { text: "Wandance", imageURL: "https://media1.tenor.com/m/c01Haytznu4AAAAd/wandance.gif" },
    { text: "Pokemon Battle", imageURL: "https://media1.tenor.com/m/kbpkDdE05HQAAAAd/pikachu-pikachu-punch.gif" },
    { text: "Eren Yeager", imageURL: "https://media1.tenor.com/m/2x5dA9ViyGQAAAAd/eren-yeager-eren.gif" },
    { text: "Slam Dunk", imageURL: "https://media1.tenor.com/m/AjR81h3hNC4AAAAd/slam-dunk-anime.gif" },
    { text: "Hatsune Miku", imageURL: "https://media1.tenor.com/m/GPBKiWlGupgAAAAd/hatsune-miku-popipopiopo.gif" },
    { text: "LeBron James", imageURL: "https://media1.tenor.com/m/JuEIFPj_Xh8AAAAd/lebron-james-lebron-screaming.gif" },
    { text: "Reze choking", imageURL: "https://media1.tenor.com/m/q1dKhDQI_18AAAAd/reze-chainsaw-man.gif" },
    { text: "Polnareff pose", imageURL: "https://media1.tenor.com/m/ZmajyjtG9koAAAAd/anime-weird.gif" },
    { text: "Excalibur", imageURL: "https://media1.tenor.com/m/9i0-Kt_IzjgAAAAd/excalibur.gif" },
    { text: "Roblox /e dance", imageURL: "https://media1.tenor.com/m/qZoS-NUcxtgAAAAd/roblox-dance-roblox.gif" },
    { text: "McDonald's Worker (CS Graduate)", imageURL: "https://media1.tenor.com/m/CX0kHRxKTvQAAAAd/mcdonalds-mcdonalds-worker.gif" },
    { text: "The Bite of '87", imageURL: "https://media1.tenor.com/m/LwyPi7BbjxsAAAAd/bite-of-87.gif" },
    { text: "OH MY GAH", imageURL: "https://media1.tenor.com/m/vE8oU6hyQacAAAAd/azumanga-azumanga-daioh.gif" },
    { text: "Nezuko and Tanjiro", imageURL: "https://media1.tenor.com/m/34tUz7i1ZMQAAAAd/nezuko-kamado-tanjiro-kamado.gif" },
    { text: "", imageURL: "https://media1.tenor.com/m/KQMkIsJGQ4sAAAAd/logan-paul.gif" }, // Instantly skip...
    { text: "One Piece: Chopper Crying", imageURL: "https://media1.tenor.com/m/TGVh6fm6V5gAAAAd/one-piece-chopper.gif" },
    { text: "Gojo floating", imageURL: "https://media1.tenor.com/m/uA9NpxgqNKIAAAAd/gojo-satoru-satoru-gojo.gif" },
    { text: "Megumin explosion", imageURL: "https://media1.tenor.com/m/Oxl7m7l88FwAAAAd/megumin-konosuba.gif" },
    { text: "Ranma 1/2", imageURL: "https://media1.tenor.com/m/-yRbRmKlvYMAAAAd/ranma-remake-ranma-1-2-remake.gif" },
    { text: "Yuru Camp", imageURL: "https://media1.tenor.com/m/VJFDHCp1RDwAAAAd/yuru-camp-nadeshiko.gif" },
    { text: "Oshi no Ko stabbing scene", imageURL: "https://media1.tenor.com/m/W8MoNqFiRcoAAAAd/oshi-no-ko-meme.gif" },
    { text: "One Punch Man", imageURL: "https://media1.tenor.com/m/d-kvfg61wMYAAAAd/garou-one-punch-man.gif" },
    { text: "Omni Man", imageURL: "https://media1.tenor.com/m/7mz45qsIF0cAAAAd/think-mark-invincible.gif" },
    { text: "Mob Psycho", imageURL: "https://media1.tenor.com/m/SWWyA88XDTQAAAAd/mob-psycho100-arataka-reigen.gif" },
    { text: "Yamcha Pose", imageURL: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif" },
    { text: "Bad Apple", imageURL: "https://media1.tenor.com/m/KK_I62rBKLUAAAAd/bad-apple-manu.gif" },
    { text: "Sans Undertale", imageURL: "https://media1.tenor.com/m/vVfDb9SmtyYAAAAd/sans-undertale.gif" },
    { text: "Kaori and Kousei Duet", imageURL: "https://media1.tenor.com/m/i5ikAwHNI68AAAAd/arima-shigatsu.gif" },
    { text: "SUNNY and MARI Duet", imageURL: "https://media1.tenor.com/m/IvEVHvu9DyYAAAAd/omori-mari.gif" },
    { text: "Haikyuu: Oikawa serve", imageURL: "https://media1.tenor.com/m/4cnbV9bzaQoAAAAd/oikawa-serve.gif" },
    { text: "Fortnite Dance", imageURL: "https://media1.tenor.com/m/17pFKrJQR4AAAAAd/default-dance-fortnite.gif" },
    { text: "AOT: Eren carrying a boulder", imageURL: "https://media1.tenor.com/m/WVcW1I3B9pAAAAAd/attack-on-titan-eren-jaegar.gif" },
    { text: "AOT: Levi spin attack (good luck mfers)", imageURL: "https://media1.tenor.com/m/4Zz1huS93jAAAAAd/levi-leviii.gif" },
    { text: "among us", imageURL: "https://media1.tenor.com/m/RhUOisyz49QAAAAd/yellow-amogus.gif" },
    { text: "Sailor Moon transformation", imageURL: "https://media1.tenor.com/m/AmxlKzIKk8wAAAAd/sailor-moon-sailor-moon-s.gif" },
    { text: "Minecraft Steve", imageURL: "https://media1.tenor.com/m/NI9RELL71yMAAAAd/jack-black-minecraft.gif" },
    { text: "Blue Lock", imageURL: "https://media1.tenor.com/m/1qttzrURIgwAAAAd/rin-itoshi-rin.gif" },
    { text: "Titanic", imageURL: "https://media1.tenor.com/m/bWd0Q0uojtIAAAAd/titanic.gif" },
    { text: "Kirby inhaling", imageURL: "https://media1.tenor.com/m/-zBl3I8Hr74AAAAd/too-much-food-food-coma.gif" },
    { text: "Lucky Star", imageURL: 'https://media1.tenor.com/m/xGbzcBL9rVYAAAAd/lucky-star-intro-lucky-star.gif' },
    { text: "Kiniro Mosaic: Ayaya!", imageURL: "https://media1.tenor.com/m/DRGdjkDYpr4AAAAd/karen.gif" },
    { text: "Rikka finger spinning", imageURL: "https://media1.tenor.com/m/87yNEwupvhkAAAAd/love-chunibyo-%26-other-delusions.gif" },
    { text: "Obiwan vs. Anakin", imageURL: "https://media1.tenor.com/m/gNDWl4opO3wAAAAd/star-wars-anakin.gif" },
    { text: "Your Name", imageURL: "https://media1.tenor.com/m/kl2oUggZNk0AAAAd/you-name.gif" }
]

// const prompts = [{ text: "Your Name", imageURL: "https://media1.tenor.com/m/kl2oUggZNk0AAAAd/you-name.gif" }];

const increaseScoreBtn = document.querySelector<HTMLButtonElement>("#new-prompt");
const skipRoundBtn = document.querySelector<HTMLButtonElement>("#skip-round");
const resetScoreBtn = document.querySelector<HTMLButtonElement>("#reset-score");
if (increaseScoreBtn === null || skipRoundBtn === null || resetScoreBtn === null) {
    throw new Error("Error: When initializing HTML, one of the button elements was null.");
}

increaseScoreBtn.addEventListener("click", increaseScore);
skipRoundBtn.addEventListener("click", newPrompt);
resetScoreBtn.addEventListener("click", resetScore);

function increaseScore(): void {
    score++;
    printScore();
    newPrompt();
}

function resetScore() {
    score = 0;
    printScore();

    const promptElement = document.querySelector<HTMLHeadingElement>("#prompt");
    const imageElement = document.querySelector<HTMLImageElement>("#image")
    if (promptElement === null || imageElement === null) {
        throw new Error("Error: Missing element when switching prompts.");
    }
    promptElement.innerHTML = `Waiting for game to start...`;
    imageElement.hidden = true;
}

function printScore() {
    const scoreboard = document.querySelector("#scoreboard");
    if (scoreboard === null) {
        throw new Error("Error: scoreboard missing");
    }
    scoreboard.innerHTML = `Current score: ${score}`;
}

function newPrompt(): void {
    const promptElement = document.querySelector<HTMLHeadingElement>("#prompt");
    const imageElement = document.querySelector<HTMLImageElement>("#image")
    if (promptElement === null || imageElement === null) {
        throw new Error("Error: Missing element when switching prompts.");
    }

    const index = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[index];
    prompts.splice(index, 1); // Prevent repeat prompts.

    promptElement.innerHTML = `Prompt: ${randomPrompt.text}`

    // If they somehow do every single prompt, the last one is Mr. Balls.
    if (prompts.length === 0) {
        promptElement.innerHTML = `MR. BALLS`;
        imageElement.src = "https://cdn.discordapp.com/attachments/1484573985885786112/1490189427555827892/mr-balls-cat.png?ex=69d3268d&is=69d1d50d&hm=8112043b084e62c3be85fdcbd5f18742fd3f18c0ccc9c80e6447d2025cb0d0b9";
        imageElement.hidden = false;
        return;
    }

    if (randomPrompt.imageURL) {
        imageElement.src = randomPrompt.imageURL
        imageElement.hidden = false;
    } else {
        imageElement.hidden = true;
    }
}
