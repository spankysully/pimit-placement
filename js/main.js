var width = $(window).width();

$(document).ready(function(){


    $(window).resize(function() {
        width = $(window).width();
    });

    $(".popup span.close").click(function(){
        $(".popup").hide();
    });

    $("section > div").click(function(e){
        $(".popup").hide();
        $("div").removeClass('active');
        $(this).addClass('active');
        let deviceType = $(this).attr('class').split(' ')[0];
        loadSettings($(this).parent().attr('id'), $(this).attr('data-channel'), deviceType);
    });
});

function loadSettings(parent, trigger, deviceType){
    $('aside ul').html('');
    $(`<li style='display: none' class='header'><span class='close'>X</span>CUSTOMIZE<span id='deviceType'>${deviceType}</span></li>`).appendTo('aside ul').slideDown('fast');
    console.log(`parent: ${parent}, channel: ${trigger}`)
    for (let [key, value] of Object.entries(settings[parent][trigger])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }

    if (width < 1150){
        $("aside").css({"transform": "translateX(-100%)"});
    }

    $("aside .close").click(function(){
        if (width < 1150){
            $("aside").css({"transform": "translateX(0)"});
        }
    });
}



$(".island-code .close").click(function(){
    $(".island-code").hide();
});









const settings = {
    
    
//Player COUNTING
settings1 : {
    one:{
        '*** This Sequencer will begin the counting process ***' :'',
        'Activate on Game Phase':'Game Start'        
    },
    two:{
        'When Triggered Transmit On':'CH 01' 
    },
    three:{
        'When Triggered Transmit On':'CH 06' 
    },
    four:{
        'When Triggered Transmit On':'CH 07' 
    }
},

//SETTINGS Mutators
 settings2 : {
    one:{
        '*** This mutator must cover the area where players spawn ***' :'',
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 01',
        'Disable When Receiving From': 'CH 02',
        'On Player Entering Zone Transmit On': 'CH 02',
    },
     two:{
        '*** This mutator must cover the entire playable area ***' :'',
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'On Player Entering Zone Transmit On': 'CH 05',
    },
    three:{
        '*** This mutator must cover the entire playable area, but not island start spawn pads. ***' :'',
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'YES',
        'On Player Leavinf Zone Transmit On': 'CH 03',
    }
},

//SETTINGS Top 10
 settings3 : {
    one:{
        'Trigger When Receiving From': 'CH 05',
        'When Triggered Transmit On': 'CH 07'
    },
    two:{
        '*** Transmit on Score == Placement Being Awarded ***' :'',
        'Score Change When Activated': '1',
        'Transmit on Score': '10',
        'Reset When Receiving From': 'CH 01',
        'Increment When Receiving From': 'CH 02',
        'Decrement When Receiving From': 'CH 03',
        'On Score Output Transmit To': 'CH 08'
    },
    three:{
        '*** This trigger enables the Top 10 Points ***' :'',
        'Enabled on Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 08',
        'When Triggered Transmit On': 'CH 04'
    },
    four:{
        '*** The Score to award players when 10 left ***' :'',
        'Score Value': '5',
        'Score Change When Activated': '1',
        'Transmit on Score': '10',
        'Activate When Receiving From': 'CH 05',
        'Enabled When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 07'
    },
},

//SETTINGS TOP 5
 settings4 : {
   
    one:{
        '*** Transmit on Score == Placement Being Awarded ***' :'',
        'Score Change When Activated': '1',
        'Transmit on Score': '5',
        'Reset When Receiving From': 'CH 01',
        'Increment When Receiving From': 'CH 02',
        'Decrement When Receiving From': 'CH 03',
        'On Score Output Transmit To': 'CH 09'
    },
    two:{
        '*** This trigger enables the Top 5 Points ***' :'',
        'Enabled on Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 09',
        'When Triggered Transmit On': 'CH 04'
    },
    three:{
        '*** The Score to award players when 5 left ***' :'',
        'Score Value': '3',
        'Score Change When Activated': '1',
        'Transmit on Score': '10',
        'Activate When Receiving From': 'CH 05',
        'Enabled When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 07'
    }
},

//SETTINGS TOP 3
 settings5 : {
   
    one:{
        '*** Transmit on Score == Placement Being Awarded ***' :'',
        'Score Change When Activated': '1',
        'Transmit on Score': '3',
        'Reset When Receiving From': 'CH 01',
        'Increment When Receiving From': 'CH 02',
        'Decrement When Receiving From': 'CH 03',
        'On Score Output Transmit To': 'CH 10'
    },
    two:{
        '*** This trigger enables the Top 3 Points ***' :'',
        'Enabled on Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 10',
        'When Triggered Transmit On': 'CH 04'
    },
    three:{
        '*** The Score to award players when 3 left ***' :'',
        'Score Value': '3',
        'Score Change When Activated': '1',
        'Transmit on Score': '10',
        'Activate When Receiving From': 'CH 05',
        'Enabled When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 07'
    }
},

//SETTINGS TOP 1
 settings6 : {
   
    one:{
        '*** Transmit on Score == Placement Being Awarded ***' :'',
        'Score Change When Activated': '1',
        'Transmit on Score': '1',
        'Reset When Receiving From': 'CH 01',
        'Increment When Receiving From': 'CH 02',
        'Decrement When Receiving From': 'CH 03',
        'On Score Output Transmit To': 'CH 11'
    },
    two:{
        '*** This trigger enables the Top 1 Points ***' :'',
        'Enabled on Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 11',
        'When Triggered Transmit On': 'CH 04'
    },
    three:{
        '*** The Score to award players when 1 left ***' :'',
        'Score Value': '3',
        'Times Can Trigger':'1',
        'Transmit on Score': '10',
        'Activate When Receiving From': 'CH 05',
        'Enabled When Receiving From': 'CH 1',
        'Disable When Receiving From': 'CH 07',
        'On Max Triggers Transmit To': 'CH 12'
    },
    four:{
        '*** This ends the game and awards victory ***' :'',
        'End Round When Receiving From': 'CH 12',
    }
}
};

