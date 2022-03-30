import { Prize } from "./types";
import * as logos from "./assets/logos";

export const PRIZES: Prize[] = [
  {
    id: "amazon",
    name: "$60 Amazon Voucher",
    value: 60,
    kind: "Amazon Voucher",
    logoUrl: logos.amazonUrl,
    imageUrl: "https://c.tenor.com/GugokSc3Q4EAAAAC/risa-bezos-speedball.gif"
  },
  {
    id: "active",
    name: "$50 Active Voucher",
    value: 50,
    kind: "Active Voucher",
    logoUrl: logos.activeUrl,
    imageUrl: "https://c.tenor.com/pT1NCs8xcJgAAAAC/animals-exercise.gif"
  },
  {
    id: "uber-eats",
    name: "$50 Uber Eats Voucher",
    value: 50,
    kind: "UberEats Voucher",
    logoUrl: logos.uberEatsUrl,
    imageUrl: "https://i.giphy.com/media/Qw4X3FOknVexRVd1j5m/giphy.webp"
  },
  {
    id: "eftpos",
    name: "$100 EFTPOS Mastercard",
    value: 100,
    kind: "EFTPOS Mastercard",
    logoUrl: logos.mastercardUrl,
    imageUrl: "https://c.tenor.com/A_d18TlTmycAAAAC/counting-money-money.gif"
  },
  {
    id: "woolworths",
    name: "$50 Woolworths WISH Voucher",
    value: 50,
    kind: "Woolworths Voucher",
    logoUrl: logos.woolworthsUrl,
    imageUrl: "https://c.tenor.com/Nc8Zzh4sVxoAAAAM/toilet-paper-fight.gif"
  },
  {
    id: "bunnings",
    name: "$40 Bunnings Voucher",
    value: 40,
    kind: "Bunnings Voucher",
    logoUrl: logos.bunningsUrl,
    imageUrl:
      "https://tenor.com/view/shaun-the-sheep-farmageddon-aardman-shaun-movie-funny-gif-14478418.gif"
  }
];
