 const rehber=[
    {
        id:1,
        ad: "kadir",
        numara:[5524175546],
    },
    {
        id:2,
        ad:"ali",
        numara:[5547415547]
    }
 ]
 while(true){
    let soru=prompt("kişi eklemek için: 1 / kişi bulmak için: 2 / kişi silmek için: 3  tuşla");

    if(soru==="1"){
        let ad=prompt("isim giriniz");
        let numara=Number(prompt("numara giriniz"));
        rehber.push({
            id:rehber.length +1,
            ad:ad,
            numara:numara

        });
        for (let index = 0; index < rehber.length; index++) {
            
           alert(rehber[index].ad);
           alert(rehber[index].numara);
        }
        
        


    }else if(soru==="2"){
        let aranan=prompt("bulmak için isim giriniz");
        let bulundu= false;
        for (let index = 0; index < rehber.length; index++) {
            if(rehber[index].ad===aranan){
                alert("bulundu: "+rehber[index].ad);
                alert(rehber[index].numara);
                bulundu=true;
                
            }
            
        }
        if(!bulundu){
            alert("kayıtlı kişi yok");
            
        }
    }else if(soru==="3"){
        let silinenkisi=prompt("Hangi kişiyi silmek istiyorun");
        for (let index = 0; index < rehber.length; index++) {
            if(rehber[index].ad===silinenkisi){
                rehber.splice(index, 1);
                alert("kayıt silindi");
            }
        }
       
        

       
    }else {
        alert("gecersiz değer");
    }
}
