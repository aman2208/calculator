$( document ).ready(function() {
      $(".btn-default").click(function(){
          document.getElementById('textBox').value = document.getElementById('textBox').value +  $(this).text();
    });

    document.getElementById('btnDelete').addEventListener('click', function(){
      var expression = document.getElementById('textBox').value;
      expression =  expression.slice(0, -1);
        document.getElementById("textBox").value = expression;
    });

    document.getElementById('btnEquals').addEventListener('click', function(){
      var result = document.getElementById('textBox').value;
      result = math.eval(result);
      document.getElementById("textBox").value = result;
    });
});
