

var canvas = document.getElementById('planet')
var homeContainer = document.getElementById('home-container')

function scroller(){
    canvas.style.position = "absolute";
    canvas.style.right = homeContainer.scrollTop.toString() + "px"
}

//different modals
var cancerBlake = document.getElementById('blakeModal')
var offWhite = document.getElementById('offwhiteModal')
var arrians = document.getElementById("arriansModal")
var sah = document.getElementById('sahModal')

//id triggers
var cancerBlakeTrigger = document.getElementById('blakeTrigger')
var offWhiteTrigger = document.getElementById('offwhiteTrigger')
var arriansTrigger = document.getElementById('lairTrigger')
var sahTrigger = document.getElementById('sahTrigger')

function workModals(){
    cancerBlakeTrigger.onclick = function(){
        cancerBlake.style.display = "block"
        document.getElementById("work-body").style.overflow = "hidden"
    }
    
    cancerBlake.onclick = function(event){
        if(event.target == cancerBlake){
            cancerBlake.style.display = "none"
            document.getElementById("work-body").style.overflow = "scroll"
        }
    }

    offWhiteTrigger.onclick = function(){
        offWhite.style.display = "block"
        document.getElementById("work-body").style.overflow = "hidden"
    }
    
    offWhite.onclick = function(event){
        if(event.target == offWhite){
            offWhite.style.display = "none"
            document.getElementById("work-body").style.overflow = "scroll"
        }
    }

    arriansTrigger.onclick = function(){
        arrians.style.display = "block"
        document.getElementById("work-body").style.overflow = "hidden"
    }
    
    arrians.onclick = function(event){
        if(event.target == arrians){
            arrians.style.display = "none"
            document.getElementById("work-body").style.overflow = "scroll"
        }
    }

    sahTrigger.onclick = function(){
        sah.style.display = "block"
        document.getElementById("work-body").style.overflow = "hidden"
    }
    
    sah.onclick = function(event){
        if(event.target == sah){
            sah.style.display = "none"
            document.getElementById("work-body").style.overflow = "scroll"
        }
    }


}

workModals()