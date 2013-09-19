/* learning roject to read and present Highrise tasks
Simon Appleton */

// xmlDoc = $.parseXML( xml )

var url = "https://workcircle.highrisehq.com/tasks/upcoming.xml";
tasks = $.parseXML(url);
console.log(tasks);
(function(){

    "use strict";

    // variables we need to use throughout the app get declared here

    function getTasks(){
    	var url = "https://workcircle.highrisehq.com/tasks/upcoming.xml";
		tasks = $.parseXML(url);
		console.log(tasks);

    }


    // initialise the web app
    function init() {
    	getTasks();

    }




    // start when the page has loaded
    init();

})();
