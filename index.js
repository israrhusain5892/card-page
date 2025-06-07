

const data=[
      {
        unit:1,
        price:10.00,
        off:10,
        cancelPrice:24.00

      },
       {
        unit:2,
        price:18.00,
        off:20,
        cancelPrice:24.00

      },
       {
        unit:3,
        price:24.00,
        off:30,
        cancelPrice:24.00

      }
]




const container=document.querySelector("#card-container");

data?.map((element,index)=>{
    
    const card=`
         <div class="card">
             ${index===1 ? `<div class="flip"></div><div class="popular-tag">MOST POPULAR</div>`:''}
                <div class="card-body">
                      <div class="left-part">
                    <label class="checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-checkbox">
                        <div class="unit-container">
                             <h4 class="unit">${element.unit} Unit</h4>
                             <div class="tag">${element.off}% Off</div>

                        </div>
                         <span>Standard Price</span>
                    </label>
                </div>
                <div class="price">
                     <h4>$${element.price} USD</h4>
                     <del class="cancel-price">$${element.cancelPrice} USD</del>
                </div>
                </div>
               <!-- size color container -->
                <div class="size-color-container">
                      
                    <div class="size-container">
                        <label class="size-label">Size</label>
                        <div class="size-box">
                             
                             <label>#1</label>
                        <select>
                            <option>S</option>
                            <option>400px</option>
                              <option>300px</option>
                        </select>

                        </div>
                       
                          <div class="size-box">
                               <label>#2</label>
                        <select>
                            <option>S</option>
                            <option>400px</option>
                              <option>300px</option>
                        </select>
                          </div>
                        
                    </div>
                    <div class="color-container">
                        <label class="color-label">Color</label>
                      

                          <select>
                            <option>Color</option>
                            <option>red</option>
                              <option>yellow</option>
                        </select>
                          

                      
                      
                       
                         <select>
                            <option>Color</option>
                            <option selected>Black</option>
                              <option>yellow</option>
                        </select>
                    </div>
                    
                </div>
            </div>

`

container.innerHTML+=card;



})

// event delegation applying click event on parent but moving handler from child to parent
container.addEventListener('click',(e)=>{
    const card=e.target.parentNode;
    card.classList.toggle('add-style')
    const sizeContainer=card.querySelector('.size-color-container');
    sizeContainer.classList.toggle('expand');
})



