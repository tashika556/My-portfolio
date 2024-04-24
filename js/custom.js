$(document).ready(function () {
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
  $(".slider_country").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    draggable: true,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Scroll animation for button
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

// Counter animation
var a = 0;
$(window).scroll(function () {
  var e = $("#counter-box").offset().top - window.innerHeight;
  if (a === 0 && $(window).scrollTop() > e) {
    $(".counter").each(function () {
      var e = $(this),
        t = e.attr("data-number");
      $({ countNum: e.text() }).animate(
        {
          countNum: t,
        },
        {
          duration: 850,
          easing: "swing",
          step: function () {
            e.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            e.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
        }
      );
    });
    a = 1;
  }
});

// Modal functionality
$(".open").click(function () {
  var postId = $(this).data("post-id");
  var modalContent = $("#modalContent-" + postId);

  $("#modalOverlay").show().addClass("modal-open");
  modalContent.show();
});

$(document).on("click", function (event) {
  if (!$(event.target).closest("#modalContent-ab, .open").length) {
    closeModal();
  }
});

$(".closeModal").click(function () {
  closeModal();
});

function closeModal() {
  var modal = $("#modalOverlay");
  modal.removeClass("modal-open");

  $(".modal-content").hide();

  setTimeout(function () {
    modal.hide();
  }, 200);
}

// Dark theme
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Slick slider and other UI functionality

// Scroll to top button functionality
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Fancybox gallery
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  buttons: ["slideShow", "fullScreen", "thumbs", "close"],
  afterShow: function (instance, current) {
    instance.$refs.container.append(
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="Next"></button>'
    );
    instance.$refs.container.append(
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="Previous"></button>'
    );

    $("[data-fancybox-next]").on("click", function () {
      instance.next();
    });

    $("[data-fancybox-prev]").on("click", function () {
      instance.previous();
    });
  },
});

// slide up end
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      if (inputValue.trim() !== "") {
        setTodos([...todos, inputValue]);
      }
    }
    setInputValue("");
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  const removeItem = (index) => {
    const updatedTodos = todos.filter((item, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={inputChange} />
        <button type="submit"> {editIndex !== null ? "Edit" : "Add"}</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>
              {editIndex === index ? "Cancel" : "Edit"}
            </button>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [todos, setTodo] = useState([]);
//   const [inputValue, setInputValue] = useState();
//   const [editIndex, setEditIndex] = useState(null);

//   const inputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       const updateEdit = [...todos];
//       updateEdit[editIndex] = inputValue;
//       setTodo(updateEdit);
//       setEditIndex(null);
//     } else {
//       if (inputValue.trim() !== "") {
//         setTodo([...todos, inputValue]);
//       }
//     }

//     setInputValue("");
//   };

//   const removeItem = (index) => {
//     const updateRemove = todos.filter((item, i) => i !== index);
//     setTodo(updateRemove);
//   };
//   const editItem = (index) => {
//     setEditIndex(index);
//     setInputValue(todos[index]);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={inputChange} value={inputValue} />
//         <button type="submit"> {editIndex !== null ? "edit" : "add"} </button>
//       </form>
//       <ul>
//         {todos.map((item, index) => {
//           return (
//             <li key={index}>
//               {item}
//               <button onClick={() => editItem(index)}>
//                 {editIndex === index ? "cancel" : "edit"}
//               </button>
//               <button onClick={() => removeItem(index)}>remove</button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;
