const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
        <img src="img/light-logo.png"  class="logo" alt="">
      <div class="footer-ul-container">
        <ul calss="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">Shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">Shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
      </ul>

      <ul calss="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">Shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">Shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        </div>
        
      </div>
      <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam provident repellendus molestias et necessitatibus, sapiente rem corporis at officia expedita debitis, eaque magnam numquam quasi repudiandae commodi nulla? Sint a enim soluta eius! Quibusdam voluptates doloremque dolorem omnis sint, assumenda nostrum magnam nam rem laudantium sapiente animi itaque suscipit voluptate aliquid ut? Qui, doloremque. Ut tenetur ducimus maxime dolorum temporibus distinctio iure, laborum reprehenderit ea! Corporis omnis ipsum non in magni ea, est expedita consequatur nam delectus, sit pariatur repellat ratione praesentium similique tempora cupiditate aperiam voluptas aliquid minus, animi voluptatibus! Iusto quas earum in facilis reprehenderit. Rerum, facilis?</p>
        <p class="info">support emails - help@clothing.com,
          customersupport@clothing.com</p>
        <p class="info">telephone - 180 00 00 001,180 00 00 002 </p>
        <div class="footer-social-container">
          <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
          </div>
          <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>

          </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();