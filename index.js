$(document).ready(() => {
  $('#cakeForm').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      cake: {
        required: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      email: {
        email: "Invalid email"
      }
    },

    submitHandler: () => {
      $.ajax({
        type: 'POST',
        url: $("#cakeForm").attr("action"),
        data: $("#cakeForm").serialize(),
        success: function(response) {
          console.log(response)
          $("#cakeForm").trigger("reset");
        },
        error: function(error) {
          console.log(error)
        }
      });
    }
  });
});

