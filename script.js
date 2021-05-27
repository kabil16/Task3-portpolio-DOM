let profile =document.createElement('div');
profile.className='profile';
document.querySelector('body').appendChild(profile);

let proImgdiv =document.createElement('div');
proImgdiv.className='image-d';
profile.appendChild(proImgdiv);

let proImg = document.createElement('img');
proImg.className='image';
proImg.setAttribute('src','./img/kabil.jpg');
proImgdiv.appendChild(proImg)

let proBorder =document.createElement('div');
proBorder.className='profile-border';
profile.appendChild(proBorder);

let proname= document.createElement('div');
proname.className='profile-name';
profile.appendChild(proname);

let proNameSpan = document.createElement('span');
let nameSpan=document.createTextNode("Mr XXXXXX");
proNameSpan.appendChild(nameSpan)
proname.appendChild(proNameSpan);

let proAdd = document.createElement('div');
proAdd.className='address';
let proAddress =document.createTextNode("N Demen Avenue,Chicago 99999|999-999-9999 | hello@kickeresume.com|www.kickersume.com");
proAdd.appendChild(proAddress);
document.querySelector('body').appendChild(proAdd);

let hr1 =document.createElement('hr');
document.querySelector('body').appendChild(hr1)

let side = document.createElement('div');
side.className='row';
document.querySelector('body').appendChild(side);
//side 1 
let side1 =document.createElement('div');
side1.className='side1';
side.appendChild(side1);

let sideBorder = document.createElement('div');
sideBorder.className='pro border';
side1.appendChild(sideBorder);
//profile
let mainProfile =document.createElement('div');
sideBorder.appendChild(mainProfile);

let proHead =document.createElement('div');
mainProfile.appendChild(proHead);

let proheading = document.createElement('h2');
proHead.appendChild(proheading);
let proIcon =document.createElement('i');
proIcon.className='fas fa-award icon';
proheading.appendChild(proIcon);
let profileName=document.createTextNode("Profile");
proheading.appendChild(profileName);

let profileDetail =document.createElement('p');
let prodetailNote =document.createTextNode('innovetive optimized solutions seeker.Excited tobe at the at the development phase of my new career as a web developer I am ambitious.adventurous assiduous, animaed and literation advocate.');
profileDetail.appendChild(prodetailNote);
mainProfile.appendChild(profileDetail);
//skills

let skill = document.createElement('div');
sideBorder.appendChild(skill);

let skillHead = document.createElement('div');
skill.appendChild(skillHead);

let skillheading = document.createElement('h2');
skillHead.appendChild(skillheading);
let skillIcon =document.createElement('i');
skillIcon.className='fas fa-award icon';
skillheading.appendChild(skillIcon);
let skillName=document.createTextNode("Skills");
skillheading.appendChild(skillName);
//table Start Here
let skillTable = document.createElement('table');
skillTable.setAttribute('width','100%');
skill.appendChild(skillTable);

let tr1=document.createElement('tr');
tr1.className='tech-skill';
skillTable.appendChild(tr1);

let td1=document.createElement('td');
td1.setAttribute('colspan','2');
let td1text =document.createTextNode('Technical Skills');
td1.appendChild(td1text);
tr1.appendChild(td1);
//2nd table row
let tr2 = document.createElement('tr');
skillTable.appendChild(tr2);

let td2 = document.createElement('td');
let td2Text= document.createTextNode('Java Script');
td2.appendChild(td2Text);
tr2.appendChild(td2)

let td3 = document.createElement('td');
tr2.appendChild(td3);

let td3range=document.createElement('input');
td3range.setAttribute('type','range');
td3range.setAttribute('min','0');
td3range.setAttribute('max','10');
td3range.setAttribute('value','8');
//td3range.setAttribute('disabled');
td3.appendChild(td3range);

//2nd table row
let tr3 = document.createElement('tr');
skillTable.appendChild(tr3);

let td4 = document.createElement('td');
let td4Text= document.createTextNode('CSS');
td4.appendChild(td4Text);
tr3.appendChild(td4)

let td5 = document.createElement('td');
tr3.appendChild(td5);

let td5range=document.createElement('input');
td5range.setAttribute('type','range');
td5range.setAttribute('min','0');
td5range.setAttribute('max','10');
td5range.setAttribute('value','5');
//td3range.setAttribute('disabled');
td5.appendChild(td5range);

//2nd table row
let tr4 = document.createElement('tr');
skillTable.appendChild(tr4);

let td6 = document.createElement('td');
let td6Text= document.createTextNode('HTML');
td6.appendChild(td6Text);
tr4.appendChild(td6)

let td7 = document.createElement('td');
tr4.appendChild(td7);

let td7range=document.createElement('input');
td7range.setAttribute('type','range');
td7range.setAttribute('min','0');
td7range.setAttribute('max','10');
td7range.setAttribute('value','6');
//td3range.setAttribute('disabled');
td7.appendChild(td7range);

//2nd table row
let tr5 = document.createElement('tr');
skillTable.appendChild(tr5);

let td8 = document.createElement('td');
let td8Text= document.createTextNode('React');
td8.appendChild(td8Text);
tr5.appendChild(td8)

let td9 = document.createElement('td');
tr5.appendChild(td9);

let td9range=document.createElement('input');
td9range.setAttribute('type','range');
td9range.setAttribute('min','0');
td9range.setAttribute('max','10');
td9range.setAttribute('value','8');
//td3range.setAttribute('disabled');
td9.appendChild(td9range);

//2nd table row
let tr6 = document.createElement('tr');
skillTable.appendChild(tr6);

let td10 = document.createElement('td');
let td10Text= document.createTextNode('MongDB');
td10.appendChild(td10Text);
tr6.appendChild(td10)

let td11 = document.createElement('td');
tr6.appendChild(td11);

let td11range=document.createElement('input');
td11range.setAttribute('type','range');
td11range.setAttribute('min','0');
td11range.setAttribute('max','10');
td11range.setAttribute('value','9');
//td3range.setAttribute('disabled');
td11.appendChild(td11range);

//Additional Skills

let tr10=document.createElement('tr');
tr10.className='tech-skill';
skillTable.appendChild(tr10);

let tdA1=document.createElement('td');
tdA1.setAttribute('colspan','2');
let tdA1text =document.createTextNode('Technical Skills');
tdA1.appendChild(tdA1text);
tr10.appendChild(tdA1);
//2nd table row
let tr11 = document.createElement('tr');
skillTable.appendChild(tr11);

let tdA2 = document.createElement('td');
let tdA2Text= document.createTextNode('Java Script');
tdA2.appendChild(tdA2Text);
tr11.appendChild(tdA2)

let tdA3 = document.createElement('td');
tr11.appendChild(tdA3);

let tdA3range=document.createElement('input');
tdA3range.setAttribute('type','range');
tdA3range.setAttribute('min','0');
tdA3range.setAttribute('max','10');
tdA3range.setAttribute('value','8');
//td3range.setAttribute('disabled');
tdA3.appendChild(tdA3range);

//2nd table row
let tr12 = document.createElement('tr');
skillTable.appendChild(tr12);

let tdA4 = document.createElement('td');
let tdA4Text= document.createTextNode('CSS');
tdA4.appendChild(tdA4Text);
tr12.appendChild(tdA4)

let tdA5 = document.createElement('td');
tr12.appendChild(tdA5);

let tdA5range=document.createElement('input');
tdA5range.setAttribute('type','range');
tdA5range.setAttribute('min','0');
tdA5range.setAttribute('max','10');
tdA5range.setAttribute('value','5');
//td3range.setAttribute('disabled');
tdA5.appendChild(tdA5range);

//2nd table row
let tr13 = document.createElement('tr');
skillTable.appendChild(tr13);

let tdA6 = document.createElement('td');
let tdA6Text= document.createTextNode('HTML');
tdA6.appendChild(tdA6Text);
tr13.appendChild(tdA6)

let tdA7 = document.createElement('td');
tr13.appendChild(tdA7);

let tdA7range=document.createElement('input');
tdA7range.setAttribute('type','range');
tdA7range.setAttribute('min','0');
tdA7range.setAttribute('max','10');
tdA7range.setAttribute('value','6');
//td3range.setAttribute('disabled');
tdA7.appendChild(tdA7range);

//2nd table row
let tr14 = document.createElement('tr');
skillTable.appendChild(tr14);

let tdA8 = document.createElement('td');
let tdA8Text= document.createTextNode('React');
tdA8.appendChild(tdA8Text);
tr14.appendChild(tdA8)

let tdA9 = document.createElement('td');
tr14.appendChild(tdA9);

let tdA9range=document.createElement('input');
tdA9range.setAttribute('type','range');
tdA9range.setAttribute('min','0');
tdA9range.setAttribute('max','10');
tdA9range.setAttribute('value','8');
//td3range.setAttribute('disabled');
tdA9.appendChild(tdA9range);

//2nd table row
let tr15 = document.createElement('tr');
skillTable.appendChild(tr15);

let tdA10 = document.createElement('td');
let tdA10Text= document.createTextNode('MongDB');
tdA10.appendChild(tdA10Text);
tr15.appendChild(tdA10)

let tdA11 = document.createElement('td');
tr15.appendChild(tdA11);

let tdA11range=document.createElement('input');
tdA11range.setAttribute('type','range');
tdA11range.setAttribute('min','0');
tdA11range.setAttribute('max','10');
tdA11range.setAttribute('value','9');
//td3range.setAttribute('disabled');
tdA11.appendChild(tdA11range);

//work experience

let workEx =document.createElement('div');
sideBorder.appendChild(workEx);

let workHead =document.createElement('div');
workEx.appendChild(workHead);

let workheading = document.createElement('h2');
workHead.appendChild(workheading);
let workIcon =document.createElement('i');
workIcon.className='fas fa-award icon';
workheading.appendChild(workIcon);
let workName=document.createTextNode("Work Experience");
workheading.appendChild(workName);

let workevent = document.createElement('table');
workevent.setAttribute('width','100%')
workEx.appendChild(workevent);

let eventHead =document.createElement('tr');
workevent.appendChild(eventHead);

let eventtd1 = document.createElement('td');
let eventtd1Text =document.createTextNode('Event Manager');
eventtd1.appendChild(eventtd1Text);
eventHead.appendChild(eventtd1);

let eventtd2 = document.createElement('td');
eventtd2.setAttribute('style','text-align: right;')
let eventtd2Text =document.createTextNode('3/2014-02/2017');
eventtd2.appendChild(eventtd2Text);
eventHead.appendChild(eventtd2);

let workUl=document.createElement('ul');
workEx.appendChild(workUl);

let ulLi1 = document.createElement('li');
let liText1 = document.createTextNode('lead and execute all phases of event planning and production spanning committee require ment traininng,vendor relation shoip and on-site facilitation');
ulLi1.appendChild(liText1);
workUl.appendChild(ulLi1);

let ulLi2 = document.createElement('li');
let liText2 = document.createTextNode('Brought new business to the organization through relentless networking and on stewardship which helped the company win thhe bid for the sate depart ment summit on the middle east and,the companies largest civic event to date ,the united state of women');
ulLi2.appendChild(liText2);
workUl.appendChild(ulLi2);

let ulLi3 = document.createElement('li');
let liText3 = document.createTextNode('Exercise fiscal control over budget creation,tracking and reporting.Collaborate with employees at all organisational leaves to advanced cohensive operations');
ulLi3.appendChild(liText3);
workUl.appendChild(ulLi3);

//2nd side 

let side2 =document.createElement('div');
side2.className='side1';
side.appendChild(side2);

let sideBorder2 = document.createElement('div');
sideBorder2.className='pro';
side2.appendChild(sideBorder2);

//work experience two

let workEx2 =document.createElement('div');
sideBorder2.appendChild(workEx2);

let workHead2 =document.createElement('div');
workEx2.appendChild(workHead2);

let workheading2 = document.createElement('h2');
workHead2.appendChild(workheading2);
let workIcon2 =document.createElement('i');
workIcon2.className='fas fa-award icon';
workheading2.appendChild(workIcon2);
let workName2=document.createTextNode("Work Experience");
workheading2.appendChild(workName2);

let workevent2 = document.createElement('table');
workevent2.setAttribute('width','100%')
workEx2.appendChild(workevent2);

let eventHead2 =document.createElement('tr');
workevent2.appendChild(eventHead2);

let event2td1 = document.createElement('td');
let event2td1Text =document.createTextNode('Event Manager');
event2td1.appendChild(event2td1Text);
eventHead2.appendChild(event2td1);

let event2td2 = document.createElement('td');
event2td2.setAttribute('style','text-align: right;')
let event2td2Text =document.createTextNode('3/2014-02/2017');
event2td2.appendChild(event2td2Text);
eventHead2.appendChild(event2td2);

let workUlp =document.createElement('p');
let workText =document.createTextNode('Gay & Lesbian Elder Housing,Los Angeles')
workUlp.appendChild(workText);
workEx2.appendChild(workUlp)

let workUl2=document.createElement('ul');
workEx2.appendChild(workUl2);

let ul2Li1 = document.createElement('li');
let li2Text1 = document.createTextNode('Desiginng Creating and managing content across multiple communication platform');
ul2Li1.appendChild(li2Text1);
workUl2.appendChild(ul2Li1);

let ul2Li2 = document.createElement('li');
let li2Text2 = document.createTextNode('Arrangeing Presentation and pitch deck');
ul2Li2.appendChild(li2Text2);
workUl2.appendChild(ul2Li2);

let ul2Li3 = document.createElement('li');
let li2Text3 = document.createTextNode('Desiginng a PR plan and establishing important focus point');
ul2Li3.appendChild(li2Text3);
workUl2.appendChild(ul2Li3);

let ul2Li4 = document.createElement('li');
let li2Text4 = document.createTextNode('Building relationship with key media players');
ul2Li4.appendChild(li2Text4);
workUl2.appendChild(ul2Li4);


//education

let workEx3 =document.createElement('div');
sideBorder2.appendChild(workEx3);

let workHead3 =document.createElement('div');
workEx3.appendChild(workHead3);

let workheading3 = document.createElement('h2');
workHead3.appendChild(workheading3);
let workIcon3 =document.createElement('i');
workIcon3.className='fas fa-award icon';
workheading3.appendChild(workIcon3);
let workName3=document.createTextNode("Work Experience");
workheading3.appendChild(workName3);

let workevent3 = document.createElement('table');
workevent3.setAttribute('width','100%')
workEx3.appendChild(workevent2);

let eventHead3 =document.createElement('tr');
workevent3.appendChild(eventHead3);

let event3td1 = document.createElement('td');
let event3td1Text =document.createTextNode('Event Manager');
event3td1.appendChild(event3td1Text);
eventHead3.appendChild(event3td1);

let event3td2 = document.createElement('td');
event3td2.setAttribute('style','text-align: right;')
let event3td2Text =document.createTextNode('3/2014-02/2017');
event3td2.appendChild(event3td2Text);
eventHead3.appendChild(event3td2);

let workUlp2 =document.createElement('p');
let workText2 =document.createTextNode('Project Focused intensive program with emphasis on mongo,Express,React,and JavaScripe MERN technical stack')
workUlp2.appendChild(workText2);
workEx3.appendChild(workUlp2)

let workUl3=document.createElement('ul');
workEx3.appendChild(workUl3);

let ul3Li1 = document.createElement('li');
let li3Text1 = document.createTextNode('Developed a full stack web applicationns,"RenewU".using React that allows users to explore various a spects of meditations.users"s progress is stored on a backend created using nodeJS and MongoDB');
ul3Li1.appendChild(li3Text1);
workUl2.appendChild(ul3Li1);

let ul3Li2 = document.createElement('li');
let li3Text2 = document.createTextNode('Developed a language learning app "Foodie Phonetics".using spaced repetition and a link list structure ,React was used to create the front end components while Node and Mongo were used to create a backend that stores user data');
ul3Li2.appendChild(li3Text2);
workUl3.appendChild(ul3Li2);

let ul3Li3 = document.createElement('li');
let li3Text3 = document.createTextNode(' Developed a concieerge app."peley",For individuals looking for curated suggestions when visiting  a new place react was used  to develop the front end which includes  real time chat,  drag and drop and variety of advanced features the backend,built using Node,Express, And Mongo DB,Takes advantage of well developed REST Full API ,Geospecial searching and user authentication with JWT.');
ul3Li3.appendChild(li3Text3);
workUl3.appendChild(ul3Li3);

let ul3Li4 = document.createElement('li');
let li3Text4 = document.createTextNode('Building relationship with key media players');
ul3Li4.appendChild(li3Text4);
workUl3.appendChild(ul3Li4);
