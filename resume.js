 
 alert("Hello welcome.. this is built by Emmanuel (Enigma), to help you build your resume without stress.... We've tried to make it as interactive as ever, Remember the code was written with phone, so forgive us on any shortcomings..  Click OK let's move")
 
 // Assign first Variables for bio
let userName = prompt ("What is Your Name dear? Your full name please, id need it for your resume");
  let occupation = prompt (" so what are you known for? e.g Copywriter or Designer etc🤔?")
  let phoneNumber = prompt ("Aww you are so Nice, Can I have your phone Number??  Maybe i can disturb you on WhatsApp 😜")
  let email = prompt (" Give me your email Address.. Bots don't do WhatsApp 🤦🏽‍♀️?")
  //Profile variable
let  profile = prompt(`Please ${userName} Your Resume will need a Bio... write some little good things about you that would make your employers pick you among others😂 let it be a little long please, not those bio's on Facebook`)
//SKILLS VARIABLES
alert(`Now i'd be needing your skills, (graphic design, copywriting or even cake making or anything, if you make cakes, i love brown cakes😳) i need atleast three of them.. Click OK to continue `)
let skill1 = prompt(`First skill here`);
let about1 = prompt(`Tell me a little about this skill, How good you are and archivement`)
 
let skill2 = prompt(`Second skill here`);
let about2 = prompt(`Tell me a little about this skill too, How good you are and archivement`)

let skill3 = prompt(`last skill here, Sorry its just to make uour resume look professional`);
let about3 = prompt(`A little about this skill too, How good you are and profiency`)

//TECHNICAL SKILL VARIABLES
alert(`Now i'd need your tech skills,  if you are a programmer you can just write down the languages you know, all others just put in any digital skill you've acquired`)
 let tech1 = prompt(`Write down the first tech skill here one word please`)
  let tech2 = prompt(`Write down the second tech skill here one word please`)
   let tech3 = prompt(`Write down the third tech skill here one word please`)
   
   //Variables for EXPERIENCE
   alert(`i'd need your Experiences, previous jobs or organizations.. Click ok to Continue`)
   let job1 = prompt('Job name? e.g Hebron drinks');
   let j1role = prompt (`Role? e.g Book keeper`);
   let j1time = prompt(`your duration? e.g 2005-2007`);
   let j1about = prompt(`Kindly write down your performance and what you did to promote this organization.. `)
   
      let job2 = prompt('other Job name? e.g Covenant Bakery');
   let j2role = prompt (`Role? e.g Sales rep`);
   let j2time = prompt(`your duration? e.g 2007-2009`);
   let j2about = prompt(`Kindly write down your performance and what you did to promote this organization.. `)
   
      let job3 = prompt('last Job name? e.g Chevron foods');
   let j3role = prompt (`Role? e.g Marketer`);
   let j3time = prompt(`your duration? e.g 2009-2012`);
   let j3about = prompt(`Kindly write down your performance and what you did to promote this organization.. `)
   
   //EDUCATION
   let school = prompt(`Your current school, or school you just graduated from, Name and Location please?`)
   let course = prompt(`What's your Course or Field of Study?`)
   let gpa = prompt(`your highest grade or  CGPA please`)
  //second Bio

let secondName = prompt ("wait kindly provide Your Full Name again");
let secondNumber = prompt ("your phone numebr");
let secondMail = prompt ("and email Address");

  alert(`Thanks ${userName} for your time, i really appreciate your patience, kindly click on the download button on your resume to print or download it as PDF, please endeavor to
 give us a feedback🤕 09053386778`);

  //Query Selectors from class
  const personName = document.querySelector('.name');
  const personNum = document.querySelector('.number');
  const personMail = document.querySelector('.mail');
  const personJob = document.querySelector('.occupation');
  
  personJob.textContent = occupation;
 personMail.textContent = email;
  personName.textContent = userName;
  personNum.textContent = phoneNumber;

//Profile Content
const prof = document.querySelector(".profile");
prof.textContent = profile;

//Selectors for skills 
let skillOne = document.querySelector(".skill1")
let aboutOne = document.querySelector(".about1")

let skillTwo = document.querySelector(".skill2")
let aboutTwo = document.querySelector(".about2")

let skillThree = document.querySelector(".skill3")
let aboutThree = document.querySelector(".about3")
//skill content alignment
skillOne.textContent = skill1;
aboutOne.textContent = about1;
skillTwo.textContent = skill2;
aboutTwo.textContent = about2;
skillThree.textContent = skill3;
aboutThree.textContent = about3;

//Technical selection
let techOne = document.querySelector(".tech1"),
techTwo = document.querySelector(".tech2"),
techThree = document.querySelector(".tech3");

//Tech alignment
techOne.textContent = tech1;
techTwo.textContent = tech2;
techThree.textContent = tech3;

//JOB Selectors
let jobOne = document.querySelector(".job1"),
jobRoleOne = document.querySelector(".j1role"),
jobTimeOne = document.querySelector(".j1time"),
jobAboutOne = document.querySelector(".j1about");

let jobTwo = document.querySelector(".job2"),
jobRoleTwo = document.querySelector(".j2role"),
jobTimeTwo = document.querySelector(".j2time"),
jobAboutTwo = document.querySelector(".j2about");

let jobThree = document.querySelector(".job3"),
jobRoleThree = document.querySelector(".j3role"),
jobTimeThree = document.querySelector(".j3time"),
jobAboutThree = document.querySelector(".j3about");

//Job Alignment
jobOne.textContent = job1;
jobRoleOne.textContent = j1role;
jobTimeOne.textContent = j1time;
jobAboutOne.textContent = j1about;

jobTwo.textContent = job2;
jobRoleTwo.textContent = j2role;
jobTimeTwo.textContent = j2time;
jobAboutTwo.textContent = j2about;

jobThree.textContent = job3;
jobRoleThree.textContent = j3role;
jobTimeThree.textContent = j3time;
jobAboutThree.textContent = j3about;

//EDUCATION
let schl = document.querySelector(".schools"),
 study = document.querySelector(".courses"),
 grades = document.querySelector(".grade");
 
 schl.textContent = school;
 study.textContent = course;
 grades.textContent = gpa;
 //console.log(prof);
// Align Content
     //footers

const scndName = document.querySelector('.secondName');
const scndMail = document.querySelector('.secondMail');
const scndNum = document.querySelector('.secondNum');
  //console.log(personMail);
 scndName.textContent = secondName;
 scndMail.textContent = secondMail;
 scndNum.textContent = secondNumber;
 
 
