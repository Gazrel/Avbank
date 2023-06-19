//first page elements
const card=document.getElementById('card')
const insert=document.getElementById('insert')
const pin=document.getElementById('pin')
const cardn=document.getElementById('cardn')
const butc=document.getElementById('btnc')
const butd=document.getElementById('bk')
const verf=document.getElementById('ver')
const wrap=document.getElementById('wrap')
const wrapr=document.getElementById('wrapper')
//clients
let Clint1B=0//
let Clint2B=0
let Clint3B=0
let Clint4B=0
let Clint5B=0
let Clint6B=0
let Clint7B=0
//Second page elements//
//*****//
const dbal=document.getElementById('bal')
const inp=document.getElementById('inp')
const wit=document.getElementById('with')
const balance=document.getElementById('balance')
const dep=document.getElementById('dep')
const trans=document.getElementById('transaction')
const wtrans=document.getElementById('wtransaction')
const tbal=document.getElementById('tbalance')
const stp=document.getElementById('thi')
const mess=document.getElementById('Cdetail')
//*****//
//Third page elements//
//*****//
const Acc=document.getElementById('As')
var h=document.querySelector('.h')
const ck=document.getElementById('clr')
//****All Elentments*****/

//*****//
//First page Working//
//*****//
let val=''
insert.onclick=()=>{
    console.log('insert button clicked')
    card.classList.add('fade')
    wrap.classList.add('reveal')
    wrapr.classList.add('rereveal')
    butc.classList.add('show')
    butd.classList.add('show')
    h.classList.remove('expnad')
    let text="";//Third Page Working
    document.getElementById('hi').innerHTML=`${text}`

    /*Clear Button's working*/ 
butc.onclick=()=>{
    val= document.getElementById("pin").value="";
    document.getElementById("cardn").value=""
}
}
//Working Of Second Page//


let Curbal=0
const stat=[]
class Bank{
    constructor(bal,inp){
        this.bal=Number(bal) 
        this.inp=Number(inp)
    }
    Deposit(){
        Curbal=this.bal+=this.inp
        dbal.innerHTML=`${Curbal}$`
        let btxt=`Transaction: Deposited amount of ${this.inp}$ to the account`
        stat.push(btxt)
        trans.innerText=`${btxt}`
        wtrans.innerText=''
        document.getElementById("inp").value=" ";
        return Curbal
    }
    Withdraw(){
        if(this.inp<=Curbal){
            Curbal=this.bal-=this.inp
            dbal.innerHTML=`${Curbal}$`
            let btxt=`Transaction: Amount of ${this.inp}$ withdrawn from the account` 
            stat.push(btxt)
            wtrans.innerText=`${btxt}`
            trans.innerText=''
            document.getElementById("inp").value=" ";
            return Curbal
        }
        else{
            wtrans.innerText='Cannot Proceed Due To Insufficient Amount'
            document.getElementById("inp").value=" ";
        }
        }
    

}
//*this functions checks the password and name matches as per the database or hard coded*//
//*and executes the transaction client wants*//
function next(){
    let ClintN=document.getElementById("cardn").value
    let ClintP=document.getElementById("pin").value
    console.log(ClintN)
    console.log(ClintP)
   if( (ClintN=="robin" && ClintP==1234)||ClintN=="Robin"||ClintN=="ROBIN"){
        console.log("robin's account")

        verf.textContent= "Welcome \r\n Robin"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        
        mess.innerText="Robin's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerHTML=''
        dbal.innerHTML=`${Clint1B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint1B,newinp)
        Clint1B=Clint.Deposit()
        console.log(`Robin's bal ${Clint1B}`)
        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint1B,newinp)
        Clint1B=Clint.Withdraw()
        console.log(`Robin's bal ${Clint1B}`)
        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint1B}`
        console.log(stat)
        }
    }
    else if((ClintN=="roshi" && ClintP== 1876)||ClintN=="Roshi"||ClintN=="ROSHI"){
        
        verf.textContent= "Welcome \r\n Roshi"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        mess.innerText="Roshi's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerText=''
        dbal.innerHTML=`${Clint2B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint2B,newinp)
        Clint2B=Clint.Deposit()

        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint2B,newinp)
        Clint2B=Clint.Withdraw()

        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint2B}`
        console.log(stat)
        }
    }
    else if((ClintN=="richi" && ClintP==1122)||ClintN=="Richi"||ClintN=="RICHI"){
 
        verf.textContent= "Welcome \r\n RICHI \r\n Aliyaaa"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        mess.innerText="Richi's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerText=''
        dbal.innerHTML=`${Clint3B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint3B,newinp)
        Clint3B=Clint.Deposit()

        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint3B,newinp)
        Clint3B=Clint.Withdraw()

        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint3B}`
        console.log(stat)
        }
    }
    else if((ClintN=="anand" && ClintP==3033)||ClintN=="Anand"||ClintN=="ANAND"){
        console.log("anand's account")
        verf.textContent= "Welcome \r\n Anand"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        mess.innerText="Anand's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerText=''
        dbal.innerHTML=`${Clint4B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint4B,newinp)
        Clint4B=Clint.Deposit()

        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint4B,newinp)
        Clint4B=Clint.Withdraw()

        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint4B}`
        console.log(stat)
        }
    }
        else if((ClintN=="ancilin" && ClintP==3737)||ClintN=="Ancilin"||ClintN=="ANCILIN")
        {
            verf.textContent= "Welcome \r\n Ancilin"
            setTimeout(()=>{
                location.href="#bank"
                },1000)
            mess.innerText="Ancilin's Account"
            trans.innerText=''
            wtrans.innerText=''
            tbal.innerText=''
            dbal.innerHTML=`${Clint5B}`
        dep.onclick=()=>{  
            let newinp=document.getElementById('inp').value     
            const Clint=new Bank(Clint5B,newinp)
            Clint5B=Clint.Deposit()
 
            }
        wit.onclick=()=>{  
            let newinp=document.getElementById('inp').value     
            const Clint=new Bank(Clint5B,newinp)
            Clint5B=Clint.Withdraw()

            }
        balance.onclick=()=>{
            wtrans.innerText=''
            trans.innerText=''
            tbal.innerText= `Your Current balance is $ ${Clint5B}`
            console.log(stat)
            }
    }
    else if((ClintN=="mathew" && ClintP==3737)||ClintN=="Mathew"||ClintN=="MATHEW"){

        verf.textContent= "Welcome \r\n Mathew"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        mess.innerText="Mathew's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerText=''
        dbal.innerHTML=`${Clint6B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint6B,newinp)
        Clint6B=Clint.Deposit()

        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint6B,newinp)
        Clint6B=Clint.Withdraw()

        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint6B}`
        console.log(stat)
        }
    }
    else if((ClintN=="selin" && ClintP==2727)||ClintN=="Selin"||ClintN=="SELIN"){

        verf.textContent= "Welcome \r\n Selin"
        setTimeout(()=>{
            location.href="#bank"
            },1000)
        mess.innerText="Selin's Account"
        trans.innerText=''
        wtrans.innerText=''
        tbal.innerText=''
        dbal.innerHTML=`${Clint7B}`
    dep.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint7B,newinp)
        Clint7B=Clint.Deposit()

        }
    wit.onclick=()=>{  
        let newinp=document.getElementById('inp').value     
        const Clint=new Bank(Clint7B,newinp)
        Clint7B=Clint.Withdraw()

        }
    balance.onclick=()=>{
        wtrans.innerText=''
        trans.innerText=''
        tbal.innerText= `Your Current balance is $ ${Clint7B}`
        console.log(stat)
        }
}
    else{
        console.log(ClintN)
        console.log(ClintP)
        console.log('no match')
        verf.textContent= "Invalid \r\n Credentials"
    }

}
//* this funtion puts first pages animation default*//
stp.onclick=()=>{
    card.classList.remove('fade')
    wrap.classList.remove('reveal')
    wrapr.classList.remove('rereveal')
    butc.classList.remove('show')
    butd.classList.remove('show')
}
//*end of second page working *//


//
//intersection Observer

const li = document.querySelector('section');
// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5 // Fully visible element triggers the callback
};

// Intersection Observer callback function
const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is fully visible');
      entry.target.classList.add('shift')
      // Do something when the element is fully visible
    } else {
      console.log('Element is not fully visible');
      entry.target.classList.remove('shift')
      // Do something when the element is not fully visible
    }
  });
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Start observing the target element
observer.observe(li);
//* *//
//Third Page Working
//* *//
//this function prints the clients trasaction
function Statement(){
console.log('acc clicked')
  h.classList.add('expnad')
  text=" "
  console.log(stat)
  setTimeout(()=>{
      stat.forEach(entry=>{
       text+=entry+"<br>";
    console.log(text)   
    document.getElementById('hi').innerHTML=`${text}`
            
     })
    },3000)
}
//this function expands and colapses the statement
function cler(){
  console.log('click clr')
  h.classList.toggle('expnad')
}
//this function brings user to home page to reuse
function first(){
    location.href="#cover"
    document.getElementById('pin').value=""
    document.getElementById('cardn').value=""
    document.getElementById('hi').innerHTML=""
    h.classList.remove('expnad')
    verf.textContent= ""
    stat.length=0
    console.log(stat)
}