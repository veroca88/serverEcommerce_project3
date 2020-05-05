const DataProducts = [
  {
    name: "Knit Multicolor Sweater",
    color: ["multicolor"],
    size: ["XS", "S", "M", "XL"],
    description: "sweater blue knitting wool upper",
    type: "upper",
    material: "wool",
    cost: 32,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/Screenshot_from_2020-04-01_20-49-47_aeyjvp.png",
    count: 0,
    total: 0
  },
  {
    name: "Fine-knit Sweater",
    color: ["beige"],
    size: ["XS", "S", "M", "XL"],
    description: "sweater beige knitting wool upper",
    type: "upper",
    material: "wool",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028235/ecommerce_ironhack3/000002_mwgjay.png",
    count: 0,
    total: 0
  },
  {
    name: "Kimono Blouse",
    color: ["white/blue"],
    size: ["XS", "S", "M", "XL"],
    description: "kimono blouse blue white cotton upper",
    type: "upper",
    material: "cotton",
    cost: 38,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000003_aq9r06.png",
    count: 0,
    total: 0
  },
  {
    name: "Black-heeled boot",
    color: ["black", "brown"],
    size: ["36", "37", "38", "39"],
    description: "boots shoes black brown pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 55,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000004_zdccyy.png",
    count: 0,
    total: 0
  },
  {
    name: "High Tops",
    color: ["brown/beige", "black/white"],
    size: ["36", "37", "38", "39", "40", "41"],
    description: "boots shoes black brown white pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 72,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000005_q77y4e.png",
    count: 0,
    total: 0
  },
  {
    name: "Outdoor Parka",
    color: ["red", "orange", "black"],
    size: ["XS", "S", "M", "XL"],
    description: "jacket coat blazer red orange pineapple upper ",
    type: "upper",
    material: "pineapple",
    cost: 102,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000006_auynkz.png",
    count: 0,
    total: 0
  },
  {
    name: "Handbag Wallet",
    color: ["beige", "orange", "brown", "green"],
    size: ["nosize"],
    description: "wallet purse handbag beige orange brown green pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 30,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000007_m0rw6q.png",
    count: 0,
    total: 0
  },
  {
    name: "Portfoio handbag",
    color: ["brown", "green", "orange"],
    size: ["nosize"],
    description: "portfolio purse handbag brown green coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 62,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000008_ceeqhc.png",
    count: 0,
    total: 0
  },
  {
    name: "Fanny Pack Belt",
    color: ["brown", "red", "blue"],
    size: ["nosize"],
    description: "fanny pack belt moon belly bum bag brown coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 42,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000009_wxn0ad.png",
    count: 0,
    total: 0
  },
  {
    name: "Coconut Sandals",
    color: ["pink", "blue", "orange"],
    size: ["36", "37", "38", "39", "40"],
    description: "sandals flip flops pink coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 38,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000010_efer5y.png",
    count: 0,
    total: 0
  },
  {
    name: "Minimal Wallet",
    color: ["red", "green"],
    size: ["nosize"],
    description: "wallet purse handbag red green coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 32,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000011_ef79yw.png",
    count: 0,
    total: 0
  },
  {
    name: "Pajatoquilla Hat",
    color: ["beige", "brown"],
    size: ["XS/52", "S/54", "M/56", "XL/58"],
    description: "panama hat pajatoquilla beige cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 70,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028243/ecommerce_ironhack3/000012_ph5bgx.png",
    count: 0,
    total: 0
  },
  {
    name: "Straw Hat",
    color: ["beige", "brown"],
    size: ["XS/52", "S/54", "M/56", "XL/58"],
    description: "panama hat pajatoquilla brown cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 76,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000013_prglym.png",
    count: 0,
    total: 0
  },
  {
    name: "Slingbacks",
    color: ["beige", "black"],
    size: ["35", "36", "37", "38", "39", "40"],
    description: "ballet shoes flats beige brown cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 45,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000014_nivrwy.png",
    count: 0,
    total: 0
  },
  {
    name: "Trenchcoat",
    color: ["beige", "gray", "black"],
    size: ["XS", "S", "M", "XL"],
    description: "jacket coat blazer beige wool upper",
    type: "upper",
    material: "wool",
    cost: 68,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000015_cgumif.png",
    count: 0,
    total: 0
  },
  {
    name: "Poncho",
    color: ["beige", "gray", "black"],
    size: ["XS", "S", "M", "XL"],
    description: "jacket coat blazer poncho wool gray upper",
    type: "upper",
    material: "wool",
    cost: 68,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028240/ecommerce_ironhack3/000016_hsnksk.png",
    count: 0,
    total: 0
  },
  {
    name: "Linen-blend Blouse",
    color: ["pink", "beige", "blue"],
    size: ["XS", "S", "M", "XL"],
    description: "kimono blouse pink cotton upper",
    type: "upper",
    material: "cotton",
    cost: 42,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000017_dpzvim.png",
    count: 0,
    total: 0
  },
  {
    name: "Straight-cut Poncho",
    color: ["beige", "gray"],
    size: ["XS", "S", "M", "XL"],
    description: "jacket coat blazer poncho beige brown upper",
    type: "upper",
    material: "wool",
    cost: 72,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000018_rrmhrj.png",
    count: 0,
    total: 0
  },
  {
    name: "Sneakers Road",
    color: ["blue", "red"],
    size:  ["35", "36", "37", "38"],
    description: "sneakers shoes flats blue cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000019_l7aln0.png",
    count: 0,
    total: 0
  },
  {
    name: "Espadrilles",
    color: ["pink", "blue"],
    size:  ["35", "36", "37", "38", "39"],
    description: "sneakers shoes flats pink cabuya accessory",
    type: "accessory",
    material: "cotton",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000020_xangux.png",
    count: 0,
    total: 0
  },
  {
    name: "Inti Bag",
    color: ["blue/green", "orange/yellow"],
    size: ["nosize"],
    description: "purse bag blue green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000021_jgbmtk.png",
    count: 0,
    total: 0
  },
  {
    name: "Chaski Bag",
    color: ["gree", "blue", "orange"],
    size: ["nosize"],
    description: "purse bag beige green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000022_gsbjkk.png",
    count: 0,
    total: 0
  },
  {
    name: "Shigra",
    color: ["multicolor"],
    size: ["nosize"],
    description: "purse bag red blue beige green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000023_ml9htb.png",
    count: 0,
    total: 0
  },
  {
    name: "Warmi Portfolio",
    color: ["red", "blue", "black"],
    size: ["nosize"],
    description: "portfolio purse bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 50,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000024_ihjkbu.png",
    count: 0,
    total: 0
  },
  {
    name: "Belly Bum Bag",
    color: ["red", "blue"],
    size: ["nosize"],
    description: "fanny pack belt moon belly bum bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000025_xbpk0m.png",
    count: 0,
    total: 0
  },
  {
    name: "Huayna Bag",
    color: ["beige", "red", "blue"],
    size: ["nosize"],
    description: "portfolio purse bag beige brown cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000026_g9vhll.png",
    count: 0,
    total: 0
  },
  {
    name: "Wool Shopper",
    color: ["red", "blue"],
    size: ["nosize"],
    description: "portfolio purse bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000027_cpvy9q.png",
    count: 0,
    total: 0
  },
  {
    name: "Piramid necklace",
    color: ["natural"],
    size: ["nosize"],
    description: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 36,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000028_xzaxow.png",
    count: 0,
    total: 0
  },
  {
    name: "Knit Choker",
    color: ["natural"],
    size: ["nosize"],
    description: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 32,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000029_pyylye.png",
    count: 0,
    total: 0
  },
  {
    name: "Multicolor Choker",
    color: ["multicolor"],
    size: ["nosize"],
    description: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 38,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000030_bbtqm4.png",
    count: 0,
    total: 0
  },
  {
    name: "Braid Necklace",
    color: ["red"],
    size: ["nosize"],
    description: "necklace choker red seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 44,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000031_c1kpqq.png",
    count: 0,
    total: 0
  },
  {
    name: "Knit Bag Shooper",
    color: ["orange", "green", "blue"],
    size: ["nosize"],
    description: "purse bag orange cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 56,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028233/ecommerce_ironhack3/000032_bqemu9.png",
    count: 0,
    total: 0
  },
  {
    name: "Mix Bag Shopper",
    color: ["red/green", "orange/blue"],
    size: ["nosize"],
    description: "purse bag orange cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 58,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000033_jhtwfl.png",
    count: 0,
    total: 0
  },
  {
    name: "Lightblue Peace Sunglasses",
    color: ["lightblue"],
    size: ["nosize"],
    description: "sunglasses wood brown accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000034_ecp88b.png",
    count: 0,
    total: 0
  },
  {
    name: "Black Potter",
    color: ["black", "natural"],
    size: ["nosize"],
    description: "sunglasses wood black accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000035_rt65gt.png",
    count: 0,
    total: 0
  },
  {
    name: "Sunset",
    color: ["black/red", "natural/blue"],
    size: ["nosize"],
    description: "sunglasses wood black accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000036_k37dro.png",
    count: 0,
    total: 0
  },
  {
    name: "Sunlight Grass",
    color: ["natural"],
    size: ["nosize"],
    description: "sunglasses wood brown accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028224/ecommerce_ironhack3/000037_hn9dye.png",
    count: 0,
    total: 0
  },
  {
    name: "Knit Sneaker",
    color: ["multicolor"],
    size: ["36", "37", "38", "39"],
    description: "sneakers shoes flats red beige blue cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 48,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028225/ecommerce_ironhack3/000038_c9t99h.png",
    count: 0,
    total: 0
  },
  {
    name: "Panama Pajatoquilla Hat",
    color: ["natural"],
    size: ["XS/52", "S/54", "M/56", "XL/58"],
    description: "panama hat pajatoquilla beige cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 68,
    inShopBag: false,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028223/ecommerce_ironhack3/000039_zvngzz.png",
    count: 0,
    total: 0
  },
];

module.exports = DataProducts;
