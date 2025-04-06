 window.onload = function it(){
    var me = {
        name: "me",
        age: 25,
        greet: function() {
            navigator.clipboard.writeText("Hello, my name is " + this.name);
        },
    };

    return me;
}