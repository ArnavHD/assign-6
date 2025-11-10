// button addEventListener

document.getElementById("btn-login")
.addEventListener('click',function (event){
    event.preventDefault();
    const input_1 = document.getElementById("input1").value;
    const input_2 = document.getElementById("input2").value;
    const convertedInput2 = parseInt(input_2);
    console.log(convertedInput2);
    
    if(convertedInput2 === 123456 && input_1 === "Elon"){
        document.getElementById("nav-container").classList.remove("hidden");
        document.getElementById("hero-section").classList.add("hidden");
        document.getElementById("footer-container").classList.remove("hidden");
        document.getElementById("card-container-id").classList.remove("hidden");
        document.getElementById("learn-section").classList.remove("hidden");
    }
    else{
        alert("The Account name or the Passord is wrong");
    }
})

function removeActiveClass(){
    const activeBtn = document.getElementsByClassName("active");
    for(let btn of activeBtn){
        btn.classList.remove("active");
    }
}




// const img = document.getElementsByClassName("my-img");

// img.addEventListener("mouseover", ()=>{
//     img.src = "https://img.icons8.com/?size=100&id=yZ5EVwBq6KA6&format=png&color=FFFFFF"
// });
// img.addEventListener("mouseout", () => {
//     img.src = "https://img.icons8.com/?size=100&id=9480&format=png&color=422AD5"
// });

// load buttons

// {
//     "status": true,
//         "message": "successfully fetched all the levels data",
//             "data": [
//                 {
//                     "id": 101,
//                     "level_no": 1,
//                     "lessonName": "Basic Vocabulary"
//                 },
//                 {
//                     "id": 102,
//                     "level_no": 2,
//                     "lessonName": "Everyday Words"
//                 },
//                 {
//                     "id": 103,
//                     "level_no": 3,
//                     "lessonName": "Intermediate Vocabulary"
//                 },
//                 {
//                     "id": 104,
//                     "level_no": 4,
//                     "lessonName": "Advanced Vocabulary"
//                 },
//                 {
//                     "id": 105,
//                     "level_no": 5,
//                     "lessonName": "Complex Words"
//                 },
//                 {
//                     "id": 106,
//                     "level_no": 6,
//                     "lessonName": "Mastering Vocabulary"
//                 },
//                 {
//                     "id": 107,
//                     "level_no": 7,
//                     "lessonName": "Mastering Vocabulary"
//                 }
//             ]
// }

// load funcitons

function loadButtons(){
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(response=> response.json())
    .then(data => displayButtons(data.data));
}

function loadWords(level_no, btn_id){
    fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
    .then(res => res.json())
    .then(data=> {
        removeActiveClass();
        const btnClicked = document.getElementById(`btn-${btn_id}`);
        btnClicked.classList.add("active");
        const iconCicked = 
        // console.log(btnClicked);
        displayWords(data.data)
    });
}

// {
//     "status": true,
//         "message": "successfully fetched all words with a specefic level",
//             "data": [
//                 {
//                     "id": 4,
//                     "level": 5,
//                     "word": "Diligent",
//                     "meaning": "পরিশ্রমী",
//                     "pronunciation": "ডিলিজেন্ট"
//                 },
//                 {
//                     "id": 6,
//                     "level": 5,
//                     "word": "Fascinate",
//                     "meaning": "মুগ্ধ করা",
//                     "pronunciation": "ফ্যাসিনেট"
//                 },
//                 {
//                     "id": 9,
//                     "level": 5,
//                     "word": "Illuminate",
//                     "meaning": "আলোকিত করা",
//                     "pronunciation": "ইলুমিনেট"
//                 },
//                 {
//                     "id": 15,
//                     "level": 5,
//                     "word": "Obstinate",
//                     "meaning": "একগুঁয়ে",
//                     "pronunciation": "অবস্টিনেট"
//                 },
//                 {
//                     "id": 16,
//                     "level": 5,
//                     "word": "Placid",
//                     "meaning": "শান্ত",
//                     "pronunciation": "প্ল্যাসিড"
//                 },
//                 {
//                     "id": 23,
//                     "level": 5,
//                     "word": "Wholesome",
//                     "meaning": "পুষ্টিকর / স্বাস্থ্যকর",
//                     "pronunciation": "হোউলসাম"
//                 },
//                 {
//                     "id": 25,
//                     "level": 5,
//                     "word": "Zealous",
//                     "meaning": "উত্সাহী",
//                     "pronunciation": "জেলাস"
//                 },
//                 {
//                     "id": 29,
//                     "level": 5,
//                     "word": "Dwindle",
//                     "meaning": "হ্রাস পাওয়া",
//                     "pronunciation": "ডউইন্ডল"
//                 },
//                 {
//                     "id": 34,
//                     "level": 5,
//                     "word": "Illuminate",
//                     "meaning": null,
//                     "pronunciation": "ইলুমিনেট"
//                 },
//                 {
//                     "id": 40,
//                     "level": 5,
//                     "word": "Obscure",
//                     "meaning": "অস্পষ্ট / অজানা",
//                     "pronunciation": "অবস্কিউর"
//                 },
//                 {
//                     "id": 43,
//                     "level": 5,
//                     "word": "Radiant",
//                     "meaning": "উজ্জ্বল / দীপ্তিময়",
//                     "pronunciation": "রেডিয়ান্ট"
//                 },
//                 {
//                     "id": 46,
//                     "level": 5,
//                     "word": "Unravel",
//                     "meaning": "উন্মোচন করা / খোলাসা করা",
//                     "pronunciation": "আনর‍্যাভেল"
//                 },
//                 {
//                     "id": 47,
//                     "level": 5,
//                     "word": "Venture",
//                     "meaning": "ঝুঁকিপূর্ণ কাজ / সাহসী প্রচেষ্টা",
//                     "pronunciation": "ভেনচার"
//                 },
//                 {
//                     "id": 50,
//                     "level": 5,
//                     "word": "Zephyr",
//                     "meaning": "মৃদু বাতাস / হালকা হাওয়া",
//                     "pronunciation": "জেফার"
//                 },
//                 {
//                     "id": 51,
//                     "level": 5,
//                     "word": "Adorn",
//                     "meaning": "সাজানো / অলংকৃত করা",
//                     "pronunciation": "অ্যাডর্ন"
//                 },
//                 {
//                     "id": 55,
//                     "level": 5,
//                     "word": "Eloquent",
//                     "meaning": "বাকপটু / চমৎকার বক্তৃতা দিতে সক্ষম",
//                     "pronunciation": "এলোকোয়েন্ট"
//                 },
//                 {
//                     "id": 58,
//                     "level": 5,
//                     "word": "Hinder",
//                     "meaning": "বাধা দেওয়া / বিলম্ব ঘটানো",
//                     "pronunciation": "হিন্দার"
//                 },
//                 {
//                     "id": 62,
//                     "level": 5,
//                     "word": "Linger",
//                     "meaning": "অবশিষ্ট থাকা / বিলম্ব করা",
//                     "pronunciation": "লিঙ্গার"
//                 },
//                 {
//                     "id": 64,
//                     "level": 5,
//                     "word": "Notorious",
//                     "meaning": "কুখ্যাত / বদনামি",
//                     "pronunciation": "নোটোরিয়াস"
//                 },
//                 {
//                     "id": 66,
//                     "level": 5,
//                     "word": "Pristine",
//                     "meaning": "অকৃত্রিম / সম্পূর্ণ বিশুদ্ধ",
//                     "pronunciation": "প্রিস্টিন"
//                 },
//                 {
//                     "id": 68,
//                     "level": 5,
//                     "word": "Reckless",
//                     "meaning": "উন্মত্ত / অবিবেচক",
//                     "pronunciation": "রেকলেস"
//                 },
//                 {
//                     "id": 111,
//                     "level": 5,
//                     "word": "Accomplish",
//                     "meaning": "সম্পন্ন করা",
//                     "pronunciation": "অ্যাকমপ্লিশ"
//                 },
//                 {
//                     "id": 113,
//                     "level": 5,
//                     "word": "Cautious",
//                     "meaning": "সতর্ক",
//                     "pronunciation": "কাউশাস"
//                 },
//                 {
//                     "id": 115,
//                     "level": 5,
//                     "word": "Eloquent",
//                     "meaning": "প্রभावশালী",
//                     "pronunciation": "এলোকুয়েন্ট"
//                 },
//                 {
//                     "id": 117,
//                     "level": 5,
//                     "word": "Hesitate",
//                     "meaning": "দ্বিধা করা",
//                     "pronunciation": "হেসিটেট"
//                 },
//                 {
//                     "id": 119,
//                     "level": 5,
//                     "word": "Judicious",
//                     "meaning": "বিচক্ষণ",
//                     "pronunciation": "জুডিশিয়াস"
//                 },
//                 {
//                     "id": 121,
//                     "level": 5,
//                     "word": "Luminous",
//                     "meaning": "উজ্জ্বল",
//                     "pronunciation": "লুমিনাস"
//                 },
//                 {
//                     "id": 123,
//                     "level": 5,
//                     "word": "Nurture",
//                     "meaning": "পালন করা",
//                     "pronunciation": "নার্চার"
//                 },
//                 {
//                     "id": 125,
//                     "level": 5,
//                     "word": "Perplexed",
//                     "meaning": "ভ্ব্রান্ত",
//                     "pronunciation": "পারপ্লেক্সড"
//                 },
//                 {
//                     "id": 127,
//                     "level": 5,
//                     "word": "Resilient",
//                     "meaning": "অবিচলিত",
//                     "pronunciation": "রেজিলিয়েন্ট"
//                 },
//                 {
//                     "id": 129,
//                     "level": 5,
//                     "word": "Thwart",
//                     "meaning": "বাধা সৃষ্টি করা",
//                     "pronunciation": "থওর্ত"
//                 },
//                 {
//                     "id": 131,
//                     "level": 5,
//                     "word": "Absurd",
//                     "meaning": "অকেশনীয়",
//                     "pronunciation": "অ্যাবসার্ড"
//                 },
//                 {
//                     "id": 132,
//                     "level": 5,
//                     "word": "Benevolence",
//                     "meaning": "দয়া",
//                     "pronunciation": "বিনেভোলেন্স"
//                 },
//                 {
//                     "id": 133,
//                     "level": 5,
//                     "word": "Camaraderie",
//                     "meaning": null,
//                     "pronunciation": "ক্যামারাডারি"
//                 },
//                 {
//                     "id": 134,
//                     "level": 5,
//                     "word": "Dissonance",
//                     "meaning": "অসঙ্গতি",
//                     "pronunciation": "ডিসোন্যান্স"
//                 },
//                 {
//                     "id": 135,
//                     "level": 5,
//                     "word": "Euphoria",
//                     "meaning": "আনন্দের অনুভূতি",
//                     "pronunciation": "ইউফোরিয়া"
//                 },
//                 {
//                     "id": 136,
//                     "level": 5,
//                     "word": "Finesse",
//                     "meaning": "দক্ষতা",
//                     "pronunciation": "ফিনেস"
//                 },
//                 {
//                     "id": 137,
//                     "level": 5,
//                     "word": "Grievance",
//                     "meaning": "অভিযোগ",
//                     "pronunciation": "গ্রিভেন্স"
//                 },
//                 {
//                     "id": 138,
//                     "level": 5,
//                     "word": "Impeccable",
//                     "meaning": "অকৃতদোষ",
//                     "pronunciation": "ইমপেকেবল"
//                 },
//                 {
//                     "id": 139,
//                     "level": 5,
//                     "word": "Juxtapose",
//                     "meaning": "অংশবিশেষ তুলনা করা",
//                     "pronunciation": "জাক্সটাপোজ"
//                 },
//                 {
//                     "id": 140,
//                     "level": 5,
//                     "word": "Kaleidoscope",
//                     "meaning": "রঙিন কাচের গ্লাস",
//                     "pronunciation": "ক্যালাইডোস্কোপ"
//                 },
//                 {
//                     "id": 141,
//                     "level": 5,
//                     "word": "Lethargic",
//                     "meaning": "অসুস্থ বা নিষ্ক্রিয়",
//                     "pronunciation": "লিথারজিক"
//                 },
//                 {
//                     "id": 142,
//                     "level": 5,
//                     "word": "Mitigate",
//                     "meaning": "কমানো",
//                     "pronunciation": "মিটিগেট"
//                 },
//                 {
//                     "id": 143,
//                     "level": 5,
//                     "word": "Nebulous",
//                     "meaning": "অস্পষ্ট",
//                     "pronunciation": "নেবিউলাস"
//                 },
//                 {
//                     "id": 144,
//                     "level": 5,
//                     "word": "Ostentatious",
//                     "meaning": "প্রদর্শনমূলক",
//                     "pronunciation": "অস্টেন্টেশন"
//                 },
//                 {
//                     "id": 145,
//                     "level": 5,
//                     "word": "Pragmatic",
//                     "meaning": "ব্যবহারিক",
//                     "pronunciation": "প্রাগম্যাটিক"
//                 },
//                 {
//                     "id": 146,
//                     "level": 5,
//                     "word": "Quixotic",
//                     "meaning": "অসম্ভব ও আবেগপ্রবণ",
//                     "pronunciation": "কুইক্সটিক"
//                 },
//                 {
//                     "id": 147,
//                     "level": 5,
//                     "word": "Recalcitrant",
//                     "meaning": "অধিকারী নয় এমন",
//                     "pronunciation": "রিক্যালসিট্রান্ট"
//                 },
//                 {
//                     "id": 148,
//                     "level": 5,
//                     "word": "Supercilious",
//                     "meaning": "অহঙ্কারী",
//                     "pronunciation": "সুপারসিলিয়াস"
//                 },
//                 {
//                     "id": 149,
//                     "level": 5,
//                     "word": "Tranquil",
//                     "meaning": "শান্ত",
//                     "pronunciation": "ট্রাঙ্কুইল"
//                 },
//                 {
//                     "id": 150,
//                     "level": 5,
//                     "word": "Vindicate",
//                     "meaning": "পাল্টানো",
//                     "pronunciation": "ভিন্ডিকেট"
//                 }
//             ]
// }


// display funcitons

function displayButtons(buttons){
    const btnContainer = document.getElementById("btn-container");
    for(let button of buttons){
        // console.log("level_no",button.level_no);
        // console.log("buttonid",button.id);
        

        const divBtn = document.createElement("div");

        divBtn.innerHTML = `
        <button id= "btn-${button.id}" onclick="loadWords(${button.level_no}, ${button.id})" class="btn btn-outline btn-primary btn-hover border-[#422AD5]"><svg id="icon-${button.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-6  icon ">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg><span class = "btn-text">Lesson - ${button.level_no}</span></button>
        `;
        
        btnContainer.appendChild(divBtn);
        

    }
}






function displayWords(arrayOfObj){
    const cardContainer = document.getElementById("card-container");

    cardContainer.innerHTML = "";

    if(arrayOfObj.length === 0){
        

        cardContainer.innerHTML = `
        <div class="mx-32 flex flex-col justify-center items-center mt-10 col-span-full">
            <div>
                <img src="assets/alert-error.png" alt="">
            </div>
            <div class="text-center">
                <p class="text-2xl text-[#79716b] mb-4">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="text-4xl">নেক্সট Lesson এ যান</h2>
            </div>
        </div>
        `;
        return;
    }

    for(let lvl of arrayOfObj){
        // console.log(lvl.word);

        const divCard = document.createElement("div");

        // if(arrayOfObj)

        divCard.innerHTML = `
        
        <div class="card bg-base-100 shadow-lg mb-16">
            <div class="card-body items-center">
                <h2 class="card-title font-bold text-3xl inter">${lvl.word}</h2>
                <p class="font-bold text-sm inter">Meaning/Pronouciation</p>
                <h2 class="font-bold text-3xl">${lvl.meaning}</h2>
                <div class="flex justify-between w-full">
                    <button class="btn">
                        <img class="w-5 h-5"
                            src="https://img.icons8.com/?size=100&id=yZ5EVwBq6KA6&format=png&color=000000" alt="">
                    </button>
                    <button class="btn">
                        <img class="w-5 h-5"
                            src="https://img.icons8.com/?size=100&id=1lJKdzgvi4pT&format=png&color=000000" alt="">
                    </button>
                </div>
            </div>
        
        `;
        cardContainer.appendChild(divCard);
    }

}



loadButtons();
// loadWords();


