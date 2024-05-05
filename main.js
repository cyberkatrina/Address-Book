let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()
  console.log(arrayOfUsers)
}

const errorHandler = (res) => {
  if(!res.ok) {
    throw Error(res.statusText)
  }
  return res
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=15')
  .then(errorHandler)
  .then(res => {
    return res.json()
  })
  .then(users => arrayOfUsers = users.results)
  .catch(err => console.log(`Error,  ${err}`))
}

const getDogs = () => {
  fetch('https://dog.ceo/api/breed/hound/images')
    .then(res => res.json())
    .then(res => gulp.src = res.message[Math.floor(Math.random() * res.message.length-1)])
}

// This function logs the results in your browser's console
const consoleUsers = () => {
  console.log(arrayOfUsers)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUsers = () => {
  const allUsers = document.getElementById('all-users')
  arrayOfUsers.map((user) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`Name: ${user.name.title} ${user.name.first} ${user.name.last}    `)
    let src = user.picture.medium
    img = document.createElement('img')
    img.src = src;
    li.appendChild(img)
    li.appendChild(text)
    let button = document.createElement('button')
    let clicked = false
    button.innerHTML = 'more info'
    button.onclick = function(){
      if (!clicked) {
        let dropDown = document.createElement("p")
        dropDown.setAttribute("id", "dropDown");
        dropDown.innerHTML = `DOB: ${user.dob.date.split('T').join("  Time: ")} <br> Age: ${user.dob.age} <br> Gender: ${user.gender}<br> Address: ${user.location.street.number}  ${user.location.street.name}  ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode} <br> Email: ${user.email} <br> Phone: ${user.cell}`
        li.appendChild(dropDown)
        clicked = true
        button.innerHTML = 'hide info'
      }
      else {
        dropDown = document.getElementById("dropDown")
        li.removeChild(dropDown)
        clicked = false
      }
    };
    li.appendChild(document.createElement("br"))
    li.appendChild(button);
    li.appendChild(document.createElement("p"))
    allUsers.append(li)
  })
}

const fetchUsers = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`User: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const hideUsers = () => {
  document.getElementById('all-users').innerHTML = ""
}