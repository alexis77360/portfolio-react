import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import magicMouse from "magicmouse.js";


function App() {
   const [activeSection, setActiveSection] = useState(null);



   useEffect(() => {
    magicMouse(); // Initialise MagicMouse.js ici
  }, []); 
  


  const handleScroll = () => {
    const currentPosition = window.scrollY + window.innerHeight / 2;

    const sections = document.querySelectorAll("section[id]");
    let newActiveSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">



      <Navbar />
      <main>
        <Hero />
        <section className="about " id="histoire">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora, nam harum autem cupiditate fuga exercitationem hic! Quo enim, minus at et est, eius sint quia maiores eligendi, dolorum cupiditate!
          Magnam, adipisci! Ab vero neque facere cupiditate magnam sit placeat, alias officia vel. Nostrum alias eveniet quaerat dolores, quo assumenda accusantium et ducimus saepe incidunt esse sint numquam sed quasi.
          Perspiciatis praesentium minima quis quam temporibus, quasi totam odio odit consectetur voluptatum animi iusto. Earum corrupti quod sint quos aut quibusdam et nostrum eos doloribus, debitis magni consectetur rerum similique.
          Minus, voluptas atque. Nihil deserunt dolorum laborum id? Ut dolor ipsa facilis beatae repellat, nam dolores delectus incidunt iste expedita ex architecto voluptate ad nihil necessitatibus, ab eaque repudiandae! Hic?
          Tempore, tempora. Eos similique tempora sint voluptate fugit in doloremque vero beatae! Distinctio, incidunt laboriosam? Saepe, sint. Aperiam debitis quam, amet laboriosam obcaecati a voluptates velit explicabo quasi molestias repudiandae?
          Sint nulla est quam magnam repellendus perferendis voluptatibus excepturi iure accusantium officia maiores aspernatur rem quos exercitationem, facilis officiis quod! Esse dignissimos temporibus voluptates ab consequatur eveniet suscipit explicabo atque.
          Similique nisi, rerum nam placeat quia quas quibusdam vero laborum laudantium odio optio harum illo, ipsam assumenda eum! Libero animi, fugiat at officiis neque maiores porro nobis in ullam dolorem?
          Ipsa magni, fugit praesentium ipsam repudiandae dolor est laborum consequatur accusamus rerum similique quisquam cumque ut provident a maiores veniam fugiat dolorum aliquam nulla veritatis adipisci? Beatae, ducimus sunt! Dolorem.
          Placeat, eligendi, natus delectus assumenda nam deleniti, at sapiente quos harum debitis error nesciunt et illum accusamus itaque velit repellendus mollitia sit earum. Officiis nam rerum fuga in ab consequuntur?
          Dignissimos neque voluptas culpa optio eveniet soluta commodi? A error maiores, nemo perferendis asperiores ratione reprehenderit quibusdam est ullam explicabo quo eaque facilis harum minima eius recusandae, fugit assumenda nulla?
          Dignissimos nesciunt tempore deserunt vero quae. Pariatur dolorem molestiae vitae a! Pariatur at culpa natus laudantium in enim praesentium saepe, fugit ipsa facere nisi. Repellendus eos at corrupti? Minus, fuga!
          Tempore odit nesciunt, ipsa sequi quasi iure quod deleniti! Temporibus, soluta suscipit. Iusto neque cupiditate dignissimos cumque, accusamus architecto, fugit accusantium sint non ratione, soluta culpa dolorum deserunt tempore eligendi.
          Adipisci, nulla laborum quibusdam ullam doloremque in magnam amet officiis dolore ut, consequatur aspernatur maxime voluptates necessitatibus. Maiores quidem quia quae ex mollitia! Vero perferendis vel illum? Assumenda, ut placeat?
          Enim ut aut eveniet minus? Nihil dolor ipsum quae, inventore earum perferendis quibusdam minus ducimus voluptatibus libero laudantium velit magni soluta quo suscipit. Et consequatur soluta odio temporibus voluptate dolor?
          Itaque aspernatur iure animi inventore tempora labore facere obcaecati accusamus doloribus eligendi ducimus modi repudiandae, temporibus perferendis enim repellat optio voluptates! Ullam provident voluptate est magnam, vero accusantium praesentium delectus.
          Dicta eveniet harum repellat sequi pariatur, ipsam excepturi reiciendis eaque veritatis. Inventore rem vitae asperiores excepturi velit ab eaque temporibus praesentium, repellat voluptatibus in exercitationem, provident odio magnam natus placeat!
          Accusantium voluptate recusandae fugit impedit error cupiditate eum harum voluptatum doloribus molestias, eius quaerat magni illo ipsam et facilis, natus modi velit architecto veritatis maiores at, esse vero ipsum? Excepturi.
          Sint, assumenda ab commodi voluptates quasi doloremque nemo nobis ipsam provident hic sequi dolorum voluptatum, saepe, expedita quaerat placeat asperiores nisi. Excepturi quia nam quasi provident expedita tenetur quae eaque.
          Quod enim inventore nisi velit blanditiis ipsum dolor aliquam perspiciatis sunt debitis dolore aut optio saepe beatae minima ad nihil molestiae, quidem temporibus? Amet consequatur natus debitis cumque ab laborum.
          Expedita perferendis similique recusandae, doloribus dignissimos soluta? Dolorem, atque harum officia deserunt maxime laudantium vel saepe cupiditate maiores nisi, modi libero repellat eius? Porro esse suscipit mollitia asperiores voluptate debitis?
          Corrupti eligendi dicta voluptatibus. Nostrum cupiditate deserunt, ullam saepe illum aliquam natus officiis libero, illo voluptate blanditiis dolor mollitia consequatur corporis dignissimos laborum? Consectetur, magni fugit officia assumenda maxime eum.
          Maxime nobis tenetur, saepe dolorem laudantium eveniet assumenda corporis soluta doloremque quas sunt ex perspiciatis reprehenderit aspernatur nisi ad adipisci? Rerum ad id soluta odit sit praesentium, necessitatibus expedita voluptate?
          Libero voluptatibus impedit nesciunt? Vero dolor veniam quos odit suscipit voluptatum sit explicabo! Cumque accusamus earum ex sunt quam! Quasi provident maiores, placeat nihil nemo consectetur facilis voluptatem repudiandae ab?
          Praesentium voluptas iure placeat porro molestiae dicta eaque non delectus. Quasi unde cupiditate facilis in reprehenderit beatae deleniti adipisci laborum animi odio fugit molestias earum aliquam, a nulla ex dolore!
          Ducimus porro hic amet eaque, consequatur architecto quis cupiditate sequi. Mollitia facere, ipsa laudantium perferendis autem quisquam qui accusamus neque maxime illum vero dolor expedita in earum, doloribus voluptate provident.
          Quo, vitae ratione reprehenderit odit quae tempore facilis officia ipsa nemo dolorem, aliquam sapiente expedita voluptatibus sit minus hic sed, molestias omnis. Repellendus iste architecto quod temporibus. Neque, nam fuga.
          Totam neque ad, quod a saepe soluta excepturi consectetur delectus amet similique distinctio eum error. Eius fugiat, maxime ea quo porro quisquam necessitatibus reprehenderit molestiae accusamus delectus dolorum. Necessitatibus, voluptatum.
          Fuga mollitia iusto exercitationem accusantium, vero soluta eveniet quidem accusamus nobis distinctio ipsa tempore sint maiores minus magni, rerum officia ducimus dolores odio! Eius exercitationem a id natus asperiores? Minima.
          Provident reiciendis temporibus odit unde odio pariatur aliquam. Quis aliquam illo atque nam modi incidunt, animi tempore? Harum eius ipsum dignissimos quos esse nobis, fugiat nemo deleniti libero quod quisquam?
          Explicabo, voluptates corrupti. Corrupti beatae commodi repellendus accusamus temporibus voluptas eaque, sequi alias velit autem laborum aliquam, obcaecati labore deserunt quae consequuntur. Similique exercitationem expedita iure vel odio eos excepturi?
          Voluptatum ducimus ab eveniet corrupti officia hic incidunt iure harum, quaerat explicabo! Perferendis illo, officiis possimus odio eligendi labore, atque doloremque ipsa suscipit ab et. Maiores harum corporis in consectetur.
          Sunt soluta ipsum aut exercitationem deleniti officiis totam labore tempora nisi earum a id corporis rem consequuntur, ex fugiat amet. Iure similique cupiditate a soluta cumque earum dolorum maxime ipsam?
          A incidunt voluptates odio expedita quo adipisci, deleniti officia nam culpa iste aliquid quas? Repellendus dolorum, laudantium totam tempora at explicabo est nam obcaecati earum perspiciatis, id minus quo odit.
          Molestiae, itaque id vel perspiciatis facilis consequuntur eius beatae perferendis debitis, at tempora! Quas, magnam non exercitationem nostrum nobis minima quidem facilis harum unde, eos veniam. Quas possimus quia exercitationem?
          Maiores dolorem laboriosam consequatur porro, veritatis dignissimos veniam cupiditate explicabo itaque eveniet nulla sapiente, nobis facere ipsa ipsum in cum voluptate atque? Eius earum illum labore! A quidem dicta eaque.
          Voluptas rerum, saepe iste rem autem fugit animi cum. Laborum excepturi omnis nobis, rerum labore tempora. Similique voluptas aliquid cupiditate quisquam eius animi ipsa? Quas hic incidunt assumenda dolor dignissimos!
          Minus quibusdam praesentium, fuga in, earum porro iure accusantium tempora quae eos magnam vero velit explicabo tempore, soluta iusto at voluptatem pariatur rem itaque sint id odit et deserunt! Corrupti!
          Quisquam culpa sunt est hic accusamus, assumenda iusto asperiores eos doloribus debitis reiciendis eaque suscipit officia perspiciatis animi quod iure libero rerum velit temporibus! Molestias distinctio ullam id corporis reprehenderit!
          Quasi quaerat iste dolore, est voluptate cupiditate et adipisci repellendus recusandae asperiores possimus molestiae voluptatum labore in ad sed ab praesentium velit qui fugiat. Quo officiis aliquam commodi a debitis?
          Totam eos expedita repellendus earum dolore nihil. Fugiat facere id excepturi quae laboriosam sunt dolorum dignissimos voluptates quos nihil expedita doloremque quasi dolores, eos asperiores similique reiciendis. Atque, qui accusantium.
          Illum rem nobis maxime vero ipsam temporibus quia recusandae eaque inventore quo reiciendis dolorem, ea quae minima similique earum aspernatur aperiam consequuntur quam veritatis ratione quos dignissimos natus? Quis, commodi?
          Autem magnam debitis ipsum eum, nisi, vitae veritatis iste ad ea odit id sunt laborum ipsam, soluta quisquam assumenda eveniet? Consequatur voluptas alias aperiam nesciunt non repudiandae, explicabo quaerat perspiciatis.
          Cum, voluptatibus cumque ea omnis, quod tempora non quam possimus animi eum sunt, esse reprehenderit. Dolore magni molestias vel deserunt non corporis, nulla dicta. Quo dignissimos aut placeat dolorem sint.
          Tenetur nihil assumenda earum! Voluptatum unde, maxime assumenda dolores fuga odit! Labore odio omnis, cum impedit magni quibusdam autem voluptates consequuntur explicabo distinctio porro nam aspernatur, earum nobis molestiae deleniti.
          Dolor deserunt hic fugiat cumque optio ad similique sequi officiis corrupti animi eveniet aliquid, ab eligendi quibusdam sunt corporis suscipit rem quidem distinctio culpa quam! Eius nulla perferendis doloribus laudantium?
          Natus odio quasi voluptatem consequatur cum debitis magni porro, sequi aspernatur facilis, quia deleniti voluptatibus aliquam itaque magnam! Nesciunt odio perferendis ducimus! Tenetur provident accusamus cupiditate hic ipsa nihil dolore.
          Nulla, sint labore excepturi nesciunt, nostrum voluptatibus deleniti natus ab illum repellendus in optio harum enim. Quam mollitia, voluptatibus aspernatur alias aliquam quos facere, incidunt officiis a iusto nihil possimus.
          Optio atque ad distinctio necessitatibus excepturi! Rerum quisquam quae necessitatibus aliquid eius in quibusdam architecto sapiente, autem velit atque aliquam voluptatum minus hic quam ullam distinctio omnis facere neque repudiandae!
          Ipsam quos blanditiis eius totam suscipit, natus harum eum voluptates tempora? Eos veritatis itaque quia! In accusantium vel, debitis fugiat neque qui cumque veniam numquam repudiandae eos iure eaque distinctio?
          Fugiat eaque vero minus aperiam necessitatibus nihil eius fuga ratione debitis, voluptates ipsam dolor ipsum vel quas, perferendis eos accusantium quasi, tenetur aspernatur itaque quaerat accusamus recusandae cum saepe? Nihil?
        </section>
        


    </main>
    

    </div>
  );
}

export default App;
