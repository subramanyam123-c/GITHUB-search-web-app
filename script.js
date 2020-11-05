var form =document.getElementById("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    var orginalName=search.split(' ').join('')
    fetch("https://api.github.com/users/"+orginalName)
    .then((result)=> result.json())
    .then((data)=>{
        console.log(data) 

        document.getElementById('result').innerHTML=`
        <img src="${data.avatar_url}"/> <br>
        <b><lable style="font-family:lucida;">Searched for:</lable>${data.login}<br>
        <lable style="font-family:lucida;">User's id:</lable>${data.id}<br>
        <lable style="font-family:lucida;">Name:</lable>${data.name}<br>
        <lable style="font-family:lucida;">Node id:</lable>${data.node_id}<br>
        <lable style="font-family:lucida;">Blog:</lable>${data.blog}<br>
        <lable style="font-family:lucida;">location:</lable>${data.location}<br>
        <lable style="font-family:lucida;">User's email id:</lable>${data.email}<br>
        <lable style="font-family:lucida;">User's bio:</lable>${data.bio}<br>
        FOR REPOSITORIES<a href='${data.repos_url}' target=_blank> CLICK HERE</a><br>
        FOR PUBLIC REPOSITORIES<a href='${data.public_repos}' target=_blank> CLICK HERE </a><br>
        <lable style="font-family:lucida;">Public gists:</lable>${data.public_gists}<br>
        <lable style="font-family:lucida;">Followers:</lable>${data.followers}<br>
        <lable style="font-family:lucida;">Following:</lable>${data.following}<br>
        <lable style="font-family:lucida;">Blog:</lable>${data.blog}<br>
        <lable style="font-family:lucida;">Organizations:</lable>${data.organizations_url}<br>
        <lable style="font-family:lucida;">Is an admin ? :</lable>${data.site_admin}<br></b>


    `

    })
})