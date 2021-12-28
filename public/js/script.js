console.log('AAA')
window.addEventListener('load',()=>{
    
let options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
  }
  
  let c=5;
  let f=true;
  let d=document.getElementById('body');
  let p1=document.getElementById('Footer')
  let callback = (entries, observer) => {
    
    entries.forEach(entry => {
        if(entry.isIntersecting && f)
        {
            console.log("inste")
            f=false;
            
            fetch(`http://localhost:3000/${c}`).then((res)=>res.json()).then((res)=>{
                
                    console.log(res)
                    c+=4;
                    for(let i=0;i<res.length;i++)
                    {
                        let p=document.createElement('div');
                        p.setAttribute('class','product-card');
                       const id=
                                `
                                    <div class="product-tumb">
                                    <img src=${res[i].image} alt="" />
                                    </div>
                                    <div class="product-details">
                                    <div class="category-details">
                                        <span class="product-catagory">${res[i].category}</span>
                                        <span class="product-catagory"> Rating <span class="value">${res[i].rating.rate}</span></span>
                                    </div>
                                    <h4><a href="">${res[i].title}</a></h4>
                                    <p>${res[i].description}</p>
                                    <div class="product-bottom-details">
                                        <div class="product-price">${res[i].price}</div>
                                    </div>
                                    </div>
                                `;
                        p.innerHTML=id;
                        console.log(p);
                        d.insertBefore(p,p1)
                    }
                    f=true;
            }).
            catch((err)=>console.log(err))
        }
    })
  }
  
let observer = new IntersectionObserver(callback, options);

console.log(document.getElementById('Footer'))
observer.observe(document.getElementById('Footer'))
})