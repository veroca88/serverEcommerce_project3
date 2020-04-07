const mongoose =  require('mongoose');
const Products = require('../models/Product.model');

const DB_NAME = 'library-products'

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
const dataProducts = [
    { code: 000001, type: "upper", material: "wood", cost: 32, image: "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/Screenshot_from_2020-04-01_20-49-47_aeyjvp.png" },
    { code: 000002, type: "upper", material: "wood", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028235/ecommerce_ironhack3/000002_mwgjay.png" },
    { code: 000003, type: "upper", material: "cotton", cost: 38, image: "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000003_aq9r06.png" },
    { code: 000004, type: "accessory", material: "pineapple", cost: 55, image: "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000004_zdccyy.png" },
    { code: 000005, type: "accessory", material: "pineapple", cost: 72, image: "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000005_q77y4e.png" },
    { code: 000006, type: "upper", material: "pineapple", cost: 102, image: "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000006_auynkz.png" },
    { code: 000007, type: "accessory", material: "pineapple", cost: 30, image: "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000007_m0rw6q.png" },
    { code: 000008, type: "accessory", material: "coconut", cost: 62, image: "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000008_ceeqhc.png" },
    { code: 000009, type: "accessory", material: "coconut", cost: 42, image: "https://res.cloudinary.com/veroca/image/upload/v1586028228/ecommerce_ironhack3/000009_wxn0ad.png" },
    { code: 000010, type: "accessory", material: "coconut", cost: 38, image: "https://res.cloudinary.com/veroca/image/upload/v1586028229/ecommerce_ironhack3/000010_efer5y.png" },
    { code: 000011, type: "accessory", material: "coconut", cost: 32, image: "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000011_ef79yw.png" },
    { code: 000012, type: "accessory", material: "cabuya", cost: 70, image: "https://res.cloudinary.com/veroca/image/upload/v1586028243/ecommerce_ironhack3/000012_ph5bgx.png" },
    { code: 000013, type: "accessory", material: "cabuya", cost: 76, image: "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000013_prglym.png" },
    { code: 000014, type: "accessory", material: "cabuya", cost: 45, image: "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000014_nivrwy.png" },
    { code: 000015, type: "upper", material: "cotton and wood", cost: 68, image: "https://res.cloudinary.com/veroca/image/upload/v1586028242/ecommerce_ironhack3/000015_cgumif.png" },
    { code: 000016, type: "upper", material: "cotton and wood", cost: 68, image: "https://res.cloudinary.com/veroca/image/upload/v1586028240/ecommerce_ironhack3/000016_hsnksk.png" },
    { code: 000017, type: "upper", material: "cotton and wood", cost: 42, image: "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000017_dpzvim.png" },
    { code: 000018, type: "upper", material: "wood", cost: 72, image: "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000018_rrmhrj.png" },
    { code: 000019, type: "accessory", material: "cotton", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028241/ecommerce_ironhack3/000019_l7aln0.png" },
    { code: 000020, type: "accessory", material: "cotton", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000020_xangux.png" },
    { code: 000021, type: "accessory", material: "cabuya", cost: 60, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000021_jgbmtk.png" },
    { code: 000022, type: "accessory", material: "cabuya", cost: 60, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000022_gsbjkk.png" },
    { code: 000023, type: "accessory", material: "cabuya", cost: 60, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000023_ml9htb.png" },
    { code: 000024, type: "accessory", material: "cotton", cost: 50, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000024_ihjkbu.png" },
    { code: 000025, type: "accessory", material: "cotton", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028238/ecommerce_ironhack3/000025_xbpk0m.png" },
    { code: 000026, type: "accessory", material: "cotton", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000026_g9vhll.png" },
    { code: 000027, type: "accessory", material: "cotton", cost: 35, image: "https://res.cloudinary.com/veroca/image/upload/v1586028236/ecommerce_ironhack3/000027_cpvy9q.png" },
    { code: 000028, type: "accessory", material: "seeds", cost: 36, image: "https://res.cloudinary.com/veroca/image/upload/v1586028231/ecommerce_ironhack3/000028_xzaxow.png" },
    { code: 000029, type: "accessory", material: "seeds", cost: 32, image: "https://res.cloudinary.com/veroca/image/upload/v1586028232/ecommerce_ironhack3/000029_pyylye.png" },
    { code: 000030, type: "accessory", material: "seeds", cost: 38, image: "https://res.cloudinary.com/veroca/image/upload/v1586028234/ecommerce_ironhack3/000030_bbtqm4.png" },
    { code: 000031, type: "accessory", material: "seeds", cost: 44, image: "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000031_c1kpqq.png" },
    { code: 000032, type: "accessory", material: "cabuya", cost: 56, image: "https://res.cloudinary.com/veroca/image/upload/v1586028233/ecommerce_ironhack3/000032_bqemu9.png" },
    { code: 000033, type: "accessory", material: "cabuya", cost: 58, image: "https://res.cloudinary.com/veroca/image/upload/v1586028230/ecommerce_ironhack3/000033_jhtwfl.png" },
    { code: 000034, type: "accessory", material: "wood", cost: 40, image: "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000034_ecp88b.png" },
    { code: 000035, type: "accessory", material: "wood", cost: 40, image: "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000035_rt65gt.png" },
    { code: 000036, type: "accessory", material: "wood", cost: 40, image: "https://res.cloudinary.com/veroca/image/upload/v1586028226/ecommerce_ironhack3/000036_k37dro.png" },
    { code: 000037, type: "accessory", material: "wood", cost: 40, image: "https://res.cloudinary.com/veroca/image/upload/v1586028224/ecommerce_ironhack3/000037_hn9dye.png" },
    { code: 000038, type: "accessory", material: "cabuya", cost: 48, image: "https://res.cloudinary.com/veroca/image/upload/v1586028225/ecommerce_ironhack3/000038_c9t99h.png" },
    { code: 000039, type: "accessory", material: "cabuya", cost: 68, image: "https://res.cloudinary.com/veroca/image/upload/v1586028223/ecommerce_ironhack3/000039_zvngzz.png" }  
  ]

  Products.create(dataProducts, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${dataProducts.length} products`);
    mongoose.connection.close();
  });


  