import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";
export default function ServicesPage() {
  return (
    <main>
      <div className={styles.introduction}>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          consequuntur ullam aspernatur asperiores voluptatibus facere
          doloremque minus quaerat necessitatibus
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum
          consequatur reprehenderit vitae sapiente sequi nobis nihil illum magni
          dolorum veniam ex deserunt architecto quaerat temporibus, aperiam
          beatae dignissimos nemo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo nostrum possimus ut omnis blanditiis
          officia tenetur veniam dolorem quibusdam adipisci sit, totam voluptate
          nesciunt architecto consequatur soluta cupiditate repudiandae saepe!
        </p>
      </div>
      <h1 className={styles.servicesHeader}>Mūsų paslaugos</h1>
      <div className={styles.servicesWrapper}>
        <div className={styles.serviceCard}>
          <Slider></Slider>
          <h4>Namų fasadų valymas</h4>
          <p className={styles.serviceCardDescriptionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Consequuntur beatae consequatur aliquid alias
            exercitationem ipsum tenetur commodi qui veniam accusamus soluta
            nostrum nisi, unde similique harum quisquam eligendi.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Slider></Slider>
          <h4>Trinkelių valymas</h4>
          <p className={styles.serviceCardDescriptionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Consequuntur beatae consequatur aliquid alias
            exercitationem ipsum tenetur commodi qui veniam accusamus soluta
            nostrum nisi, unde similique harum quisquam eligendi.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Slider></Slider>
          <h4>Stogų valymas</h4>
          <p className={styles.serviceCardDescriptionParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Consequuntur beatae consequatur aliquid alias
            exercitationem ipsum tenetur commodi qui veniam accusamus soluta
            nostrum nisi, unde similique harum quisquam eligendi.
          </p>
        </div>
      </div>
      ;
    </main>
  );
}
