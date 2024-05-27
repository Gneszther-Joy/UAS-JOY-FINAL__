//Fungsi untuk melakukan scroll ke bagian bawah halaman
//function scrollToBottom() {
    //window.scrollTo({
        //top: document.body.scrollHeight;
        //behavior: 'smooth'
    //});
//}




const scrollButton = document.getElementById('scrollButton');

  scrollButton.addEventListener('click', () => {
    const onePageHeight = window.innerHeight; // Get the height of one viewport

    // Handle potential edge cases (content shorter than one viewport):
    const contentHeight = document.body.scrollHeight;
    const scrollAmount = Math.min(onePageHeight, contentHeight); // Scroll by either one page or content height

    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth'
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuEl = document.querySelector(".menu");
    const logoEl = document.querySelector(".logo");
    const header = document.querySelector('header');

    // Function to update UI based on scroll position
    function updateUI() {
        if (window.scrollY > 50) {
            header.classList.add('menu-hidden');
            logoEl.style.backgroundColor = "orange";
        } else {
            header.classList.remove('menu-hidden');
            logoEl.style.backgroundColor = "white";
        }
    }

    updateUI();

    // Tambahkan event listener untuk hover pada navbar
    header.addEventListener('mouseenter', function() {
        header.classList.add('nav-hovered'); // Tambahkan kelas saat hover
    });

    header.addEventListener('mouseleave', function() {
        header.classList.remove('nav-hovered'); // Hapus kelas saat tidak hover
        if (window.scrollY > 50) {
            header.classList.add('menu-hidden');
        }
    });

    window.addEventListener('scroll', function() {
        updateUI(); // Update UI based on scroll position
    });

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;

        // Update UI based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.add('menu-hidden');
            logoEl.style.backgroundColor = "orange";
        } else if (currentScrollY < lastScrollY && currentScrollY <= 50) {
            header.classList.remove('menu-hidden');
            logoEl.style.backgroundColor = "white";
        }

        lastScrollY = currentScrollY;
    });
});

// window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');
//     var menu = document.querySelector('.menu');
//     var logoLink = document.querySelector('.logo-link');

//     if (window.scrollY > 50) { // Jika posisi scroll lebih dari 50px
//         header.classList.add('menu-hidden'); // Tambahkan kelas untuk menyembunyikan menu dan mengubah logo
//     } else {
//         header.classList.remove('menu-hidden'); // Hapus kelas untuk menampilkan menu dan mengubah logo kembali
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById('h1');
    var tagline = document.getElementById('afterdelay-tagline');

    // Tambahkan kelas 'visible' ke heading dan tagline segera (0ms)
    setTimeout(function() {
        heading.classList.add('visible');
    }, 0); // Setelah penundaan 0ms, tambahkan kelas 'visible'

    setTimeout(function() {
        tagline.classList.add('visible');
    }, 500); // Setelah penundaan 0ms, tambahkan kelas 'visible'
});

document.addEventListener("DOMContentLoaded", function() {
    var tentang = document.getElementById('afterdelay-h2');

    // Fungsi untuk memeriksa apakah elemen berada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Buat observer untuk heading di bagian tentang
    const aboutHeadingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-h2');
                aboutHeadingObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
            }
        });
    });

    // Mulai observasi pada elemen h2 di bagian tentang
    aboutHeadingObserver.observe(tentang);
});


document.addEventListener("DOMContentLoaded", function() {
  var produk = document.getElementById('afterdelay-produk');

  // Fungsi untuk memeriksa apakah elemen berada dalam viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Buat observer untuk heading di bagian produk
  const produkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('visible-lokasi');
          }, 500);
              produkObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
          }
      });
  });

  // Mulai observasi pada elemen h2 di bagian produk
  produkObserver.observe(produk);
});

document.addEventListener("DOMContentLoaded", function() {
  var lokasi = document.getElementById('afterdelay-lokasi');

  // Fungsi untuk memeriksa apakah elemen berada dalam viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Buat observer untuk heading di bagian lokasi
  const lokasiObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('visible-lokasi');
              }, 500); // Tambahkan delay 1 detik sebelum menambahkan kelas
              lokasiObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
          }
      });
  });

  // Mulai observasi pada elemen h2 di bagian lokasi
  lokasiObserver.observe(lokasi);
});


document.addEventListener("DOMContentLoaded", function() {
    var lokasi2 = document.getElementById('afterdelay-lokasi2');
  
    // Fungsi untuk memeriksa apakah elemen berada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    // Buat observer untuk heading di bagian lokasi
    const lokasiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible-lokasi');
                }, 500); // Tambahkan delay 1 detik sebelum menambahkan kelas
                lokasiObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
            }
        });
    });
  
    // Mulai observasi pada elemen h2 di bagian lokasi
    lokasiObserver.observe(lokasi2);
  });


  document.addEventListener("DOMContentLoaded", function() {
    var lokasi3 = document.getElementById('afterdelay-lokasi3');
  
    // Fungsi untuk memeriksa apakah elemen berada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    // Buat observer untuk heading di bagian lokasi
    const lokasiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible-lokasi');
                }, 500); // Tambahkan delay 1 detik sebelum menambahkan kelas
                lokasiObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
            }
        });
    });
  
    // Mulai observasi pada elemen h2 di bagian lokasi
    lokasiObserver.observe(lokasi3);
  });
// const state = {};
// const carouselList = document.querySelector(".card_carousel__list");
// const carouselItems = document.querySelectorAll(".card_carousel__item");
// const elems = Array.from(carouselItems);

// carouselList.addEventListener("click", function (event) {
//   var newActive = event.target;
//   var isItem = newActive.closest(".card_carousel__item");

//   if (
//     !isItem ||
//     newActive.classList.contains("card_carousel__item_active")
//   ) {
//     return;
//   }

//   update(newActive);
// });

// const update = function (newActive) {
//   const newActivePos = newActive.dataset.pos;

//   const current = elems.find((elem) => elem.dataset.pos == 0);
//   const prev = elems.find((elem) => elem.dataset.pos == -1);
//   const next = elems.find((elem) => elem.dataset.pos == 1);
//   const first = elems.find((elem) => elem.dataset.pos == -2);
//   const last = elems.find((elem) => elem.dataset.pos == 2);

//   current.classList.remove("_carousel__item_active");

//   [current, prev, next, first, last].forEach((item) => {
//     var itemPos = item.dataset.pos;

//     item.dataset.pos = getPos(itemPos, newActivePos);
//   });
// };

// const getPos = function (current, active) {
//   const diff = current - active;

//   if (Math.abs(current - active) > 2) {
//     return -current;
//   }

//   return diff;
// };


// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactForm');

//   form.addEventListener('mousedown', (e) => {
//     if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') {
//       return;
//     }

//     let shiftX = e.clientX - form.getBoundingClientRect().left;
//     let shiftY = e.clientY - form.getBoundingClientRect().top;

//     const moveAt = (pageX, pageY) => {
//       form.style.left = pageX - shiftX + 'px';
//       form.style.top = pageY - shiftY + 'px';
//     };

//     const onMouseMove = (event) => {
//       moveAt(event.pageX, event.pageY);
//     };

//     document.addEventListener('mousemove', onMouseMove);

//     form.onmouseup = () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       form.onmouseup = null;
//     };
//   });

//   form.ondragstart = () => {
//     return false;
//   };
// });

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.card_carousel__item');

  items.forEach(function (item) {
      item.addEventListener('click', function () {
          const currentPosition = parseInt(item.getAttribute('data-pos'));
          const nextPosition = 0;
          const diff = currentPosition - nextPosition;
          items.forEach(function (otherItem) {
              let otherPosition = parseInt(otherItem.getAttribute('data-pos'));
              let newPosition = otherPosition - diff;
              if (newPosition < -2) {
                  newPosition += 5;
              } else if (newPosition > 2) {
                  newPosition -= 5;
              }
              otherItem.setAttribute('data-pos', newPosition);
              updatePositionStyle(otherItem);
          });
      });
  });

  function updatePositionStyle(item) {
      const position = parseInt(item.getAttribute('data-pos'));
      item.style.setProperty('--translate', position * 110 + 'px');
      if (Math.abs(position) === 1) {
          item.style.setProperty('--scale', '0.7');
          item.style.setProperty('--blur', '1px');
          item.style.setProperty('--grayscale', '10%');
      } else if (Math.abs(position) === 2) {
          item.style.setProperty('--scale', '0.6');
          item.style.setProperty('--blur', '3px');
          item.style.setProperty('--grayscale', '20%');
      } else {
          item.style.setProperty('--scale', '1');
          item.style.setProperty('--blur', '0');
          item.style.setProperty('--grayscale', '0');
      }
  }

  function updatePositions() {
      items.forEach(function (item) {
          updatePositionStyle(item);
      });
  }

  updatePositions();
});






// let lastScrollY = window.scrollY;
//       const maxVal = 10; //change this value for speed
//       const minVal = 0;
//       const increment = 5;
//       let val = 0;

//       const menuEl = document.querySelector(".menu");
//       const logoEl = document.querySelector(".logo");
//       const logoImg1El = document.querySelector(".logo-image-1");
//       const logoImg2El = document.querySelector(".logo-image-2");

//       function updateUI() {
//         const isMaxVal = val === maxVal;
//         const isMinVal = val === minVal;

//         menuEl.style.transform = `translateY(${isMaxVal ? "-100px" : isMinVal ? "0" : ""})`;
//         logoEl.style.backgroundColor = isMaxVal
//           ? "orange"
//           : isMinVal
//             ? "white"
//             : "";
//         logoImg1El.style.opacity = isMaxVal ? 1 : isMinVal ? 0 : "";
//         logoImg2El.style.opacity = isMinVal ? 1 : isMaxVal ? 0 : "";
//       }
//       window.addEventListener("scroll", () => {
//         let currentScrollY = window.scrollY;

//         // calc the difference in scroll position
//         let diff = currentScrollY - lastScrollY;

//         // determine the number + or -
//         let change = Math.floor(diff / increment);

//         // update value based on scroll direction
//         if (change !== 0) {
//           val += change;

//           // ensure val is between the value range
//           val = Math.max(minVal, Math.min(maxVal, val));

//           lastScrollY += change * increment;
//           updateUI();
//         }
//       });

document.addEventListener("DOMContentLoaded", function() {
    var hubungi = document.getElementById('afterdelay-hub');

    // Fungsi untuk memeriksa apakah elemen berada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Buat observer untuk heading di bagian tentang
    const aboutHeadingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-h2');
                aboutHeadingObserver.unobserve(entry.target); // Hentikan observasi setelah menambahkan kelas
            }
        });
    });

    // Mulai observasi pada elemen h2 di bagian tentang
    aboutHeadingObserver.observe(hubungi);
});

// // Fungsi untuk menambahkan kelas 'visible' setelah delay
// function revealLada() {
//     document.getElementById('lada').classList.add('visible');
//   }
  
//   // Menentukan tinggi lada
//   var ladaHeight = document.getElementById('lada').offsetHeight;
  
//   // Mengaktifkan efek parallax saat scroll
//   window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
  
//     if (scrollPosition > ladaHeight) {
//       document.getElementById('lada').classList.add('parallax');
//     } else {
//       document.getElementById('lada').classList.remove('parallax');
//     }
//   });
  
//   // Tunda muncul untuk gambar lada
//   setTimeout(revealLada, 1000); // Ganti angka 2000 dengan milidetik yang diinginkan


// // Mendapatkan elemen lada
// var lada = document.getElementById('lada');

// // Fungsi untuk mengubah posisi lada berdasarkan scroll
// function parallaxEffect() {
//   var scrollPosition = window.pageYOffset; // Mendapatkan posisi scroll pada sumbu y
//   lada.style.transform = 'translateY(' + scrollPosition * 0.01 + 'px)'; // Mengubah posisi lada
// }


// document.addEventListener("DOMContentLoaded", function() {
//     let lastScrollTop = 0;
//     const lada = document.querySelector('.lada img');

//     window.addEventListener('scroll', function() {
//       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         // Scroll down
//         lada.style.transform = `translateY(${scrollTop / 1}px)`;
//       } else {
//         // Scroll up
//         lada.style.transform = `translateY(${-scrollTop / 1}px)`;
//       }
      
//       lastScrollTop = scrollTop;
//     });
//   });
///////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', () => {
//     const lada = document.querySelector('.lada img');
//     let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     window.addEventListener('scroll', () => {
//         let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         let scrollDistance = Math.abs(currentScrollTop - lastScrollTop);

//         if (scrollDistance >= 5) {
//             if (currentScrollTop > lastScrollTop) {
//                 // Scrolling down
//                 lada.style.transform = `translateY(${parseInt(lada.style.transform.replace('translateY(', '')) - 5}px)`;
//             } else {
//                 // Scrolling up
//                 lada.style.transform = `translateY(${parseInt(lada.style.transform.replace('translateY(', '')) + 5}px)`;
//             }
//             lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
//         }
//     });
// });
/////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', () => {
//     const lada = document.querySelector('.lada img');
//     let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     window.addEventListener('scroll', () => {
//         let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         let scrollDistance = Math.abs(currentScrollTop - lastScrollTop);

//         if (scrollDistance >= 30) {
//             if (currentScrollTop > lastScrollTop) {
//                 // Scrolling down
//                 let currentTransform = getComputedStyle(lada).transform;
//                 if (currentTransform !== 'none') {
//                     let matrix = new WebKitCSSMatrix(currentTransform);
//                     let translateY = matrix.m42; // Get the current translateY value
//                     lada.style.transform = `translateY(${translateY - 30}px)`;
//                 } else {
//                     lada.style.transform = 'translateY(-20px)';
//                 }
//             } else {
//                 // Scrolling up
//                 let currentTransform = getComputedStyle(lada).transform;
//                 if (currentTransform !== 'none') {
//                     let matrix = new WebKitCSSMatrix(currentTransform);
//                     let translateY = matrix.m42; // Get the current translateY value
//                     lada.style.transform = `translateY(${translateY + 30}px)`;
//                 } else {
//                     lada.style.transform = 'translateY(30px)';
//                 }
//             }
//             lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const lada = document.querySelector('.lada img');
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let isMovedDown = false; // To keep track if the image has moved down

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop + 2) {
            // Scrolling down
            if (isMovedDown) {
                lada.style.transform = 'translateY(0px)';
                isMovedDown = false;
            }
        } else if (currentScrollTop < lastScrollTop - 2) {
            // Scrolling up
            if (!isMovedDown) {
                lada.style.transform = 'translateY(30px)';
                isMovedDown = true;
            }
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const lada = document.querySelector('.jiucai img');
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let isMovedDown = false; // To keep track if the image has moved down

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop + 2) {
            // Scrolling down
            if (isMovedDown) {
                lada.style.transform = 'translateY(0px)';
                isMovedDown = false;
            }
        } else if (currentScrollTop < lastScrollTop - 2) {
            // Scrolling up
            if (!isMovedDown) {
                lada.style.transform = 'translateY(30px)';
                isMovedDown = true;
            }
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
});

