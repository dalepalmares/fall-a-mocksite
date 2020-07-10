const img = document.querySelector("#img");
const progressValues = document.querySelectorAll(".progress-value");
let counter = 0;

var waypoint = new Waypoint({
  element: img,
  handler: function () {
    progressValues.forEach((value) => {
      value.classList.add("start");
    });

    if (counter != 4) {
      $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 3500,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now) + "%");
              },
            }
          );

        counter++;
      });
    }
  },
  offset: 100,
});
