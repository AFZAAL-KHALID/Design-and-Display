var tl = gsap.timeline();




function intro() {
    
    var introH1 = document.querySelectorAll(".intro h1, .intro h1 span");
    tl.from(introH1,{
      
        opacity:0,
        stagger:0.4,
        duration:1,
        ease: "easeInSine"
    })
    tl.to(".dot",{
    
        scale:210,
        transformOrigin:"50% 50%" ,
        duration:1.5,
        ease: "easeInSine",
        backgroundColor:"#f2e9e4"
    })
    tl.to(".intro",{
    
        delay:0.1,
        visibility: "hidden",
        top:-100
    })
};
// intro();





function slideMenu() {
    
    let menuIcon = document.querySelector(".ri-menu-fill");
    let slideMenu = document.querySelector(".slideMenu");
    // let crossIcon = ;
    var count = 0;
    menuIcon.addEventListener("click", function (e) {
    if (count === 0) {
        slideMenu.style.transform = "scale(1)";
        slideMenu.style.transformOrigin = "100% 0%";
        menuIcon.classList.contains("ri-menu-fill");
        menuIcon.classList.remove("ri-menu-fill");
        menuIcon.classList.add("ri-close-fill");
        count = 1;
    }
    else if(count === 1){
        slideMenu.style.transform = "scale(0)";
        menuIcon.classList.contains("ri-close-fill");
        menuIcon.classList.remove("ri-close-fill");
        menuIcon.classList.add("ri-menu-fill");
        count = 0;
    }
    })
};
slideMenu();





function searchBoxExpand() {
    
    var searchInput = document.querySelector(".searchInput");
    var searchSpan = document.querySelector(".search span");
    var inputImage = document.querySelector(".inputImage");
    searchInput.addEventListener("focus", function () {
        searchSpan.style.display = "none";
        inputImage.style.display = "none";
        searchInput.style.width = "90%";
        
    })
    searchInput.addEventListener("blur", function () {
        searchInput.style.width = "60%";
        searchSpan.style.display = "block";
        inputImage.style.display = "block";
    })
};
searchBoxExpand();





function startsShins() {
    
    let stars = document.querySelector(".stars");
    setInterval(() => {
        let myh1 = document.createElement("h1");
        myh1.innerHTML = ".";
        myh1.classList.add("shine");
        
    
        var marginleft = Math.floor(Math.random()*100);
        myh1.style.marginLeft = `${marginleft}%`
        var margintop = Math.floor(Math.random()*80);
        myh1.style.marginTop = `${margintop}%`
        var textSize = Math.floor(Math.random()*8);
        myh1.style.fontSize = `${textSize}rem`;
        stars.appendChild(myh1);
    
        setTimeout(() => {
            myh1.style.display = "none";
        }, 1500);
    
    }, 30);
};
// startsShins();




function categorylist(){
    
    var ClickForSelect = document.querySelector(".ClickForSelect");
    var iconDOWN = document.querySelector(".ri-arrow-down-s-line");
    var ListUL = document.querySelector(".ListUL");
    var liofListUL = document.querySelectorAll(".ListUL li");
    let count = 0;
    
    ClickForSelect.addEventListener("click", function (e) {
        if (e.target === ClickForSelect || e.target === iconDOWN) {
            
            if (count === 0) {
                ListUL.style.transform = "scale(1)";
                iconDOWN.style.transform = "rotate(180deg)";
                count = 1;
          
       
    
            } else {
                ListUL.style.transform = "scale(0)";
                iconDOWN.style.transform = "rotate(0deg)";
                count = 0;
            }
        }
        
    });
};
categorylist();


function cards() {
    
    tl.from(".firstCard, .secondCard", {
        opacity:0,
        stagger:0.3,
        ease: "Power2.easeOut",
        scrollTrigger:{
            trigger:".cardsSection",
            scroller:"body",
            start:"-20%, 50%",
            end:"8% 50%",
            // markers:true,
            scrub:3,
    }
    })
};

cards();


function category() {
    
    var opetions = document.querySelector(".opetions");
    var ListUL =   document.querySelector(".ListUL")
    var category = "";
    var newli = "";
    
var theme =[
    { cate: "School Start"} , { cate: "ethnic"},{ cate: "mr man"},{ cate: "monotones"},{ cate: "check and stripe"},{ cate: "geomerical"},{ cate: "bold and bloom"},{ cate: "dear romance"},{ cate: "blue haze"},{ cate: "jaipur"},{ cate: "check and stripe"},{ cate: "geomatical"},
]

theme.forEach(element => {
    var newCategory = ` <h1 class="singleCategory w-auto inline-block     text-[2rem] capitalize p-4 rounded-full bg-[#f28482] cursor-pointer hover:shadow-xl hover:bg-[#f56765]">${element.cate}</h1>`;
    category += newCategory;
    opetions.innerHTML = category
});
theme.forEach(li => {
    newli += `<li class="liOfListUL   m-[0.5rem]  p-[0.5] bg-white text-gray-600 hover:border-b-2 hover:text-[#FA6C63] border-gray-800">${li.cate}</li>`;
    ListUL.innerHTML = newli
});


function showProduct() {
    var allProduts = document.querySelector(".allProduts");
    var show = "";
    var myProducts = [
        {
            name: "AUTUMN",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/AUTUMN.jpg"` ,
            price: "786",
        },
        {
            name: "BEACH TREE",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/BEACH TREE.jpg"` ,
            price: "786",
        },
        {
            name: "BOLD",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/BOLD.jpg"` ,
            price: "786",
        },
        {
            name: "BOTANICAL",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/BOTANICAL.jpg"` ,
            price: "786",
        },
        {
            name: "BRIGHT ON WHITE",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/BRIGHT ON WHITE.jpg"` ,
            price: "786",
        },
        {
            name: "COQULICOT",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/COQULICOT.jpg"` ,
            price: "786",
        },
        {
            name: "CORIANDER",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/CORIANDER.jpg"` ,
            price: "786",
        },
        {
            name: "EXOTIC",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/EXOTIC.jpg"` ,
            price: "786",
        },
        {
            name: "HELLEN",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/HELLEN.jpg"` ,
            price: "786",
        },
        {
            name: "KITARI",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/KITARI.jpg"` ,
            price: "786",
        },
        {
            name: "LIBERTY 5",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/LIBERTY 5.jpg"` ,
            price: "786",
        },
        {
            name: "OSLO",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/OSLO.jpg"` ,
            price: "786",
        },
        {
            name: "page 17",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/page 17.jpg"` ,
            price: "786",
        },
        {
            name: "page 18",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/page 18.jpg"` ,
            price: "786",
        },
        {
            name: "STANCIL",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/STANCIL.jpg"` ,
            price: "786",
        },
        {
            name: "SWEET SANDRA",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/SWEET SANDRA.jpg"` ,
            price: "786",
        },
        {
            name: "TOKYO",
            theme: "boldandbloom",
            Image: `Src="./assets/products/boldandbloom/TOKYO.jpg"` ,
            price: "786",
        },
        {
            name: "TWIGY",
            theme: "boldandbloom",
            Image: `src="./assets/products/boldandbloom/TWIGY.jpg"` ,
            price: "786",
        },
        // second theme
        {
            name: "ALL OVER-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/ALL OVER-2.jpg"` ,
            price: "786",
        },
        {
            name: "ALL OVER",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/ALL OVER.jpg"` ,
            price: "786",
        },
        {
            name: "BATIK 2-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BATIK 2-2.jpg"` ,
            price: "786",
        },
        {
            name: "BATIK 2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BATIK 2.jpg"` ,
            price: "786",
        },
        {
            name: "BEVERLY-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BEVERLY-2.jpg"` ,
            price: "786",
        },
        {
            name: "BEVERLY",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BEVERLY.jpg"` ,
            price: "786",
        },
        {
            name: "CHECKER-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/CHECKER-2.jpg"` ,
            price: "786",
        },
        {
            name: "CHECKER",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/CHECKER.jpg"` ,
            price: "786",
        },
        {
            name: "DREAMS-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/DREAMS-2.jpg"` ,
            price: "786",
        },
        {
            name: "DREAMS",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/DREAMS.jpg"` ,
            price: "786",
        },
        {
            name: "FLOWER WHITE-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/FLOWER WHITE-2.jpg"` ,
            price: "786",
        },
        {
            name: "FLOWER WHITE",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/FLOWER WHITE.jpg"` ,
            price: "786",
        },
        {
            name: "FRAGRENCE",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/FRAGRENCE.jpg"` ,
            price: "786",
        },
        {
            name: "GEOMETRY-2",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/GEOMETRY-2.jpg"` ,
            price: "786",
        },
        {
            name: "GEOMETRY",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/GEOMETRY.jpg"` ,
            price: "786",
        },
        {
            name: "GHINGHAM",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/GHINGHAM.jpg"` ,
            price: "786",
        },
        {
            name: "HAND PAINTED",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/HAND PAINTED.jpg"` ,
            price: "786",
        },
        {
            name: "JAIPUR (4)",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/JAIPUR (4).jpg"` ,
            price: "786",
        },
        {
            name: "KINGDOM",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1//KINGDOM.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: "BARIES",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/BARIES.jpg"` ,
            price: "786",
        },
        {
            name: "BATIK 2",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/BATIK 2.jpg"` ,
            price: "786",
        },
        {
            name: "CHECKER",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/CHECKER.jpg"` ,
            price: "786",
        },
        {
            name: "DIAMOND",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/DIAMOND.jpg"` ,
            price: "786",
        },
        {
            name: "GIRL DRAWING",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/GIRL DRAWING.jpg"` ,
            price: "786",
        },

        {
            name: "KONIA",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/KONIA.jpg"` ,
            price: "786",
        },
        {
            name: "HUDSON",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/HUDSON.jpg"` ,
            price: "786",
        },
        {
            name: "LAUREN",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/LAUREN.jpg"` ,
            price: "786",
        },
        {
            name: "OCEAN 2",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/OCEAN 2.jpg"` ,
            price: "786",
        },
        {
            name: "page 1",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/page 1.jpg"` ,
            price: "786",
        },
        {
            name: "page 2",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/page 2.jpg"` ,
            price: "786",
        },
        {
            name: "ROMANCE",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/ROMANCE.jpg"` ,
            price: "786",
        },
        {
            name: "SABARO",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/SABARO.jpg"` ,
            price: "786",
        },
        {
            name: "SPACE AGE",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/SPACE AGE.jpg"` ,
            price: "786",
        },
        {
            name: "STITCHES",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/STITCHES.jpg"` ,
            price: "786",
        },
        {
            name: "STRIPE MIX",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/STRIPE MIX.jpg"` ,
            price: "786",
        },
        {
            name: "TONAL FLOWERS",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/TONAL FLOWERS.jpg"` ,
            price: "786",
        },
        {
            name: "TWIGY",
            theme: "bluehazemail2",
            Image: `src="./assets/products/themebluehazemail2/TWIGY.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: "adamjee map",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/adamjee map.jpg"` ,
            price: "786",
        },
        {
            name: "AROMA",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/AROMA.jpg"` ,
            price: "786",
        },
        {
            name: "BLOMING",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/BLOMING.jpg""` ,
            price: "786",
        },
        {
            name: "BOTANICAL 2",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/BOTANICAL 2.jpg"` ,
            price: "786",
        },
        {
            name: "BRIGHT AND BLACK",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/BRIGHT AND BLACK.jpg"` ,
            price: "786",
        },
        {
            name: "DAMASK",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/DAMASK.jpg"` ,
            price: "786",
        },
        {
            name: "FLORIDA",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/FLORIDA.jpg"` ,
            price: "786",
        },
        {
            name: "GIRLS GARDEN",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/GIRLS GARDEN.jpg"` ,
            price: "786",
        },
        {
            name: "IRIS",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/IRIS.jpg"` ,
            price: "786",
        },
        {
            name: "LAURA",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/LAURA.jpg"` ,
            price: "786",
        },
        {
            name: "page 17",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/page 17.jpg"` ,
            price: "786",
        },
        {
            name: "page 18",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/page 18.jpg"` ,
            price: "786",
        },
        {
            name: "POP FLOWER",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/POP FLOWER.jpg"` ,
            price: "786",
        },
        {
            name: "TIBET",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/TIBET.jpg"` ,
            price: "786",
        },
        {
            name: "TROPIC LEAVES",
            theme: "boldandbloommail2",
            Image: `src="./assets/products/themeboldandbloommail2/TROPIC LEAVES.jpg"` ,
            price: "786",
        },
        // theem change
        {
            name: "BEACH CHECK",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/BEACH CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "BEACH CHECK",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/BEACH CHECK.jpg "` ,
            price: "786",
        },
        {
            name: "BEACH STP",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/BEACH STP.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 3",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/BLOCK PRINT 3.jpg "` ,
            price: "786",
        },
        {
            name: "BUFFALO CHECK",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/BUFFALO CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "CHECK 16",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/CHECK 16.jpg"` ,
            price: "786",
        },
        {
            name: "CHECK 20",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/CHECK 20.jpg"` ,
            price: "786",
        },
        {
            name: "CHECK 21",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/CHECK 21.jpg "` ,
            price: "786",
        },
        {
            name: "CHECK 25",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/CHECK 25.jpg"` ,
            price: "786",
        },
        {
            name: "CHECK 64",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/CHECK 64.jpg "` ,
            price: "786",
        },
        {
            name: "CHECK FRESH",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/CHECK FRESH.jpg"` ,
            price: "786",
        },
        {
            name: "GHINGHAM",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/GHINGHAM.jpg"` ,
            price: "786",
        },
        {
            name: "GOLD CHECK",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/GOLD CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "GYPSY STRIPE",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/GYPSY STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "LEE CHECK",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/LEE CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "MR MARK",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/MR MARK.jpg "` ,
            price: "786",
        },
        {
            name: "page 5 ",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/page 5.jpg "` ,
            price: "786",
        },
        {
            name: " page 6",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/page 6.jpg"` ,
            price: "786",
        },
        {
            name: "STITCH STRIPE ",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/STITCH STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "STRING CHECK",
            theme: "checkandstripe",
            Image: `src="./assets/products/themecheckandstripe/STRING CHECK.jpg "` ,
            price: "786",
        },
        {
            name: "STRIPE 1",
            theme: "checkandstripe",
            Image: `src=" ./assets/products/themecheckandstripe/STRIPE 1.jpg"` ,
            price: "786",
        },
// theme change

        {
            name: "AROMA",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/AROMA.jpg"` ,
            price: "786",
        },
        {
            name: "BIRDS 2 ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/BIRDS 2.jpg "` ,
            price: "786",
        },
        {
            name: " CRISMA",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/CRISMA.jpg"` ,
            price: "786",
        },
        {
            name: "DALIA ",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/DALIA.jpg"` ,
            price: "786",
        },
        {
            name: "ELIZABETH ",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/ELIZABETH.jpg"` ,
            price: "786",
        },
        {
            name: "GLIMPS ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/GLIMPS.jpg "` ,
            price: "786",
        },
        {
            name: "HOME SWEET HOME ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/HOME SWEET HOME.jpg "` ,
            price: "786",
        },
        {
            name: "KIMONO ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/KIMONO.jpg "` ,
            price: "786",
        },
        {
            name: "LACE ROSE ",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/LACE ROSE.jpg"` ,
            price: "786",
        },
        {
            name: "LIBERTY 11 ",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/LIBERTY 11.jpg"` ,
            price: "786",
        },
        {
            name: " LIBERTY 2",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/LIBERTY 2.jpg "` ,
            price: "786",
        },
        {
            name: "MARRY",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/MARRY.jpg "` ,
            price: "786",
        },
        {
            name: "MINI ROSE ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/MINI ROSE.jpg "` ,
            price: "786",
        },
        {
            name: "page 3",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/page 3.jpg "` ,
            price: "786",
        },
        {
            name: "page 4",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/page 4.jpg "` ,
            price: "786",
        },
        {
            name: "PARK",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/PARK.jpg"` ,
            price: "786",
        },
        {
            name: "SCARLET ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/SCARLET.jpg"` ,
            price: "786",
        },
     
        {
            name: "TEXTURE 2",
            theme: "dearromancemail1",
            Image: `src=" ./assets/products/themedearromancemail1/TEXTURE 2.jpg"` ,
            price: "786",
        },
        {
            name: "VINTAGE FLOWERS ",
            theme: "dearromancemail1",
            Image: `src="./assets/products/themedearromancemail1/VINTAGE FLOWERS.jpg "` ,
            price: "786",
          },
        //   theme change

        {
            name: "AGATHA ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/AGATHA.jpg "` ,
            price: "786",
          },

        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
        {
            name: " ",
            theme: "dearromancemail2 ",
            Image: `src=" "` ,
            price: "786",
          },
    ];

myProducts.forEach(prod => {
    show += ` <div class="productDetails  relative flex-shrink-0 w-[24rem] sm:w-[22rem] h-[40rem] font-sans uppercase font-bold p-2 text-[2rem] sm:text-[1.5vw] bg-[#f2e9e4] flex gap-2 flex-col justify-around items-center hover:border-gray-700 hover:border-[3px] hover:shadow-2xl">
    <span class="material-symbols-outlined absolute right-0 top-0 cursor-pointer ">pan_zoom</span>
    <h1 class="productName capitalize font-bold text-[2.5rem] sm:text-[1.5vw]">${prod.name}</h1>
    <img ${prod.Image}  class="productImage  w-[98%] m-3">
    <div class="line    w-[85%] h-[2px] bg-gray-500/30"></div>
    <h2 class="price ">$${prod.price}</h2>
    <button class="addtoCart    w-full p-2 text-white  bg-gray-600 hover:bg-gray-700 rounded-md font-semibold">Add</button>
</div>`


allProduts.innerHTML = show;

// expand product image
var blackshadow = document.querySelector(".blackshadow");
var productDetails = document.querySelectorAll(".productDetails");
var ExpandThis = document.querySelector(".ExpandThis");

var blackVariable = "";
var allExpands = Array.from(productDetails);

allExpands.forEach(singleExpand => {
    singleExpand.addEventListener("click", function (e) {
      if (e.target.classList.contains("material-symbols-outlined")) {
        blackshadow.style.transform = "scale(1)";
        // console.log();
        ExpandThis.src = `${singleExpand.children[2].src}`;
        }
    })
});

});

};
showProduct();
var blackshadow = document.querySelector(".blackshadow");
var closeProduct = document.querySelector(".fixedToExpand span");
closeProduct.addEventListener("click", function () {
    blackshadow.style.transform = "scale(0)";
})
}
category()





