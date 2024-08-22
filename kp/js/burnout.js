// - - - - - - - - - - Global Navigation - - - - - - - - - - - - - //

$(document).ready(function(){
  $("#nav-container").hide();
  $("#quotes-container").hide();
  $(".nav-open-btn").click(function(){
    $("#nav-container").show();
  });
  $(".quotes-icon").click(function(){
    $("#quotes-container").show();
  });
  $(".nav-close-btn").click(function(){
    $("#nav-container").hide();
    $("#quotes-container").hide();
  });
  $(".nav-content a").click(function(){
    $("#nav-container").hide();
    $("#quotes-container").hide();
  });

});

$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       $("#nav-container").hide();
       $("#quotes-container").hide();
    }
});


// - - - - - - - - - - - Pages - - - - - - - - - - - - //

$(document).ready(function(){
  $('#page-nav nav a').on('click', function(event) {
      $(this).parent().find('a').removeClass('active-page-link');
      $(this).addClass('active-page-link');
  });

  $(window).on('scroll', function() {
      $('.page-section').each(function() {
          if($(window).scrollTop() >= $(this).offset().top - 75) {
              var id = $(this).attr('id');
              $('#page-nav nav a').removeClass('active-page-link');
              $('#page-nav nav a[href="#'+ id +'"]').addClass('active-page-link');
          }
      });
  });
});

// - - - - - - - - - - - Wall of Quotes - - - - - - - - - - - - //

quotes = {
  "1": {
    quote: "“HealthConnect has allowed us to communicate with each other and pass information in such an easy and simple fashion that it was overwhelming the primary care physicians.”",
    role: "Internal Medicine Physician, SCAL"
  },
  "2": {
    quote: "“I don’t know my peers as well as I used to and feel like I am often going at this alone.”",
    role: "Nephrologist, NCAL"
  },
  "3": {
    quote: "“The camaraderie of the doctor’s lounge is gone and with it a huge loss of community and connection to the profession.”",
    role: "Nephrologist, NCAL"
  },
  "4": {
    quote: "“In all these burnout initiatives, nobody ever talks to the family members - they're the collateral damage of burnout.“",
    role: "Urgent Care Physician, MAS"
  },
  "5": {
    quote: "“As physicians we're supposed to be strong and Type A and maybe they feel it's a sign of weakness to come to your Chief and say “I'm burning out“ or “I can't handle it.“",
    role: "Chief of Family Medicine, SCAL"
  },
  "6": {
    quote: "“You still just have 20 minutes to see the complex, sick people.“",
    role: "Chief of Family Medicine, SCAL"
  },
  "7": {
    quote: "“Whenever you get pulled away from your WHY that’s when you’re much more at risk for getting burned out. Because you’re spending a lot of time doing something that you don’t have much interest in.”",
    role: "Family Medicine Physician, NCAL"
  },
  "8": {
    quote: "“The world we're in now for healthcare delivery - the financial aspect has changed and we're regularly asked to do more with less. People are living longer and solutions to keep people alive are increasing costs. Over the last decade or more, the amount of money we spend on health care is increasing - the percent of GDP spent on healthcare is about 20%“",
    role: "Emergency Medicine Physician, SCAL"
  },
  "9": {
    quote: "“Before 2005, the only people that were able to read your patient's chart was the next person who was holding the clip board. Now it's instantly legible to everybody.“",
    role: "Surgeon, SCAL"
  },
  "10": {
    quote: "“The doctors who are getting tons of new patients, they need help. Because when you have a stable panel, it's easy. You already know your patients, you know they're not allergic to anything, you know what their problem list is, you've got them hooked up to specialists. But with new patients, every single patient is requiring a reconciliation of their medical problems.“",
    role: "Chief of Pediatrics, MAS"
  },
  "11": {
    quote: "“If you’re late, patients often assume that you’ve been out at lunch. They don’t assume that you’ve just been telling somebody they’re about to die.“",
    role: "Surgeon, MAS"
  },
  "12": {
    quote: "“Physicians are recorded, tracked, and judged about how they spend every minute during the day. They’re asked to see more people every day in less time. So they’ve gotten used to spending 2-3 hours at home each night responding to patient emails and finishing charts because they’re still trying to do the right thing.”",
    role: "Ob/Gyn, NCAL"
  },
  "13": {
    quote: "“We spend four years training doctors in med school for autonomy. It gets drilled into their heads that they need to do what they think is best for the patient’s care in the moment and own the responsibility. Never do they get any training on how technology is going to affect their autonomy when they get a job.”",
    role: "Ob/Gyn, NCAL"
  },
  "14": {
    quote: "“You have this secret job that nobody acknowledges that you do on your personal time to document all the wonderful things you did during the day to make sure you don’t get sued.“",
    role: "Family Medicine Physician, MAS"
  },
  "15": {
    quote: "“How great would it be if I had a panel of 2,000 patients and I had no appointments because we kept our population so healthy they did not need to come in.  That would be a meaningful metric.“",
    role: "Family Medicine Physician, CO"
  },
  "16": {
    quote: "“Primary Care is the ultimate dumping ground.  Everyone else can say no.“",
    role: "Family Medicine Physician, CO"
  },
  "16": {
    quote: "“When we were back in paper, even the thickest of charts was still limited to what you had in your hands. But if you took everything in HealthConnect and put that into paper, it'd be binder upon binder that somehow physicians are now responsible for.“",
    role: "Family Medicine Physician, SCAL"
  },
  "17": {
    quote: "“Yelp has changed care – reviews are now a consideration of how we work.“",
    role: "Family Medicine Physician, CO"
  },
  "18": {
    quote: "“Convenience and continuity of care are continually at odds.“",
    role: "Family Medicine Physician, CO"
  },
  "19": {
    quote: "“I feel more responsible with all the information that is now available.  I can't use the excuse the information wasn’t in the chart. Email has also led to needing to be available more and more.“",
    role: "Family Medicine Physician, CO"
  },
  "20": {
    quote: "“The most difficult thing for us is that as healthcare has changed and new requirements for physicians are layered on during a visit - from medication reconciliation, to the coding that has to be done, the POE/POS. It's good care, but we still get the same amount of time to see the patient.“",
    role: "Family Medicine Physician, SCAL"
  },
  "21": {
    quote: "“My biggest challenge is not feeling like I can sustain. It seems like I'm practicing as efficiently as I can, but I feel like I'm sacrificing personal time or balancing life responsibilities in order to be successful.“",
    role: "Family Medicine Physician, SCAL"
  },
  "22": {
    quote: "“The biggest limit of all primary care doctors is that there's not enough time to do everything I need to do with the patient.“",
    role: "Family Medicine Physician, SCAL"
  },
  "23": {
    quote: "“People treat us like we're superhuman. As if we don't have kids that get sick, we don't get sick, we don't have emotional problems, we don't have divorces, we don't have bosses that are hard.“",
    role: "Family Medicine Physician, SCAL"
  },
  "24": {
    quote: "“To call it Wellness, I don't need you to bring me yoga and mindfulness; help me with the office life and that will make me well.“",
    role: "Physician In Charge, SCAL"
  },
  "25": {
    quote: "“Doctors tend to be competitive and challenge themselves not to make mistakes. They don't let things slide and as a result spend less time with their families.“",
    role: "Chief of Family Medicine, SCAL"
  },
  "26": {
    quote: "“Most of us are pleasing Physicians; we're trying to solve their issues and it's really hard to say no.“",
    role: "Chief of Family Medicine, SCAL"
  },
  "27": {
    quote: "“We have these Access Targets. Our organization has set a goal of 9 out 10 - they're always trying to manipulate our schedules and squeeze everything we can to try to get to that goal, whereas the frontline doctors would say 'Just hire more doctors to give you more access' but it always comes around to how much it costs.“",
    role: "Physician in Charge, SCAL"
  },
  "28": {
    quote: "“I don't have time to close charts after each visit - I just go from this room to that room to this room to that room; I don't have time to pee let alone close a chart.“",
    role: "Chief of Family Medicine, SCAL"
  },
  "29": {
    quote: "“When you look at my schedule, it looks like I just see patients from 8:20 to 12 in the morning, and then I see patients from 1:20 to 5 o'clock in the afternoon but that's not all the time that I'm being a Kaiser physician.“",
    role: "Family Medicine Physician, SCAL"
  },
  "30": {
    quote: "“We bring up Scribes, we bring up having extra Medical Assistants - it comes down to affordability, though. Where we get stuck is we can have these great ideas, but the answer is “You can do it, but it has to remain cost-neutral.“",
    role: "Physician In Charge, SCAL"
  }
};

$.each(quotes, function(i, v) {
  $("#quotes").append(
    '<div class = "two" style = "display:none;"><h3 style="">'
      + v.quote +
    '</h3><div class = "quotes-role"><img class = "quotes-kp-logo" src= "img/kp-logo.svg" ><h4 class="roles">' + v.role + '</h4></div><div class ="controls"><a class ="back"> Previous </a><a class="next"> Next </a></div></div>'
  );
});
$(".two:first").show();
$("body").on("click", ".two a.next", function(index) {
  $(this).closest(".two").hide();
  if (
    $(this).closest(".two").is(".two:last")
  ) {
    $(".two:first").show();
  } else {
    $(this)
      .closest(".two").next().show();
  }
});
$("body").on("click", ".two a.back", function(index) {
  $(this)
    .closest(".two").hide();
  if (
    $(this)
      .closest(".two").is(".two:first")
  ) {
    $(".two:last").show();
  } else {
    $(this)
      .closest(".two").prev().show();
  }
});
