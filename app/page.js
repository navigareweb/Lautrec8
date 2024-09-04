import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/Lautrec400x600.jpg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>
          MAURICE JOYANT AND THE POSTHUMOUS PRINTS
        </h3>
        <audio controls src="/MAURICE-JOYANT.mp3" className={styles.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Lautrec was a very prolific artist, despite his career made short by
          his untimely death. His production includes 737 paintings, 4,748
          drawings, 275 watercolors, 334 prints, and 33 posters. His tireless
          need for production, together with a curiosity for formal
          experimentation, led him to deal with graphic art, a form of art in
          which he probably reached his highest peak. On the other hand,
          Lautrec's years of activity were years of modernity and great
          technological revolutions: the advent and spread of photography, the
          improvements in printing techniques, including the introduction of
          color lithography, were seductive elements for an artist who was among
          the first to understand the importance of advertising. As Argan
          recalls, “drawing posters or covers for a program represented for him
          a real commitment, not less important than making a painting. Indeed,
          in advertising, communication for spurring is more important than
          representing. If representation is something fix that promises to be,
          communication creeps in and strikes: for the first time, thanks to
          Toulouse, artist's activity no longer aims to end up in a finished
          object, that’s the painting, but unravels in an unstopped series of
          paintings, engravings, drawings, even in a sketchbook leafed through
          as if it were a collection of poems.” Even today Lautrec's works are
          some of the most reproduced in the world, and are part of the
          collective imagination associated with the Belle Époque. Nevertheless,
          Toulouse was too modern to be understood by critics, and he did not
          meet with the success he would have deserved; indeed, it can be said
          that his fame was posthumous. The person who most managed to create
          the myth of Lautrec was Maurice Joyant, a very close friend of the
          artist, who first organized an exhibition of his works, and in 1922
          persuaded Adéle, Lautrec's mother, to give the works in her possession
          to the city of Albi, in order to establish the Musée Toulouse-Lautrec.
          Joyant also published several Lautrec's works, making them accessible
          to the general public. Together with the heirs of Adolphe Goupil – an
          art dealer and the founder of Goupil & Cie, a company specializing in
          the imprinting and publishing of original prints, which soon developed
          a worldwide market for reproductions of works of art with branches in
          London, Brussels, The Hague (where Vincent van Gogh also worked),
          Berlin and Vienna, and New York – Joyant was committed in rearranging
          and publishing Lautrec's graphic work after the artist's death. Some
          of the works in the exhibition are part of these posthumous prints.
          Among them, the Au Cirque series, which includes 39 drawings made
          during Lautrec's stay in a sanatorium in 1899, which could only be
          admired following the artist's exhibitions, when Maurice Joyant
          reproduced 22 of them by using the photomechanical process in 1905 (a
          second edition with the remaining drawings would appear in 1931).
          Joyant, who had met Lautrec at school, when he was 8 years old,
          started his career as a food critic before dealing with art in all of
          its forms (he was a collector, publisher, gallery manager, and
          critic). They shared an endless series of experiences and, among the
          several passions, cooking was a common one. Few people know that
          Lautrec, besides being a great gourmet, was a fine cook as well. After
          his untimely death, Joyant collected and published the painter's
          creative recipes, including that of the famous pigeons with olives:
          this recipe was invented by Toulouse-Lautrec, who prepared it for
          banquets he often laid out for his friends and favorite models. In the
          book on display here, a 1966 edition, the recipes are illustrated by
          the several drawings and menus specially created by the artist.
        </p>
      </div>
    </main>
  );
}
