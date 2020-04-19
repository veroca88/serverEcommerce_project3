const DataProducts = [
  {
    name: "sweater blue knitting wool upper",
    type: "upper",
    material: "wool",
    cost: 32,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/Screenshot_from_2020-04-01_20-49-47_aeyjvp.png",
  },
  {
    name: "sweater beige knitting wool upper",
    type: "upper",
    material: "wool",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028235/ecommerce_ironhack3/000002_mwgjay.png",
  },
  {
    name: "kimono blouse blue white cotton upper",
    type: "upper",
    material: "cotton",
    cost: 38,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000003_aq9r06.png",
  },
  {
    name: "boots shoes black brown pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 55,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000004_zdccyy.png",
  },
  {
    name: "boots shoes black brown white pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 72,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000005_q77y4e.png",
  },
  {
    name: "jacket coat blazer red orange pineapple upper ",
    type: "upper",
    material: "pineapple",
    cost: 102,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000006_auynkz.png",
  },
  {
    name: "wallet purse handbag beige orange brown green pineapple accessory",
    type: "accessory",
    material: "pineapple",
    cost: 30,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000007_m0rw6q.png",
  },
  {
    name: "portfolio purse handbag brown green coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 62,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000008_ceeqhc.png",
  },
  {
    name: "fanny pack belt moon belly bum bag brown coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 42,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000009_wxn0ad.png",
  },
  {
    name: "sandals flip flops pink coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 38,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000010_efer5y.png",
  },
  {
    name: "wallet purse handbag red green coconut accessory",
    type: "accessory",
    material: "coconut",
    cost: 32,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000011_ef79yw.png",
  },
  {
    name: "panama hat pajatoquilla beige cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 70,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028243/ecommerce_ironhack3/000012_ph5bgx.png",
  },
  {
    name: "panama hat pajatoquilla brown cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 76,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000013_prglym.png",
  },
  {
    name: "ballet shoes flats beige brown cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 45,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000014_nivrwy.png",
  },
  {
    name: "jacket coat blazer beige wood upper",
    type: "upper",
    material: "wool",
    cost: 68,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000015_cgumif.png",
  },
  {
    name: "jacket coat blazer poncho gray upper",
    type: "upper",
    material: "wool",
    cost: 68,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028240/ecommerce_ironhack3/000016_hsnksk.png",
  },
  {
    name: "kimono blouse pink cotton upper",
    type: "upper",
    material: "cotton",
    cost: 42,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000017_dpzvim.png",
  },
  {
    name: "jacket coat blazer poncho beige brwn upper",
    type: "upper",
    material: "wool",
    cost: 72,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000018_rrmhrj.png",
  },
  {
    name: "sneakers shoes flats blue cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000019_l7aln0.png",
  },
  {
    name: "sneakers shoes flats pink cabuya accessory",
    type: "accessory",
    material: "cotton",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000020_xangux.png",
  },
  {
    name: "purse bag blue green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000021_jgbmtk.png",
  },
  {
    name: "purse bag beige green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000022_gsbjkk.png",
  },
  {
    name: "purse bag red blue beige green cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 60,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000023_ml9htb.png",
  },
  {
    name: "portfolio purse bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 50,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000024_ihjkbu.png",
  },
  {
    name: "fanny pack belt moon belly bum bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000025_xbpk0m.png",
  },
  {
    name: "portfolio purse bag beige brown cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000026_g9vhll.png",
  },
  {
    name: "portfolio purse bag red white cotton wool accessory",
    type: "accessory",
    material: "cotton and wool",
    cost: 35,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000027_cpvy9q.png",
  },
  {
    name: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 36,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000028_xzaxow.png",
  },
  {
    name: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 32,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000029_pyylye.png",
  },
  {
    name: "necklace choker seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 38,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000030_bbtqm4.png",
  },
  {
    name: "necklace choker red seeds accessory",
    type: "accessory",
    material: "seeds",
    cost: 44,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000031_c1kpqq.png",
  },
  {
    name: "purse bag orange cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 56,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028233/ecommerce_ironhack3/000032_bqemu9.png",
  },
  {
    name: "purse bag orange cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 58,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000033_jhtwfl.png",
  },
  {
    name: "sunglasses wood brown accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000034_ecp88b.png",
  },
  {
    name: "sunglasses wood black accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000035_rt65gt.png",
  },
  {
    name: "sunglasses wood black accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000036_k37dro.png",
  },
  {
    name: "sunglasses wood brown accessory",
    type: "accessory",
    material: "wood",
    cost: 40,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028224/ecommerce_ironhack3/000037_hn9dye.png",
  },
  {
    name: "sneakers shoes flats red beige blue cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 48,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028225/ecommerce_ironhack3/000038_c9t99h.png",
  },
  {
    name: "panama hat pajatoquilla beige cabuya accessory",
    type: "accessory",
    material: "cabuya",
    cost: 68,
    image:
      "https://res.cloudinary.com/veroca/image/upload/v1586028223/ecommerce_ironhack3/000039_zvngzz.png",
  },
];

module.exports = DataProducts;
