const axios= require("axios");
const { error } = require("console");
const fs=require("fs");

const promp=require("prompt-sync")();

axios.get("http://api.navgurukul.org/courses")
.then((res)=>{
    const file=res.data
    // var name = promp("enter your id numbers  -   ")

    const write= fs.writeFileSync("api1.json",  JSON.stringify(file,null,4));
    var a=1 ;
    // console.log(file);

    for (b  of file){   
        console.log(`${a}`+(":      ")+ b["name"]);
        a++ 
    }
    const id_no=Number(promp("enter your id NUmber"))
    // console.log(typeof(file[id_no-1]["id"]));
    // const nav_url="http://saral.navgurukul.org/api/courses/"+file[id_no-1]["id"]+"/exercises"
    // console.log(nav_url);
    axios.get("http://saral.navgurukul.org/api/courses/"+file[id_no-1]["id"]+"/exercises")
    .then((res1)=>{
        const file1=res1.data;
        // console.log(file1);
        const write1=fs.writeFileSync("api1_id.json",JSON.stringify(file1,null,4))
        var a=0
        // console.log(file1["data"][0]["name"]);
        var b=file1["data"]
        // console.log(b);
        for (j in b){
            console.log(`${a+1}"  "${b[j]["name"]}`);
            a++
            }
        const id_name=Number(promp("enter your id NUmber"))
        axios.get("http://saral.navgurukul.org/api/courses/"+file[id_no-1]["id"]+"/exercise/"+"getBySlug?slug=requests__"+b[id_name-1]["name"])
        .then((res2)=>{
            const file2=res2.data;
            const write2=fs.writeFileSync("api1_id_data.json",JSON.stringify(file2,null,4))
        }).catch((error)=>{
            console.log(error);
        })
    }).catch((error)=>{
            console.log(error);
        })
}).catch((error)=>{
    console.log(error)
})