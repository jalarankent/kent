import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>LIKE MY ANIME</h1>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">New & Popular</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
      
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>

      <div className="img">
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/450897194_1453061759422201_3593246099342494098_n.png?stp=dst-png_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHh8ukUuR1OA7oO8eK1bOie6XOCywFteH7pc4LLAW14fuNd1HVpkzDALQu-azpt4XI36IGF3wSzfMsCERySkIBp&_nc_ohc=bZcm9HGqSfQQ7kNvgEhj6yh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFT2cKxT3TY2uwYKXa89IbhuLJz48tIgP6HdHmEBgwpVQ&oe=66E67AD4" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/453691122_3813908308885585_9167265869730063753_n.png?stp=dst-png_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEDaW_CUX8vsj06zbBXFyDcEdpuEh4vaDAR2m4SHi9oMBQkirve9hTfyB8BDj-d36bATQhQb74AU7v6SIYK034m&_nc_ohc=w5tcbwzQ_AoQ7kNvgHwEv0i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGWDgP-6eEfHtiMdRNQ_bnriDs8uNwHdKgm8Zn4LDKBCg&oe=66E66FC8" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454175803_3814924095454890_5160400865472993991_n.png?stp=dst-png_s261x260&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFv3MnKlyQZIEU09P5xCL4S9nxij0yEZ1b2fGKPTIRnVlM55Fjb9n9OkqRckHellv8yWPqahcViLnH6T8G_STJX&_nc_ohc=ORVx-961gaEQ7kNvgEiJPsm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGEVoWm8_xgPfrRiUfl18OTY6JwKrJP9x1dD_qDBYMOhQ&oe=66E66F46" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455061131_1654369625347022_4292998124034515655_n.png?stp=dst-png_s261x260&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFpMpY00kIU4yEnfDDOdpaNKpfsLD_6Pxgql-wsP_o_GAGuzOu853Je_FupDoDkUQN485BwF9wZLangPTEmvg5b&_nc_ohc=lVepnl8pTxQQ7kNvgGUEW1c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEiShG6YDksfmpd5OXZNywPqxRZbEM8jFL4C6V6AZZoGw&oe=66E670C3" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454215387_3101380976669308_4359890793481445211_n.png?stp=dst-png_s261x260&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGmKaUYgAzOHAih-4iLo96kgpI9uuTQLPGCkj265NAs8VZOfyCfkb2Rzf8A_FeURCy-2iW67uf7C7pjptTB9rE2&_nc_ohc=MMV4xiY-rGcQ7kNvgF5BPap&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFLPqzR5Wy0cp5Zu_Ict5gg_X-k0IK7r4H0BNTFLmn7GQ&oe=66E6701C" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/453631257_507895838492687_8295238570259534729_n.png?stp=dst-png_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHys66CLA-BhGRWJBYcc5J19A8RaljgGor0DxFqWOAaijbMLyBb5vOSCTzPXqWzDEtjRIvdEXsm0AxxZwEOm7WX&_nc_ohc=wYp5XbVXq3UQ7kNvgGYGtka&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE7gN2Fczw-yBwHPrkICRy-CZ736dE-m97lH2vrY3xISQ&oe=66E669AC" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/453899956_414152918340465_8773843549327226292_n.png?stp=dst-png_s261x260&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHsMPJvr5hPNYQl--z6HO5eUvDIkloPyFVS8MiSWg_IVW1IAPQ7pc8_Grr9bgaA1DzWIZEoyJCcxwM_ZzkFRNC3&_nc_ohc=Sr9rXlDIH8EQ7kNvgEiHrzN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFl31SfDGu9117yAnvjCSbJiEEOPJ4n74gp10O33Oq-9A&oe=66E66E64" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/453130782_1184509359459393_4643227234472196766_n.png?stp=dst-png_s261x260&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH0u2DUka9pgfgVS0uL0Dd44jJ8suf5N4_iMnyy5_k3j0CH79TA8Chq7OENN0C4WzNHmPDPohuvrTVIzjBm5Z4r&_nc_ohc=Nwoz-rFP6ngQ7kNvgEmsNXq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGb36Q69JsNMY788R7M7Qa18AcJr4SIVRNpq2TY4YfHyw&oe=66E658BA" />
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/455312846_1488897281996481_3763680517033707392_n.png?stp=dst-png_s261x260&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeE_BlQR3zVbA9_AE3W577lFbap0hESvzfNtqnSERK_N8ylzm4WQ9Xn6UgVKmKFMefQPVcdgzMf68K1MEVviXvqf&_nc_ohc=VV_xsF_ySSMQ7kNvgGP7xhi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGas92QWRuY21PRq0OeyE3y0FeZ36LTb-NcTZ-wsnG5uQ&oe=66E65B13" />
      </div>

      <footer>
        <p>
          {" "}
          LIKE MY ANIMEis a free site to watch anime online. We do not store any
          H anim video files on our servers, all video files are collected from
          the internet from 3rd party websites.
        </p>
      </footer>
    </main>
  );
}
