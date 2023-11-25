let nkb = document.querySelector('#nkb')
let nka = document.querySelector('#nka')
let nkcb = document.querySelector('#nkcb')

let logout = document.querySelector('#logout')

let a1, a2 , a3, a4, a5, a6 ,a7 ,a8

var firebaseConfig = {
  apiKey: "AIzaSyCb44FGoUhJ2swDDTkG8uhFsn3V72oc4Hk",
  authDomain: "login-7ab5b.firebaseapp.com",
  projectId: "login-7ab5b",
  storageBucket: "login-7ab5b.appspot.com",
  messagingSenderId: "758773760067",
  appId: "1:758773760067:web:376883ad21ee41080754f6"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  db.collection('product10').doc('link').get().then((결과)=>{
    a1 = 결과.data().link
    console.log(a1)
    nkb.textContent = a1
  })

  nkcb.onclick = () => {
    db.collection('product10').doc('link').update({ 'link' : nka.value}).then(() => {
        location.reload()
    })
  }
 
  logout.onclick = () => {
    localStorage.clear()
    alert('로그아웃되었습니다.')
    location.href = 'index.html'
  }
