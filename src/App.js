import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";


function App() {

  //génerer un div qui suit le déplacement de la souris
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    });
  }, []);

  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          left: `${
            mousePosition.x > window.innerWidth - 40
              ? window.innerWidth - 40
              : mousePosition.x
          }px`,
          top: `${
          mousePosition.y
          }px`,
        }}
      >
      </div>


      <Navbar />

      <main>
      <h1>Portfolio</h1>
      <section id="welcome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.
      
      
      </section>
      <section id="accueil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.</section>
      <section id="histoire">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.</section>
      <section id="realisation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.</section>
      <section id="mini-projets">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati nihil veritatis itaque recusandae earum nulla. Velit ea provident suscipit, veniam facere facilis optio, quidem fuga alias veritatis at commodi.</section>
      <section id="cv">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eveniet vel debitis porro, aperiam quidem aliquam consectetur? Porro, corporis? Modi, iure ut laudantium natus maxime quia repudiandae perferendis autem aperiam!
      Eligendi neque ex dolore nobis atque repellendus aspernatur iure nisi? Ipsum a doloremque ut dolorum nam blanditiis facilis vel eaque fugit? Obcaecati, laudantium quas molestias animi quis reiciendis nobis repellat.
      Sit error architecto maxime magni ipsam culpa, quibusdam tempora quod voluptate nisi aperiam asperiores officiis ex aspernatur quia eligendi provident adipisci debitis reiciendis necessitatibus harum delectus voluptas fuga. Tempora, asperiores?
      Vitae totam magnam voluptate repellendus, quis veritatis omnis laborum quae ducimus commodi, deleniti eos ad molestiae iure doloremque incidunt. Sunt quo, animi consequuntur praesentium quam sed voluptatum officia autem! Incidunt.
      Eius et reiciendis sit sed similique id labore, beatae sapiente enim asperiores dolor amet nihil harum, rerum fuga magni officiis eveniet cupiditate molestiae vero cumque saepe officia expedita. Cum, ex?
      Minima fugit recusandae sapiente, quidem obcaecati dolorem dignissimos aliquid ex tempora impedit ratione perferendis id nam reiciendis quae sit error vero veritatis! Nihil similique at, a sequi esse animi amet.
      Ducimus, architecto vero iste, animi, officiis dolor in quaerat obcaecati veniam ex corrupti. Dolore quo ipsa optio ut? Repellat ad corporis veniam. Vitae cum, laborum corrupti atque animi suscipit corporis.
      Iste quasi rerum reiciendis accusamus delectus! Error hic accusantium assumenda consequuntur ea sint commodi fuga ipsam nam, vel, nihil dolores! Et tenetur veritatis quaerat inventore porro, ipsum numquam fuga accusamus?
      Accusantium, vitae temporibus, cumque dolore minus hic corporis doloremque molestiae qui beatae ad assumenda iure reprehenderit ea quibusdam repudiandae dolorum, perspiciatis odio sed suscipit rerum saepe laboriosam! Quisquam, commodi suscipit!
      Dolorum quae facilis quasi! Esse nulla ullam nam pariatur hic cupiditate recusandae! Beatae numquam, assumenda quas ea, eum inventore et quidem aspernatur non veniam iste repellendus illo iure similique architecto.
      Tenetur saepe qui praesentium nostrum maxime natus distinctio et enim? Sapiente rem eos dolorem illum saepe odio. Maxime, soluta quis consequuntur at consequatur voluptate facere minima nulla, itaque tempora saepe.
      Ut sit necessitatibus quam aliquid dolorem impedit soluta voluptatibus totam, molestias nisi! Numquam exercitationem commodi esse nesciunt ab omnis, incidunt veritatis beatae saepe, ipsum temporibus non. Nemo similique necessitatibus vel.
      Quod aperiam unde vero veniam ullam voluptates libero eius facilis neque praesentium perspiciatis, inventore consequatur qui, architecto iure nobis alias at? Alias excepturi quidem placeat beatae consequuntur corporis molestiae quod.
      Expedita illo beatae hic! Quod debitis hic cum corporis, facere veritatis laborum odio iste adipisci? Ad illo libero sunt, ducimus sequi quo dignissimos harum tempora facere dolore ipsam quam assumenda.
      Eum id beatae, ad consectetur quos corrupti maiores consequatur. Facere in quod recusandae sapiente fugit? Rem aspernatur, fugit dignissimos sapiente, ullam deleniti, nobis autem numquam facilis tempore deserunt voluptatibus omnis.
      Numquam tenetur accusamus, est tempore corporis possimus quae beatae dicta eveniet eum doloremque. Omnis eaque, ad similique culpa voluptatem qui! Illo accusantium totam facilis magnam cupiditate! Ipsa, ut veritatis. Est?
      Saepe sunt nulla aut! Facilis quae aut tempore facere at, quaerat blanditiis deleniti accusamus! Harum fugiat saepe illum reiciendis laudantium placeat enim incidunt explicabo fuga quo. Reprehenderit architecto odio nobis?
      Placeat veniam architecto sint repellat nulla unde quo, animi rem, pariatur enim ea quam! Ipsam delectus id veritatis necessitatibus harum asperiores nobis architecto omnis atque. Magni, praesentium! Perferendis, natus dolor.
      Ullam fugit quod blanditiis nisi ducimus consectetur. Culpa voluptatibus vel sint velit, iste obcaecati vitae tenetur nisi illo eos porro, ab voluptate et omnis nihil inventore voluptatum aliquam officiis architecto.
      Optio quas voluptatibus, assumenda nulla ea unde eaque fuga error porro numquam! Repellendus iure corrupti ea porro saepe obcaecati explicabo quos similique laudantium labore enim facere veniam quasi, atque odio.
      Ipsam provident voluptate sequi dolorem dolores! Minus autem aliquid harum pariatur at nostrum. Eligendi, adipisci. Quaerat, itaque! Numquam, inventore hic aliquid ipsam magni mollitia amet, nam nisi alias voluptatem minus?
      Amet unde, quisquam eum et at, error blanditiis, nisi consectetur inventore aspernatur tempora? Fuga perferendis ad totam dignissimos rem adipisci ex, hic corporis quo nostrum, molestiae voluptatem explicabo aliquid animi.
      Explicabo quas blanditiis non. Eos debitis officiis ipsum sequi vel fugiat, ut eaque fuga illum voluptatem natus in quaerat distinctio tempora quas tempore a expedita, ipsam beatae, ea laudantium. Sint.
      Dignissimos sed placeat optio pariatur obcaecati id odit molestiae unde, consequatur iure error non. Aliquid molestias, voluptas laboriosam labore consectetur cumque omnis repellendus harum provident, pariatur totam sequi, ad officia.
      Quasi omnis ab veritatis, unde voluptatibus assumenda perspiciatis consequuntur iste maxime ipsum aspernatur molestiae natus provident culpa, molestias optio repellendus veniam atque hic voluptatem voluptatum minima. Magni, nisi quia. Totam?
      Sunt, fugiat. Nihil, eaque? Repellat sint reiciendis ut alias numquam quae provident sunt dignissimos facere molestiae labore, molestias unde. Dolorum dolores odit eligendi quos voluptate, deserunt reiciendis doloribus ab modi?
      Dolore mollitia soluta animi odio nisi consequatur deserunt similique, aperiam reprehenderit placeat eum odit hic esse totam maiores quae quisquam, provident repellat, corporis eveniet. Eligendi ut quo obcaecati neque laboriosam!
      Tempore itaque eius voluptates accusantium molestiae quibusdam! Quis nostrum soluta aliquam sapiente totam atque rem at doloribus corporis perspiciatis, molestias iusto pariatur consequuntur assumenda quibusdam, eveniet qui placeat laborum eum?
      Assumenda eveniet deserunt facilis expedita vitae voluptate pariatur corrupti reiciendis iusto dicta! Est saepe dolorem animi odit veritatis possimus neque quis nemo ipsa odio? Libero architecto commodi dignissimos ducimus! Neque.
      Corporis libero rerum omnis quos porro architecto voluptas qui aliquam cumque eos fuga officiis sed suscipit ab error unde, nesciunt cupiditate deserunt? Sequi quibusdam aspernatur numquam ab saepe repellendus odio?
      Porro ea reprehenderit dolor et perspiciatis eveniet provident, laboriosam ex ratione facilis non quibusdam fuga ab, sed doloribus aut voluptates officiis consequuntur? Sit, autem at possimus dolores temporibus maiores molestias!
      Non totam, rerum illum blanditiis, alias exercitationem nihil commodi debitis ea doloremque magnam praesentium voluptatem molestias excepturi recusandae perspiciatis quia fuga dolores. Similique, tempora fuga architecto vero mollitia qui aliquam!
      Suscipit aliquam architecto voluptate voluptatum, adipisci illum repellat labore molestiae vel necessitatibus. Voluptatem consequatur quibusdam sed, rerum quae optio autem fuga accusantium labore. Nihil in maxime, delectus ducimus dignissimos illum?
      Eveniet saepe blanditiis ratione, exercitationem fugit, quis at rerum debitis aliquam neque dolore delectus voluptate nemo tempore id maxime tenetur inventore possimus magni vel cumque praesentium dignissimos ab? Deleniti, quo.
      Doloremque voluptatum non modi explicabo voluptatibus, reprehenderit beatae architecto nulla reiciendis porro quia quo ex. Ex exercitationem quae similique, iste a dolor voluptates numquam ipsam iure quam eveniet veniam molestias!
      Tempora, id cumque. Unde numquam cupiditate voluptate eius commodi ut eligendi repellat facilis obcaecati, beatae provident quasi rem tempore recusandae fugiat perferendis omnis. Deserunt corporis suscipit obcaecati veritatis, vero vel!
      Deleniti dolore blanditiis dolor nobis! Suscipit deserunt, neque eos voluptatem illum odit nobis, voluptatum laboriosam dolorem excepturi ut iure ipsam provident obcaecati alias quia at adipisci fugiat mollitia placeat natus!
      Delectus suscipit corporis, animi, aspernatur error assumenda neque porro dolorem, libero consequatur quam enim. Harum similique temporibus laudantium ipsa, nihil optio repellat error quia dolorum totam corrupti, corporis aliquam deserunt?
      Obcaecati error eum explicabo eos et architecto nobis, reiciendis sapiente fugiat ex totam. Quidem, voluptatibus fugit? Tempora sunt consectetur eius rem pariatur ab voluptates incidunt? Quia quis sapiente consectetur commodi?
      Totam iste ipsam quis perferendis perspiciatis. Autem enim sit exercitationem nisi officia quibusdam praesentium? Quas, cupiditate nisi. Libero, adipisci. Magnam, quis hic quibusdam pariatur mollitia commodi dolorum aliquid voluptate dolores.</section>
      <section id="contact"><h1>
        Contact
        
        
        
        </h1></section>

    </main>
    

    </div>
  );
}

export default App;
