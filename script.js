var calculator = new Vue ({
    el : '#calcu',
    data : {
        var1 : "",
        var2 : "",
        result : "",
        mathExpression :""
    },
    methods :{
        clearValues : function(){
            this.var1 = "",
            this.var2 = "",
            this.result = ""
        },

        appendToDisplay(value) {
            this.mathExpression += value;
          },
          clearDisplay() {
            this.mathExpression = '';
          },

          calculateResult() {
            try {
              const result = eval(this.mathExpression);
              this.mathExpression = result.toString();
            } catch (error) {
              this.mathExpression = 'Error';
            }
          }
    }
});