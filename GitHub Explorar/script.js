var form = document.getElementById('info')
try {
form.addEventListener('submit',function(e){
    e.preventDefault()
    var search = document.getElementById('search').value
    
        fetch("https://api.github.com/users/"+search)
    .then((result)=>result.json())
    .then((data)=> {
        console.log(data)

        const img = document.getElementById('image')
        const link = document.getElementById('link')
        img.src= data.avatar_url
        link.href = data.html_url
        document.getElementById('result').innerHTML = 
        `<p> Name :\t\t${data.name} <br>
        Bio :\t\t${data.bio} <br>
        Public Repos :${data.public_repos} <br>
        Followers :${data.followers} <br>
        Followings :${data.following} <br></p>`
  
    })

})}
     catch(error) {
        document.getElementById('image').src = 'default.png'
        alert("Check the Username Again!!");
    }
    