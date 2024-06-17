// pres     Ctrl + k + 0     (clean view)

var tl = gsap.timeline();




function bringTOP() {
    let bringTOP = document.querySelector(".bringTOP")
window.addEventListener("scroll", function (e) {
    if(window.scrollY > 100){
        bringTOP.style.opacity = 1;
    }else{
        bringTOP.style.opacity = 0;
    };
});
 
let upimages = document.querySelector(".upimages");
let downimages = document.querySelector(".downimages");

if (upimages && downimages) { 
    window.addEventListener("scroll", function(){
        if(window.scrollY >= 600 && window.scrollY <= 1350){
            upimages.style.opacity = 1;
            downimages.style.opacity = 1;
        } else {
            upimages.style.opacity = 0;
            downimages.style.opacity = 0;
        }
    });
}

};
bringTOP();




function intro() {
    
    var introH1 = document.querySelectorAll(".intro h1, .intro h1 span");
    tl.from(introH1,{
      
        opacity:0,
        stagger:0.4,
        duration:1,
        ease: "easeInSine"
    })
    tl.to(".dot",{
    
        scale:250,
        transformOrigin:"50% 50%" ,
        duration:1.5,
        ease: "easeInSine",
    })
    tl.to(".intro",{
    
        delay:0.1,
        visibility: "hidden",
        top:-100
    })
};
// intro();




// function scrollToContainer() {
//    let bringTOP = document.querySelector(".bringTOP");
//     bringTOP.addEventListener("click", function () {
//         console.log(2);
//         bringTOP.scrollIntoView({ behavior: 'smooth' });
//     })

//   };
//   scrollToContainer();



function imagesComeOut() {

    // all images
    var myallImages = [
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
            name: "BEVERLY",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BEVERLY.jpg"` ,
            price: "786",
        },
   
        {
            name: "CHECKER",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/CHECKER.jpg"` ,
            price: "786",
        },
    
        {
            name: "DREAMS",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/DREAMS.jpg"` ,
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
            name: " BARIES BORDER",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/BARIES BORDER.jpg"` ,
            price: "786",
          },
        {
            name: "CLASSIC ",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/CLASSIC.jpg"` ,
            price: "786",
          },
        {
            name: "COUNTRY",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/COUNTRY.jpg "` ,
            price: "786",
          },
        {
            name: " DOTTED ROSE",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/DOTTED ROSE.jpg "` ,
            price: "786",
          },
        {
            name: "FLORIST",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/FLORIST.jpg "` ,
            price: "786",
          },
        {
            name: "GARDEN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/GARDEN.jpg"` ,
            price: "786",
          },
        {
            name: "GLOSY BUNCH ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/GLOSY BUNCH.jpg "` ,
            price: "786",
          },
        {
            name: " LAURAL CROWN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/LAURAL CROWN.jpg "` ,
            price: "786",
          },
        {
            name: "MINI GARDEN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/MINI GARDEN.jpg "` ,
            price: "786",
          },
        {
            name: "OLIVE LEAVES ",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/OLIVE LEAVES.jpg"` ,
            price: "786",
          },
        {
            name: " page 3",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/page 3.jpg "` ,
            price: "786",
          },
        {
            name: " age 4",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/page 4.jpg "` ,
            price: "786",
          },
        {
            name: "pal 2 ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/pal 2.jpg "` ,
            price: "786",
          },
        {
            name: "ROMANCE ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/ROMANCE.jpg "` ,
            price: "786",
          },
        {
            name: "ROSE MARRY ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/ROSE MARRY.jpg "` ,
            price: "786",
          },
        {
            name: "VICTORIA",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/VICTORIA.jpg"` ,
            price: "786",
          },
        {
            name: "VINTAGE GALA",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/VINTAGE GALA.jpg"` ,
            price: "786",
          },
        //   theme change
      
        {
            name: "ARAZONA",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ARAZONA.jpg"` ,
            price: "786",
          },
        {
            name: "CAIRO ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/CAIRO.jpg"` ,
            price: "786",
          },
        {
            name: "DALLAS ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/DALLAS.jpg "` ,
            price: "786",
          },
        {
            name: "ETHNIC 1 ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ETHNIC 1.jpg "` ,
            price: "786",
          },
        {
            name: "ETHNIC CIRCLE ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ETHNIC CIRCLE.jpg "` ,
            price: "786",
          },
        {
            name: "GEORGIA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/GEORGIA.jpg"` ,
            price: "786",
          },
        {
            name: "JUNGLE QUEEN (2) ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/JUNGLE QUEEN (2).jpg "` ,
            price: "786",
          },
        {
            name: "LAGOS ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/LAGOS.jpg "` ,
            price: "786",
          },
        {
            name: "MARTHA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/MARTHA.jpg"` ,
            price: "786",
          },
        {
            name: " MOZAMBIQUE",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/MOZAMBIQUE.jpg "` ,
            price: "786",
          },
        {
            name: "NIGERIA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/NIGERIA.jpg"` ,
            price: "786",
          },
        {
            name: " page 13",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/page 13.jpg "` ,
            price: "786",
          },
        {
            name: "page 14 ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/page 14.jpg "` ,
            price: "786",
          },
        {
            name: "PERU ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PERU.jpg "` ,
            price: "786",
          },
        {
            name: "PREMITIVE ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PREMITIVE.jpg "` ,
            price: "786",
          },
        {
            name: "PRETORIA",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PRETORIA.jpg "` ,
            price: "786",
          },
        {
            name: "SANDRA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/SANDRA.jpg"` ,
            price: "786",
          },
        {
            name: " TAFTAAN2",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/TAFTAAN2.jpg "` ,
            price: "786",
          },
        {
            name: "TEMPICO ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/TEMPICO.jpg"` ,
            price: "786",
          },
        {
            name: "TERRA (4) ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/TERRA (4).jpg"` ,
            price: "786",
          },
        //   theme change
        {
            name: "ARENA ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/ARENA.jpg"` ,
            price: "786",
          },
        {
            name: "BUKHARA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/BUKHARA.jpg "` ,
            price: "786",
          },
        {
            name: "CAMEROON 2 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/CAMEROON 2.jpg "` ,
            price: "786",
          },
        {
            name: "DAKAR ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/DAKAR.jpg"` ,
            price: "786",
          },
        {
            name: "EGYPT ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/EGYPT.jpg "` ,
            price: "786",
          },
        {
            name: "FASHION SAFARI ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/FASHION SAFARI.jpg "` ,
            price: "786",
          },
        {
            name: " FURRI",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/FURRI.jpg"` ,
            price: "786",
          },
        {
            name: "GHANA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/GHANA.jpg "` ,
            price: "786",
          },
        {
            name: "IKET BRIGHT ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/IKET BRIGHT.jpg "` ,
            price: "786",
          },
        {
            name: "KENYA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/KENYA.jpg "` ,
            price: "786",
          },
        {
            name: "KINGRY ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/KINGRY.jpg "` ,
            price: "786",
          },
        {
            name: "MEDELLIN ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/MEDELLIN.jpg "` ,
            price: "786",
          },
        {
            name: "MEXIKO ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/MEXIKO.jpg "` ,
            price: "786",
          },
        {
            name: "NAVAJO 01 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/NAVAJO 01.jpg "` ,
            price: "786",
          },
        {
            name: "page 13 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/page 13.jpg "` ,
            price: "786",
          },
        {
            name: "page 14 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/page 14.jpg "` ,
            price: "786",
          },
        {
            name: " PALL 1",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/PALL 1.jpg "` ,
            price: "786",
          },
        {
            name: "RUG ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/RUG.jpg"` ,
            price: "786",
          },
        {
            name: " RUMANIA",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/RUMANIA.jpg"` ,
            price: "786",
          },
        {
            name: "SAFARI ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/SAFARI.jpg"` ,
            price: "786",
          },
        //   theme change
        {
            name: "BOXES ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/3D BOXES.jpg"` ,
            price: "786",
          },
        {
            name: "ABSTRA ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/ABSTRA.jpg"` ,
            price: "786",
          },
        {
            name: "ANNA ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/ANNA.jpg"` ,
            price: "786",
          },
        {
            name: "BEANS",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BEANS.jpg"` ,
            price: "786",
          },
        {
            name: " BRUSH STROKES",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BRUSH STROKES.jpg"` ,
            price: "786",
          },
        {
            name: " BURLIN",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BURLIN.jpg"` ,
            price: "786",
          },
        {
            name: "CARDS ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/CARDS.jpg "` ,
            price: "786",
          },
        {
            name: "DIAMOND ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/DIAMOND.jpg "` ,
            price: "786",
          },
        {
            name: "ELECTRA ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/ELECTRA.jpg "` ,
            price: "786",
          },
        {
            name: "GEO ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/GEO.jpg"` ,
            price: "786",
          },
        {
            name: "GOLD SHIVRON ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/GOLD SHIVRON.jpg "` ,
            price: "786",
          },
        {
            name: "GRILL ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/GRILL.jpg "` ,
            price: "786",
          },
        {
            name: "HIPSTER FASHION ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/HIPSTER FASHION.jpg "` ,
            price: "786",
          },
        {
            name: " HOUNSTOOTH ZOOM",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/HOUNSTOOTH ZOOM.jpg"` ,
            price: "786",
          },
        {
            name: "LINES ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/LINES.jpg "` ,
            price: "786",
          },
 
        {
            name: "MARK ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/MARK.jpg "` ,
            price: "786",
          },
        {
            name: "page 11 ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/page 11.jpg "` ,
            price: "786",
          },
        {
            name: " page 12",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/page 12.jpg"` ,
            price: "786",
          },
        {
            name: " SHIVRON STRIPE",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/SHIVRON STRIPE.jpg "` ,
            price: "786",
          },
        {
            name: " SMOKE",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/SMOKE.jpg"` ,
            price: "786",
          },
// theme change
        {
            name: "AAGRAH ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/AAGRAH.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 11 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 11.jpg"` ,
            price: "786",
        },
        {
            name: " block print 13",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/block print 13.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 6 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 6.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT 9",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 9.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT PATCH 2",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT PATCH 2.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT PATCH",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT PATCH.jpg"` ,
            price: "786",
        },
        {
            name: "HALA ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/HALA.jpg"` ,
            price: "786",
        },
        {
            name: "HINGOOR ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/HINGOOR.jpg"` ,
            price: "786",
        },
        {
            name: " JAIPUR",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JAIPUR.jpg"` ,
            price: "786",
        },
        {
            name: " JOTI",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JOTI.jpg"` ,
            price: "786",
        },
        {
            name: " JUMERA 2",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JUMERA 2.jpg"` ,
            price: "786",
        },
        {
            name: " KASHMIRA",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/KASHMIRA.jpg"` ,
            price: "786",
        },
        {
            name: "MANDARIN ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MANDARIN.jpg"` ,
            price: "786",
        },
        {
            name: " MEERA",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MEERA.jpg"` ,
            price: "786",
        },
        {
            name: "MISHAL ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MISHAL.jpg"` ,
            price: "786",
        },
        {
            name: "page 15 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/page 15.jpg"` ,
            price: "786",
        },
 
        // theme change
        
    
        {
            name: " BLOCK PRINT 12",
            theme: "jaipurmail2",
            Image: `src=" ./assets/products/themejaipurmail2/BLOCK PRINT 12.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 14 ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/BLOCK PRINT 14.jpg"` ,
            price: "786",
        },
        {
            name: "block print 5. ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/block print 5.jpg"` ,
            price: "786",
        },
        {
            name: "bombay ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/bombay.jpg"` ,
            price: "786",
        },
        {
            name: "DARICHA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/DARICHA.jpg"` ,
            price: "786",
        },
        {
            name: "JIA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/JIA.jpg"` ,
            price: "786",
        },
        {
            name: "MEENAR ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MEENAR.jpg"` ,
            price: "786",
        },
        {
            name: "MOGADOR ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MOGADOR.jpg"` ,
            price: "786",
        },
        {
            name: "MUGHALS 2 ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MUGHALS 2.jpg"` ,
            price: "786",
        },
        {
            name: "MUGHALS ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MUGHALS.jpg"` ,
            price: "786",
        },
        {
            name: "page 15",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/page 15.jpg"` ,
            price: "786",
        },
        {
            name: "page 16",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/page 16.jpg"` ,
            price: "786",
        },
        {
            name: "PAISLY ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/PAISLY.jpg"` ,
            price: "786",
        },
        {
            name: "PASHMINA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/PASHMINA.jpg"` ,
            price: "786",
        },
        {
            name: "RUPALI ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/RUPALI.jpg"` ,
            price: "786",
        },
        {
            name: "SARI ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/SARI.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: "BALLS ON TREE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BALLS ON TREE.jpg "` ,
            price: "786",
        },
        {
            name: " BARIES BORDER",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BARIES BORDER.jpg "` ,
            price: "786",
        },
        {
            name: "BARISBANE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BARISBANE.jpg "` ,
            price: "786",
        },
        {
            name: " BILBAO",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BILBAO.jpg "` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 7 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLOCK PRINT 7.jpg "` ,
            price: "786",
        },
       
        {
            name: "BLUE DAMASK. ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLUE DAMASK.jpg "` ,
            price: "786",
        },
        {
            name: "BLUE MINE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLUE MINE.jpg "` ,
            price: "786",
        },
        {
            name: " BOHO",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BOHO.jpg "` ,
            price: "786",
        },
        {
            name: " BURLIN",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BURLIN.jpg "` ,
            price: "786",
        },
        {
            name: "CAPRI ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/CAPRI.jpg "` ,
            price: "786",
        },
        {
            name: "COUNTRY ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/COUNTRY.jpg "` ,
            price: "786",
        },
        {
            name: "DREAMS ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/DREAMS.jpg "` ,
            price: "786",
        },
        {
            name: "ICE FLOWER",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/ICE FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: "OGEES ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/OGEES.jpg "` ,
            price: "786",
        },
        {
            name: "page 19 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/page 19.jpg "` ,
            price: "786",
        },
        {
            name: "page 20 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/page 20.jpg "` ,
            price: "786",
        },
        {
            name: "PALMAS ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/PALMAS.jpg "` ,
            price: "786",
        },
        {
            name: "PORTO ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/PORTO.jpg "` ,
            price: "786",
        },
        //  theme change
        {
            name: "ABSTRACT FLOWER ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/ABSTRACT FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: "AJMAIR ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/AJMAIR.jpg "` ,
            price: "786",
        },
        {
            name: "ANGELY ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/ANGELY.jpg"` ,
            price: "786",
        },
        {
            name: " BLUE LEAVES",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/BLUE LEAVES.jpg"` ,
            price: "786",
        },
        {
            name: " CARINS",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/CARINS.jpg "` ,
            price: "786",
        },
        {
            name: "DURBAN ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/DURBAN.jpg "` ,
            price: "786",
        },
        {
            name: "IMPRESSION ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/IMPRESSION.jpg "` ,
            price: "786",
        },
        {
            name: "JUNGLE FLOWERS ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/JUNGLE FLOWERS.jpg "` ,
            price: "786",
        },
        {
            name: "LAZY DASY ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/LAZY DASY.jpg"` ,
            price: "786",
        },
        {
            name: " LEAF",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/LEAF.jpg "` ,
            price: "786",
        },
        {
            name: "MADRID ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/MADRID.jpg "` ,
            price: "786",
        },
        {
            name: " page 19",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/page 19.jpg"` ,
            price: "786",
        },
        {
            name: " page 20",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/page 20.jpg "` ,
            price: "786",
        },
        {
            name: " PAISLY PATERN",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/PAISLY PATERN.jpg"` ,
            price: "786",
        },
        {
            name: " PHOENIX",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/PHOENIX.jpg"` ,
            price: "786",
        },
        {
            name: "PRAUGE ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/PRAUGE.jpg "` ,
            price: "786",
        },
        {
            name: "SABARO ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SABARO.jpg "` ,
            price: "786",
        },
        {
            name: "SAN JOSE ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SAN JOSE.jpg "` ,
            price: "786",
        },
        {
            name: "SHABBY ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SHABBY.jpg "` ,
            price: "786",
        },
        {
            name: "TAMARIS ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/TAMARIS.jpg"` ,
            price: "786",
        },
        {
            name: "THAILAND ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/THAILAND.jpg "` ,
            price: "786",
        },
        {
            name: "TONAL FLOWER. ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/TONAL FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: " TRANCE",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/TRANCE.jpg "` ,
            price: "786",
        },
        // theme change
        {
            name: "ALGERIA ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/ALGERIA.jpg"` ,
            price: "786",
        },
        {
            name: "ARROW ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/ARROW.jpg"` ,
            price: "786",
        },
        {
            name: "BEENS ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BEENS.jpg "` ,
            price: "786",
        },
        {
            name: " BOLD STRIPE 2",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/BOLD STRIPE 2.jpg"` ,
            price: "786",
        },
        {
            name: " BOLD STRIPE",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BOLD STRIPE ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BROADWAY ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BROADWAY.jpg "` ,
            price: "786",
        },
        {
            name: " CHECK 1",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECK 1.jpg "` ,
            price: "786",
        },
        {
            name: "CHECK 11 ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/CHECK 11.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 25",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/CHECK 25.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 3",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECK 3.jpg "` ,
            price: "786",
        },
        {
            name: " CHECKER",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECKER.jpg "` ,
            price: "786",
        },
        {
            name: " CHICK CHECK",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHICK CHECK.jpg "` ,
            price: "786",
        },
        {
            name: " DECEMBER",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/DECEMBER.jpg "` ,
            price: "786",
        },
        {
            name: " DHAKA",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/DHAKA.jpg"` ,
            price: "786",
        },
        {
            name: "DOTTED WAVES ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/DOTTED WAVES.jpg "` ,
            price: "786",
        },
        {
            name: " EGYPT",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/EGYPT.jpg"` ,
            price: "786",
        },
        {
            name: "ETHENS ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/ETHENS.jpg "` ,
            price: "786",
        },
        {
            name: " FASHION",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/FASHION.jpg "` ,
            price: "786",
        },
        {
            name: " GEO 2",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/GEO 2.jpg "` ,
            price: "786",
        },
        {
            name: "GEO ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/GEO.jpg"` ,
            price: "786",
        },
        // theme change
        
        {
            name: " 3D TIME",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/3D TIME.jpg "` ,
            price: "786",
        },
        {
            name: "BAALI ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/BAALI.jpg"` ,
            price: "786",
        },
        {
            name: "BEACH STRIPE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/BEACH STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BOLD STRIPE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: " CARDS",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CARDS.jpg "` ,
            price: "786",
        },
        {
            name: "CASA ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/CASA.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 55",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/CHECK 55.jpg"` ,
            price: "786",
        },
        {
            name: "CHOCOLATE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CHOCOLATE.jpg "` ,
            price: "786",
        },
        {
            name: "CONECTOR ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CONECTOR.jpg "` ,
            price: "786",
        },
        {
            name: "CRISS CROSS ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CRISS CROSS.jpg "` ,
            price: "786",
        },
        {
            name: "DENIM PATCH ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/DENIM PATCH.jpg"` ,
            price: "786",
        },
        {
            name: "ETHNO ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/ETHNO.jpg "` ,
            price: "786",
        },
        {
            name: "ETHOS ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/ETHOS.jpg"` ,
            price: "786",
        },
        {
            name: "FIRST PLANE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/FIRST PLANE.jpg"` ,
            price: "786",
        },
        {
            name: "GARDEN STRIPE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/GARDEN STRIPE.jpg"` ,
            price: "786",
        },
        {
            name: " GARNET",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/GARNET.jpg"` ,
            price: "786",
        },
        {
            name: "IKET CHECK ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/IKET CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "KINGRY ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/KINGRY.jpg"` ,
            price: "786",
        },
        {
            name: "KITE ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/KITE.jpg"` ,
            price: "786",
        },
        {
            name: " MESCULINE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/MESCULINE.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: " AMRIA",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/AMRIA.jpg "` ,
            price: "786",
        },
        {
            name: "BIG FLOWER ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/BIG FLOWER.jpg"` ,
            price: "786",
        },
        {
            name: "BOTANICAL ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/BOTANICAL.jpg"` ,
            price: "786",
        },
        {
            name: " BUNNY",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/BUNNY.jpg "` ,
            price: "786",
        },
        {
            name: "BUTTERFLY ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/BUTTERFLY.jpg "` ,
            price: "786",
        },
        {
            name: " CAMOUFLAGE",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/CAMOUFLAGE.jpg"` ,
            price: "786",
        },
        {
            name: "CHEES BALLS ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/CHEES BALLS.jpg"` ,
            price: "786",
        },
        {
            name: " CITY STREET",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/CITY STREET.jpg "` ,
            price: "786",
        },
        {
            name: " COLLEGE GIRL",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/COLLEGE GIRL.jpg "` ,
            price: "786",
        },
        {
            name: "CONSTRUCTION ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/CONSTRUCTION.jpg "` ,
            price: "786",
        },
        {
            name: " DIAMOND",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DIAMOND.jpg"` ,
            price: "786",
        },
        {
            name: " DINO CUTE",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DINO CUTE.jpg"` ,
            price: "786",
        },
        {
            name: "DINO ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DINO.jpg "` ,
            price: "786",
        },
        {
            name: "DOT DOTS ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DOT DOTS.jpg "` ,
            price: "786",
        },
        {
            name: "GAME DOTS ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GAME DOTS.jpg "` ,
            price: "786",
        },
        {
            name: "GARDEN EVE ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GARDEN EVE.jpg "` ,
            price: "786",
        },
        {
            name: "GIRLS GARDEN (2) ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GIRLS GARDEN (2).jpg "` ,
            price: "786",
        },
        {
            name: "GPT0028 ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/GPT0028.jpg"` ,
            price: "786",
        },
        {
            name: "HOUNSTOOTH ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/HOUNSTOOTH.jpg"` ,
            price: "786",
        },
        {
            name: "KIRA ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/KIRA.jpg "` ,
            price: "786",
        },
        // theme change
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/ALFA.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/BEACH STP.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BIRDS.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BLOSSUM.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BOAT.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BUNNY BOOM.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/CANDIES.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/COSY.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/CUTE BUNNY 2.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DINO BABIES.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/DINO BLUE.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DINO KIDS.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DUCK LINK.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/ELEVEN.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/GRAVITY.jpg "` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HEARTS.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HIMALYA.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HOOP.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/INVOI.jpg"` ,
            price: "786",
        },
        {
            name: " ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/KIM.jpg"` ,
            price: "786",
        },
 
    ];

  

    let Design = document.querySelector(".Design")
    const btn = document.querySelector("#throttle");
 
    // Throttling Function
    const throttleFunction = (func, delay) => {
        let prev = 0;
        return (...args) => {
            let now = new Date().getTime();
            if (now - prev > delay) {
                prev = now;
                return func(...args);
            }
        }
    }
    Design.addEventListener("mousemove",
        throttleFunction((e) => {
        

        let newDiv =  document.createElement('div')
        newDiv.classList.add("outer");
        document.body.appendChild(newDiv);

        newDiv.style.left = e.clientX + "px" ;
        newDiv.style.top = e.clientY + "px" ;

        let randomRotation =  Math.floor(Math.random()*31) -15;
        // console.log(randomRotation);
        newDiv.style.transform = `rotate(${randomRotation}deg)`


        let newImg  = document.createElement('img')
        newImg.classList.add("imgComing")

                let a = Math.floor(Math.random()*333)
                var uniqueImg = myallImages[a].Image
                var imageSrc = uniqueImg.substring(5, uniqueImg.length-1)

        newImg.setAttribute("src", `${imageSrc}`);

        newDiv.appendChild(newImg);

// gsap on image out and go down
        gsap.to(newImg ,{
            y: "0",
            duration:0.5,
            ease: "back.out(2)",
        })

        gsap.to(newImg ,{
            y: "100%",
            delay:0.6,
            duration:0.6,
            ease: "power1.out",
        })

            setTimeout(() => {
                newDiv.style.display = "none"
            }, 900);


        }, 150));


};
imagesComeOut();



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



function cards() {
    
    tl.from(".firstCard, .secondCard", {
        opacity:0,
        stagger:0.4,
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


let successMessage = ()=>{
    let successMassage = document.querySelector(".successMassage");
    successMassage.style.display = "block";
    setTimeout(() => {
        successMassage.style.display = "none";
    }, 2000);
}


function category() {
     var showCart = document.querySelector(".showCart");
   
    
    //for category selection
    var clickedButton = null;

   // cart counting
var countCartItems = document.querySelector(".countCartItems");

    var blankCart = "";
    var ShowData = document.querySelector(".ShowData");

    // local storage on windown load
    window.addEventListener("load", () => {
        if (localStorage.getItem("data")) {
            var DATA = localStorage.getItem("data");
            blankCart = DATA;
            ShowData.innerHTML = blankCart
            
        }
        // local storage on windown load
        if (localStorage.getItem("itemsNo")) {
            var itemNo = localStorage.getItem("itemsNo");
            countCartItems.innerText = itemNo;
            countCartItems.style.backgroundColor = "RED";
        }
    });
    


    var opetions = document.querySelector(".opetions");
    var category = "";
    var newli = "";
    var ShowAll = `<span class="ShowAll    absolute hidden  bottom-2 right-2 p-4 bg-amber-50  font-bold font-sans text-[2rem] cursor-pointer text-gray-500  rounded-lg  hover:text-black">Show All <i class="ri-corner-up-left-double-line"></i></span>`;
    
    
    var theme = [
    { cate: "School Start"} , { cate: "ethnic"},{ cate: "mr man"},{ cate: "monotones"},{ cate: "check and stripe"},{ cate: "geometrical"},{ cate: "bold and bloom"},{ cate: "dear romance"},{ cate: "blue haze"},{ cate: "jaipur"}
]

theme.forEach(element => {
    var newCategory = ` <h1 class="singleCategory    transition-colors duration-0.3 ease-in-out    w-auto inline-block     text-[2rem] capitalize p-4 rounded-full bg-[white] cursor-pointer hover:shadow-xl hover:bg-[#f56765]">${element.cate}
    </h1>`;
    category += newCategory;
    opetions.innerHTML = category + `${ShowAll}`;

  
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
            name: "BEVERLY",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/BEVERLY.jpg"` ,
            price: "786",
        },
   
        {
            name: "CHECKER",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/CHECKER.jpg"` ,
            price: "786",
        },
    
        {
            name: "DREAMS",
            theme: "bluehazemail1",
            Image: `src="./assets/products/themebluehazemail1/DREAMS.jpg"` ,
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
            name: " BARIES BORDER",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/BARIES BORDER.jpg"` ,
            price: "786",
          },
        {
            name: "CLASSIC ",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/CLASSIC.jpg"` ,
            price: "786",
          },
        {
            name: "COUNTRY",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/COUNTRY.jpg "` ,
            price: "786",
          },
        {
            name: " DOTTED ROSE",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/DOTTED ROSE.jpg "` ,
            price: "786",
          },
        {
            name: "FLORIST",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/FLORIST.jpg "` ,
            price: "786",
          },
        {
            name: "GARDEN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/GARDEN.jpg"` ,
            price: "786",
          },
        {
            name: "GLOSY BUNCH ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/GLOSY BUNCH.jpg "` ,
            price: "786",
          },
        {
            name: " LAURAL CROWN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/LAURAL CROWN.jpg "` ,
            price: "786",
          },
        {
            name: "MINI GARDEN",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/MINI GARDEN.jpg "` ,
            price: "786",
          },
        {
            name: "OLIVE LEAVES ",
            theme: "dearromancemail2 ",
            Image: `src=" ./assets/products/themedearromancemail2/OLIVE LEAVES.jpg"` ,
            price: "786",
          },
        {
            name: " page 3",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/page 3.jpg "` ,
            price: "786",
          },
        {
            name: " age 4",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/page 4.jpg "` ,
            price: "786",
          },
        {
            name: "pal 2 ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/pal 2.jpg "` ,
            price: "786",
          },
        {
            name: "ROMANCE ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/ROMANCE.jpg "` ,
            price: "786",
          },
        {
            name: "ROSE MARRY ",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/ROSE MARRY.jpg "` ,
            price: "786",
          },
        {
            name: "VICTORIA",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/VICTORIA.jpg"` ,
            price: "786",
          },
        {
            name: "VINTAGE GALA",
            theme: "dearromancemail2 ",
            Image: `src="./assets/products/themedearromancemail2/VINTAGE GALA.jpg"` ,
            price: "786",
          },
        //   theme change
      
        {
            name: "ARAZONA",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ARAZONA.jpg"` ,
            price: "786",
          },
        {
            name: "CAIRO ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/CAIRO.jpg"` ,
            price: "786",
          },
        {
            name: "DALLAS ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/DALLAS.jpg "` ,
            price: "786",
          },
        {
            name: "ETHNIC 1 ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ETHNIC 1.jpg "` ,
            price: "786",
          },
        {
            name: "ETHNIC CIRCLE ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/ETHNIC CIRCLE.jpg "` ,
            price: "786",
          },
        {
            name: "GEORGIA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/GEORGIA.jpg"` ,
            price: "786",
          },
        {
            name: "JUNGLE QUEEN (2) ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/JUNGLE QUEEN (2).jpg "` ,
            price: "786",
          },
        {
            name: "LAGOS ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/LAGOS.jpg "` ,
            price: "786",
          },
        {
            name: "MARTHA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/MARTHA.jpg"` ,
            price: "786",
          },
        {
            name: " MOZAMBIQUE",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/MOZAMBIQUE.jpg "` ,
            price: "786",
          },
        {
            name: "NIGERIA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/NIGERIA.jpg"` ,
            price: "786",
          },
        {
            name: " page 13",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/page 13.jpg "` ,
            price: "786",
          },
        {
            name: "page 14 ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/page 14.jpg "` ,
            price: "786",
          },
        {
            name: "PERU ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PERU.jpg "` ,
            price: "786",
          },
        {
            name: "PREMITIVE ",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PREMITIVE.jpg "` ,
            price: "786",
          },
        {
            name: "PRETORIA",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/PRETORIA.jpg "` ,
            price: "786",
          },
        {
            name: "SANDRA ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/SANDRA.jpg"` ,
            price: "786",
          },
        {
            name: " TAFTAAN2",
            theme: "ethnicmail1 ",
            Image: `src="./assets/products/themeethnicmail1/TAFTAAN2.jpg "` ,
            price: "786",
          },
        {
            name: "TEMPICO ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/TEMPICO.jpg"` ,
            price: "786",
          },
        {
            name: "TERRA (4) ",
            theme: "ethnicmail1 ",
            Image: `src=" ./assets/products/themeethnicmail1/TERRA (4).jpg"` ,
            price: "786",
          },
        //   theme change
        {
            name: "ARENA ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/ARENA.jpg"` ,
            price: "786",
          },
        {
            name: "BUKHARA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/BUKHARA.jpg "` ,
            price: "786",
          },
        {
            name: "CAMEROON 2 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/CAMEROON 2.jpg "` ,
            price: "786",
          },
        {
            name: "DAKAR ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/DAKAR.jpg"` ,
            price: "786",
          },
        {
            name: "EGYPT ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/EGYPT.jpg "` ,
            price: "786",
          },
        {
            name: "FASHION SAFARI ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/FASHION SAFARI.jpg "` ,
            price: "786",
          },
        {
            name: " FURRI",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/FURRI.jpg"` ,
            price: "786",
          },
        {
            name: "GHANA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/GHANA.jpg "` ,
            price: "786",
          },
        {
            name: "IKET BRIGHT ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/IKET BRIGHT.jpg "` ,
            price: "786",
          },
        {
            name: "KENYA ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/KENYA.jpg "` ,
            price: "786",
          },
        {
            name: "KINGRY ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/KINGRY.jpg "` ,
            price: "786",
          },
        {
            name: "MEDELLIN ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/MEDELLIN.jpg "` ,
            price: "786",
          },
        {
            name: "MEXIKO ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/MEXIKO.jpg "` ,
            price: "786",
          },
        {
            name: "NAVAJO 01 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/NAVAJO 01.jpg "` ,
            price: "786",
          },
        {
            name: "page 13 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/page 13.jpg "` ,
            price: "786",
          },
        {
            name: "page 14 ",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/page 14.jpg "` ,
            price: "786",
          },
        {
            name: " PALL 1",
            theme: "ethnicmail2 ",
            Image: `src="./assets/products/themeethnicmail2/PALL 1.jpg "` ,
            price: "786",
          },
        {
            name: "RUG ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/RUG.jpg"` ,
            price: "786",
          },
        {
            name: " RUMANIA",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/RUMANIA.jpg"` ,
            price: "786",
          },
        {
            name: "SAFARI ",
            theme: "ethnicmail2 ",
            Image: `src=" ./assets/products/themeethnicmail2/SAFARI.jpg"` ,
            price: "786",
          },
        //   theme change
        {
            name: "BOXES ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/3D BOXES.jpg"` ,
            price: "786",
          },
        {
            name: "ABSTRA ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/ABSTRA.jpg"` ,
            price: "786",
          },
        {
            name: "ANNA ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/ANNA.jpg"` ,
            price: "786",
          },
        {
            name: "BEANS",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BEANS.jpg"` ,
            price: "786",
          },
        {
            name: " BRUSH STROKES",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BRUSH STROKES.jpg"` ,
            price: "786",
          },
        {
            name: " BURLIN",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/BURLIN.jpg"` ,
            price: "786",
          },
        {
            name: "CARDS ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/CARDS.jpg "` ,
            price: "786",
          },
        {
            name: "DIAMOND ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/DIAMOND.jpg "` ,
            price: "786",
          },
        {
            name: "ELECTRA ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/ELECTRA.jpg "` ,
            price: "786",
          },
        {
            name: "GEO ",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/GEO.jpg"` ,
            price: "786",
          },
        {
            name: "GOLD SHIVRON ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/GOLD SHIVRON.jpg "` ,
            price: "786",
          },
        {
            name: "GRILL ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/GRILL.jpg "` ,
            price: "786",
          },
        {
            name: "HIPSTER FASHION ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/HIPSTER FASHION.jpg "` ,
            price: "786",
          },
        {
            name: " HOUNSTOOTH ZOOM",
            theme: "geometrical",
            Image: `src=" ./assets/products/themegeometrical/HOUNSTOOTH ZOOM.jpg"` ,
            price: "786",
          },
        {
            name: "LINES ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/LINES.jpg "` ,
            price: "786",
          },
 
        {
            name: "MARK ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/MARK.jpg "` ,
            price: "786",
          },
        {
            name: "page 11 ",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/page 11.jpg "` ,
            price: "786",
          },
        {
            name: " page 12",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/page 12.jpg"` ,
            price: "786",
          },
        {
            name: " SHIVRON STRIPE",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/SHIVRON STRIPE.jpg "` ,
            price: "786",
          },
        {
            name: " SMOKE",
            theme: "geometrical",
            Image: `src="./assets/products/themegeometrical/SMOKE.jpg"` ,
            price: "786",
          },
// theme change
        {
            name: "AAGRAH ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/AAGRAH.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 11 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 11.jpg"` ,
            price: "786",
        },
        {
            name: " block print 13",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/block print 13.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 6 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 6.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT 9",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT 9.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT PATCH 2",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT PATCH 2.jpg"` ,
            price: "786",
        },
        {
            name: " BLOCK PRINT PATCH",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/BLOCK PRINT PATCH.jpg"` ,
            price: "786",
        },
        {
            name: "HALA ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/HALA.jpg"` ,
            price: "786",
        },
        {
            name: "HINGOOR ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/HINGOOR.jpg"` ,
            price: "786",
        },
        {
            name: " JAIPUR",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JAIPUR.jpg"` ,
            price: "786",
        },
        {
            name: " JOTI",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JOTI.jpg"` ,
            price: "786",
        },
        {
            name: " JUMERA 2",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/JUMERA 2.jpg"` ,
            price: "786",
        },
        {
            name: " KASHMIRA",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/KASHMIRA.jpg"` ,
            price: "786",
        },
        {
            name: "MANDARIN ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MANDARIN.jpg"` ,
            price: "786",
        },
        {
            name: " MEERA",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MEERA.jpg"` ,
            price: "786",
        },
        {
            name: "MISHAL ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/MISHAL.jpg"` ,
            price: "786",
        },
        {
            name: "page 15 ",
            theme: "jaipur",
            Image: `src="./assets/products/themejaipur/page 15.jpg"` ,
            price: "786",
        },
 
        // theme change
        
      
        {
            name: " BLOCK PRINT 12",
            theme: "jaipurmail2",
            Image: `src=" ./assets/products/themejaipurmail2/BLOCK PRINT 12.jpg"` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 14 ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/BLOCK PRINT 14.jpg"` ,
            price: "786",
        },
        {
            name: "block print 5. ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/block print 5.jpg"` ,
            price: "786",
        },
        {
            name: "bombay ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/bombay.jpg"` ,
            price: "786",
        },
        {
            name: "DARICHA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/DARICHA.jpg"` ,
            price: "786",
        },
        {
            name: "JIA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/JIA.jpg"` ,
            price: "786",
        },
        {
            name: "MEENAR ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MEENAR.jpg"` ,
            price: "786",
        },
        {
            name: "MOGADOR ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MOGADOR.jpg"` ,
            price: "786",
        },
        {
            name: "MUGHALS 2 ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MUGHALS 2.jpg"` ,
            price: "786",
        },
        {
            name: "MUGHALS ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/MUGHALS.jpg"` ,
            price: "786",
        },
        {
            name: "page 15",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/page 15.jpg"` ,
            price: "786",
        },
        {
            name: "page 16",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/page 16.jpg"` ,
            price: "786",
        },
        {
            name: "PAISLY ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/PAISLY.jpg"` ,
            price: "786",
        },
        {
            name: "PASHMINA ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/PASHMINA.jpg"` ,
            price: "786",
        },
        {
            name: "RUPALI ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/RUPALI.jpg"` ,
            price: "786",
        },
        {
            name: "SARI ",
            theme: "jaipurmail2",
            Image: `src="./assets/products/themejaipurmail2/SARI.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: "BALLS ON TREE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BALLS ON TREE.jpg "` ,
            price: "786",
        },
        {
            name: " BARIES BORDER",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BARIES BORDER.jpg "` ,
            price: "786",
        },
        {
            name: "BARISBANE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BARISBANE.jpg "` ,
            price: "786",
        },
        {
            name: " BILBAO",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BILBAO.jpg "` ,
            price: "786",
        },
        {
            name: "BLOCK PRINT 7 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLOCK PRINT 7.jpg "` ,
            price: "786",
        },
       
        {
            name: "BLUE DAMASK. ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLUE DAMASK.jpg "` ,
            price: "786",
        },
        {
            name: "BLUE MINE ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BLUE MINE.jpg "` ,
            price: "786",
        },
        {
            name: " BOHO",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BOHO.jpg "` ,
            price: "786",
        },
        {
            name: " BURLIN",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/BURLIN.jpg "` ,
            price: "786",
        },
        {
            name: "CAPRI ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/CAPRI.jpg "` ,
            price: "786",
        },
        {
            name: "COUNTRY ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/COUNTRY.jpg "` ,
            price: "786",
        },
        {
            name: "DREAMS ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/DREAMS.jpg "` ,
            price: "786",
        },
        {
            name: "ICE FLOWER",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/ICE FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: "OGEES ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/OGEES.jpg "` ,
            price: "786",
        },
        {
            name: "page 19 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/page 19.jpg "` ,
            price: "786",
        },
        {
            name: "page 20 ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/page 20.jpg "` ,
            price: "786",
        },
        {
            name: "PALMAS ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/PALMAS.jpg "` ,
            price: "786",
        },
        {
            name: "PORTO ",
            theme: "monotonesmail1",
            Image: `src="./assets/products/thememonotonesmail1/PORTO.jpg "` ,
            price: "786",
        },
        //  theme change
        {
            name: "ABSTRACT FLOWER ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/ABSTRACT FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: "AJMAIR ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/AJMAIR.jpg "` ,
            price: "786",
        },
        {
            name: "ANGELY ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/ANGELY.jpg"` ,
            price: "786",
        },
        {
            name: " BLUE LEAVES",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/BLUE LEAVES.jpg"` ,
            price: "786",
        },
        {
            name: " CARINS",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/CARINS.jpg "` ,
            price: "786",
        },
        {
            name: "DURBAN ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/DURBAN.jpg "` ,
            price: "786",
        },
        {
            name: "IMPRESSION ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/IMPRESSION.jpg "` ,
            price: "786",
        },
        {
            name: "JUNGLE FLOWERS ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/JUNGLE FLOWERS.jpg "` ,
            price: "786",
        },
        {
            name: "LAZY DASY ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/LAZY DASY.jpg"` ,
            price: "786",
        },
        {
            name: " LEAF",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/LEAF.jpg "` ,
            price: "786",
        },
        {
            name: "MADRID ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/MADRID.jpg "` ,
            price: "786",
        },
        {
            name: " page 19",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/page 19.jpg"` ,
            price: "786",
        },
        {
            name: " page 20",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/page 20.jpg "` ,
            price: "786",
        },
        {
            name: " PAISLY PATERN",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/PAISLY PATERN.jpg"` ,
            price: "786",
        },
        {
            name: " PHOENIX",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/PHOENIX.jpg"` ,
            price: "786",
        },
        {
            name: "PRAUGE ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/PRAUGE.jpg "` ,
            price: "786",
        },
        {
            name: "SABARO ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SABARO.jpg "` ,
            price: "786",
        },
        {
            name: "SAN JOSE ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SAN JOSE.jpg "` ,
            price: "786",
        },
        {
            name: "SHABBY ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/SHABBY.jpg "` ,
            price: "786",
        },
        {
            name: "TAMARIS ",
            theme: "monotonesmail2",
            Image: `src=" ./assets/products/thememonotonesmail2/TAMARIS.jpg"` ,
            price: "786",
        },
        {
            name: "THAILAND ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/THAILAND.jpg "` ,
            price: "786",
        },
        {
            name: "TONAL FLOWER. ",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/TONAL FLOWER.jpg "` ,
            price: "786",
        },
        {
            name: " TRANCE",
            theme: "monotonesmail2",
            Image: `src="./assets/products/thememonotonesmail2/TRANCE.jpg "` ,
            price: "786",
        },
        // theme change
        {
            name: "ALGERIA ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/ALGERIA.jpg"` ,
            price: "786",
        },
        {
            name: "ARROW ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/ARROW.jpg"` ,
            price: "786",
        },
        {
            name: "BEENS ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BEENS.jpg "` ,
            price: "786",
        },
        {
            name: " BOLD STRIPE 2",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/BOLD STRIPE 2.jpg"` ,
            price: "786",
        },
        {
            name: " BOLD STRIPE",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BOLD STRIPE ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BROADWAY ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/BROADWAY.jpg "` ,
            price: "786",
        },
        {
            name: " CHECK 1",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECK 1.jpg "` ,
            price: "786",
        },
        {
            name: "CHECK 11 ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/CHECK 11.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 25",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/CHECK 25.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 3",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECK 3.jpg "` ,
            price: "786",
        },
        {
            name: " CHECKER",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHECKER.jpg "` ,
            price: "786",
        },
        {
            name: " CHICK CHECK",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/CHICK CHECK.jpg "` ,
            price: "786",
        },
        {
            name: " DECEMBER",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/DECEMBER.jpg "` ,
            price: "786",
        },
        {
            name: " DHAKA",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/DHAKA.jpg"` ,
            price: "786",
        },
        {
            name: "DOTTED WAVES ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/DOTTED WAVES.jpg "` ,
            price: "786",
        },
        {
            name: " EGYPT",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/EGYPT.jpg"` ,
            price: "786",
        },
        {
            name: "ETHENS ",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/ETHENS.jpg "` ,
            price: "786",
        },
        {
            name: " FASHION",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/FASHION.jpg "` ,
            price: "786",
        },
        {
            name: " GEO 2",
            theme: "mrmanmail1",
            Image: `src="./assets/products/thememrmanmail1/GEO 2.jpg "` ,
            price: "786",
        },
        {
            name: "GEO ",
            theme: "mrmanmail1",
            Image: `src=" ./assets/products/thememrmanmail1/GEO.jpg"` ,
            price: "786",
        },
        // theme change
        
        {
            name: " 3D TIME",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/3D TIME.jpg "` ,
            price: "786",
        },
        {
            name: "BAALI ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/BAALI.jpg"` ,
            price: "786",
        },
        {
            name: "BEACH STRIPE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/BEACH STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: "BOLD STRIPE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/BOLD STRIPE.jpg "` ,
            price: "786",
        },
        {
            name: " CARDS",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CARDS.jpg "` ,
            price: "786",
        },
        {
            name: "CASA ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/CASA.jpg"` ,
            price: "786",
        },
        {
            name: " CHECK 55",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/CHECK 55.jpg"` ,
            price: "786",
        },
        {
            name: "CHOCOLATE ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CHOCOLATE.jpg "` ,
            price: "786",
        },
        {
            name: "CONECTOR ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CONECTOR.jpg "` ,
            price: "786",
        },
        {
            name: "CRISS CROSS ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/CRISS CROSS.jpg "` ,
            price: "786",
        },
        {
            name: "DENIM PATCH ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/DENIM PATCH.jpg"` ,
            price: "786",
        },
        {
            name: "ETHNO ",
            theme: "mrmanmail2",
            Image: `src="./assets/products/thememrmanmail2/ETHNO.jpg "` ,
            price: "786",
        },
        {
            name: "ETHOS ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/ETHOS.jpg"` ,
            price: "786",
        },
        {
            name: "FIRST PLANE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/FIRST PLANE.jpg"` ,
            price: "786",
        },
        {
            name: "GARDEN STRIPE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/GARDEN STRIPE.jpg"` ,
            price: "786",
        },
        {
            name: " GARNET",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/GARNET.jpg"` ,
            price: "786",
        },
        {
            name: "IKET CHECK ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/IKET CHECK.jpg"` ,
            price: "786",
        },
        {
            name: "KINGRY ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/KINGRY.jpg"` ,
            price: "786",
        },
        {
            name: "KITE ",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/KITE.jpg"` ,
            price: "786",
        },
        {
            name: " MESCULINE",
            theme: "mrmanmail2",
            Image: `src=" ./assets/products/thememrmanmail2/MESCULINE.jpg"` ,
            price: "786",
        },
        // theme change
        {
            name: " AMRIA",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/AMRIA.jpg "` ,
            price: "786",
        },
        {
            name: "BIG FLOWER ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/BIG FLOWER.jpg"` ,
            price: "786",
        },
        {
            name: "BOTANICAL ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/BOTANICAL.jpg"` ,
            price: "786",
        },
        {
            name: " BUNNY",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/BUNNY.jpg "` ,
            price: "786",
        },
        {
            name: "BUTTERFLY ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/BUTTERFLY.jpg "` ,
            price: "786",
        },
        {
            name: " CAMOUFLAGE",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/CAMOUFLAGE.jpg"` ,
            price: "786",
        },
        {
            name: "CHEES BALLS ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/CHEES BALLS.jpg"` ,
            price: "786",
        },
        {
            name: " CITY STREET",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/CITY STREET.jpg "` ,
            price: "786",
        },
        {
            name: " COLLEGE GIRL",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/COLLEGE GIRL.jpg "` ,
            price: "786",
        },
        {
            name: "CONSTRUCTION ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/CONSTRUCTION.jpg "` ,
            price: "786",
        },
        {
            name: " DIAMOND",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DIAMOND.jpg"` ,
            price: "786",
        },
        {
            name: " DINO CUTE",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DINO CUTE.jpg"` ,
            price: "786",
        },
        {
            name: "DINO ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DINO.jpg "` ,
            price: "786",
        },
        {
            name: "DOT DOTS ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/DOT DOTS.jpg "` ,
            price: "786",
        },
        {
            name: "GAME DOTS ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GAME DOTS.jpg "` ,
            price: "786",
        },
        {
            name: "GARDEN EVE ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GARDEN EVE.jpg "` ,
            price: "786",
        },
        {
            name: "GIRLS GARDEN (2) ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/GIRLS GARDEN (2).jpg "` ,
            price: "786",
        },
        {
            name: "GPT0028 ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/GPT0028.jpg"` ,
            price: "786",
        },
        {
            name: "HOUNSTOOTH ",
            theme: "schoolstartmail1",
            Image: `src=" ./assets/products/themeschoolstartmail1/HOUNSTOOTH.jpg"` ,
            price: "786",
        },
        {
            name: "KIRA ",
            theme: "schoolstartmail1",
            Image: `src="./assets/products/themeschoolstartmail1/KIRA.jpg "` ,
            price: "786",
        },
        // theme change
        {
            name: "ALFA",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/ALFA.jpg "` ,
            price: "786",
        },
        {
            name: "BEACH STP ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/BEACH STP.jpg"` ,
            price: "786",
        },
        {
            name: "BIRDS",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BIRDS.jpg "` ,
            price: "786",
        },
        {
            name: "BLOSSUM ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BLOSSUM.jpg "` ,
            price: "786",
        },
        {
            name: "BOAT ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BOAT.jpg "` ,
            price: "786",
        },
        {
            name: "BUNNY BOOM ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/BUNNY BOOM.jpg "` ,
            price: "786",
        },
        {
            name: "CANDIES",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/CANDIES.jpg"` ,
            price: "786",
        },
        {
            name: "COSY ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/COSY.jpg"` ,
            price: "786",
        },
        {
            name: "CUTE BUNNY 2 ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/CUTE BUNNY 2.jpg"` ,
            price: "786",
        },
        {
            name: "DINO BABIES",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DINO BABIES.jpg "` ,
            price: "786",
        },
        {
            name: "DINO BLUE",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/DINO BLUE.jpg"` ,
            price: "786",
        },
        {
            name: "DINO KIDS ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DINO KIDS.jpg "` ,
            price: "786",
        },
        {
            name: "DUCK LINK ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/DUCK LINK.jpg "` ,
            price: "786",
        },
        {
            name: "ELEVEN ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/ELEVEN.jpg"` ,
            price: "786",
        },
        {
            name: "GRAVITY ",
            theme: "schoolstartmail2",
            Image: `src="./assets/products/themeschoolstartmail2/GRAVITY.jpg "` ,
            price: "786",
        },
        {
            name: "HEARTS ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HEARTS.jpg"` ,
            price: "786",
        },
        {
            name: "HIMALYA ",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HIMALYA.jpg"` ,
            price: "786",
        },
        {
            name: "HOOP",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/HOOP.jpg"` ,
            price: "786",
        },
        {
            name: "INVOI",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/INVOI.jpg"` ,
            price: "786",
        },
        {
            name: "KIM",
            theme: "schoolstartmail2",
            Image: `src=" ./assets/products/themeschoolstartmail2/KIM.jpg"` ,
            price: "786",
        },
 
    ];

myProducts.forEach((prod , index) => {
    show += ` <div class="productDetails  relative flex-shrink-0 w-[23.5rem] sm:w-[22rem] h-[40rem] font-sans uppercase font-bold p-2 text-[2rem] sm:text-[1.5vw] bg-[#f2e9e4] flex gap-2 flex-col justify-around items-center hover:border-gray-700 hover:border-[3px] hover:shadow-2xl">
    <span class="material-symbols-outlined absolute right-0 top-0 cursor-pointer ">pan_zoom</span>
    <h1 class="productName capitalize font-bold text-[2.5rem] sm:text-[1.5vw]">${prod.name}</h1>
    <img ${prod.Image}  class="productImage  w-[98%] m-3">
    <div class="line    w-[85%] h-[2px] bg-gray-500/30"></div>
    <h2 class="price ">Rs.${prod.price}</h2>
    <button class="addtoCart    w-full p-2 text-white  bg-gray-600 hover:bg-gray-700 rounded-md font-semibold">Add</button>
</div>`;


allProduts.innerHTML = show;

// expand product image
var blackshadow = document.querySelector(".blackshadow");
var productDetails = document.querySelectorAll(".productDetails");
var ExpandThis = document.querySelector(".ExpandThis");

var blackVariable = "";
var allExpands = Array.from(productDetails);



allExpands.forEach((singleExpand, index)=> {
    // if click expand ICON
    singleExpand.addEventListener("click", function (e) {

      if (e.target.classList.contains("material-symbols-outlined")) {
        blackshadow.style.transform = "scale(1)";
        ExpandThis.src = `${singleExpand.children[2].src}`;
        }
        // if click ADD button 
      if (e.target.classList.contains("addtoCart")) {
          
          var Cart = document.querySelector(".Cart");
          var xIcon = document.querySelector(".xIcon");
          
          //firsT TIME ADDING INTO CART 1️⃣
          
          blankCart += `<div class="cartItem  w-full h-[10rem] rounded-2xl my-6 bg-gray-400/40 flex justify-around items-center">
          <img src=${singleExpand.children[2].src}  class="cartImage   h-[80%] object-cover">
          <h1 class="cartItemName     text-1rem md:text-[2rem] w-[10rem]   text-wrap">${singleExpand.querySelector(".productName").innerText}</h1>
          <h2 class="cartprice     text-1rem md:text-[2rem]">${singleExpand.querySelector(".price").innerText}</h2>
          <button data-Id="${index}" class="deleteBtn text-[1rem] md:text-[2rem] p-2 bg-red-500 rounded-lg  hover:bg-red-600 hover:shadow-lg hover:text-white active:text-[1.8rem] cursor-pointer">Delete</button>
          </div>`
          
         successMessage();
            xIcon.addEventListener("click", function () {
                showCart.style.transform = "scale(0)";
                var b = ShowData.children.length;
                countCartItems.innerText = b;
            })
        }
        
        ShowData.innerHTML = blankCart;
        // localstorage
        function setitem() {
            localStorage.setItem("data", blankCart);
        };
        setitem();

        // local storage for items No
        var a = ShowData.children.length;
        countCartItems.innerText = a;
        //  var countcartVar = countCartItems.innerText;

        function setitemNo() {
            localStorage.setItem("itemsNo", a);
        };setitemNo();

    //    🛒Cart
        Cart.addEventListener("click", function () {
            showCart.style.transform = "scale(1)";

          })
        
        countCartItems.style.backgroundColor = "red";
        
     
    })
});

});

// new function for match category in 2nd container

function matchCategory() {
    var match = document.querySelectorAll(".singleCategory");
    var matchArray = Array.from(match);
    var matchingword = "";

    var ShowAll = document.querySelector(".ShowAll")
    
   
    matchArray.forEach(word => {
        word.addEventListener("click", function () {
           
                                                                                           
            ShowAll.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.295)";
            ShowAll.style.display = "inline-block";
           

   // clickedButton background and color.(05lines)        
            if (clickedButton) {
                clickedButton.classList.remove("clickedbutton")
            }

            word.classList.add("clickedbutton");
            clickedButton = word; //globle variable in this func

    
       
            
         
            
            
            var matchingword = word.innerText;
            var a =`${matchingword.toLowerCase()}`;
            var matchingwordArray = a.split(" ").join("");
         
   
   
            var blankArray = "";
            var copyofmyProducts = myProducts;
            var filteredArray = copyofmyProducts.filter(product =>   product.theme.startsWith(matchingwordArray));
            
            filteredArray.forEach(filteredElem => {
                blankArray += `<div class="productDetails  relative flex-shrink-0 w-[23.5rem] sm:w-[22rem] h-[40rem] font-sans uppercase font-bold p-2 text-[2rem] sm:text-[1.5vw] bg-[#f2e9e4] flex gap-2 flex-col justify-around items-center hover:border-gray-700 hover:border-[3px] hover:shadow-2xl">
                <span class="material-symbols-outlined absolute right-0 top-0 cursor-pointer ">pan_zoom</span>
                <h1 class="productName capitalize font-bold text-[2.5rem] sm:text-[1.5vw]">${filteredElem.name}</h1>
                <img ${filteredElem.Image}  class="productImage  w-[98%] m-3">
                <div class="line    w-[85%] h-[2px] bg-gray-500/30"></div>
                <h2 class="price ">$${filteredElem.price}</h2>
                <button class="addtoCart    w-full p-2 text-white  bg-gray-600 hover:bg-gray-700 rounded-md font-semibold">Add</button>
            </div>`
            });

// background pink keley when click on cate product name
            allProduts.style.backgroundColor = "#f5676582";

            allProduts.innerHTML = blankArray;
            var ExpandThisAgain = document.querySelector(".ExpandThis");
            var againblackshadow = document.querySelector(".blackshadow");

            var againproductDetails = document.querySelectorAll(".productDetails");
            var filterExpands = Array.from(againproductDetails);
           
            filterExpands.forEach(expandagain => {
                expandagain.addEventListener("click", function (e) {
                  
                    if (e.target.classList.contains("material-symbols-outlined")) {
                    againblackshadow.style.transform = "scale(1)";
                    ExpandThisAgain.src = `${expandagain.children[2].src}`;
                    }
                    if (e.target.classList.contains("addtoCart")) {
                        var showCart2 = document.querySelector(".showCart");
                        var Cart2 = document.querySelector(".Cart");
                        var xIcon2 = document.querySelector(".xIcon");
                        var ShowData2 = document.querySelector(".ShowData");

               //2nd TIME ADDING INTO CART 2️⃣
                        
                          blankCart += `<div class="cartItem    w-full h-[10rem] rounded-2xl my-6 bg-gray-400/40 flex justify-around items-center">
                          <img src=${expandagain.children[2].src}  class="cartImage   h-[80%] object-cover">
                          <h1 class="cartItemName     text-1rem md:text-[2rem] w-[10rem]  text-wrap">${expandagain.querySelector(".productName").innerText}</h1>
                          <h2 class="cartprice     text-1rem md:text-[2rem]">${expandagain.querySelector(".price").innerText}</h2>
                          <button class="deleteBtn text-[1rem] md:text-[2rem] p-2 bg-red-500 rounded-lg  hover:bg-red-600 hover:shadow-lg hover:text-white active:text-[1.8rem] cursor-pointer">Delete</button>
                          </div> `;
                          
                          ShowData2.innerHTML = blankCart;
                          var c = ShowData2.children.length;
                          countCartItems.innerText = c;
                       
                          
                          countCartItems.style.backgroundColor = "red";

                           //    🛒Cart
                            Cart2.addEventListener("click", function () {
                                showCart2.style.transform = "scale(1)";
                                ShowData2.innerHTML = blankCart;


                            })
                            //   ❌Minimize
                            xIcon2.addEventListener("click", function () {
                                showCart2.style.transform = "scale(0)";
                                var b = ShowData.children.length;
                                countCartItems.innerText = b;
                            })

// delte btn to remove item from cart 🗑️
                           

                            var allDeletedBtn = document.querySelectorAll(".deleteBtn");
                            var arrayofDletedBtns = Array.from(allDeletedBtn);
                            
                            arrayofDletedBtns.forEach(dltBtn => {
                                dltBtn.addEventListener("click", function (e) {
                                    console.log("deleted");
                                    e.target.parentElement.remove();
                                    var b = ShowData.children.length;
                                    countCartItems.innerText = b;
                                    blankCart = ShowData.innerHTML;

                                })
                            });

                      }
              
                })
            });

        })
    });

  
// ShowAll
    ShowAll.addEventListener("click", function () {
        showProduct();

        allProduts.style.backgroundColor = "white";
        if (clickedButton) {
            clickedButton.classList.remove("clickedbutton")
        }

        setTimeout(() => {
            ShowAll.style.display = "none";
        }, 1000);
    })


    



}
matchCategory()


}
showProduct();

var blackshadow = document.querySelector(".blackshadow");
var closeProduct = document.querySelector(".fixedToExpand span");
closeProduct.addEventListener("click", function () {
    blackshadow.style.transform = "scale(0)";
})


var showCartDIV = document.querySelector(".showCartDIV");

showCartDIV.addEventListener("click", function (e) {
    if (e.target.classList.contains('deleteBtn')) {

        e.target.parentElement.remove();
        var b = ShowData.children.length;
        countCartItems.innerText = b;
        blankCart = ShowData.innerHTML;   
        
        function setitem() {
            localStorage.setItem("data", blankCart);
        };
        setitem();


        var a = ShowData.children.length;
        countCartItems.innerText = a;
        //  var countcartVar = countCartItems.innerText;

        function setitemNo() {
            localStorage.setItem("itemsNo", a);
        };setitemNo();
    }
    
})



}
category()



function openANDcloseCART() {
    
    var Cart = document.querySelector(".Cart");
    var showCart = document.querySelector(".showCart");
    var xIcon = document.querySelector(".xIcon");
   
    Cart.addEventListener("click", function () {
               showCart.style.transform = "scale(1)";
             })
    xIcon.addEventListener("click", function () {
               showCart.style.transform = "scale(0)";
             })
}
openANDcloseCART()
          


function SendFinalEmail() {
    let sendBtn = document.querySelector(".SendEmail");
    let ShowData = document.querySelector(".ShowData");
    let showCart = document.querySelector(".showCart");
    let yourMessage = document.querySelector(".yourMessage");

    let FinalString = ""

    sendBtn.addEventListener("click", function(){
        
        // showdata main kia hy
        let InsideShowData = ShowData.children;

        // show data mai jo hy us ka array bnaty han
        let ArrayOfShowData = Array.from(InsideShowData);
        ArrayOfShowData.forEach((element, index) => {
            let myImage = element.querySelector("img");
            let myh1 = element.querySelector("h1");
            let myh2 = element.querySelector("h2");

            let stringofData = `${index + 1}:  ${myImage.src} 
            ${myh1.innerText} 
            ${myh2.innerText}
`;
            FinalString += stringofData;
        });
        
        yourMessage.value = FinalString;
        yourMessage.style.fontSize = "15px";

        showCart.style.transform = "scale(0)"; 
        
        sendBtn.setAttribute("href", "#forthContainer")
    })
    

};
SendFinalEmail();



const hideUserGuild = ()=>{
    let UserGuid= document.querySelector(".UserGuid");
    UserGuid.style.transform = "scale(0)"
}