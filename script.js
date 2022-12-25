var qno=0;
var score=0;

var st=get('start');
var container=get('container');
var sumbit=get('submit');
var op_a=get('op_a');
var op_b=get('op_b');
var op_c=get('op_c');
var op_d=get('op_d');
var lable=get('lable');
var a=get('a');
var b=get('b');
var c=get('c');
var d=get('d');
var options=get('options');
var array = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: " How many computer languages are in use",
        a: "500",
        b: "2000",
        c: "50",
        d: "none of the above",
        correct: "b",
    },
    {
        question: " Which of these is not an early computer?",
        a: "ENAIC",
        b: "UNIVAC",
        c: "NASA",
        d: "SAGE",
        correct: "c",
    },
    {
        question: " Who founded Apple Computer?",
        a: "stephen fry",
        b: "bill gates",
        c: "steve jobs",
        d: "stephen hawking",
        correct: "c",
    },
    {
        question: " Which of these is not a peripheral, in computer terms?",
        a: "keyboard",
        b: "monitor",
        c: "mouse",
        d: "motherboard",
        correct: "c",
    },
    {
        question: " Which of these products is not made by the Apple Corporation?",
        a: "iphone",
        b: "imac",
        c: "imax",
        d: "ipod",
        correct: "c",
    },
    {
        question: " www stands for ",
        a: "Wide Width Wickets",
        b: " World Wide Web",
        c: " Worldwide Weather",
        d: "Western Washington World",
        correct: "b",
    },
    {
        question: " When did the compact disc first appear on the market?",
        a: "1999",
        b: "1975",
        c: "1982",
        d: "none of these",
        correct: "c",
    },
]
var n=array.length;
function init()
{
  qno=0;
  score=0;

submit.style.display="block";
lable.style.display='block'
options.style.display='block';
st.style.display="none";
displayquestion();
}
function get(id)
{
return document.getElementById(id);
}
function displayquestion()
{
  var obj=array[qno];
  op_a.innerHTML=obj.a;
  op_b.innerHTML=obj.b;
  op_c.innerHTML=obj.c;
  op_d.innerHTML=obj.d;
  lable.innerHTML=obj.question;

}
function validate()
{
  var obj=array[qno];

if(a.checked||b.checked||c.checked||d.checked)
{
if(a.checked)
{
if("a"==obj.correct)
score++;

}
if(b.checked)
{
  if("b"==obj.correct)
  score++;

}
if(c.checked)
{
  if("c"==obj.correct)
  score++;

}
if(d.checked)
{
  if("d"==obj.correct)
  score++;

}

qno++;
if(qno==n)
{
displayscore();
}
displayquestion();
}

}
function displayscore()
{
options.style.display="none";
lable.innerHTML="your score is "+score+" out of "+n;
sumbit.style.display="none";
setTimeout("location.reload()",3000);
}
