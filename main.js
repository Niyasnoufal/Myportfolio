const menu = document.querySelector(".menu");
const closeNav = document.querySelector(".close");
const mobileNav = document.querySelector(".mobileNavbar");
const myName = document.getElementById("myName");
const list = document.querySelector(".list");
const hr = document.querySelector(".bottomline");

// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// next.addEventListener("click", () => {
//     let projectItem = document.querySelectorAll(".projectItem");
    
//     document.querySelector(".projectContainerSlide").appendChild(projectItem[0])
// })

// prev.addEventListener("click", () => {
//     let projectItem = document.querySelectorAll(".projectItem");
//     document.querySelector(".projectContainerSlide").prepend(projectItem[projectItem.length - 1])
// })





document.addEventListener("DOMContentLoaded", (e) => {
    const circle = document.querySelectorAll(".circle")
    circle.forEach((progress) => {
     var deg = 0
     const targetedDegree = parseInt(progress.getAttribute("data-degree"))
     const color = progress.getAttribute("data-color")
     const number = progress.querySelector(".number")

    const interval = setInterval (() => {
     deg += 1
     if(deg > targetedDegree) {
         clearInterval(interval);
         return;
     }
     progress.style.background = `conic-gradient(${color} ${deg}%, #222 0%)`;
     number.textContent = `${deg}%`
    }, 80)
    })
 })


menu.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.style.display = "flex";
    mobileNav.style.right = "0";
    mobileNav.style.opacity = "1";
})

closeNav.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.style.display = "none"
    mobileNav.style.right = "-100%";
    mobileNav.style.opacity = "0"; 
})




// const names = ["Akatsuki Member", "Almighty Push", "Ware Ware wa Pain"]
// let index = 0;

//   const timeOut=() => {

//     setTimeout(() => {
//         myName.textContent = "Pain"
//     }, 0)

//     setTimeout(() => {
//         myName.textContent = "Akatsuki leader"
//     }, 4000)

//     setTimeout(() => {
//         myName.textContent = "Ware ware wa pain"
//     }, 8000)

//   }  

//   timeOut()
//   setInterval(timeOut, 12000)


//   const para = document.querySelector(".myself")


//   const observer = new IntersectionObserver(entires => {
//         entires.forEach(entry => {
//             entry.target.classList.toggle("show")
//             if(entry.isIntersecting){
//                     observer.unobserve(entry.target)
//             }   
//         }),
//         {
//             threshold: 1,
//         }
//   })

//   para.forEach(item => {
//     observer.observe(item)
//   })











// const hamburger = document.querySelector(".menu");
// const closeNav = document.querySelector(".close");
// const sidebar = document.querySelector(".sidebar");
// const lists = document.querySelector(".lists")

// // Show sidebar on click of hamburger menu
// hamburger.addEventListener("click", () => {
//     sidebar.classList.add("active");
//     lists.style.display = "block"
//     hamburger.style.display = "none"; // Hide hamburger when sidebar is open
// });

// // Close sidebar on click of close button
// closeNav.addEventListener("click", () => {
//     sidebar.classList.remove("active");
//     hamburger.style.display = "block"; // Show hamburger when sidebar is closed
// });

// // Ensure responsiveness on window resize
// window.addEventListener("resize", function () {
//     if (window.innerWidth > 768) {
//         sidebar.classList.remove("active");
//         hamburger.style.display = "none"; // Hide hamburger on larger screens
//         lists.style.display = "flex";
//     }
// });
