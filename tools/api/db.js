
const products = [
   {
      id: '1',
      category: { id: '1' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,acer-predator-21x-i7-7820hk64gb1tb1tbwin10-1080sli-371015,2017/6/pr_2017_6_22_15_25_25_987.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,acer-predator-21x-i7-7820hk64gb1tb1tbwin10-1080sli-371015,2017/6/pr_2017_6_22_15_25_25_987.jpg',
      },
      name: 'ASUS ZenBook UX430UQ i5-7200U/8GB/512SSD/Win10 GT940MX ',
      rating: 4.76,
      ratingCount: 11,
      price: 999,
      oldPrice: 1299,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      mark: 'New',
      featureSummarySplitted: [
         { key: 'pamiec', value: '8GB' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {
      id: '2',
      category: { id: '1' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,hp-envy-13-i5-7200u8gb128ssdwin10-fhd-375239,2017/7/pr_2017_7_19_10_6_30_669.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,hp-envy-13-i5-7200u8gb128ssdwin10-fhd-375239,2017/7/pr_2017_7_19_10_6_30_669.jpg',
      },
      name: 'HP Pavilion x2 Z8300/2GB/64/Win10 IPS Touch Silver',
      rating: 4.76,
      ratingCount: 11,
      price: 1999,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {
      id: '3',
      category: { id: '2' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,asus-wt200-grafitowa-306314,2017/7/pr_2017_7_19_13_24_17_697.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,asus-wt200-grafitowa-306314,2017/7/pr_2017_7_19_13_24_17_697.jpg',
      },
      name: 'Myszka Logitech MX300s Silver',
      rating: 4.76,
      ratingCount: 11,
      price: 100.50,
      oldPrice: 1299,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {
      id: '4',
      category: { id: '1' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,asus-e502na-go010t-n42004gb500gbwin10-375538,2017/7/pr_2017_7_25_12_22_25_89.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,asus-e502na-go010t-n42004gb500gbwin10-375538,2017/7/pr_2017_7_25_12_22_25_89.jpg',
      },
      name: 'HP 2GB/64/Win10 IPS Touch Silver',
      rating: 4.76,
      ratingCount: 11,
      price: 999,
      oldPrice: 1299,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      mark: 'New',
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
      ],
   },
   {
      id: '5',
      category: { id: '3' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,huawei-p9-lite-2017-dual-sim-czarny-351434,2017/7/pr_2017_7_10_14_58_46_375.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,huawei-p9-lite-2017-dual-sim-czarny-351434,2017/7/pr_2017_7_10_14_58_46_375.jpg',
      },
      name: 'Huawei P9 Lite 2017 Dual SIM czarny',
      rating: 4.76,
      ratingCount: 11,
      price: 799,
      oldPrice: 899,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      mark: 'New',
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {

      id: '6',
      category: { id: '4' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,razer-thresher-71-ps4-401750,2018/1/pr_2018_1_10_11_45_6_589_03.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,razer-thresher-71-ps4-401750,2018/1/pr_2018_1_10_11_45_6_589_03.jpg',
      },
      name: 'Razer Thresher 7.1 PS4',
      rating: 4.76,
      ratingCount: 11,
      price: 300,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {

      id: '7',
      category: { id: '4' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-orion-gaming-headset-124732,pr_2013_2_28_12_19_43_559.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-orion-gaming-headset-124732,pr_2013_2_28_12_19_43_559.jpg',
      },
      name: 'ASUS Orion Gaming Headset',
      rating: 0,
      ratingCount: 0,
      price: 419,
      productLink: 'http://x-kom.pl',
      freeShipping: false,
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
   {
      id: '8',
      category: { id: '1' },
      photo: {
         url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,hp-envy-13-i5-7200u8gb128ssdwin10-fhd-375239,2017/7/pr_2017_7_19_10_6_30_669.jpg',
         thumbnailUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,hp-envy-13-i5-7200u8gb128ssdwin10-fhd-375239,2017/7/pr_2017_7_19_10_6_30_669.jpg',
      },
      name: 'HP Envy 13 x2 Z8300/2GB/64/Win10 IPS Touch Silver',
      rating: 1.76,
      ratingCount: 51,
      price: 2499,
      productLink: 'http://x-kom.pl',
      freeShipping: true,
      featureSummarySplitted: [
         { key: 'Procesor', value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)' },
         { key: 'pamiec', value: '8GB' },
         { key: 'matryca', value: '1920x1080' },
         { key: 'Grafika', value: 'Intel HD Graphics 6000' },
      ],
   },
];

module.exports = () => ({
   Groups: [
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoLaptopy_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoLaptopy_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '2',
         Name: 'Laptopy i tablety',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoSmartfony_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoSmartfony_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '4',
         Name: 'Telefony i GPS',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoKomputery_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoKomputery_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '13',
         Name: 'Komputery stacjonarne',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoPodzespoly_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoPodzespoly_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '5',
         Name: 'Podzespoły komputerowe',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoPeryferia_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoPeryferia_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '6',
         Name: 'Urządzenia peryferyjne',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoKonsole_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoKonsole_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '7',
         Name: 'Gaming',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoFotografia_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoFotografia_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '8',
         Name: 'Foto,TV i kamery',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoProgramy_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoProgramy_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '9',
         Name: 'Oprogramowanie',
      },
      {
         Photo: {
            Url: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoAkcesoria_2016_12_21_14_00_00_00_000.png',
            ThumbnailUrl: 'http://cdn.eeepad.pl/img/groups/mobile/default/IcoAkcesoria_2016_12_21_14_00_00_00_000.png',
         },
         Categories: null,
         Id: '12',
         Name: 'Akcesoria',
      },
   ],
   Categories: [
      {
         id: '2',
         Categories: [
            {
               ProductsCount: 5348,
               ChildCategories: [
                  {
                     ProductsCount: 3813,
                     ChildCategories: null,
                     Id: '1522',
                     NameSingular: 'Notebook / Laptop 15,6\'',
                     NamePlural: 'Notebooki / Laptopy 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 772,
                     ChildCategories: null,
                     Id: '1530',
                     NameSingular: 'Notebook / Laptop 17,3\'',
                     NamePlural: 'Notebooki / Laptopy 17,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 318,
                     ChildCategories: null,
                     Id: '1327',
                     NameSingular: 'Notebook / Laptop 14,1\'',
                     NamePlural: 'Notebooki / Laptopy 14,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 149,
                     ChildCategories: null,
                     Id: '1329',
                     NameSingular: 'Notebook / Laptop 13,3\'',
                     NamePlural: 'Notebooki / Laptopy 13,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 82,
                     ChildCategories: null,
                     Id: '1774',
                     NameSingular: 'Ultrabook 13,3\'',
                     NamePlural: 'Ultrabooki 13,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 46,
                     ChildCategories: null,
                     Id: '1775',
                     NameSingular: 'Ultrabook 14\'',
                     NamePlural: 'Ultrabooki 14\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 25,
                     ChildCategories: null,
                     Id: '1777',
                     NameSingular: 'Ultrabook 15,6\'',
                     NamePlural: 'Ultrabooki 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 22,
                     ChildCategories: null,
                     Id: '1618',
                     NameSingular: 'Notebook / Laptop 11,6\'',
                     NamePlural: 'Notebooki / Laptopy 11,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '1331',
                     NameSingular: 'Notebook / Laptop 15,4\'',
                     NamePlural: 'Notebooki / Laptopy 15,4\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1676',
                     NameSingular: 'Notebook / Laptop 12,5\'',
                     NamePlural: 'Notebooki / Laptopy 12,5\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1620',
                     NameSingular: 'Notebook / Laptop 12,1\'',
                     NamePlural: 'Notebooki / Laptopy 12,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1317',
                     NameSingular: ' Netbook 5\'',
                     NamePlural: ' Netbooki 5\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1401',
                     NameSingular: 'Notebook / Laptop 16,4\'',
                     NamePlural: 'Notebooki / Laptopy 16,4\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1771',
                     NameSingular: 'Ultrabook 11,6\'',
                     NamePlural: 'Ultrabooki 11,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1550',
                     NameSingular: 'Netbook 11,6\'',
                     NamePlural: 'Netbooki 11,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1353',
                     NameSingular: 'Notebook / Laptop 16\'',
                     NamePlural: 'Notebooki / Laptopy 16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1355',
                     NameSingular: 'Notebook / Laptop 18,4\'',
                     NamePlural: 'Notebooki / Laptopy 18,4\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1772',
                     NameSingular: 'Ultrabook 12,5\'',
                     NamePlural: 'Ultrabooki 12,5\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '159',
               NameSingular: 'Laptop/Notebook/Ultrabook',
               NamePlural: 'Laptopy/Notebooki/Ultrabooki',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 34,
               ChildCategories: null,
               Id: '2158',
               NameSingular: 'Urządzenie 2 w 1',
               NamePlural: 'Urządzenia 2 w 1',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_7_9_206.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_7_9_206.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 200,
               ChildCategories: [
                  {
                     ProductsCount: 119,
                     ChildCategories: null,
                     Id: '1668',
                     NameSingular: 'Tablet 10\'',
                     NamePlural: 'Tablety 10\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 41,
                     ChildCategories: null,
                     Id: '1667',
                     NameSingular: 'Tablet 7\'',
                     NamePlural: 'Tablety 7\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '1695',
                     NameSingular: 'Tablet 8\'',
                     NamePlural: 'Tablety 8\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '1926',
                     NameSingular: 'Tablet 13\'',
                     NamePlural: 'Tablety 13\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1696',
                     NameSingular: 'Czytnik ebook',
                     NamePlural: 'Czytniki ebook',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1719',
                     NameSingular: 'Tablety 11,6\'',
                     NamePlural: 'Tablety 11,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1663',
               NameSingular: 'Tablet',
               NamePlural: 'Tablety',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2017-04-20_13_13_41_246.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2017-04-20_13_13_41_246.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 208,
               ChildCategories: [
                  {
                     ProductsCount: 88,
                     ChildCategories: null,
                     Id: '1737',
                     NameSingular: 'Etui na tablet',
                     NamePlural: 'Etui na tablet',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 38,
                     ChildCategories: null,
                     Id: '1439',
                     NameSingular: 'Plecak na notebook do 15 - 16\'',
                     NamePlural: 'Plecaki na notebooki do 15-16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '1451',
                     NameSingular: 'Torba na notebook do 15 - 16\'',
                     NamePlural: 'Torby na notebooki do 15 - 16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 22,
                     ChildCategories: null,
                     Id: '1429',
                     NameSingular: 'Etui na notebook do 15,6\'',
                     NamePlural: 'Etui na notebooki do 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '1447',
                     NameSingular: 'Torba na notebook do 14,1\'',
                     NamePlural: 'Torby na notebooki do 14,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1445',
                     NameSingular: 'Torba na notebook do 17,3\'',
                     NamePlural: 'Torby na notebooki do 17,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1437',
                     NameSingular: 'Plecak na notebook do 17,3\'',
                     NamePlural: 'Plecaki na notebooki do 17,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1433',
                     NameSingular: 'Etui na notebook do 12,1\'',
                     NamePlural: 'Etui na notebooki do 12,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '461',
                     NameSingular: 'Plecak na notebook do 15,6\'',
                     NamePlural: 'Plecaki na notebooki do 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1443',
                     NameSingular: 'Torba na notebook do 13,3\'',
                     NamePlural: 'Torby na notebooki do 13,3\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1504',
                     NameSingular: 'Etui na notebook do 14,1\'',
                     NamePlural: 'Etui na notebooki do 14,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1558',
                     NameSingular: 'Torba na notebook do 10,2\'',
                     NamePlural: 'Torby na notebooki do 10,2\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1449',
                     NameSingular: 'Torba na notebook do 12,1\'',
                     NamePlural: 'Torby na notebooki do 12,1\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '172',
               NameSingular: 'Torba i etui',
               NamePlural: 'Torby i etui',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_8_3_68.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_8_3_68.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 204,
               ChildCategories: [
                  {
                     ProductsCount: 88,
                     ChildCategories: null,
                     Id: '1737',
                     NameSingular: 'Etui na tablet',
                     NamePlural: 'Etui na tablet',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 37,
                     ChildCategories: null,
                     Id: '2301',
                     NameSingular: 'Powerbank',
                     NamePlural: 'Powerbanki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1698',
                     NameSingular: 'Folia ochronna',
                     NamePlural: 'Folie ochronne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '1740',
                     NameSingular: 'Rysik',
                     NamePlural: 'Rysiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1829',
                     NameSingular: 'Klawiatura',
                     NamePlural: 'Klawiatury',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2041',
                     NameSingular: 'Pozostałe',
                     NamePlural: 'Pozostałe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1738',
                     NameSingular: 'Zasilacz',
                     NamePlural: 'Zasilacze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1742',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2287',
               NameSingular: 'Akcesoria do tabletów',
               NamePlural: 'Akcesoria do tabletów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2017-04-20_13_25_24_16.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2017-04-20_13_25_24_16.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 281,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 47,
                     ChildCategories: null,
                     Id: '1037',
                     NameSingular: 'Zasilacz',
                     NamePlural: 'Zasilacze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 38,
                     ChildCategories: null,
                     Id: '1439',
                     NameSingular: 'Plecak na notebook do 15 - 16\'',
                     NamePlural: 'Plecaki na notebooki do 15-16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '1451',
                     NameSingular: 'Torba na notebook do 15 - 16\'',
                     NamePlural: 'Torby na notebooki do 15 - 16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 22,
                     ChildCategories: null,
                     Id: '1429',
                     NameSingular: 'Etui na notebook do 15,6\'',
                     NamePlural: 'Etui na notebooki do 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1173',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1227',
                     NameSingular: 'Podstawka chłodząca',
                     NamePlural: 'Podstawki chłodzące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1197',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1221',
                     NameSingular: 'Replikator portów',
                     NamePlural: 'Replikatory portów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1411',
                     NameSingular: 'Gwarancja',
                     NamePlural: 'Gwarancje',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2522',
                     NameSingular: 'Naklejka na laptopa',
                     NamePlural: 'Naklejki na laptopy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2492',
                     NameSingular: 'Pamięć RAM do laptopa',
                     NamePlural: 'Pamięci RAM do laptopów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1341',
                     NameSingular: 'Linka zabezpieczająca',
                     NamePlural: 'Linki zabezpieczające',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1171',
                     NameSingular: 'Przetwornica samochodowa',
                     NameSingular: 'Przetwornice samochodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1033',
               NameSingular: 'Akcesorium do laptopa',
               NamePlural: 'Akcesoria do laptopów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_8_41_469.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_8_41_469.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '2499',
               NameSingular: 'Czytniki eBook',
               NamePlural: 'Czytniki eBook',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 5,
               ChildCategories: null,
               Id: '2519',
               NameSingular: 'Czytnik ebook',
               NamePlural: 'Czytniki ebook',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-10-05_13_24_40_553.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-10-05_13_24_40_553.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2606',
               NameSingular: 'Znak specjany™€$@*',
               NamePlural: 'Znak specjany™€$@*',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2605',
               NameSingular: 'Znak specjany® ',
               NamePlural: 'Znak specjany® ',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '2608',
               NameSingular: 'kat!%$&©®@',
               NamePlural: 'kat!%$&©®@',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2693',
               NameSingular: 'Zestaw monterski',
               NamePlural: 'Zestawy monterskie',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '2',
                  Name: 'Laptopy i tablety',
               },
            },
         ],
      },
      {
         id: '4',
         Categories: [
            {
               ProductsCount: 383,
               ChildCategories: null,
               Id: '1590',
               NameSingular: 'Smartfon / Telefon / Fablet',
               NamePlural: 'Smartfony i telefony',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 23,
               ChildCategories: null,
               Id: '1924',
               NameSingular: 'Inteligentny zegarek / opaska',
               NamePlural: 'Inteligentne zegarki i opaski',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 76,
               ChildCategories: [
                  {
                     ProductsCount: 69,
                     ChildCategories: null,
                     Id: '1369',
                     NameSingular: 'Nawigacja GPS',
                     NamePlural: 'Nawigacje GPS',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2566',
                     NameSingular: 'Nawigacja motocyklowa',
                     NamePlural: 'Nawigacje motocyklowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '450',
               NameSingular: 'Nawigacja GPS',
               NamePlural: 'Nawigacje GPS',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_57_1_774.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_57_1_774.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 83,
               ChildCategories: null,
               Id: '1755',
               NameSingular: 'Wideorejestrator',
               NamePlural: 'Wideorejestratory',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 65,
               ChildCategories: [
                  {
                     ProductsCount: 27,
                     ChildCategories: null,
                     Id: '1199',
                     NameSingular: ' Odtwarzacz 16GB',
                     NamePlural: ' Odtwarzacze 16GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '329',
                     NameSingular: 'Dyktafon',
                     NamePlural: 'Dyktafony',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_8_39_34_7.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_8_39_34_7.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '977',
                     NameSingular: ' Odtwarzacz  8GB',
                     NamePlural: ' Odtwarzacze  8GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1021',
                     NameSingular: ' Odtwarzacz  2GB',
                     NamePlural: ' Odtwarzacze  2GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1307',
                     NameSingular: ' Odtwarzacz 32GB',
                     NamePlural: ' Odtwarzacze 32GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1425',
                     NameSingular: 'Urządzenie multimedialne',
                     NamePlural: 'Urządzenia multimedialne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1019',
                     NameSingular: ' Odtwarzacz  4GB',
                     NamePlural: ' Odtwarzacze  4GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1423',
                     NameSingular: ' Akcesoria',
                     NamePlural: ' Akcesoria',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2172',
                     NameSingular: 'Odtwarzacz 12GB',
                     NamePlural: 'Odtwarzacze 12GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1644',
                     NameSingular: ' Odtwarzacz 64GB',
                     NamePlural: ' Odtwarzacze 64GB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '145',
               NameSingular: 'Odtwarzacz multimedialny',
               NamePlural: 'Odtwarzacze multimedialne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_45_48_556.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_45_48_556.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 105,
               ChildCategories: null,
               Id: '315',
               NameSingular: 'Pamięć PenDrive (USB)',
               NamePlural: 'Pamięci PenDrive (USB)',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 34,
               ChildCategories: null,
               Id: '2294',
               NameSingular: 'Dron',
               NamePlural: 'Drony',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 190,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 24,
                     ChildCategories: null,
                     Id: '310',
                     NameSingular: 'Pamięć SecureDigital',
                     NamePlural: 'Pamięci SecureDigital',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '314',
                     NameSingular: 'Pamięć CompactFlash',
                     NamePlural: 'Pamięci CompactFlash',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '499',
                     NameSingular: 'Czytnik na złączu  USB',
                     NamePlural: 'Czytniki na złączu  USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2517',
                     NameSingular: 'Etui na karty pamięci',
                     NamePlural: 'Etui na karty pamięci',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '133',
               NameSingular: 'Pamięć Flash',
               NamePlural: 'Pamięci Flash',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_46_21_370.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_46_21_370.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 126,
               ChildCategories: [
                  {
                     ProductsCount: 67,
                     ChildCategories: null,
                     Id: '2288',
                     NameSingular: 'Zegarek sportowy',
                     NamePlural: 'Zegarki sportowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 43,
                     ChildCategories: null,
                     Id: '2399',
                     NameSingular: 'Akcesorium do zegarka',
                     NamePlural: 'Akcesoria do zegarków',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2569',
                     NameSingular: 'Monitor aktywności',
                     NamePlural: 'Monitory aktywności',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2290',
                     NameSingular: 'Pulsometr',
                     NamePlural: 'Pulsometry',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2253',
               NameSingular: 'Zegarek sportowy',
               NamePlural: 'Zegarki sportowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_12_2_842.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_12_2_842.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 834,
               ChildCategories: [
                  {
                     ProductsCount: 461,
                     ChildCategories: null,
                     Id: '1836',
                     NameSingular: 'Etui',
                     NamePlural: 'Etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 97,
                     ChildCategories: null,
                     Id: '2069',
                     NameSingular: 'Folia ochronna',
                     NamePlural: 'Folie ochronne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 64,
                     ChildCategories: null,
                     Id: '2506',
                     NameSingular: 'Głośnik przenośny',
                     NamePlural: 'Głośniki przenośne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 57,
                     ChildCategories: null,
                     Id: '1837',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 37,
                     ChildCategories: null,
                     Id: '2301',
                     NameSingular: 'Powerbank',
                     NamePlural: 'Powerbanki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 25,
                     ChildCategories: null,
                     Id: '1838',
                     NameSingular: 'Słuchawka/Zestaw głośnomówiący',
                     NamePlural: 'Słuchawki/Zestaw głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2496',
                     NameSingular: 'Pozostały podzespół',
                     NamePlural: 'Pozostałe podzespoły',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '396',
                     NameSingular: 'Obudowa dysku twardego',
                     NamePlural: 'Obudowy dysków twardych',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2569',
                     NameSingular: 'Monitor aktywności',
                     NamePlural: 'Monitory aktywności',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '1922',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '2171',
                     NameSingular: 'Uchwyt',
                     NamePlural: 'Uchwyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2076',
                     NameSingular: 'Pozostałe',
                     NamePlural: 'Pozostałe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2320',
                     NameSingular: 'Okulary VR',
                     NamePlural: 'Okulary VR',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2510',
                     NameSingular: 'Zestaw głośnomówiący',
                     NamePlural: 'Zestawy głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1592',
               NameSingular: 'Akcesoria GSM',
               NamePlural: 'Akcesoria GSM',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: [
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2367',
                     NameSingular: 'Śmigło',
                     NamePlural: 'Śmigła',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2368',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2369',
                     NameSingular: 'Plecak/etui',
                     NamePlural: 'Plecaki/etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2365',
               NameSingular: 'Akcesorium do drona',
               NamePlural: 'Akcesoria do dronów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_9_22_857.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_9_22_857.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 39,
               ChildCategories: [
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2350',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1137',
                     NameSingular: 'GPS / PDA',
                     NamePlural: 'GPS / PDA',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_23_39_52.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_23_39_52.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1707',
               NameSingular: 'Akcesoria GPS',
               NamePlural: 'Akcesoria GPS',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_13_4_434.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_13_4_434.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
            {
               ProductsCount: 4,
               ChildCategories: null,
               Id: '2566',
               NameSingular: 'Nawigacja motocyklowa',
               NamePlural: 'Nawigacje motocyklowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '4',
                  Name: 'Telefony i GPS',
               },
            },
         ],
      }, {
         id: '5',
         Categories: [
            {
               ProductsCount: 363,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 85,
                     ChildCategories: null,
                     Id: '2088',
                     NameSingular: 'Dysk/macierz sieciowa',
                     NamePlural: 'Dyski i macierze sieciowe',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_57_20_417.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_57_20_417.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 73,
                     ChildCategories: null,
                     Id: '439',
                     NameSingular: 'Dysk twardy zewnętrzny',
                     NamePlural: 'Dyski twarde zewnętrzne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 35,
                     ChildCategories: null,
                     Id: '1580',
                     NameSingular: 'Dysk twardy  SATA III',
                     NamePlural: 'Dyski twarde  SATA III',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 32,
                     ChildCategories: null,
                     Id: '1779',
                     NameSingular: 'Dysk SSD ',
                     NamePlural: 'Dyski SSD',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '438',
                     NameSingular: 'Dysk twardy 2,5\' SATA',
                     NamePlural: 'Dyski twarde 2,5\' SATA',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '89',
               NameSingular: 'Dysk twardy/sieciowy',
               NamePlural: 'Dyski twarde i sieciowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_50_17_878.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_50_17_878.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 32,
               ChildCategories: null,
               Id: '1779',
               NameSingular: 'Dysk SSD ',
               NamePlural: 'Dyski SSD',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 95,
               ChildCategories: [
                  {
                     ProductsCount: 32,
                     ChildCategories: null,
                     Id: '1713',
                     NameSingular: 'Płyty główne Socket 1150®™@$%',
                     NamePlural: 'Płyty główne Socket 1150®™@$%',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 25,
                     ChildCategories: null,
                     Id: '1514',
                     NameSingular: 'Płyta główna Socket AM3/AM3+',
                     NamePlural: 'Płyty główne Socket AM3/AM3+',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2327',
                     NameSingular: 'Płyta główna Socket 1151',
                     NamePlural: 'Płyty główne Socket 1151',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '1714',
                     NameSingular: 'Płyta główna Socket FM2/FM2+',
                     NamePlural: 'Płyty główne Socket FM2/FM2+',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '2549',
                     NameSingular: '',
                     NamePlural: 'Płyty główne Socket AM4',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1684',
                     NameSingular: 'Płyta główna Socket 2011',
                     NamePlural: 'Płyty główne Socket 2011',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '14',
               NameSingular: 'Płyta główna',
               NamePlural: 'Płyty główne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_14_1_784.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_14_1_784.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 37,
               ChildCategories: [
                  {
                     ProductsCount: 30,
                     ChildCategories: null,
                     Id: '346',
                     NameSingular: 'Karta graficzna PCI-E',
                     NamePlural: 'Karty graficzne PCI-E',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '22',
                     NameSingular: 'Karta graficzna AGP',
                     NamePlural: 'Karty graficzne AGP',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '345',
               NameSingular: 'Karta graficzna',
               NamePlural: 'Karty graficzne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_51_1_28.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_51_1_28.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 35,
               ChildCategories: [
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1908',
                     NameSingular: 'Procesor Core i3 (1150)',
                     NamePlural: 'Procesory Core i3 (1150)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1828',
                     NameSingular: 'Procesory Core i5 (1150)',
                     NamePlural: 'Procesory Core i5 (1150)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2554',
                     NameSingular: 'Procesor AMD Ryzen',
                     NamePlural: 'Procesory AMD Ryzen',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2249',
                     NameSingular: 'Procesor Core i7 (2011-3)',
                     NamePlural: 'Procesory Core i7 (2011-3)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1723',
                     NameSingular: 'Procesory Trinity (FM2)',
                     NamePlural: 'Procesory Trinity (FM2)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1685',
                     NameSingular: 'Procesor Bulldozer (AM3+)',
                     NamePlural: 'Procesory Bulldozer (AM3+)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1683',
                     NameSingular: 'Procesor Core i7 (2011)',
                     NamePlural: 'Procesory Core i7 (2011)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1910',
                     NameSingular: 'Procesor Pentium (1150)',
                     NamePlural: 'Procesory Pentium (1150)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1784',
                     NameSingular: 'Procesor Athlon II X2 (FM2)',
                     NamePlural: 'Procesory Athlon II X2 (FM2)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1813',
                     NameSingular: 'Procesory Richland (FM2)',
                     NamePlural: 'Procesory Richland (FM2)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1736',
                     NameSingular: 'Procesory Core i7 (1150)',
                     NamePlural: 'Procesory Core i7 (1150)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2075',
                     NameSingular: 'Procesor Kaveri (FM2)',
                     NamePlural: 'Procesory Kaveri (FM2)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '11',
               NameSingular: 'Procesor',
               NamePlural: 'Procesory',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 101,
               ChildCategories: [
                  {
                     ProductsCount: 35,
                     ChildCategories: null,
                     Id: '1107',
                     NameSingular: 'Pamięć DDR3',
                     NamePlural: 'Pamięci DDR3',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '2337',
                     NameSingular: 'Pamięć SODIMM DDR4',
                     NamePlural: 'Pamięci SODIMM DDR4',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '1480',
                     NameSingular: 'Pamięć SODIMM DDR3',
                     NamePlural: 'Pamięci SODIMM DDR3',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '2250',
                     NameSingular: 'Pamięć DDR4',
                     NamePlural: 'Pamięci DDR4',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '52',
                     NameSingular: 'Pamięć DDR',
                     NamePlural: 'Pamięci DDR',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '341',
                     NameSingular: 'Pamięć DDR2',
                     NamePlural: 'Pamięci DDR2',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '28',
               NameSingular: 'Pamięć RAM',
               NamePlural: 'Pamięci RAM',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_15_2_134.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_15_2_134.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 133,
               ChildCategories: [
                  {
                     ProductsCount: 116,
                     ChildCategories: null,
                     Id: '389',
                     NameSingular: 'Obudowa',
                     NamePlural: 'Obudowy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '1632',
                     NameSingular: 'Wentylator 140x140mm',
                     NamePlural: 'Wentylatory 140x140mm',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '388',
               NameSingular: 'Obudowa komputerowa',
               NamePlural: 'Obudowy komputerowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_52_10_643.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_52_10_643.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 36,
               ChildCategories: [
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '1632',
                     NameSingular: 'Wentylator 140x140mm',
                     NamePlural: 'Wentylatory 140x140mm',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1518',
                     NameSingular: 'Akcesoria',
                     NamePlural: 'Akcesoria',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '298',
                     NameSingular: 'Pasta termoprzewodząca',
                     NamePlural: 'Pasty termoprzewodzące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '264',
                     NameSingular: 'Przewód świecący',
                     NamePlural: 'Przewody świecące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '475',
                     NameSingular: 'Wentylator  92x92mm',
                     NamePlural: 'Wentylatory  92x92mm',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '470',
                     NameSingular: 'Wentylator 120x120mm',
                     NamePlural: 'Wentylatory 120x120mm',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '397',
               NameSingular: 'Tuning PC',
               NamePlural: 'Tuning PC',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_26_40_119.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_26_40_119.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: [
                  {
                     ProductsCount: 28,
                     ChildCategories: null,
                     Id: '105',
                     NameSingular: 'Chłodzenie do procesora',
                     NamePlural: 'Chłodzenia do procesorów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2590',
               NameSingular: 'Chłodzenie komputerowe',
               NamePlural: 'Chłodzenie komputerowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: null,
               Id: '7',
               NameSingular: 'Karta muzyczna',
               NamePlural: 'Karty muzyczne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_16_2_933.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_16_2_933.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 18,
               ChildCategories: [
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '218',
                     NameSingular: 'Nagrywarka wewnętrzna DVD',
                     NamePlural: 'Nagrywarki wewnętrzne DVD',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1496',
                     NameSingular: 'Nagrywarka zewnętrzna DVD',
                     NamePlural: 'Nagrywarki zewnętrzne DVD',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1067',
                     NameSingular: 'Nagrywarka wewnętrzna Blu-Ray',
                     NamePlural: 'Nagrywarki wewnętrzne Blu-Ray',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1494',
                     NameSingular: 'Nagrywarka zewnętrzna Blu-Ray',
                     NamePlural: 'Nagrywarki zewnętrzne Blu-Ray',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '25',
                     NameSingular: 'Napęd wewnętrzny DVD',
                     NamePlural: 'Napędy wewnętrzne DVD',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1461',
               NameSingular: 'Napęd optyczny',
               NamePlural: 'Napędy optyczne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_16_26_739.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_16_26_739.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 12,
               ChildCategories: null,
               Id: '396',
               NameSingular: 'Obudowa dysku twardego',
               NamePlural: 'Obudowy dysków twardych',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 105,
               ChildCategories: null,
               Id: '315',
               NameSingular: 'Pamięć PenDrive (USB)',
               NamePlural: 'Pamięci PenDrive (USB)',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 73,
               ChildCategories: [
                  {
                     ProductsCount: 73,
                     ChildCategories: null,
                     Id: '158',
                     NameSingular: 'Zasilacz',
                     NamePlural: 'Zasilacze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2494',
               NameSingular: 'Zasilacz komputerowy',
               NamePlural: 'Zasilacze komputerowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
            {
               ProductsCount: 12,
               ChildCategories: [
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '396',
                     NameSingular: 'Obudowa dysku twardego',
                     NamePlural: 'Obudowy dysków twardych',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2496',
               NameSingular: 'Pozostały podzespół',
               NamePlural: 'Pozostałe podzespoły',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '5',
                  Name: 'Podzespoły komputerowe',
               },
            },
         ],
      },
      {
         id: '6',
         Categories: [
            {
               ProductsCount: 115,
               ChildCategories: [
                  {
                     ProductsCount: 64,
                     ChildCategories: null,
                     Id: '2506',
                     NameSingular: 'Głośnik przenośny',
                     NamePlural: 'Głośniki przenośne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2507',
                     NameSingular: 'Głośniki komputerowe',
                     NamePlural: 'Głośniki komputerowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2508',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1881',
                     NameSingular: 'Soundbar',
                     NamePlural: 'Soundbary',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '33',
               NameSingular: 'Głośniki',
               NamePlural: 'Głośniki',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 432,
               ChildCategories: [
                  {
                     ProductsCount: 218,
                     ChildCategories: null,
                     Id: '112',
                     NameSingular: 'Słuchawki',
                     NamePlural: 'Słuchawki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 123,
                     ChildCategories: null,
                     Id: '2495',
                     NameSingular: 'Słuchawki bezprzewodowe',
                     NamePlural: 'Słuchawki bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 25,
                     ChildCategories: null,
                     Id: '1838',
                     NameSingular: 'Słuchawka/Zestaw głośnomówiący',
                     NamePlural: 'Słuchawki/Zestaw głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '2497',
                     NameSingular: 'Akcesorium do konsoli',
                     NamePlural: 'Akcesoria do konsol',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 13,
                     ChildCategories: null,
                     Id: '111',
                     NameSingular: 'Mikrofon',
                     NamePlural: 'Mikrofony',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2496',
                     NameSingular: 'Pozostały podzespół',
                     NamePlural: 'Pozostałe podzespoły',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '396',
                     NameSingular: 'Obudowa dysku twardego',
                     NamePlural: 'Obudowy dysków twardych',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '329',
                     NameSingular: 'Dyktafon',
                     NamePlural: 'Dyktafony',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_8_39_34_7.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_8_39_34_7.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1652',
                     NameSingular: 'Akcesoria XBOX',
                     NamePlural: 'Akcesoria XBOX',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_53_10_896.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_53_10_896.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '2558',
                     NameSingular: 'Stojak do słuchawek',
                     NamePlural: 'Stojaki do słuchawek',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '1653',
                     NameSingular: 'Akcesoria PlayStation',
                     NamePlural: 'Akcesoria PlayStation',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_52_52_175.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_52_52_175.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2499',
                     NameSingular: 'Czytniki eBook',
                     NamePlural: 'Czytniki eBook',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2510',
                     NameSingular: 'Zestaw głośnomówiący',
                     NamePlural: 'Zestawy głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1215',
               NameSingular: 'Słuchawki i mikrofony',
               NamePlural: 'Słuchawki i mikrofony',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 105,
               ChildCategories: null,
               Id: '315',
               NameSingular: 'Pamięć PenDrive (USB)',
               NamePlural: 'Pamięci PenDrive (USB)',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 212,
               ChildCategories: [
                  {
                     ProductsCount: 81,
                     ChildCategories: null,
                     Id: '383',
                     NameSingular: 'Mysz  przewodowa',
                     NamePlural: 'Myszy  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 71,
                     ChildCategories: null,
                     Id: '385',
                     NameSingular: 'Mysz bezprzewodowa',
                     NamePlural: 'Myszy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 55,
                     ChildCategories: null,
                     Id: '110',
                     NameSingular: 'Podkładka pod mysz',
                     NamePlural: 'Podkładki pod myszy',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_0_39_656.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_0_39_656.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '31',
               NameSingular: 'Mysz',
               NamePlural: 'Myszy',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 141,
               ChildCategories: [
                  {
                     ProductsCount: 102,
                     ChildCategories: null,
                     Id: '442',
                     NameSingular: 'Klawiatura  przewodowa',
                     NamePlural: 'Klawiatury  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1207',
                     NameSingular: 'Zestaw bezprzewodowy',
                     NamePlural: 'Zestawy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '441',
                     NameSingular: 'Klawiatura bezprzewodowa',
                     NamePlural: 'Klawiatury bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1367',
                     NameSingular: 'Zestaw przewodowy',
                     NamePlural: 'Zestawy przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '32',
               NameSingular: 'Klawiatura',
               NamePlural: 'Klawiatury',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_19.04.2017_16_20_45_294.jpg',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_19.04.2017_16_20_45_294.jpg',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 100,
               ChildCategories: [
                  {
                     ProductsCount: 31,
                     ChildCategories: null,
                     Id: '410',
                     NameSingular: 'Drukarka laserowa kolorowa',
                     NamePlural: 'Drukarki laserowe kolorowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 27,
                     ChildCategories: null,
                     Id: '43',
                     NameSingular: 'Drukarka laserowa ',
                     NamePlural: 'Drukarki laserowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '41',
                     NameSingular: 'Drukarka atramentowa',
                     NamePlural: 'Drukarki atramentowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '459',
                     NameSingular: 'Drukarka termosublimacyjna',
                     NamePlural: 'Drukarki termosublimacyjne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1544',
                     NameSingular: 'Drukarka etykiet',
                     NamePlural: 'Drukarki etykiet',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2511',
                     NameSingular: 'Drukarka 3D',
                     NamePlural: 'Drukarki 3D',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '6',
               NameSingular: 'Drukarka',
               NamePlural: 'Drukarki',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 104,
               ChildCategories: [
                  {
                     ProductsCount: 50,
                     ChildCategories: null,
                     Id: '418',
                     NameSingular: 'Urządzenie wiel. atramentowe',
                     NamePlural: 'Urządzenia wiel. atramentowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '419',
                     NameSingular: 'Urządzenie wiel. laserowe',
                     NamePlural: 'Urządzenia wiel. laserowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 21,
                     ChildCategories: null,
                     Id: '1778',
                     NameSingular: 'Urządzenia wiel. laser. kolor',
                     NamePlural: 'Urządzenia wiel. laser. kolor',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '50',
               NameSingular: 'Urządzenie wielofunkcyjne',
               NamePlural: 'Urządzenia wielofunkcyjne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_55_38_3.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_55_38_3.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 192,
               ChildCategories: [
                  {
                     ProductsCount: 143,
                     ChildCategories: null,
                     Id: '1749',
                     NameSingular: 'Projektor',
                     NamePlural: 'Projektory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '1753',
                     NameSingular: 'Ekran projekcyjny',
                     NamePlural: 'Ekrany projekcyjne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '1750',
                     NameSingular: 'Uchwyt',
                     NamePlural: 'Uchwyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1751',
                     NameSingular: 'Prezenter',
                     NamePlural: 'Prezentery',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2286',
                     NameSingular: 'Adapter',
                     NamePlural: 'Adaptery',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1754',
                     NameSingular: 'Torby i pokrowce',
                     NamePlural: 'Torby i pokrowce',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '375',
               NameSingular: 'Projektor i akcesoria',
               NamePlural: 'Projektory i akcesoria',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_56_7_5.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_56_7_5.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 420,
               ChildCategories: [
                  {
                     ProductsCount: 121,
                     ChildCategories: null,
                     Id: '425',
                     NameSingular: 'Switch',
                     NamePlural: 'Switche',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 85,
                     ChildCategories: null,
                     Id: '2088',
                     NameSingular: 'Dysk/macierz sieciowa',
                     NamePlural: 'Dyski i macierze sieciowe',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_57_20_417.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_57_20_417.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 69,
                     ChildCategories: null,
                     Id: '495',
                     NameSingular: 'Router',
                     NamePlural: 'Routery',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 38,
                     ChildCategories: null,
                     Id: '456',
                     NameSingular: 'Access Point',
                     NamePlural: 'Access Pointy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 29,
                     ChildCategories: null,
                     Id: '2326',
                     NameSingular: 'Kamera IP',
                     NamePlural: 'Kamery IP',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 27,
                     ChildCategories: null,
                     Id: '455',
                     NameSingular: 'Karta sieciowa USB',
                     NamePlural: 'Karty sieciowe USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2074',
                     NameSingular: 'Adapter HomePlug',
                     NamePlural: 'Adaptery HomePlug',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '507',
                     NameSingular: 'Antena 2,4 GHz',
                     NamePlural: 'Anteny 2,4 GHz',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '1157',
                     NameSingular: 'Karta sieciowa PCI-E',
                     NamePlural: 'Karty sieciowe PCI-E',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '1690',
                     NameSingular: 'Modem GSM',
                     NamePlural: 'Modemy GSM',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '506',
                     NameSingular: 'Router z modemem ADSL',
                     NamePlural: 'Routery z modemem ADSL',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1005',
                     NameSingular: 'Moduł do przełacznika',
                     NamePlural: 'Moduły do przełacznika',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1119',
                     NameSingular: 'Przełącznik KVM',
                     NamePlural: 'Przełączniki KVM',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1647',
                     NameSingular: 'Most Wi-Fi',
                     NamePlural: 'Mosty Wi-Fi',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '453',
                     NameSingular: 'Karta sieciowa PCI',
                     NamePlural: 'Karty sieciowe PCI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '431',
                     NameSingular: 'Akcesoria',
                     NamePlural: 'Akcesoria',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1007',
                     NameSingular: 'Firewall',
                     NamePlural: 'Firewalle',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '421',
               NameSingular: 'Sieć bezprzewodowa',
               NamePlural: 'Sieci bezprzewodowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 162,
               ChildCategories: [
                  {
                     ProductsCount: 121,
                     ChildCategories: null,
                     Id: '425',
                     NameSingular: 'Switch',
                     NamePlural: 'Switche',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2074',
                     NameSingular: 'Adapter HomePlug',
                     NamePlural: 'Adaptery HomePlug',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '426',
                     NameSingular: 'Router',
                     NamePlural: 'Routery',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1005',
                     NameSingular: 'Moduł do przełacznika',
                     NamePlural: 'Moduły do przełacznika',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1119',
                     NameSingular: 'Przełącznik KVM',
                     NamePlural: 'Przełączniki KVM',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '422',
                     NameSingular: 'Karta sieciowa PCI',
                     NamePlural: 'Karty sieciowe PCI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '431',
                     NameSingular: 'Akcesoria',
                     NamePlural: 'Akcesoria',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1141',
                     NameSingular: 'Karta sieciowa PCI-E',
                     NamePlural: 'Karty sieciowe PCI-E',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '424',
                     NameSingular: 'Karta sieciowa USB',
                     NamePlural: 'Karty sieciowe USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '427',
                     NameSingular: 'Router z modemem ADSL',
                     NamePlural: 'Routery z modemem ADSL',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1007',
                     NameSingular: 'Firewall',
                     NamePlural: 'Firewalle',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '420',
               NameSingular: 'Sieć przewodowa',
               NamePlural: 'Sieci przewodowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 85,
               ChildCategories: null,
               Id: '2088',
               NameSingular: 'Dysk/macierz sieciowa',
               NamePlural: 'Dyski i macierze sieciowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_57_20_417.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_57_20_417.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 155,
               ChildCategories: [
                  {
                     ProductsCount: 83,
                     ChildCategories: null,
                     Id: '1755',
                     NameSingular: 'Wideorejestrator',
                     NamePlural: 'Wideorejestratory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 29,
                     ChildCategories: null,
                     Id: '2326',
                     NameSingular: 'Kamera IP',
                     NamePlural: 'Kamery IP',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '2333',
                     NameSingular: 'Kamera sportowa',
                     NamePlural: 'Kamery sportowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 15,
                     ChildCategories: null,
                     Id: '2331',
                     NameSingular: 'Kamera internetowa',
                     NamePlural: 'Kamery internetowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '2332',
                     NameSingular: 'Kamera cyfrowa',
                     NamePlural: 'Kamery cyfrowe ',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '109',
               NameSingular: 'Kamera',
               NamePlural: 'Kamery',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 19,
               ChildCategories: null,
               Id: '297',
               NameSingular: 'Tablet graficzny',
               NamePlural: 'Tablety graficzne',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_8_38_37_479.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_8_38_37_479.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 17,
               ChildCategories: null,
               Id: '23',
               NameSingular: 'Skaner',
               NamePlural: 'Skanery',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_57_44_419.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_57_44_419.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 10,
               ChildCategories: [
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1389',
                     NameSingular: 'Pilot',
                     NamePlural: 'Piloty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1407',
                     NameSingular: 'Manipulator',
                     NamePlural: 'Manipulatory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1387',
               NameSingular: 'Piloty',
               NamePlural: 'Piloty',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_8_42_42_849.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_8_42_42_849.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: null,
               Id: '329',
               NameSingular: 'Dyktafon',
               NamePlural: 'Dyktafony',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_8_39_34_7.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_8_39_34_7.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: [
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '379',
                     NameSingular: 'Do ekranów LCD/TFT',
                     NamePlural: 'Do ekranów LCD/TFT',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '377',
                     NameSingular: 'Ściereczki i chusteczki',
                     NamePlural: 'Ściereczki i chusteczki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '380',
                     NameSingular: 'Do szkła i plastiku',
                     NamePlural: 'Do szkła i plastiku',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '381',
                     NameSingular: 'Sprężone powietrze',
                     NamePlural: 'Sprężone powietrze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '39',
               NameSingular: 'Środek czyszczący',
               NamePlural: 'Środki czyszczące',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 1592,
               ChildCategories: [
                  {
                     ProductsCount: 935,
                     ChildCategories: null,
                     Id: '279',
                     NameSingular: 'Eksploatacja - toner',
                     NamePlural: 'Eksploatacja - tonery',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 591,
                     ChildCategories: null,
                     Id: '163',
                     NameSingular: 'Eksploatacja - atrament',
                     NamePlural: 'Eksploatacja - atramenty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 35,
                     ChildCategories: null,
                     Id: '2512',
                     NameSingular: 'Filament do drukarki 3D',
                     NamePlural: 'Filamenty do drukarek 3D',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 17,
                     ChildCategories: null,
                     Id: '407',
                     NameSingular: 'Eksploatacja - bęben',
                     NamePlural: 'Eksploatacja - bębny',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 13,
                     ChildCategories: null,
                     Id: '104',
                     NameSingular: 'Eksploatacja - papier',
                     NamePlural: 'Eksploatacja - papier',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2089',
               NameSingular: 'Eksploatacja do drukarek',
               NamePlural: 'Eksploatacja do drukarek',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_15_59_1_159.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_15_59_1_159.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 42,
               ChildCategories: [
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '1781',
                     NameSingular: 'Kabel HDMI',
                     NamePlural: 'Kable HDMI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1782',
                     NameSingular: 'Kabel VGA/D-SUB',
                     NamePlural: 'Kable VGA/D-SUB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1923',
                     NameSingular: 'Uchwyt',
                     NamePlural: 'Uchwyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '2037',
                     NameSingular: 'Kabel DisplayPort',
                     NamePlural: 'Kable DisplayPort',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1783',
                     NameSingular: 'Kabel DVI',
                     NamePlural: 'Kable DVI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2557',
                     NameSingular: 'Podstawka pod monitor',
                     NamePlural: 'Podstawki pod monitory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2086',
               NameSingular: 'Akcesorium do monitora',
               NamePlural: 'Akcesoria do monitorów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_25_36_787.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_25_36_787.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 27,
               ChildCategories: [
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2400',
                     NameSingular: 'Element montażowy',
                     NamePlural: 'Elementy montażowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2402',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2352',
                     NameSingular: 'Etui',
                     NamePlural: 'Etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1720',
               NameSingular: 'Akcesoria do kamer',
               NamePlural: 'Akcesoria do kamer',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_6_13_110.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_6_13_110.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 77,
               ChildCategories: [
                  {
                     ProductsCount: 30,
                     ChildCategories: null,
                     Id: '2407',
                     NameSingular: 'Czujnik',
                     NamePlural: 'Czujniki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 29,
                     ChildCategories: null,
                     Id: '2326',
                     NameSingular: 'Kamera IP',
                     NamePlural: 'Kamery IP',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '2414',
                     NameSingular: 'Centralka/zestaw',
                     NamePlural: 'Centralki i zestawy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '2411',
                     NameSingular: 'Inteligentne oświetlenie',
                     NamePlural: 'Inteligentne oświetlenie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2412',
                     NameSingular: 'Gniazdo Smart Plug',
                     NamePlural: 'Gniazda Smart Plug',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2408',
                     NameSingular: 'System alarmowy',
                     NamePlural: 'Systemy alarmowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2406',
               NameSingular: 'Inteligentny dom',
               NamePlural: 'Inteligentny dom',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 70,
               ChildCategories: [
                  {
                     ProductsCount: 70,
                     ChildCategories: null,
                     Id: '2537',
                     NameSingular: 'Zasilacze UPS',
                     NamePlural: 'Zasilacze UPS',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '34',
                     NameSingular: 'Zasilacz awaryjny (UPS)',
                     NamePlural: 'Zasilacze awaryjne (UPS)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2536',
               NameSingular: 'Zasilacze awaryjne',
               NamePlural: 'Zasilacze awaryjne',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2607',
               NameSingular: 'Robot',
               NamePlural: 'Roboty',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '6',
                  Name: 'Urządzenia peryferyjne',
               },
            },
         ],
      },
      {
         id: '7',
         Categories: [
            {
               ProductsCount: 4,
               ChildCategories: null,
               Id: '2382',
               NameSingular: 'Laptop/Notebook dla gracza',
               NamePlural: 'Laptopy/Notebooki dla graczy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-02-19_14_49_39_347.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-02-19_14_49_39_347.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 3,
               ChildCategories: null,
               Id: '2380',
               NameSingular: 'Mysz/klawiatura dla gracza',
               NamePlural: 'Myszy i klawiatury dla graczy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-02-19_16_53_27_676.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-02-19_16_53_27_676.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 29,
               ChildCategories: null,
               Id: '2384',
               NameSingular: 'Konsola',
               NamePlural: 'Konsola',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 554,
               ChildCategories: [
                  {
                     ProductsCount: 148,
                     ChildCategories: null,
                     Id: '1686',
                     NameSingular: 'Gra PC',
                     NamePlural: 'Gry PC',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 134,
                     ChildCategories: null,
                     Id: '1917',
                     NameSingular: 'Gra PlayStation 4',
                     NamePlural: 'Gry PlayStation 4',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 113,
                     ChildCategories: null,
                     Id: '1916',
                     NameSingular: 'Gra XBOX One',
                     NamePlural: 'Gry XBOX One',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 70,
                     ChildCategories: null,
                     Id: '2536',
                     NameSingular: 'Zasilacze awaryjne',
                     NamePlural: 'Zasilacze awaryjne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 70,
                     ChildCategories: null,
                     Id: '2537',
                     NameSingular: 'Zasilacze UPS',
                     NamePlural: 'Zasilacze UPS',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '2281',
                     NameSingular: 'Gra 3DS',
                     NamePlural: 'Gry 3DS',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 28,
                     ChildCategories: null,
                     Id: '1688',
                     NameSingular: 'Gra XBOX 360',
                     NamePlural: 'Gry XBOX 360',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 20,
                     ChildCategories: null,
                     Id: '1687',
                     NameSingular: 'Gra Playstation 3',
                     NamePlural: 'Gry Playstation 3',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '34',
                     NameSingular: 'Zasilacz awaryjny (UPS)',
                     NamePlural: 'Zasilacze awaryjne (UPS)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1163',
               NameSingular: 'Gra',
               NamePlural: 'Gry',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 65,
               ChildCategories: [
                  {
                     ProductsCount: 38,
                     ChildCategories: null,
                     Id: '170',
                     NameSingular: 'Gamepad',
                     NamePlural: 'Gamepady',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 15,
                     ChildCategories: null,
                     Id: '171',
                     NameSingular: 'Joystick',
                     NamePlural: 'Joysticki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '164',
                     NameSingular: 'Kierownica',
                     NamePlural: 'Kierownice',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '392',
               NameSingular: 'Kontroler gier',
               NamePlural: 'Kontrolery gier',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-02-19_15_25_31_672.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-02-19_15_25_31_672.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2385',
               NameSingular: 'Plecak dla garcza',
               NamePlural: 'Plecaki dla graczy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-02-19_14_52_4_125.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-02-19_14_52_4_125.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
            {
               ProductsCount: 18,
               ChildCategories: [
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1652',
                     NameSingular: 'Akcesoria XBOX',
                     NamePlural: 'Akcesoria XBOX',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_53_10_896.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_53_10_896.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '1653',
                     NameSingular: 'Akcesoria PlayStation',
                     NamePlural: 'Akcesoria PlayStation',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_52_52_175.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_52_52_175.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2497',
               NameSingular: 'Akcesorium do konsoli',
               NamePlural: 'Akcesoria do konsol',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '7',
                  Name: 'Gaming',
               },
            },
         ],
      },
      {
         id: '8',
         Categories: [
            {
               ProductsCount: 289,
               ChildCategories: [
                  {
                     ProductsCount: 137,
                     ChildCategories: null,
                     Id: '2481',
                     NameSingular: 'Telewizor 44\' - 55\'',
                     NamePlural: 'Telewizory 44\' - 55\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 64,
                     ChildCategories: null,
                     Id: '2480',
                     NameSingular: 'Telewizor 33\' - 43\'',
                     NamePlural: 'Telewizory 33\' - 43\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 41,
                     ChildCategories: null,
                     Id: '2479',
                     NameSingular: 'Telewizor 32\' i mniejszy',
                     NamePlural: 'Telewizory 32\' i mniejsze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 35,
                     ChildCategories: null,
                     Id: '2482',
                     NameSingular: 'Telewizor 56\' i większy',
                     NamePlural: 'Telewizory 56\' i większe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1117',
               NameSingular: 'Telewizor',
               NamePlural: 'Telewizory',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 129,
               ChildCategories: [
                  {
                     ProductsCount: 39,
                     ChildCategories: null,
                     Id: '1657',
                     NameSingular: 'Aparat kompaktowy',
                     NamePlural: 'Aparaty kompaktowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '1931',
                     NameSingular: 'Lustrzanka',
                     NamePlural: 'Lustrzanki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 29,
                     ChildCategories: null,
                     Id: '2487',
                     NameSingular: 'Aparat natychmiastowy',
                     NamePlural: 'Aparaty natychmiastowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 26,
                     ChildCategories: null,
                     Id: '1932',
                     NameSingular: 'Bezlusterkowiec',
                     NamePlural: 'Bezlusterkowce',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '156',
               NameSingular: 'Aparat fotograficzny',
               NamePlural: 'Aparaty fotograficzne',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 155,
               ChildCategories: [
                  {
                     ProductsCount: 83,
                     ChildCategories: null,
                     Id: '1755',
                     NameSingular: 'Wideorejestrator',
                     NamePlural: 'Wideorejestratory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 29,
                     ChildCategories: null,
                     Id: '2326',
                     NameSingular: 'Kamera IP',
                     NamePlural: 'Kamery IP',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '2333',
                     NameSingular: 'Kamera sportowa',
                     NamePlural: 'Kamery sportowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 15,
                     ChildCategories: null,
                     Id: '2331',
                     NameSingular: 'Kamera internetowa',
                     NamePlural: 'Kamery internetowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '2332',
                     NameSingular: 'Kamera cyfrowa',
                     NamePlural: 'Kamery cyfrowe ',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '109',
               NameSingular: 'Kamera',
               NamePlural: 'Kamery',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 45,
               ChildCategories: [
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2461',
                     NameSingular: 'Pamięć do laptopa',
                     NamePlural: 'Pamięci do laptopa',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2460',
                     NameSingular: 'Pamięć RAM do laptopa',
                     NamePlural: 'Pamięci RAM do laptopów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1936',
               NameSingular: 'Obiektyw',
               NamePlural: 'Obiektywy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_19_36_378.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_19_36_378.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: null,
               Id: '1935',
               NameSingular: 'Filtr do obiektywu',
               NamePlural: 'Filtry do obiektywów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_22_30_263.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_22_30_263.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 3,
               ChildCategories: [
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2447',
                     NameSingular: '',
                     NamePlural: '',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1937',
               NameSingular: 'Lampa błyskowa',
               NamePlural: 'Lampy błyskowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 190,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 24,
                     ChildCategories: null,
                     Id: '310',
                     NameSingular: 'Pamięć SecureDigital',
                     NamePlural: 'Pamięci SecureDigital',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '314',
                     NameSingular: 'Pamięć CompactFlash',
                     NamePlural: 'Pamięci CompactFlash',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '499',
                     NameSingular: 'Czytnik na złączu  USB',
                     NamePlural: 'Czytniki na złączu  USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2517',
                     NameSingular: 'Etui na karty pamięci',
                     NamePlural: 'Etui na karty pamięci',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '133',
               NameSingular: 'Pamięć Flash',
               NamePlural: 'Pamięci Flash',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_46_21_370.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_46_21_370.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 13,
               ChildCategories: [
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1933',
                     NameSingular: 'Statyw',
                     NamePlural: 'Statywy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1934',
                     NameSingular: 'Głowica',
                     NamePlural: 'Głowice',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1506',
               NameSingular: 'Statyw/Głowica',
               NamePlural: 'Statywy/Głowice',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_21_58_416.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_21_58_416.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 65,
               ChildCategories: [
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '1289',
                     NameSingular: '  Torba na aparat cyfrowy',
                     NamePlural: '  Torby na aparat cyfrowy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '462',
                     NameSingular: ' Etui na aparat cyfrowy',
                     NamePlural: ' Etui na aparaty cyfrowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '1311',
                     NameSingular: '  Plecak na aparat cyfrowy',
                     NamePlural: '  Plecaki na aparat cyfrowy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '2317',
                     NameSingular: 'Pasek',
                     NamePlural: 'Paski',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2517',
                     NameSingular: 'Etui na karty pamięci',
                     NamePlural: 'Etui na karty pamięci',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1930',
               NameSingular: 'Torba/Plecak/Etui - Foto',
               NamePlural: 'Torby/Plecaki/Etui - Foto',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_14_23_29.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_14_23_29.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 34,
               ChildCategories: null,
               Id: '2294',
               NameSingular: 'Dron',
               NamePlural: 'Drony',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 49,
               ChildCategories: [
                  {
                     ProductsCount: 28,
                     ChildCategories: null,
                     Id: '1935',
                     NameSingular: 'Filtr do obiektywu',
                     NamePlural: 'Filtry do obiektywów',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_22_30_263.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_22_30_263.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2335',
                     NameSingular: 'Wkład do aparatu',
                     NamePlural: 'Wkłady do aparatu',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '409',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '477',
                     NameSingular: 'Akumulator',
                     NamePlural: 'Akumulatory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '408',
               NameSingular: 'Akcesorium foto',
               NamePlural: 'Akcesoria foto',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_21_3_508.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_21_3_508.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 27,
               ChildCategories: [
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2400',
                     NameSingular: 'Element montażowy',
                     NamePlural: 'Elementy montażowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2402',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2352',
                     NameSingular: 'Etui',
                     NamePlural: 'Etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1720',
               NameSingular: 'Akcesoria do kamer',
               NamePlural: 'Akcesoria do kamer',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_6_13_110.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_6_13_110.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: [
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2367',
                     NameSingular: 'Śmigło',
                     NamePlural: 'Śmigła',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2368',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2369',
                     NameSingular: 'Plecak/etui',
                     NamePlural: 'Plecaki/etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2365',
               NameSingular: 'Akcesorium do drona',
               NamePlural: 'Akcesoria do dronów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_9_22_857.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_9_22_857.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2350',
               NameSingular: 'Ładowarka',
               NamePlural: 'Ładowarki',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
            {
               ProductsCount: 6,
               ChildCategories: null,
               Id: '2548',
               NameSingular: 'scrumiki',
               NamePlural: 'scrumiki',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '8',
                  Name: 'Foto,TV i kamery',
               },
            },
         ],
      },
      {
         id: '9',
         Categories: [
            {
               ProductsCount: 9,
               ChildCategories: null,
               Id: '372',
               NameSingular: 'Biurowe',
               NamePlural: 'Biurowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_20_49_671.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_20_49_671.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: null,
               Id: '371',
               NameSingular: 'Systemowe',
               NamePlural: 'Systemowe',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 39,
               ChildCategories: null,
               Id: '373',
               NameSingular: 'Antywirusowe',
               NamePlural: 'Antywirusowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_21_9_501.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_21_9_501.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '1089',
               NameSingular: 'Użytkowe',
               NamePlural: 'Użytkowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_22_44_225.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_22_44_225.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 6,
               ChildCategories: null,
               Id: '1534',
               NameSingular: 'System sprzedaży',
               NamePlural: 'Systemy sprzedaży',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_23_10_157.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_23_10_157.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '1137',
               NameSingular: 'GPS / PDA',
               NamePlural: 'GPS / PDA',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_23_39_52.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_23_39_52.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 19,
               ChildCategories: [
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2445',
                     NameSingular: 'nóweczki',
                     NamePlural: 'nóweczki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2438',
               NameSingular: 'patrykowo',
               NamePlural: 'patrykowo',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2440',
               NameSingular: 'opro_test',
               NamePlural: 'opro_test',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '2600',
               NameSingular: 'sitemap ',
               NamePlural: 'sitemap ',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2601',
               NameSingular: 'sitemap_delete',
               NamePlural: 'sitemap_delete',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 5,
               ChildCategories: null,
               Id: '2611',
               NameSingular: 'ESD',
               NamePlural: 'ESD',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
            {
               ProductsCount: 1,
               ChildCategories: null,
               Id: '2696',
               NameSingular: 'ES wgranie',
               NamePlural: 'ES wgranie',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '9',
                  Name: 'Oprogramowanie',
               },
            },
         ],
      },
      {
         id: '12',
         Categories: [
            {
               ProductsCount: 6,
               ChildCategories: null,
               Id: '2460',
               NameSingular: 'Pamięć RAM do laptopa',
               NamePlural: 'Pamięci RAM do laptopów',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 281,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 47,
                     ChildCategories: null,
                     Id: '1037',
                     NameSingular: 'Zasilacz',
                     NamePlural: 'Zasilacze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 38,
                     ChildCategories: null,
                     Id: '1439',
                     NameSingular: 'Plecak na notebook do 15 - 16\'',
                     NamePlural: 'Plecaki na notebooki do 15-16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 33,
                     ChildCategories: null,
                     Id: '1451',
                     NameSingular: 'Torba na notebook do 15 - 16\'',
                     NamePlural: 'Torby na notebooki do 15 - 16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 22,
                     ChildCategories: null,
                     Id: '1429',
                     NameSingular: 'Etui na notebook do 15,6\'',
                     NamePlural: 'Etui na notebooki do 15,6\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1173',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1227',
                     NameSingular: 'Podstawka chłodząca',
                     NamePlural: 'Podstawki chłodzące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1197',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1221',
                     NameSingular: 'Replikator portów',
                     NamePlural: 'Replikatory portów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1411',
                     NameSingular: 'Gwarancja',
                     NamePlural: 'Gwarancje',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2522',
                     NameSingular: 'Naklejka na laptopa',
                     NamePlural: 'Naklejki na laptopy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2492',
                     NameSingular: 'Pamięć RAM do laptopa',
                     NamePlural: 'Pamięci RAM do laptopów',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1341',
                     NameSingular: 'Linka zabezpieczająca',
                     NamePlural: 'Linki zabezpieczające',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1171',
                     NameSingular: 'Przetwornica samochodowa',
                     NamePlural: 'Przetwornice samochodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1033',
               NameSingular: 'Akcesorium do laptopa',
               NamePlural: 'Akcesoria do laptopów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_8_41_469.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_8_41_469.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 204,
               ChildCategories: [
                  {
                     ProductsCount: 88,
                     ChildCategories: null,
                     Id: '1737',
                     NameSingular: 'Etui na tablet',
                     NamePlural: 'Etui na tablet',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 37,
                     ChildCategories: null,
                     Id: '2301',
                     NameSingular: 'Powerbank',
                     NamePlural: 'Powerbanki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1698',
                     NameSingular: 'Folia ochronna',
                     NamePlural: 'Folie ochronne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 16,
                     ChildCategories: null,
                     Id: '1740',
                     NameSingular: 'Rysik',
                     NamePlural: 'Rysiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '1829',
                     NameSingular: 'Klawiatura',
                     NamePlural: 'Klawiatury',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2041',
                     NameSingular: 'Pozostałe',
                     NamePlural: 'Pozostałe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1738',
                     NameSingular: 'Zasilacz',
                     NamePlural: 'Zasilacze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1742',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2287',
               NameSingular: 'Akcesoria do tabletów',
               NamePlural: 'Akcesoria do tabletów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2017-04-20_13_25_24_16.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2017-04-20_13_25_24_16.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 449,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 102,
                     ChildCategories: null,
                     Id: '442',
                     NameSingular: 'Klawiatura  przewodowa',
                     NamePlural: 'Klawiatury  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 81,
                     ChildCategories: null,
                     Id: '383',
                     NameSingular: 'Mysz  przewodowa',
                     NamePlural: 'Myszy  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 71,
                     ChildCategories: null,
                     Id: '385',
                     NameSingular: 'Mysz bezprzewodowa',
                     NamePlural: 'Myszy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1207',
                     NameSingular: 'Zestaw bezprzewodowy',
                     NamePlural: 'Zestawy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2507',
                     NameSingular: 'Głośniki komputerowe',
                     NamePlural: 'Głośniki komputerowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '2497',
                     NameSingular: 'Akcesorium do konsoli',
                     NamePlural: 'Akcesoria do konsol',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 15,
                     ChildCategories: null,
                     Id: '2331',
                     NameSingular: 'Kamera internetowa',
                     NamePlural: 'Kamery internetowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '441',
                     NameSingular: 'Klawiatura bezprzewodowa',
                     NamePlural: 'Klawiatury bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1652',
                     NameSingular: 'Akcesoria XBOX',
                     NamePlural: 'Akcesoria XBOX',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_53_10_896.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_53_10_896.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '1653',
                     NameSingular: 'Akcesoria PlayStation',
                     NamePlural: 'Akcesoria PlayStation',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_52_52_175.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_52_52_175.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '222',
                     NameSingular: 'Hub USB',
                     NamePlural: 'Huby USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '490',
                     NameSingular: 'Lampka',
                     NamePlural: 'Lampki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '257',
                     NameSingular: 'Moduł Bluetooth',
                     NamePlural: 'Moduły Bluetooth',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '161',
               NameSingular: 'Akcesoria komputerowe',
               NamePlural: 'Akcesoria komputerowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_49_45_915.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_49_45_915.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 834,
               ChildCategories: [
                  {
                     ProductsCount: 461,
                     ChildCategories: null,
                     Id: '1836',
                     NameSingular: 'Etui',
                     NamePlural: 'Etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 97,
                     ChildCategories: null,
                     Id: '2069',
                     NameSingular: 'Folia ochronna',
                     NamePlural: 'Folie ochronne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 64,
                     ChildCategories: null,
                     Id: '2506',
                     NameSingular: 'Głośnik przenośny',
                     NamePlural: 'Głośniki przenośne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 57,
                     ChildCategories: null,
                     Id: '1837',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 37,
                     ChildCategories: null,
                     Id: '2301',
                     NameSingular: 'Powerbank',
                     NamePlural: 'Powerbanki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 25,
                     ChildCategories: null,
                     Id: '1838',
                     NameSingular: 'Słuchawka/Zestaw głośnomówiący',
                     NamePlural: 'Słuchawki/Zestaw głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2496',
                     NameSingular: 'Pozostały podzespół',
                     NamePlural: 'Pozostałe podzespoły',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '396',
                     NameSingular: 'Obudowa dysku twardego',
                     NamePlural: 'Obudowy dysków twardych',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '2569',
                     NameSingular: 'Monitor aktywności',
                     NamePlural: 'Monitory aktywności',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 10,
                     ChildCategories: null,
                     Id: '1922',
                     NameSingular: 'Stacja dokująca',
                     NamePlural: 'Stacje dokujące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '2171',
                     NameSingular: 'Uchwyt',
                     NamePlural: 'Uchwyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2076',
                     NameSingular: 'Pozostałe',
                     NamePlural: 'Pozostałe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2320',
                     NameSingular: 'Okulary VR',
                     NamePlural: 'Okulary VR',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2510',
                     NameSingular: 'Zestaw głośnomówiący',
                     NamePlural: 'Zestawy głośnomówiące',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1592',
               NameSingular: 'Akcesoria GSM',
               NamePlural: 'Akcesoria GSM',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 39,
               ChildCategories: [
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2350',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1137',
                     NameSingular: 'GPS / PDA',
                     NamePlural: 'GPS / PDA',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_23_39_52.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_23_39_52.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1707',
               NameSingular: 'Akcesoria GPS',
               NamePlural: 'Akcesoria GPS',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_13_4_434.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_13_4_434.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 7,
               ChildCategories: null,
               Id: '1653',
               NameSingular: 'Akcesoria PlayStation',
               NamePlural: 'Akcesoria PlayStation',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_52_52_175.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_52_52_175.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: null,
               Id: '1652',
               NameSingular: 'Akcesoria XBOX',
               NamePlural: 'Akcesoria XBOX',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_53_10_896.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_53_10_896.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 49,
               ChildCategories: [
                  {
                     ProductsCount: 28,
                     ChildCategories: null,
                     Id: '1935',
                     NameSingular: 'Filtr do obiektywu',
                     NamePlural: 'Filtry do obiektywów',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_22_30_263.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_22_30_263.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '2335',
                     NameSingular: 'Wkład do aparatu',
                     NamePlural: 'Wkłady do aparatu',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '409',
                     NameSingular: 'Ładowarka',
                     NamePlural: 'Ładowarki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '477',
                     NameSingular: 'Akumulator',
                     NamePlural: 'Akumulatory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '408',
               NameSingular: 'Akcesorium foto',
               NamePlural: 'Akcesoria foto',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_21_3_508.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_21_3_508.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 42,
               ChildCategories: [
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '1781',
                     NameSingular: 'Kabel HDMI',
                     NamePlural: 'Kable HDMI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1782',
                     NameSingular: 'Kabel VGA/D-SUB',
                     NamePlural: 'Kable VGA/D-SUB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1923',
                     NameSingular: 'Uchwyt',
                     NamePlural: 'Uchwyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '2037',
                     NameSingular: 'Kabel DisplayPort',
                     NamePlural: 'Kable DisplayPort',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1783',
                     NameSingular: 'Kabel DVI',
                     NamePlural: 'Kable DVI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2557',
                     NameSingular: 'Podstawka pod monitor',
                     NamePlural: 'Podstawki pod monitory',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2086',
               NameSingular: 'Akcesorium do monitora',
               NamePlural: 'Akcesoria do monitorów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_25_36_787.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_25_36_787.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 27,
               ChildCategories: [
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2400',
                     NameSingular: 'Element montażowy',
                     NamePlural: 'Elementy montażowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2402',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2352',
                     NameSingular: 'Etui',
                     NamePlural: 'Etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '1720',
               NameSingular: 'Akcesoria do kamer',
               NamePlural: 'Akcesoria do kamer',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-12-17_9_6_13_110.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-12-17_9_6_13_110.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 28,
               ChildCategories: [
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '2367',
                     NameSingular: 'Śmigło',
                     NamePlural: 'Śmigła',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2368',
                     NameSingular: 'Bateria',
                     NamePlural: 'Baterie',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '2369',
                     NameSingular: 'Plecak/etui',
                     NamePlural: 'Plecaki/etui',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2365',
               NameSingular: 'Akcesorium do drona',
               NamePlural: 'Akcesoria do dronów',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_11_9_22_857.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_11_9_22_857.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: [
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '223',
                     NameSingular: 'Płyta DVD+R',
                     NamePlural: 'Płyty DVD+R',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '101',
                     NameSingular: 'Płyta CD-R',
                     NamePlural: 'Płyty CD-R',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '106',
                     NameSingular: 'Opakowanie na płytę',
                     NamePlural: 'Opakowania na płyty',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1285',
                     NameSingular: 'Płyta BD-R',
                     NamePlural: 'Płyty BD-R',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '100',
               NameSingular: 'Nośniki i akcesoria',
               NamePlural: 'Nośniki i akcesoria',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_0_28_599.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_0_28_599.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: [
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '379',
                     NameSingular: 'Do ekranów LCD/TFT',
                     NamePlural: 'Do ekranów LCD/TFT',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '377',
                     NameSingular: 'Ściereczki i chusteczki',
                     NamePlural: 'Ściereczki i chusteczki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '380',
                     NameSingular: 'Do szkła i plastiku',
                     NamePlural: 'Do szkła i plastiku',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '381',
                     NameSingular: 'Sprężone powietrze',
                     NamePlural: 'Sprężone powietrze',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '39',
               NameSingular: 'Środek czyszczący',
               NamePlural: 'Środki czyszczące',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 55,
               ChildCategories: null,
               Id: '110',
               NameSingular: 'Podkładka pod mysz',
               NamePlural: 'Podkładki pod myszy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_0_39_656.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_0_39_656.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 161,
               ChildCategories: [
                  {
                     ProductsCount: 40,
                     ChildCategories: null,
                     Id: '271',
                     NameSingular: 'Przejściówka',
                     NamePlural: 'Przejściówki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 37,
                     ChildCategories: null,
                     Id: '266',
                     NameSingular: 'Kabel USB',
                     NamePlural: 'Kable USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '275',
                     NameSingular: 'Kabel audio',
                     NamePlural: 'Kable audio',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 14,
                     ChildCategories: null,
                     Id: '1781',
                     NameSingular: 'Kabel HDMI',
                     NamePlural: 'Kable HDMI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '269',
                     NameSingular: 'Kabel zasilający',
                     NamePlural: 'Kable zasilające',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 9,
                     ChildCategories: null,
                     Id: '1782',
                     NameSingular: 'Kabel VGA/D-SUB',
                     NamePlural: 'Kable VGA/D-SUB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 8,
                     ChildCategories: null,
                     Id: '1712',
                     NameSingular: 'Kabel sieciowy RJ-45 (LAN)',
                     NamePlural: 'Kable sieciowe RJ-45 (LAN)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '2037',
                     NameSingular: 'Kabel DisplayPort',
                     NamePlural: 'Kable DisplayPort',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '1520',
                     NameSingular: 'Kabel światłowodowy',
                     NamePlural: 'Kable światłowodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '1783',
                     NameSingular: 'Kabel DVI',
                     NamePlural: 'Kable DVI',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '265',
                     NameSingular: 'Kable do napędów i dysków',
                     NamePlural: 'Kable do napędów i dysków',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 3,
                     ChildCategories: null,
                     Id: '2081',
                     NameSingular: 'Kabel Lightning',
                     NamePlural: 'Kable Lightning',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2078',
                     NameSingular: 'Kabel Video',
                     NamePlural: 'Kable Video',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '268',
                     NameSingular: 'Kabel FireWire',
                     NamePlural: 'Kable FireWire',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '46',
               NameSingular: 'Kabel i przejściówka',
               NamePlural: 'Kable i przejściówki',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_16_0_9_367.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_16_0_9_367.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 190,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 34,
                     ChildCategories: null,
                     Id: '979',
                     NameSingular: 'Pamięć TransFlash (microSD)',
                     NamePlural: 'Pamięci TransFlash (microSD)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 24,
                     ChildCategories: null,
                     Id: '310',
                     NameSingular: 'Pamięć SecureDigital',
                     NamePlural: 'Pamięci SecureDigital',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '314',
                     NameSingular: 'Pamięć CompactFlash',
                     NamePlural: 'Pamięci CompactFlash',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '499',
                     NameSingular: 'Czytnik na złączu  USB',
                     NamePlural: 'Czytniki na złączu  USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '2517',
                     NameSingular: 'Etui na karty pamięci',
                     NamePlural: 'Etui na karty pamięci',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '133',
               NameSingular: 'Pamięć Flash',
               NamePlural: 'Pamięci Flash',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_46_21_370.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_46_21_370.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 20,
               ChildCategories: null,
               Id: '48',
               NameSingular: 'Listwa zasilająca',
               NamePlural: 'Listwy zasilające',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_25_53_604.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_25_53_604.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 4,
               ChildCategories: null,
               Id: '1907',
               NameSingular: 'Zestaw',
               NamePlural: 'Zestawy',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_13_24_57_26.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_13_24_57_26.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 12,
               ChildCategories: null,
               Id: '396',
               NameSingular: 'Obudowa dysku twardego',
               NamePlural: 'Obudowy dysków twardych',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-15_12_1_31_282.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-15_12_1_31_282.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 21,
               ChildCategories: [
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '499',
                     NameSingular: 'Czytnik na złączu  USB',
                     NamePlural: 'Czytniki na złączu  USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '2548',
                     NameSingular: 'scrumiki',
                     NamePlural: 'scrumiki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 5,
                     ChildCategories: null,
                     Id: '498',
                     NameSingular: 'Czytnik wewnętrzny',
                     NamePlural: 'Czytniki wewnętrzne',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '583',
               NameSingular: 'Czytnik kart',
               NamePlural: 'Czytniki kart',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_15_26_53_798.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_15_26_53_798.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 106,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '2527',
               NameSingular: 'Pendrive TEST',
               NamePlural: 'Pendrive TEST',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
            {
               ProductsCount: 73,
               ChildCategories: null,
               Id: '439',
               NameSingular: 'Dysk twardy zewnętrzny',
               NamePlural: 'Dyski twarde zewnętrzne',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '12',
                  Name: 'Akcesoria',
               },
            },
         ],
      },
      {
         id: '13',
         Categories: [
            {
               ProductsCount: 1207,
               ChildCategories: [
                  {
                     ProductsCount: 865,
                     ChildCategories: null,
                     Id: '1708',
                     NameSingular: 'Desktop',
                     NamePlural: 'Desktopy',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 249,
                     ChildCategories: null,
                     Id: '1710',
                     NameSingular: 'All in One',
                     NamePlural: 'All in One',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 93,
                     ChildCategories: null,
                     Id: '1709',
                     NameSingular: 'Nettop/Mini-PC',
                     NamePlural: 'Nettopy/Mini-PC',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '175',
               NameSingular: 'Komputer/Serwer',
               NamePlural: 'Komputery/Serwery',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_49_30_890.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_49_30_890.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
            {
               ProductsCount: 449,
               ChildCategories: [
                  {
                     ProductsCount: 105,
                     ChildCategories: null,
                     Id: '315',
                     NameSingular: 'Pamięć PenDrive (USB)',
                     NamePlural: 'Pamięci PenDrive (USB)',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 102,
                     ChildCategories: null,
                     Id: '442',
                     NameSingular: 'Klawiatura  przewodowa',
                     NamePlural: 'Klawiatury  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 81,
                     ChildCategories: null,
                     Id: '383',
                     NameSingular: 'Mysz  przewodowa',
                     NamePlural: 'Myszy  przewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 71,
                     ChildCategories: null,
                     Id: '385',
                     NameSingular: 'Mysz bezprzewodowa',
                     NamePlural: 'Myszy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1207',
                     NameSingular: 'Zestaw bezprzewodowy',
                     NamePlural: 'Zestawy bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '2507',
                     NameSingular: 'Głośniki komputerowe',
                     NamePlural: 'Głośniki komputerowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 18,
                     ChildCategories: null,
                     Id: '2497',
                     NameSingular: 'Akcesorium do konsoli',
                     NamePlural: 'Akcesoria do konsol',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 15,
                     ChildCategories: null,
                     Id: '2331',
                     NameSingular: 'Kamera internetowa',
                     NamePlural: 'Kamery internetowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 12,
                     ChildCategories: null,
                     Id: '441',
                     NameSingular: 'Klawiatura bezprzewodowa',
                     NamePlural: 'Klawiatury bezprzewodowe',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 11,
                     ChildCategories: null,
                     Id: '1652',
                     NameSingular: 'Akcesoria XBOX',
                     NamePlural: 'Akcesoria XBOX',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_53_10_896.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_53_10_896.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '1653',
                     NameSingular: 'Akcesoria PlayStation',
                     NamePlural: 'Akcesoria PlayStation',
                     Photo: {
                        Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2016-03-17_11_52_52_175.png',
                        ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2016-03-17_11_52_52_175.png',
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '222',
                     NameSingular: 'Hub USB',
                     NamePlural: 'Huby USB',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '490',
                     NameSingular: 'Lampka',
                     NamePlural: 'Lampki',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '257',
                     NameSingular: 'Moduł Bluetooth',
                     NamePlural: 'Moduły Bluetooth',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '161',
               NameSingular: 'Akcesoria komputerowe',
               NamePlural: 'Akcesoria komputerowe',
               Photo: {
                  Url: 'http://cdn.x-kom.pl/i/img/category/large,,cat_2015-10-21_14_49_45_915.png',
                  ThumbnailUrl: 'http://cdn.x-kom.pl/i/img/category/small,,cat_2015-10-21_14_49_45_915.png',
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
            {
               ProductsCount: 301,
               ChildCategories: [
                  {
                     ProductsCount: 84,
                     ChildCategories: null,
                     Id: '1087',
                     NameSingular: 'Monitor LCD/LED 24\'',
                     NamePlural: 'Monitory LCD/LED 24\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 61,
                     ChildCategories: null,
                     Id: '1291',
                     NameSingular: 'Monitor LCD/LED 27\'',
                     NamePlural: 'Monitory LCD/LED 27\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 49,
                     ChildCategories: null,
                     Id: '1085',
                     NameSingular: 'Monitor LCD/LED 22\'',
                     NamePlural: 'Monitory LCD/LED 22\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 35,
                     ChildCategories: null,
                     Id: '1295',
                     NameSingular: 'Monitor LCD/LED 32\'',
                     NamePlural: 'Monitory LCD/LED 32\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 24,
                     ChildCategories: null,
                     Id: '79',
                     NameSingular: 'Monitor LCD/LED 19\'',
                     NamePlural: 'Monitory LCD/LED 19\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 19,
                     ChildCategories: null,
                     Id: '1465',
                     NameSingular: 'Monitor LCD/LED 23\'',
                     NamePlural: 'Monitory LCD/LED 23\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 7,
                     ChildCategories: null,
                     Id: '1756',
                     NameSingular: 'Monitory LCD/LED 29\'',
                     NamePlural: 'Monitory LCD/LED 29\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 6,
                     ChildCategories: null,
                     Id: '486',
                     NameSingular: 'Monitor LCD/LED 20\'',
                     NamePlural: 'Monitory LCD/LED 20\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '76',
                     NameSingular: 'Monitor LCD/LED 15\'',
                     NamePlural: 'Monitory LCD/LED 15\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 4,
                     ChildCategories: null,
                     Id: '77',
                     NameSingular: 'Monitor LCD/LED 17\'',
                     NamePlural: 'Monitory LCD/LED 17\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 2,
                     ChildCategories: null,
                     Id: '1397',
                     NameSingular: 'Monitor LCD/LED 16\'',
                     NamePlural: 'Monitory LCD/LED 16\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '504',
                     NameSingular: 'Monitor LCD/LED 21\'',
                     NamePlural: 'Monitory LCD/LED 21\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
                  {
                     ProductsCount: 1,
                     ChildCategories: null,
                     Id: '1293',
                     NameSingular: 'Monitor LCD/LED 30\'',
                     NamePlural: 'Monitory LCD/LED 30\'',
                     Photo: {
                        Url: null,
                        ThumbnailUrl: null,
                     },
                     ParentCategory: null,
                     ParentGroup: null,
                  },
               ],
               Id: '15',
               NameSingular: 'Monitor',
               NamePlural: 'Monitory',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '2602',
               NameSingular: 'isdelete',
               NamePlural: 'isdelete',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
            {
               ProductsCount: 11,
               ChildCategories: null,
               Id: '2610',
               NameSingular: 'kat. z wycofanymi',
               NamePlural: 'kat. z wycofanymi',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
            {
               ProductsCount: 2,
               ChildCategories: null,
               Id: '2695',
               NameSingular: 'allegro',
               NamePlural: 'allegro',
               Photo: {
                  Url: null,
                  ThumbnailUrl: null,
               },
               ParentCategory: null,
               ParentGroup: {
                  Id: '13',
                  Name: 'Komputery stacjonarne',
               },
            },
         ],
      },

   ],
   registration: ['error'],
   passwordRecover: ['error'],
   login: ['error'],
   products,
   productPages: [
      {
         id: '1',
         title: 'HP Pavilion x2 Z8300/2GB/64/Win10 IPS Touch Silver',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 19432.99,
         oldPrice: 23000.99,
         installment: 1000.99,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         suggestedAccessories: products,
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
         comments:
         [
            {
               commentId: '9519',
               authorName: 'Adam',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-09-01T12:19:06.842624'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
               ],
            },
            {
               commentId: '10659',
               authorName: 'Janek',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T12:22:56.544614'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'x-kom',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dziękujemy za Twój cenny komentarz',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
               ],
               votes: null,
               rating: 6,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg' },
               ],
            },
            {
               commentId: '1031666',
               authorName: 'maciej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T22:08:26.73808'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'Marcin',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
                  {
                     commentId: '22716',
                     authorName: 'Bagro 41',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-03-12T09:47:51.963319'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                     childComments: null,
                     votes: null,
                     rating: 3,
                     photos: null,
                  },
               ],
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 5,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
               ],
            },
            {
               commentId: '10695',
               authorName: 'klient',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-29T19:49:18.767645'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg' },
               ],
            },
            {
               commentId: '11267',
               authorName: 'JJ',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2015-01-01T22:30:33.256293'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
               childComments: null,
               votes: null,
               rating: 2,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg' },
               ],
            },
            {
               commentId: '12072',
               authorName: 'nik',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-02-10T21:52:26.484281'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
               childComments: null,
               votes: null,
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg' },
               ],
            },
            {
               commentId: '15278',
               authorName: 'Jake',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-08-26T10:48:52.18171'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg' },
               ],
            },
            {
               commentId: '21191',
               authorName: 'Marcin',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-02-04T18:24:06.790811'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
               childComments: null,
               votes: {
                  votesUp: 10,
                  votesDown: 7,
               },
               rating: 1,
               photos: null,
            },
            {
               commentId: '22716',
               authorName: 'Bagro 41',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T09:47:51.963319'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: null,
            },
            {
               commentId: '22732',
               authorName: 'Andrzej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T16:14:06.718513'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
               childComments: null,
               votes: null,
               rating: 6,
               photos: null,
            },
         ],
      },
      {
         id: '2',
         title: 'HP Pavilion x2 Z8300/2GB/64/Win10 IPS Touch Silver',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 34989,
         oldPrice: 4958,
         installment: 876,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
         comments:
         [
            {
               commentId: '9519',
               authorName: 'Adam',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-09-01T12:19:06.842624'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
               ],
            },
            {
               commentId: '10659',
               authorName: 'Janek',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T12:22:56.544614'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'x-kom',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dziękujemy za Twój cenny komentarz',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
               ],
               votes: null,
               rating: 6,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg' },
               ],
            },
            {
               commentId: '1031666',
               authorName: 'maciej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T22:08:26.73808'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'Marcin',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
                  {
                     commentId: '22716',
                     authorName: 'Bagro 41',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-03-12T09:47:51.963319'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                     childComments: null,
                     votes: null,
                     rating: 3,
                     photos: null,
                  },
               ],
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 5,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
               ],
            },
            {
               commentId: '10695',
               authorName: 'klient',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-29T19:49:18.767645'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg' },
               ],
            },
            {
               commentId: '11267',
               authorName: 'JJ',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2015-01-01T22:30:33.256293'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
               childComments: null,
               votes: null,
               rating: 2,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg' },
               ],
            },
            {
               commentId: '12072',
               authorName: 'nik',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-02-10T21:52:26.484281'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
               childComments: null,
               votes: null,
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg' },
               ],
            },
            {
               commentId: '15278',
               authorName: 'Jake',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-08-26T10:48:52.18171'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg' },
               ],
            },
            {
               commentId: '21191',
               authorName: 'Marcin',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-02-04T18:24:06.790811'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
               childComments: null,
               votes: {
                  votesUp: 10,
                  votesDown: 7,
               },
               rating: 1,
               photos: null,
            },
            {
               commentId: '22716',
               authorName: 'Bagro 41',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T09:47:51.963319'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: null,
            },
            {
               commentId: '22732',
               authorName: 'Andrzej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T16:14:06.718513'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
               childComments: null,
               votes: null,
               rating: 6,
               photos: null,
            },
         ],
      },
      {
         id: '3',
         title: 'HP 2GB/64/Win10 IPS Touch Silver',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 19432,
         oldPrice: 23000,
         installment: 1000,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
            comments:
            [
               {
                  commentId: '9519',
                  authorName: 'Adam',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2014-09-01T12:19:06.842624'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
                  childComments: null,
                  votes: {
                     votesUp: 4,
                     votesDown: 7,
                  },
                  rating: 1,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg' },
                  ],
               },
               {
                  commentId: '10659',
                  authorName: 'Janek',
                  isRegisteredAuthor: false,
                  isAdminAuthor: false,
                  createTime: new Date('2014-11-27T12:22:56.544614'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
                  childComments: [
                     {
                        commentId: '21191',
                        authorName: 'x-kom',
                        isRegisteredAuthor: true,
                        isAdminAuthor: false,
                        createTime: new Date('2016-02-04T18:24:06.790811'),
                        isEditable: false,
                        isVoteAllowed: false,
                        body: 'Dziękujemy za Twój cenny komentarz',
                        childComments: null,
                        votes: {
                           votesUp: 10,
                           votesDown: 7,
                        },
                        rating: 1,
                        photos: null,
                     },
                  ],
                  votes: null,
                  rating: 6,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg' },
                  ],
               },
               {
                  commentId: '1031666',
                  authorName: 'maciej',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2014-11-27T22:08:26.73808'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
                  childComments: [
                     {
                        commentId: '21191',
                        authorName: 'Marcin',
                        isRegisteredAuthor: true,
                        isAdminAuthor: false,
                        createTime: new Date('2016-02-04T18:24:06.790811'),
                        isEditable: false,
                        isVoteAllowed: false,
                        body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                        childComments: null,
                        votes: {
                           votesUp: 10,
                           votesDown: 7,
                        },
                        rating: 1,
                        photos: null,
                     },
                     {
                        commentId: '22716',
                        authorName: 'Bagro 41',
                        isRegisteredAuthor: true,
                        isAdminAuthor: false,
                        createTime: new Date('2016-03-12T09:47:51.963319'),
                        isEditable: false,
                        isVoteAllowed: false,
                        body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                        childComments: null,
                        votes: null,
                        rating: 3,
                        photos: null,
                     },
                  ],
                  votes: {
                     votesUp: 4,
                     votesDown: 7,
                  },
                  rating: 5,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg' },
                  ],
               },
               {
                  commentId: '10695',
                  authorName: 'klient',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2014-11-29T19:49:18.767645'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
                  childComments: null,
                  votes: null,
                  rating: 3,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg' },
                  ],
               },
               {
                  commentId: '11267',
                  authorName: 'JJ',
                  isRegisteredAuthor: false,
                  isAdminAuthor: false,
                  createTime: new Date('2015-01-01T22:30:33.256293'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
                  childComments: null,
                  votes: null,
                  rating: 2,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg' },
                  ],
               },
               {
                  commentId: '12072',
                  authorName: 'nik',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2015-02-10T21:52:26.484281'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
                  childComments: null,
                  votes: null,
                  rating: 1,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg' },
                  ],
               },
               {
                  commentId: '15278',
                  authorName: 'Jake',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2015-08-26T10:48:52.18171'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
                  childComments: null,
                  votes: {
                     votesUp: 4,
                     votesDown: 7,
                  },
                  rating: 1,
                  photos: [
                     { url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg' },
                  ],
               },
               {
                  commentId: '21191',
                  authorName: 'Marcin',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2016-02-04T18:24:06.790811'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                  childComments: null,
                  votes: {
                     votesUp: 10,
                     votesDown: 7,
                  },
                  rating: 1,
                  photos: null,
               },
               {
                  commentId: '22716',
                  authorName: 'Bagro 41',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2016-03-12T09:47:51.963319'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                  childComments: null,
                  votes: null,
                  rating: 3,
                  photos: null,
               },
               {
                  commentId: '22732',
                  authorName: 'Andrzej',
                  isRegisteredAuthor: true,
                  isAdminAuthor: false,
                  createTime: new Date('2016-03-12T16:14:06.718513'),
                  isEditable: false,
                  isVoteAllowed: false,
                  body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
                  childComments: null,
                  votes: null,
                  rating: 6,
                  photos: null,
               },
            ],
      },
      {
         id: '4',
         title: 'HP Pavilion x2 Z8300/2GB/64/Win10 IPS ',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 194.99,
         oldPrice: 230.99,
         installment: 10.99,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
         comments:
         [
            {
               commentId: '9519',
               authorName: 'Adam',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-09-01T12:19:06.842624'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
               ],
            },
            {
               commentId: '10659',
               authorName: 'Janek',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T12:22:56.544614'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'x-kom',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dziękujemy za Twój cenny komentarz',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
               ],
               votes: null,
               rating: 6,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',},
               ],
            },
            {
               commentId: '1031666',
               authorName: 'maciej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T22:08:26.73808'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'Marcin',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
                  {
                     commentId: '22716',
                     authorName: 'Bagro 41',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-03-12T09:47:51.963319'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                     childComments: null,
                     votes: null,
                     rating: 3,
                     photos: null,
                  },
               ],
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 5,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
               ],
            },
            {
               commentId: '10695',
               authorName: 'klient',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-29T19:49:18.767645'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',},
               ],
            },
            {
               commentId: '11267',
               authorName: 'JJ',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2015-01-01T22:30:33.256293'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
               childComments: null,
               votes: null,
               rating: 2,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',},
               ],
            },
            {
               commentId: '12072',
               authorName: 'nik',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-02-10T21:52:26.484281'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
               childComments: null,
               votes: null,
               rating: 1,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',},
               ],
            },
            {
               commentId: '15278',
               authorName: 'Jake',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-08-26T10:48:52.18171'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                 {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',},
               ],
            },
            {
               commentId: '21191',
               authorName: 'Marcin',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-02-04T18:24:06.790811'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
               childComments: null,
               votes: {
                  votesUp: 10,
                  votesDown: 7,
               },
               rating: 1,
               photos: null,
            },
            {
               commentId: '22716',
               authorName: 'Bagro 41',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T09:47:51.963319'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: null,
            },
            {
               commentId: '22732',
               authorName: 'Andrzej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T16:14:06.718513'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
               childComments: null,
               votes: null,
               rating: 6,
               photos: null,
            },
         ],
      },
      {
         id: '5',
         title: 'HP Pavilion xIPS Touch Silver',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 1932.99,
         oldPrice: 3000.99,
         installment: 100.99,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
         comments:
         [
            {
               commentId: '9519',
               authorName: 'Adam',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-09-01T12:19:06.842624'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
               ],
            },
            {
               commentId: '10659',
               authorName: 'Janek',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T12:22:56.544614'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'x-kom',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dziękujemy za Twój cenny komentarz',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
               ],
               votes: null,
               rating: 6,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',},
               ],
            },
            {
               commentId: '1031666',
               authorName: 'maciej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T22:08:26.73808'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'Marcin',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
                  {
                     commentId: '22716',
                     authorName: 'Bagro 41',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-03-12T09:47:51.963319'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                     childComments: null,
                     votes: null,
                     rating: 3,
                     photos: null,
                  },
               ],
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 5,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
               ],
            },
            {
               commentId: '10695',
               authorName: 'klient',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-29T19:49:18.767645'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',},
               ],
            },
            {
               commentId: '11267',
               authorName: 'JJ',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2015-01-01T22:30:33.256293'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
               childComments: null,
               votes: null,
               rating: 2,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',},
               ],
            },
            {
               commentId: '12072',
               authorName: 'nik',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-02-10T21:52:26.484281'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
               childComments: null,
               votes: null,
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',},
               ],
            },
            {
               commentId: '15278',
               authorName: 'Jake',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-08-26T10:48:52.18171'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',},
               ],
            },
            {
               commentId: '21191',
               authorName: 'Marcin',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-02-04T18:24:06.790811'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
               childComments: null,
               votes: {
                  votesUp: 10,
                  votesDown: 7,
               },
               rating: 1,
               photos: null,
            },
            {
               commentId: '22716',
               authorName: 'Bagro 41',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T09:47:51.963319'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: null,
            },
            {
               commentId: '22732',
               authorName: 'Andrzej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T16:14:06.718513'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
               childComments: null,
               votes: null,
               rating: 6,
               photos: null,
            },
         ],
      },
      {
         id: '6',
         title: 'HP jakis Z8300/2GB/64/Win10 IPS Touch Silver',
         mark: 'New',
         ratingLink: '#newweb-reviews',
         rating: 5,
         votesCount: 1,
         producer: 'HP',
         producerCode: '1WA45EA',
         shopCode: '375542',
         price: 192.99,
         oldPrice: 230.99,
         installment: 1000.99,
         maxItemsToBuy: 500,
         defaultNumberOfInstallments: 3,
         mySalonsIds: ['16'],
         isLogin: true,
         timeToBuy: new Date(new Date().getTime() + 3000000),
         orderIn: new Date('December 13, 2017'),
         availability: 'available',
         availabilityInShop: true,
         deliveryToShop: true,
         freeDelivery: true,
         producerLink: '/#',
         shipmentCostLink: '#/link',
         whenAvailableLink: '#/link',
         availableInShopLink: '#/link',
         checkAvailabilityInShopLink: '#/link',
         detailsShipmentLink: '#/link',
         installmentLink: '#/link',
         orderInLink: '#/link',
         unavailableInShopLink: '#/link',
         featureSummarySplitted: [
            {
               key: 'Procesor',
               value: 'Intel Core i7-8550U (4 rdzenie, od 1.80 GHz do 4.00 GHz, 8 MB cache)',
            },
            {
               key: 'Pamięć',
               value: '8 GB (SO-DIMM DDR4, 2133MHz)',
            },
            {
               key: 'Grafika',
               value: 'Intel HD Graphics 630 + NVIDIA GeForce GTX 1050Ti',
            },
            {
               key: 'Typ ekranu',
               value: 'Matowy, LED, EWV',
            },
            {
               key: '',
               value: 'Microsoft Windows 10 Home PL (wersja 64- bitowa)',
            },
            {
               key: 'Dysk',
               value: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych), 256 GB SSD SATA III',
            },
         ],
         images: [
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',
            },
            {
               image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
               thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',
            },
         ],
         featuresTable: [
            { values: ['Lasewa, koloroa', 'Laserowa, kolowa', 'kolowa', 'Laserowa'], key: 'Technologia druku' },
            { values: ['A4'], key: 'Maksymalny format nośnika' },
            { values: ['50 arkuszy', '550 arkuszy', '55 arkuszy'], key: 'Podajnik papieru' },
            { values: ['75 arkuszy'], key: 'Odbiornik papieru' },
            { values: ['38 str./min'], key: 'Szybkość druku w mono' },
            { values: ['12 miesięcy (gwarancja producenta)'], key: 'Gwarancja' },
         ],
         shippingCost: [
            {
               text: 'Dostawa kurierem - Gotówka przy odbiorze',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Przelew bankowy',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Credit Agricole',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - Raty Santander',
               price: '0',
            },
            {
               text: 'Dostawa kurierem - e-płatności Dotpay',
               price: '0',
            },
            {
               text: 'Odbiór osobisty',
               price: '0',
            },
            {
               text: 'Paczkomaty InPost - Przelew bankowy',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - Płatność kartą w Paczkomacie',
               price: '9.9',
            },
            {
               text: 'Paczkomaty InPost - e-płatności Dotpay',
               price: '9.9',
            },
         ],
         shippingTimeData: '<div class=\"AvailabilityTooltipHtml\">Termin realizacji może ulec zmianie, jeśli:\r\n\t\t\t\t\t\t\t <ul>\r\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\r\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\r\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\r\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\r\n\t\t\t\t\t\t\t </ul></div>',
         departmentsAvailability: [
            {
               address: [
                  'ul. Brzeska 130',
               ],
               city: 'Biała Podlaska',
               postCode: '21-500',
               openHours: [
                  'poniedziałek 09:00 - 21:00',
                  'wtorek - piątek 07:00 - 18:00',
                  'sobota 08:00 - 16:00',
               ],
               eMail: 'bialapodlaska@x-kom.pl',
               phone: '34 377 00 14',
               salonId: '16',
               salonName: 'x-kom Biała Podlaska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Panorama"',
                  'ul. Legionowa 9/1 lokal30',
               ],
               city: 'Białystok',
               postCode: '15-281',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 18:00',
                  'piątek 10:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'bialystok@x-kom.pl',
               phone: '34 377 00 12',
               salonId: '13',
               salonName: 'x-kom Białystok',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Gemini Park',
                  'ul. Leszczyńska 20, lokal nr N',
               ],
               city: 'Bielsko-Biała',
               postCode: '43-300',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'bielskobiala@x-kom.pl',
               phone: '34 377 00 24 ',
               salonId: '37',
               salonName: 'x-kom Bielsko-Biała',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Tesco"',
                  'ul. Toruńska 101 lokal12',
               ],
               city: 'Bydgoszcz',
               postCode: '85-817',
               openHours: [
                  'poniedziałek - wtorek 09:00 - 21:00',
                  'środa 09:00 - 15:00',
                  'czwartek - sobota 09:00 - 21:00',
               ],
               eMail: 'bydgoszcz@x-kom.pl',
               phone: '34 377 00 13',
               salonId: '14',
               salonName: 'x-kom Bydgoszcz',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Jurajska',
                  'al. Wojska Polskiego 207 lokal 80',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'czestochowa.jurajska@x-kom.pl',
               phone: '34 377 00 30',
               salonId: '30',
               salonName: 'x-kom Częstochowa Jurajska',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'al. Wolności 31',
               ],
               city: 'Częstochowa',
               postCode: '42-202',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
               ],
               eMail: 'czestochowa.wolnosci@x-kom.pl',
               phone: '34 377 00 01',
               salonId: '6',
               salonName: 'x-kom Częstochowa Wolności',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Manhattan"',
                  'al. Grunwaldzka 82 lokal10 poz. I',
               ],
               city: 'Gdańsk',
               postCode: '80-244',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'gdansk@x-kom.pl',
               phone: '34 377 00 07',
               salonId: '8',
               salonName: 'x-kom Gdańsk',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Łużycka 2 F',
               ],
               city: 'Gliwice',
               postCode: '44-100',
               openHours: [
                  'poniedziałek 09:00 - 19:00',
                  'wtorek 09:00 - 20:00',
                  'środa - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
               ],
               eMail: 'gliwice@x-kom.pl',
               phone: '34 377 00 20',
               salonId: '24',
               salonName: 'x-kom Gliwice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Belg"',
                  'ul. Przemysłowa 3',
               ],
               city: 'Katowice',
               postCode: '40-020',
               openHours: [
                  'poniedziałek - sobota 09:00 - 20:00',
                  'niedziela 10:00 - 18:00',
               ],
               eMail: 'katowice@x-kom.pl',
               phone: '34 377 00 11',
               salonId: '12',
               salonName: 'x-kom Katowice',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Echo"',
                  'ul. Świętokrzyska 20',
               ],
               city: 'Kielce',
               postCode: '25-406',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'kielce@x-kom.pl',
               phone: '34 377 00 16',
               salonId: '20',
               salonName: 'x-kom Kielce',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Bonarka City Center',
                  'ul. Kamieńskiego 11, lokal PP123',
               ],
               city: 'Kraków',
               postCode: '30-644',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'krakow.bonarka@x-kom.pl',
               phone: '34 377 00 18',
               salonId: '22',
               salonName: 'x-kom Kraków Bonarka',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul.. Chopina 33',
               ],
               city: 'Kraków',
               postCode: '30-047',
               openHours: [
                  'poniedziałek - piątek 09:00 - 19:00',
                  'sobota 10:00 - 15:00',
                  'niedziela 12:00 - 14:00',
               ],
               eMail: 'krakow@x-kom.pl',
               phone: '34 377 00 03',
               salonId: '3',
               salonName: 'x-kom Kraków Chopina',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria "OLIMP III"',
                  'al. Spółdzielczości Pracy 34, lokal 98',
               ],
               city: 'Lublin',
               postCode: '20-147',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lublin@x-kom.pl',
               phone: '34 377 00 10',
               salonId: '11',
               salonName: 'x-kom Lublin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Port Łódź"',
                  'ul. Pabianicka 245 lok. 094',
               ],
               city: 'Łódź',
               postCode: '93-457',
               openHours: [
                  'poniedziałek - wtorek 10:00 - 21:00',
                  'środa 10:00 - 19:00',
                  'czwartek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'lodz@x-kom.pl',
               phone: '34 377 00 06',
               salonId: '7',
               salonName: 'x-kom Łódź',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Warmińska',
                  'ul. Tuwima 26 lokal N.1.73A',
               ],
               city: 'Olsztyn',
               postCode: '10-748',
               openHours: [
                  'poniedziałek - piątek 10:00 - 21:00',
               ],
               eMail: 'olsztyn@x-kom.pl',
               phone: '34 377 00 23',
               salonId: '36',
               salonName: 'x-kom Olsztyn',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Solaris Center"',
                  'pl. Kopernika 16, lokal85',
               ],
               city: 'Opole',
               postCode: '45-040',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'opole@x-kom.pl',
               phone: '34 377 00 15',
               salonId: '19',
               salonName: 'x-kom Opole',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Kupiec Poznański"',
                  'pl. Wiosny Ludów 2, lokal 207',
               ],
               city: 'Poznań',
               postCode: '61-831',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 11:00 - 19:00',
               ],
               eMail: 'poznan@x-kom.pl',
               phone: '34 377 00 08',
               salonId: '9',
               salonName: 'x-kom Poznań',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Rzeszów',
                  'al. Piłsudskiego 44,  lokal053B',
               ],
               city: 'Rzeszów',
               postCode: '35-001',
               openHours: [
                  'poniedziałek - czwartek 09:00 - 19:00',
                  'piątek 09:00 - 12:00',
                  'sobota 09:00 - 10:00',
               ],
               eMail: 'rzeszow@x-kom.pl',
               phone: '34 377 00 09',
               salonId: '10',
               salonName: 'x-kom Rzeszów',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Galeria Handlowa "Turzyn"',
                  'al. Bohaterów Warszawy 42',
               ],
               city: 'Szczecin',
               postCode: '70-342',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 09:00 - 20:00',
               ],
               eMail: 'szczecin@x-kom.pl',
               phone: '34 377 00 17',
               salonId: '21',
               salonName: 'x-kom Szczecin',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'ul. Piastowska 7',
               ],
               city: 'Tarnowskie Góry',
               postCode: '42-600',
               openHours: [
                  'poniedziałek - czwartek 10:02 - 18:00',
                  'piątek 10:02 - 16:00',
                  'sobota 10:02 - 15:00',
                  'niedziela 08:02 - 18:00',
               ],
               eMail: 'tarnowskiegory@x-kom.pl',
               phone: '34 377 00 02',
               salonId: '2',
               salonName: 'x-kom Tarnowskie Góry',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Promenada"',
                  'ul. Ostrobramska 75c lokal 1.02',
               ],
               city: 'Warszawa',
               postCode: '04-175',
               openHours: [
                  'poniedziałek - sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.promenada@x-kom.pl',
               phone: '34 377 00 19',
               salonId: '23',
               salonName: 'x-kom Warszawa Promenada',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe "Reduta"',
                  'Al. Jerozolimskie 148 lokal257',
               ],
               city: 'Warszawa',
               postCode: '02-326',
               openHours: [
                  'poniedziałek - czwartek 10:00 - 21:00',
                  'piątek 10:00 - 15:00',
                  'sobota 10:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'warszawa.reduta@x-kom.pl',
               phone: '34 377 00 05',
               salonId: '5',
               salonName: 'x-kom Warszawa Reduta',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Pasaż Grunwaldzki',
                  'pl. Grunwaldzki 22 lokalYL0062',
               ],
               city: 'Wrocław',
               postCode: '50-363',
               openHours: [
                  'poniedziałek - sobota 09:00 - 21:00',
                  'niedziela 10:00 - 20:00',
               ],
               eMail: 'wroclaw@x-kom.pl',
               phone: '34 377 00 04',
               salonId: '4',
               salonName: 'x-kom Wrocław',
               productsAvailableCount: 20,
            },
            {
               address: [
                  'Centrum Handlowe Aleja Bielany',
                  'ul. Czekoladowa 5-22, lokal i324',
               ],
               city: 'Kobierzyce',
               postCode: '55-040',
               openHours: [
                  'poniedziałek - niedziela 10:00 - 21:00',
               ],
               eMail: 'wroclaw.bielany@x-kom.pl',
               phone: '34 377 00 22',
               salonId: '31',
               salonName: 'x-kom Wrocław Bielany',
               productsAvailableCount: 20,
            },
         ],
         description: `
            <!-- beginalandesc -->
            <div class="row text-center">
               <div class="col-md-12">
                  <div class="row text-center">
                     <div class="col-md-12">
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="laptop" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/laptop.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Ultrabook Dell XPS 13
                                 <br />
                                 <small>Nowa generacja ultrabook&oacute;w</small>
                              </h2>
                              <p>
                                 Dell XPS 13 to niezwykle lekki, smukły i wydajny ultrabook o przekątnej ekranu 13 cali, kt&oacute;rego stylistyka przykuwa
                                 uwagę od pierwszego wejrzenia. Nowoczesne procesory &oacute;smej generacji w połączeniu
                                 z szybką pamięcią RAM oraz szybkimi dyskami SSD M.2 PCIe gwarantują maksymalną wydajność.
                                 Z kolei pojemna i wytrzymała bateria dostarcza zasilania przez niezwykle długi czas. Dzięki
                                 temu bez przeszk&oacute;d możesz oglądać swoje ulubione filmy i seriale będąc w podr&oacute;ży,
                                 na wysokiej jakości ekranie Full HD.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowa generacja ultrabooków" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a1.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="procesor" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/procesor.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Procesor Intel Core i7 &oacute;smej generacji
                                 <br />
                                 <small>Idź z duchem czasu i epoki cyfrowej</small>
                              </h2>
                              <p>
                                 Komputer z procesorem Intel&reg; Core&trade; i7 &oacute;smej generacji pozwala iść z duchem epoki cyfrowej. Uzyskaj ogromny
                                 wzrost wydajności w por&oacute;wnaniu z poprzednią generacją, dzięki technologi Intel&reg;
                                 Turbo Boost 2.0. R&oacute;b zakupy, korzystając z wbudowanych zabezpieczeń. Postaw na nadzwyczajne
                                 możliwości obsługi gier i rozrywki, płynne odtwarzanie film&oacute;w w najwyższej rozdzielczości
                                 i film&oacute;w sferycznych oraz szybkie przesyłanie danych.</p>
                              <img alt="Ultrabook Dell XPS 13 Procesor Intel Core ósmej generacji" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a2.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="grafika zintegrowana" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/grafikazintegrowana.svg"
                              />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Układ graficzny Intel UHD Graphics
                                 <br />
                                 <small>Wbudowane funkcje graficzne</small>
                              </h2>
                              <p>
                                 Karta graficzna zamontowana w komputerze dostarcza wyjątkową jakość obrazu oraz dźwięk standardu kina domowego. Bez względu
                                 na to, czy grasz w gry, edytujesz nagrania wideo czy oglądasz filmy. Technologia Intel HD
                                 Graphics obejmuje wydajne funkcje zapewniające płynne, oszałamiające efekty wizualne.</p>
                              <img alt="Ultrabook Dell XPS 13 Układ graficzny Intel UHD Graphics" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a3.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="rozdzielczość FullHD" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/FullHD.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Bezkonkurencyjny wyświetlacz
                                 <br />
                                 <small>Mniej ramki, więcej pikseli, lepsza jakość obrazu</small>
                              </h2>
                              <p>
                                 <b>Mniej ramki, więcej pikseli: </b>ciesz się ekranem, kt&oacute;ry wydaje się nieskończony,
                                 dzięki technologii InfinityEdge zmniejszającej grubość ramki o 23%, do zaledwie 4 mm. W
                                 efekcie panel wypełnia 80,7% powierzchni obudowy. Oszałamiająca rozdzielczość Full HD sprawi,
                                 że zobaczysz detale kt&oacute;rych obecności nawet się nie spodziewasz.</p>
                              <p>
                                 <b>Doskonała jakość obrazu</b>: maksymalne wykorzystanie widma kolor&oacute;w, ze 100-procentowym
                                 pokryciem palety barw sRGB i wsp&oacute;łczynnikiem kontrastu 1500:1, sprawia, że każdy
                                 cień nabiera kształtu, a nawet najjaśniejsze sceny mają wyraźne kontury.</p>
                              <p>
                                 <b>Piękny z każdej strony:</b> powłoka przeciwodblaskowa w połączeniu z doskonałą jasnością
                                 400 nit&oacute;w pozwala wygodnie odtwarzać treści rozrywkowe na otwartym powietrzu.</p>
                              <img alt="Ultrabook Dell XPS 13 Bezkonkurencyjny wyświetlacz" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a4.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="film video" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/film.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Technologia Dell Cinema
                                 <br />
                                 <small>Realistyczne odwzorowanie barw i dźwięku</small>
                              </h2>
                              <p>
                                 <b>CinemaColor: </b>obrazy są wyświetlane do ostatniego bita, żywe jak świat wok&oacute;ł Ciebie.
                                 Najlepsza w swojej klasie technologia panelu w połączeniu z zaawansowanym sprzętem i oprogramowaniem
                                 umożliwiającymi obsługę zawartości z niezr&oacute;wnanym zakresem dynamicznym zapewnia najgłębsze
                                 czernie i najbardziej wyraziste kolory w całym spektrum barw.</p>
                              <p>
                                 <b>CinemaSound:</b> funkcja Waves MaxxAudio&reg; Pro zwiększa głośność i czystość ton&oacute;w,
                                 przez co możesz cieszyć się dźwiękiem w jakości studyjnej.</p>
                              <p>
                                 <b>CinemaStream: </b>karta Killer Wireless zapewnia maksymalną przepustowość film&oacute;w
                                 i muzyki, gwarantując płynny przesył.</p>
                              <img alt="Ultrabook Dell XPS 13 Technologia Dell Cinema" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a5.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smukłość" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smuklosc.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Więcej mocy, mniejsze rozmiary
                                 <br />
                                 <small>Szybka pamięć masowa</small>
                              </h2>
                              <p>
                                 Od teraz możesz zabierać swoje rozrywki wszędzie ze sobą, bowiem XPS 13 jest mniejszy, cieńszy i lżejszy (waży zaledwie 1,21
                                 kg), a mimo to gotowy na naprawdę poważne zadania. Jest tak świetnie dopasowany do wielkości
                                 stolik&oacute;w w samolotach, że nawet nie zauważysz, gdy pasażer z przodu rozłoży oparcie
                                 fotela.
                              </p>
                              <p>
                                 W notebooku zastosowano nowe procesory Intel&reg; &oacute;smej generacji co przekłada się na lepszą wydajność, nawet po uruchomieniu
                                 wielu aplikacji r&oacute;wnocześnie. Dodatkowo opracowana przez Dell aplikacja Dell Power
                                 Manager umożliwia wyb&oacute;r trybu zasilania, kt&oacute;ry dynamicznie zapewnia maksymalną
                                 ilość mocy obliczeniowej z procesora, jednocześnie cały czas inteligentnie monitując i regulując
                                 temperatury podzespoł&oacute;w.</p>
                              <p>
                                 Z kolei dzięki dyskowi SSD PCIe system uruchamia się i wznawia w kilka sekund a wydajna pamięć operacyjna zapewnia błyskawiczną
                                 obsługę wielu zadań, nawet w aplikacjach angażujących dużo zasob&oacute;w komputera.</p>
                              <img alt="Ultrabook Dell XPS 13 Więcej mocy, mniejsze rozmiary" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a6.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="bateria" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/bateria.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Pracuj i baw się przez cały dzień
                                 <br />
                                 <small>Pojemna i wytrzymała bateria</small>
                              </h2>
                              <p>
                                 Dell XPS 13 zapewnia niezwykle długi czas pracy baterii, wynoszący do 19 godzin podczas korzystania z aplikacji Word lub
                                 Excel. Z takim urządzeniem możesz spokojnie wybrać się w podr&oacute;ż bez zamartwiania
                                 się o źr&oacute;dło zasilania.
                              </p>
                              <img alt="Ultrabook Dell XPS 13 Pojemna i wytrzymała bateria" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a7.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="aluminiowa obudowa" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/aluminiowaobudowa.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Niesamowita wytrzymałość konstrukcji
                                 <br />
                                 <small>Aluminiowa obudowa</small>
                              </h2>
                              <p>
                                 Obudowa Dell XPS 13 wycinana jest z jednego bloku aluminium, co zapewnia znacznie większą wytrzymałość niż składanie z wielu
                                 element&oacute;w. Ponadto wykorzystanie wł&oacute;kna węglowego oraz szkła w konstrukcji
                                 podp&oacute;rek pod nadgarstki, zapewnia najlepszą wytrzymałość przy minimalnej masie.
                                 <br /> Drobne szczeg&oacute;ły mają wielkie znaczenie, dlatego firma Dell wprasowała logo XPS
                                 ze stali nierdzewnej, laserowo wygrawerowała informacje regulacyjne, a dla jeszcze lepszego
                                 wyglądu dopasowała kolorystycznie st&oacute;pki w obudowie.</p>
                              <p>
                                 Wykończenie ultrabooka Dell XPS 13 naprawdę olśniewa.</p>
                              <img alt="Ultrabook Dell XPS 13 wytrzymała konstrukcjia, aluminium, włókno węglowe, szkło" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a8.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="chłodzenie" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/chlodzenie.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Chłodniejszy niż kt&oacute;rakolwiek wcześniejsza generacja
                                 <br />
                                 <small>Pierwszy notebook z izolacją cieplną GORE&trade;</small>
                              </h2>
                              <p>
                                 XPS 13 to pierwszy notebook z izolacją cieplną GORE&trade;. Zapewnia ona przewodnictwo termiczne na poziomie niższym niż
                                 przewodnictwo w powietrzu, a jest przy tym cienka i elastyczna. Nawet przy najcięższych
                                 zadaniach notebook zachowuje przyjemny chł&oacute;d obudowy. Dodatkowo opr&oacute;cz izolacji
                                 Gore odprowadzającej ciepło z urządzenia zastosowano dwa wentylatory i rurki ciepłowodowe,
                                 kt&oacute;re jeszcze bardziej obniżają temperaturę pracującego XPS, co pozwala uzyskać imponującą
                                 wydajność mimo tak niewielkiej grubości urządzenia.</p>
                              <img alt="Ultrabook Dell XPS 13 Pierwszy notebook z izolacją cieplną GORE" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a9.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="smartfon" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/smartfon.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Funkcja Dell Mobile Connect
                                 <br />
                                 <small>Połącz swoje urządzenia</small>
                              </h2>
                              <p>
                                 <b>Bezproblemowa integracja komputera lub smartfona: </b>teraz dostęp do wielu urządzeń nie
                                 wymaga dzielenia uwagi &mdash; funkcja Dell Mobile Connect łączy smartfon z systemem iOS
                                 lub Android z notebookiem.
                                 <br />
                                 <br />
                                 <b>Ochrona prywatności: </b>w ramach funkcji Dell Mobile Connect telefon można podłączyć do
                                 komputera poprzez bezpieczne połączenie typu punkt-punkt, dzięki czemu dane nie są narażone
                                 na ujawnienie z powodu korzystania z niezabezpieczonych połączeń z Internetem.</p>
                              <p>
                                 <b>Mniej zakł&oacute;ceń: </b>dzięki funkcji Dell Mobile Connect masz możliwość kanałowego
                                 przesyłania powiadomień z rozm&oacute;w telefonicznych, wiadomości SMS, wiadomości błyskawicznych
                                 i innych aplikacji bezpośrednio do notebooka. Skup się na jednym ekranie i odpowiadaj w
                                 dogodnym momencie.</p>
                              <img alt="Ultrabook Dell XPS 13 Funkcja Dell Mobile Connect" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a10.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="thunderbolt" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/thunderbolt.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Nowoczesna łączność
                                 <br />
                                 <small>Zaawansowana technologia</small>
                              </h2>
                              <p>
                                 Uniwersalne porty Thunderbolt&trade; 3 Type-C umożliwiają ładowanie notebooka, podłączanie wielu urządzeń (w tym nawet dw&oacute;ch
                                 wyświetlaczy 4K) i przesyłanie danych z prędkością do 40 Gb/s, czyli 8-krotnie szybciej
                                 niż w przypadku standardu USB 3.0.</p>
                              <img alt="Ultrabook Dell XPS 13 Nowoczesna łączność thunderbolt 3" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a11.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="ochrona środowiska" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/srodowisko.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Świadomość ekologiczna
                                 <br />
                                 <small>Innowacje z myślą o naszej planecie</small>
                              </h2>
                              <p>
                                 <b>Chroni morza i oceany: </b>czarne elementy opakowania to coś więcej niż materiał z recyklingu.
                                 25% materiał&oacute;w to tworzywa sztuczne z ocean&oacute;w zebrane na obszarach przybrzeżnych,
                                 a pozostałe 75% to innego rodzaju plastik pochodzący z recyklingu.
                                 <br /> Energooszczędność: notebook XPS 13 ma certyfikat ENERGY STAR&reg;.</p>
                              <p>
                                 <b>Lepsze materiały:</b> konstrukcja notebooka nie zawiera kadmu, ołowiu, rtęci ani niekt&oacute;rych
                                 ftalan&oacute;w, dzięki czemu ma r&oacute;wnież certyfikat EPEAT&reg; Gold i jest pozbawiona
                                 zawartości substancji BFR/PVC.</p>
                              <p>
                                 <b>Prosty recykling:</b> 90% części notebooka można łatwo poddać recyklingowi lub ponownie
                                 wykorzystać, a białe bambusowe elementy opakowania w 100% nadają się do utylizacji.</p>
                              <img alt="Ultrabook Dell XPS 13 Świadomość ekologiczna" src="https://allegro.stati.pl//AllegroIMG/PRODUCENCI/DELL/XPS-9370/srebrny/a12.jpg"
                              />
                           </div>
                        </div>
                        <div class="row text-left fresh-content">
                           <div class="col-md-2 text-center">
                              <img alt="windows" class="ico" src="https://allegro.stati.pl/AllegroIMG/SZABLON/ICONS/windows.svg" />
                           </div>
                           <div class="col-md-10">
                              <h2 class="text-left">
                                 Windows 10 PRO
                                 <br />
                                 <small>Doskonały do wszystkich zadań</small>
                              </h2>
                              <ul>
                                 <li>
                                    Rozbudowane, znajome menu Start zapewnia szybki dostęp do ulubionych funkcji</li>
                                 <li>
                                    Szybkie i płynne działanie. Obsługuje wszystko, czym dysponujesz</li>
                                 <li>
                                    Microsoft Edge, zupełnie nowa przeglądarka, kt&oacute;ra pomaga w pracy</li>
                                 <li>
                                    Dzięki zawsze włączonym aktualizacjom masz zapewnione najnowsze funkcje i zabezpieczenia</li>
                                 <li>
                                    Dołącz do domeny firmowej lub szkolnej i zyskaj dostęp do plik&oacute;w sieciowych, serwer&oacute;w i drukarek</li>
                                 <li>
                                    Lepsze zabezpieczenia dzięki szyfrowaniu danych i ochronie z funkcją BitLocker</li>
                                 <li>
                                    Logowanie do pulpitu zdalnego i tworzenie maszyn wirtualnych za pomocą funkcji Hyper-V</li>
                              </ul>
                              <p>
                                 Windows 10 PRO to znajomy system, prosty i pełen nowych funkcji pomocnych w organizowaniu pracy, zwiększaniu produktywności
                                 i zarządzaniu firmą. Zawiera wszystko, co oferuje Windows 10 PRO, oraz dodatkowe funkcje
                                 do szyfrowania, logowania zdalnego, tworzenia maszyn wirtualnych i innych zadań.</p>
                              <img alt="System operacyjny Windows 10 PRO" src="http://allegro.stati.pl/AllegroIMG/SZABLON/SYSTEMY/n_windows10home.jpg?"
                              />
                           </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/bluetooth.jpg" />
                              </div>
                              <p>
                                 Wymieniaj dane gdzie chcesz</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wifi.jpg" />
                              </div>
                              <p>
                                 Pełna mobilność</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/czytnikkart.jpg" />
                              </div>
                              <p>
                                 Czytnik kart pamięci</p>
                           </div>
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                           <div class="icon-box">
                              <div class="icon-box-icon">
                                 <img alt="" src="http://allegro.stati.pl/AllegroIMG/SZABLON/IKONKI/wbudowanakamera.jpg" />
                              </div>
                              <p>
                                 Wbudowana kamera</p>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               &nbsp;</p>
            <!-- endalandesc -->`,
         comments:
         [
            {
               commentId: '9519',
               authorName: 'Adam',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-09-01T12:19:06.842624'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'minęły niecałe 2 miesiące - dysk padł. Nie da się nawet odzyskać danych. Może lepiej zainwestować w coś lepszego?',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_6_37_06.jpg',},
               ],
            },
            {
               commentId: '10659',
               authorName: 'Janek',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T12:22:56.544614'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'x-kom',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dziękujemy za Twój cenny komentarz',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
               ],
               votes: null,
               rating: 6,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_59_896_04.jpg',},
               ],
            },
            {
               commentId: '1031666',
               authorName: 'maciej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-27T22:08:26.73808'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Demon prędkości to to nie jest (marne prędkości). Ale tego nie oczekiwałem jak go kupowałem. Dwie cechy na których mi osobiście zależało to 1. cisza absolutna 2. zerowe niemal zużycie prądu.....a dodatkowo cena tego jest najtańsza - swój kupiłem za ok. 199 zł jakieś 2 miesiące temu.\r\nDodam, że dysk działa poprawnie AHCI czy IDE bez znaczenia działa poprawnie. Backupy czy restore bez problemu.\r\nZe swej strony dam mu \'4+/5\' bo wiem co kupowałem i za ile więc oczekiwania jakie miałem nie mogły być wygórowane.\r\nTo starej stacjonarki na sata2 jeszcze polecam jak najbardziej',
               childComments: [
                  {
                     commentId: '21191',
                     authorName: 'Marcin',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-02-04T18:24:06.790811'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
                     childComments: null,
                     votes: {
                        votesUp: 10,
                        votesDown: 7,
                     },
                     rating: 1,
                     photos: null,
                  },
                  {
                     commentId: '22716',
                     authorName: 'Bagro 41',
                     isRegisteredAuthor: true,
                     isAdminAuthor: false,
                     createTime: new Date('2016-03-12T09:47:51.963319'),
                     isEditable: false,
                     isVoteAllowed: false,
                     body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
                     childComments: null,
                     votes: null,
                     rating: 3,
                     photos: null,
                  },
               ],
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 5,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_48_318_01.jpg',},
               ],
            },
            {
               commentId: '10695',
               authorName: 'klient',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2014-11-29T19:49:18.767645'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny na poziomie 74MB/s Dużo za mało jak na oczekiwania wobec ssd. Praca na komputerze z tym dyskiem mimo wszystko odczuwalnie lepsza niż z hdd.\r\nWarto jednak dołożyć parę złotych do czegoś wydajniejszego.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_22_2_849_05.jpg',},
               ],
            },
            {
               commentId: '11267',
               authorName: 'JJ',
               isRegisteredAuthor: false,
               isAdminAuthor: false,
               createTime: new Date('2015-01-01T22:30:33.256293'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'No więc... kupiłem go bo był tani. I jak na razie stwierdzam że to był błąd. Producent zapewnia o przesyle danym z prędkością 480mbs i 175mb/s. Po testach w programach wyszło 390mbs oraz 63mbs (!?).\r\nTrochę słabo. Po za tym widać podczas pracy że nie jest to super szybki dysk. Szczerze, to nie polecam.',
               childComments: null,
               votes: null,
               rating: 2,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_45_412_00.jpg',},
               ],
            },
            {
               commentId: '12072',
               authorName: 'nik',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-02-10T21:52:26.484281'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk zakupiłem w sierpniu 2014. Padł w styczniu 2015 po 5 miesiącach. Zawiodłem się na firmie GOODRAM vel WILK. Wierzyłem,że firma polska ma produkt porównywalny ze światowymi producentami. Never more. Bye BEDRAM',
               childComments: null,
               votes: null,
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,asus-rog-strix-gl702zc-ryzen-78gb240pcie1tbwin10-378114,2017/8/pr_2017_8_1_10_21_52_256_02.jpg',},
               ],
            },
            {
               commentId: '15278',
               authorName: 'Jake',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2015-08-26T10:48:52.18171'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Polecam ;) Komputer przyspieszył, nie jest to jakaś zawrotna prędkość, ale widać znaczącą różnicę. ',
               childComments: null,
               votes: {
                  votesUp: 4,
                  votesDown: 7,
               },
               rating: 1,
               photos: [
                  {url: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,microsoft-xbox-one-x-1tb-379198,2017/9/pr_2017_9_20_14_42_44_455_00.jpg',},
               ],
            },
            {
               commentId: '21191',
               authorName: 'Marcin',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-02-04T18:24:06.790811'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Dysk padł po 2 miesiącach. Niestety to mój ostatni dysk ssd tej firmy.',
               childComments: null,
               votes: {
                  votesUp: 10,
                  votesDown: 7,
               },
               rating: 1,
               photos: null,
            },
            {
               commentId: '22716',
               authorName: 'Bagro 41',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T09:47:51.963319'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Zapis sekwencyjny 41 MB/s odczyt 330 MB/s ,ssd podłączony pod  SATA III.',
               childComments: null,
               votes: null,
               rating: 3,
               photos: null,
            },
            {
               commentId: '22732',
               authorName: 'Andrzej',
               isRegisteredAuthor: true,
               isAdminAuthor: false,
               createTime: new Date('2016-03-12T16:14:06.718513'),
               isEditable: false,
               isVoteAllowed: false,
               body: 'Mam ten model od ponad roku. Dodał sporego kopa, komp szybciej chodzi, cena bardzo dobra. Do tego cisza i duzy komfort pracy i na tym mi zależało. Dziwi mnie ilość \'padnietych\' dyskow. Moj z dobrego zródła, działa idealnie od 2014r. Polecam',
               childComments: null,
               votes: null,
               rating: 6,
               photos: null,
            },
         ],
      },
   ],
   categoryFilters: [
      {
         id: '159',
         featureSummarySplitted: [
            {
               ValueGroups: [
                  {
                     ProductCount: 1123,
                     Values: [
                        {
                           ProductCount: 1123,
                           Id: '87796',
                           ShortName: '24 miesiące',
                           FullName: '24 miesiące (gwarancja x-kom sp. z o.o.)',
                        },
                     ],
                     Id: '87762',
                     FullName: '24 miesiące',
                     ShortName: null,
                  },
                  {
                     ProductCount: 304,
                     Values: [
                        {
                           ProductCount: 265,
                           Id: '61927',
                           ShortName: '36 miesięcy',
                           FullName: '36 miesięcy (gwarancja producenta)',
                        },
                        {
                           ProductCount: 39,
                           Id: '87797',
                           ShortName: '36 miesięcy',
                           FullName: '36 miesięcy (gwarancja x-kom sp. z o.o.)',
                        },
                     ],
                     Id: '61343',
                     FullName: '36 miesięcy',
                     ShortName: null,
                  },
                  {
                     ProductCount: 127,
                     Values: [
                        {
                           ProductCount: 126,
                           Id: '61918',
                           ShortName: '12 miesięcy',
                           FullName: '12 miesięcy (gwarancja producenta)',
                        },
                        {
                           ProductCount: 1,
                           Id: '61919',
                           ShortName: '12 miesięcy',
                           FullName: '12 miesięcy (gwarancja sprzedawcy)',
                        },
                     ],
                     Id: '61336',
                     FullName: '12 miesięcy',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '87847',
                           ShortName: 'dożywotnia',
                           FullName: 'dożywotnia (gwarancja producenta)',
                        },
                        {
                           ProductCount: 2,
                           Id: '87849',
                           ShortName: 'dożywotnia',
                           FullName: 'dożywotnia (gwarancja x-kom sp. z o.o.)',
                        },
                     ],
                     Id: '87846',
                     FullName: 'dożywotnia',
                     ShortName: null,
                  },
               ],
               Id: '4039',
               FullName: 'Gwarancja',
               ShortName: null,
               FilterName: 'Gwarancja',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: null,
               Id: '35',
               FullName: 'Przekątna ekranu',
               ShortName: 'Przekątna',
               FilterName: 'Przekątna ekranu',
               Type: 'Range',
               Range: {
                  MinValue: 11.6,
                  MaxValue: 17.3,
               },
               UnitName: '"',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 42,
                     Values: [
                        {
                           ProductCount: 20,
                           Id: '4595',
                           ShortName: null,
                           FullName: 'Intel HD Graphics 4400',
                        },
                        {
                           ProductCount: 6,
                           Id: '443',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GT 630M',
                        },
                        {
                           ProductCount: 5,
                           Id: '3126',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GT 740M',
                        },
                        {
                           ProductCount: 3,
                           Id: '445',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GT 640M',
                        },
                        {
                           ProductCount: 3,
                           Id: '24395',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce 820M',
                        },
                        {
                           ProductCount: 2,
                           Id: '434',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GT 540M',
                        },
                        {
                           ProductCount: 2,
                           Id: '34161',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GTX 965M',
                        },
                        {
                           ProductCount: 1,
                           Id: '444',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GT 635M',
                        },
                     ],
                     Id: '48824',
                     FullName: 'Dedykowana',
                     ShortName: null,
                  },
                  {
                     ProductCount: 32,
                     Values: [
                        {
                           ProductCount: 11,
                           Id: '564',
                           ShortName: null,
                           FullName: '+ Intel HD Graphics 3000',
                        },
                        {
                           ProductCount: 10,
                           Id: '4594',
                           ShortName: null,
                           FullName: '+ Intel HD Graphics 4400',
                        },
                        {
                           ProductCount: 9,
                           Id: '57714',
                           ShortName: null,
                           FullName: '+ Intel HD Graphics 530',
                        },
                        {
                           ProductCount: 2,
                           Id: '565',
                           ShortName: null,
                           FullName: '+ Intel HD Graphics 4000',
                        },
                     ],
                     Id: '2800',
                     FullName: 'Układy hybrydowe',
                     ShortName: null,
                  },
                  {
                     ProductCount: 20,
                     Values: [
                        {
                           ProductCount: 16,
                           Id: '544',
                           ShortName: null,
                           FullName: 'Intel HD Graphics 4000',
                        },
                        {
                           ProductCount: 2,
                           Id: '30901',
                           ShortName: null,
                           FullName: 'Intel HD Graphics 5500',
                        },
                        {
                           ProductCount: 1,
                           Id: '58410',
                           ShortName: null,
                           FullName: 'AMD Radeon R5 series',
                        },
                        {
                           ProductCount: 1,
                           Id: '37679',
                           ShortName: null,
                           FullName: 'AMD Radeon R6 series',
                        },
                     ],
                     Id: '72345',
                     FullName: 'Dedykowana NVIDIA Quadro',
                     ShortName: null,
                  },
                  {
                     ProductCount: 14,
                     Values: [
                        {
                           ProductCount: 7,
                           Id: '37989',
                           ShortName: null,
                           FullName: 'NVIDIA GeForce GTX 960M',
                        },
                        {
                           ProductCount: 7,
                           Id: '542',
                           ShortName: null,
                           FullName: 'Intel HD Graphics',
                        },
                     ],
                     Id: '539',
                     FullName: 'Zintegrowana',
                     ShortName: null,
                  },
                  {
                     ProductCount: 9,
                     Values: [
                        {
                           ProductCount: 5,
                           Id: '25203',
                           ShortName: null,
                           FullName: 'AMD Radeon R7 M260',
                        },
                        {
                           ProductCount: 3,
                           Id: '21337',
                           ShortName: null,
                           FullName: 'AMD Radeon R7 M265',
                        },
                        {
                           ProductCount: 1,
                           Id: '533',
                           ShortName: null,
                           FullName: 'AMD Radeon HD 7340',
                        },
                     ],
                     Id: '72342',
                     FullName: 'Dedykowana AMD Radeon',
                     ShortName: null,
                  },
               ],
               Id: '37',
               FullName: 'Karta graficzna',
               ShortName: 'Grafika',
               FilterName: 'Karta graficzna',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 16,
                     Values: [
                        {
                           ProductCount: 16,
                           Id: '22301',
                           ShortName: null,
                           FullName: 'Wi-Fi 802.11 b/g/n/ac',
                        },
                     ],
                     Id: '70119',
                     FullName: 'LAN',
                     ShortName: null,
                  },
                  {
                     ProductCount: 80,
                     Values: [
                        {
                           ProductCount: 60,
                           Id: '569',
                           ShortName: null,
                           FullName: 'LAN 10/100/1000 Mbps',
                        },
                        {
                           ProductCount: 16,
                           Id: '570',
                           ShortName: 'Intel Wireless Display',
                           FullName: 'Intel Wireless Display (WiDi)',
                        },
                        {
                           ProductCount: 64,
                           Id: '566',
                           ShortName: null,
                           FullName: 'Wi-Fi 802.11 b/g/n',
                        },
                        {
                           ProductCount: 18,
                           Id: '568',
                           ShortName: null,
                           FullName: 'LAN 10/100 Mbps',
                        },
                     ],
                     Id: '70117',
                     FullName: 'Wi-Fi',
                     ShortName: null,
                  },
                  {
                     ProductCount: 77,
                     Values: [
                        {
                           ProductCount: 77,
                           Id: '572',
                           ShortName: null,
                           FullName: 'Bluetooth2',
                        },
                     ],
                     Id: '70120',
                     FullName: 'Bluetooth',
                     ShortName: null,
                  },
               ],
               Id: '42',
               FullName: 'Łączność',
               ShortName: null,
               FilterName: 'Łączność',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 28,
                     Values: [
                        {
                           ProductCount: 24,
                           Id: '127',
                           ShortName: '4 GB',
                           FullName: '4 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 3,
                           Id: '60923',
                           ShortName: '4 GB',
                           FullName: '4 GB (SO-DIMM DDR4, 2133MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '118',
                           ShortName: '4 GB',
                           FullName: '4 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                     ],
                     Id: '115',
                     FullName: 'Pamięci 1333 MHz',
                     ShortName: null,
                  },
                  {
                     ProductCount: 28,
                     Values: [
                        {
                           ProductCount: 22,
                           Id: '129',
                           ShortName: '8 GB',
                           FullName: '8 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 4,
                           Id: '128',
                           ShortName: '6 GB',
                           FullName: '6 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '119',
                           ShortName: '6 GB',
                           FullName: '6 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '1478',
                           ShortName: '5 GB',
                           FullName: '5 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                     ],
                     Id: '68581',
                     FullName: '5 <-> 8',
                     ShortName: null,
                  },
                  {
                     ProductCount: 10,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '131',
                           ShortName: '16 GB',
                           FullName: '16 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 3,
                           Id: '64099',
                           ShortName: '64 GB',
                           FullName: '64 GB (SO-DIMM DDR4, 2133MHz)',
                        },
                        {
                           ProductCount: 2,
                           Id: '57737',
                           ShortName: '16 GB',
                           FullName: '16 GB (SO-DIMM DDR4, 2133MHz)',
                        },
                        {
                           ProductCount: 2,
                           Id: '60547',
                           ShortName: '32 GB',
                           FullName: '32 GB (SO-DIMM DDR4, 2133MHz)',
                        },
                     ],
                     Id: '57731',
                     FullName: 'Pamięci 2133 MHz',
                     ShortName: null,
                  },
                  {
                     ProductCount: 7,
                     Values: [
                        {
                           ProductCount: 4,
                           Id: '121',
                           ShortName: '12 GB',
                           FullName: '12 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                        {
                           ProductCount: 2,
                           Id: '130',
                           ShortName: '12 GB',
                           FullName: '12 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '1239',
                           ShortName: '10 GB',
                           FullName: '10 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                     ],
                     Id: '68580',
                     FullName: '9 <-> 12',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '125',
                           ShortName: '2 GB',
                           FullName: '2 GB (SO-DIMM DDR3, 1600 MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '108',
                           ShortName: '1000 MB',
                           FullName: '1000 MB (SO-DIMM DDR3, 1066 MHz)',
                        },
                        {
                           ProductCount: 1,
                           Id: '116',
                           ShortName: '2 GB',
                           FullName: '2 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                     ],
                     Id: '68582',
                     FullName: '1 - 4',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: [
                        {
                           ProductCount: 4,
                           Id: '122',
                           ShortName: '16 GB',
                           FullName: '16 GB (SO-DIMM DDR3, 1333 MHz)',
                        },
                     ],
                     Id: '68821',
                     FullName: '99-99',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '57730',
                           ShortName: '8 GB',
                           FullName: '8 GB (SO-DIMM DDR4, 2133MHz)',
                        },
                     ],
                     Id: '123',
                     FullName: 'Pamięci 1600 MHz',
                     ShortName: null,
                  },
               ],
               Id: '58',
               FullName: 'Pamięć RAM',
               ShortName: 'Pamięć',
               FilterName: 'Pamięć RAM',
               Type: 'RangeList',
               Range: {
                  MinValue: 0.977,
                  MaxValue: 64,
               },
               UnitName: 'GB',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 32,
                     Values: [
                        {
                           ProductCount: 17,
                           Id: '13466',
                           ShortName: 'Intel Core i3-4005U',
                           FullName: 'Intel Core i3-4005U (2 rdzenie, 1.70 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 6,
                           Id: '2535',
                           ShortName: 'Intel Core i3-3120M',
                           FullName: 'Intel Core i3-3120M (2 rdzenie, 2.50 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 4,
                           Id: '24865',
                           ShortName: 'Intel Core i5-4210U',
                           FullName: 'Intel Core i5-4210U (2 rdzenie, od 1.7 GHz do 2.7 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 3,
                           Id: '26747',
                           ShortName: 'Intel Core i7-4510U',
                           FullName: 'Intel Core i7-4510U (2 rdzenie, od 2.00 GHz do 3.10 GHz, 4 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '13288',
                           ShortName: 'Intel Core i7-4850HQ',
                           FullName: 'Intel Core i7-4850HQ (4 rdzenie, od 2.30 GHz do 3.50 GHz, 6 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '24890',
                           ShortName: 'Intel Core i7-4600U',
                           FullName: 'Intel Core i7-4600U (2 rdzenie, od 2.10 GHz do 3.30 GHz, 4 MB cache)',
                        },
                     ],
                     Id: '277',
                     FullName: 'Intel Core i7',
                     ShortName: null,
                  },
                  {
                     ProductCount: 24,
                     Values: [
                        {
                           ProductCount: 9,
                           Id: '995',
                           ShortName: 'Intel Core i5-3317U',
                           FullName: 'Intel Core i5-3317U (2 rdzenie, od 1.70 GHz do 2.60 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 6,
                           Id: '57708',
                           ShortName: 'Intel Core i5-6300HQ',
                           FullName: 'Intel Core i5-6300HQ (4 rdzenie, od 2.3 GHz do 3.2 GHz, 6MB cache)',
                        },
                        {
                           ProductCount: 4,
                           Id: '268',
                           ShortName: 'Intel Core i5-2450M',
                           FullName: 'Intel Core i5-2450M (2 rdzenie, od 2.50 GHz do 3.10 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 3,
                           Id: '284',
                           ShortName: 'Intel Core i5-2467M',
                           FullName: 'Intel Core i5-2467M (2 rdzenie, od 1.60 GHz do 2.30 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 2,
                           Id: '57742',
                           ShortName: 'Intel Core i7-6700HQ',
                           FullName: 'Intel Core i7-6700HQ (4 rdzenie, od 2.60 GHz do 3.50 GHz, 6 MB cache)',
                        },
                     ],
                     Id: '262',
                     FullName: 'Intel Core i5',
                     ShortName: null,
                  },
                  {
                     ProductCount: 15,
                     Values: [
                        {
                           ProductCount: 6,
                           Id: '24864',
                           ShortName: 'Intel Core i3-4030U',
                           FullName: 'Intel Core i3-4030U (2 rdzenie, 1.90 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 4,
                           Id: '265',
                           ShortName: 'Intel Core i3-2350M',
                           FullName: 'Intel Core i3-2350M (2 rdzenie, 2.30 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 2,
                           Id: '1901',
                           ShortName: 'Intel Core i3-3110M',
                           FullName: 'Intel Core i3-3110M (2 rdzenie, 2.40 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 2,
                           Id: '30989',
                           ShortName: 'Intel Core i3-5005U',
                           FullName: 'Intel Core i3-5005U (2 rdzenie, 2.00 GHz, 3 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '2138',
                           ShortName: 'Intel Core i3-3217U',
                           FullName: 'Intel Core i3-3217U (2 rdzenie, 1.80 GHz, 3 MB cache)',
                        },
                     ],
                     Id: '257',
                     FullName: 'Intel Core i3',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '53151',
                           ShortName: 'Intel Celeron N3050',
                           FullName: 'Intel Celeron N3050 (2 rdzenie, od 1.60 GHz do 2.16 GHz, 2 MB cache)',
                        },
                        {
                           ProductCount: 2,
                           Id: '43083',
                           ShortName: 'Intel Celeron N3150',
                           FullName: 'Intel Celeron N3150 (4 rdzenie, od 1.60 GHz do 2.08 GHz, 2 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '1499',
                           ShortName: 'Intel Celeron B820',
                           FullName: 'Intel Celeron B820 (2 rdzenie, 1.70 GHz, 2 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '26068',
                           ShortName: 'Intel Celeron N2830',
                           FullName: 'Intel Celeron N2830 (2 rdzenie, od 2.16 GHz do 2.41 GHz, 1 MB cache)',
                        },
                     ],
                     Id: '243',
                     FullName: 'Intel Celeron B815 (2 rdzenie, 1.60 GHz, 2 MB cache)',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '67224',
                           ShortName: 'AMD A8-7150B',
                           FullName: 'AMD A8-7150B (4 rdzenie, od 1.90 GHz do 3.20 GHz, 4 MB cache)',
                        },
                        {
                           ProductCount: 1,
                           Id: '37673',
                           ShortName: 'AMD Pro A10-7350B',
                           FullName: 'AMD Pro A10-7350B (4 rdzenie, 2,1 GHz, 4 MB cache)',
                        },
                     ],
                     Id: '321',
                     FullName: 'AMD seria A',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '53660',
                           ShortName: 'Intel Pentium N3700',
                           FullName: 'Intel Pentium N3700 (4 rdzenie, 1.60 GHz, 2 MB cache)',
                        },
                     ],
                     Id: '245',
                     FullName: 'Intel Pentium',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '2679',
                           ShortName: 'AMD E2-2000',
                           FullName: 'AMD E2-2000 (2 rdzenie, 1.75 GHz, 1 MB cache)',
                        },
                     ],
                     Id: '282',
                     FullName: 'AMD seria E',
                     ShortName: null,
                  },
               ],
               Id: '22',
               FullName: 'Procesor',
               ShortName: 'Procesor',
               FilterName: 'Procesor',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 43,
                     Values: null,
                     Id: '84',
                     FullName: '1.0 Mpix',
                     ShortName: null,
                  },
                  {
                     ProductCount: 15,
                     Values: null,
                     Id: '85',
                     FullName: '1.3 Mpix',
                     ShortName: null,
                  },
                  {
                     ProductCount: 22,
                     Values: null,
                     Id: '52',
                     FullName: '0.3 Mpix',
                     ShortName: null,
                  },
               ],
               Id: '59',
               FullName: 'Kamera internetowa',
               ShortName: null,
               FilterName: 'Kamera internetowa',
               Type: 'List',
               Range: null,
               UnitName: 'Mpix',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 80,
                     Values: null,
                     Id: '918',
                     FullName: 'Wielodotykowy, intuicyjny touchpad',
                     ShortName: null,
                  },
                  {
                     ProductCount: 72,
                     Values: null,
                     Id: '888',
                     FullName: 'Wydzielona klawiatura numeryczna',
                     ShortName: null,
                  },
                  {
                     ProductCount: 68,
                     Values: null,
                     Id: '923',
                     FullName: 'Możliwość zabezpieczenia linką (port Kensington Lock)',
                     ShortName: null,
                  },
                  {
                     ProductCount: 16,
                     Values: null,
                     Id: '2349',
                     FullName: '12 miesięcy ograniczonej gwarancji dla firm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 15,
                     Values: null,
                     Id: '900',
                     FullName: 'Aluminiowa obudowa',
                     ShortName: null,
                  },
                  {
                     ProductCount: 11,
                     Values: null,
                     Id: '892',
                     FullName: 'Podświetlana klawiatura',
                     ShortName: null,
                  },
                  {
                     ProductCount: 7,
                     Values: null,
                     Id: '39912',
                     FullName: '36 miesięcy gwarancji Onsite na laptop',
                     ShortName: null,
                  },
                  {
                     ProductCount: 7,
                     Values: null,
                     Id: '39913',
                     FullName: '24 miesiące gwarancji na baterię',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: null,
                     Id: '879',
                     FullName: 'Wbudowany czytnik linii papilarnych',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '1096',
                     FullName: 'Gwarancja Domowa Naprawa Dell',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '67104',
                     FullName: 'Gwarancja liczona od daty sprzedaży komputera',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '17075',
                     FullName: '12 miesięcy gwarancji',
                     ShortName: null,
                  },
               ],
               Id: '51',
               FullName: 'Dodatkowe informacje',
               ShortName: null,
               FilterName: 'Dodatkowe informacje',
               Type: 'List',
               Range: null,
               UnitName: 'm',
            },
            {
               ValueGroups: null,
               Id: '61',
               FullName: 'Szerokość',
               ShortName: null,
               FilterName: 'Szerokość',
               Type: 'Range',
               Range: {
                  MinValue: 291,
                  MaxValue: 415,
               },
               UnitName: 'mm',
            },
            {
               ValueGroups: null,
               Id: '49',
               FullName: 'Waga',
               ShortName: null,
               FilterName: 'Waga',
               Type: 'Range',
               Range: {
                  MinValue: 1.16,
                  MaxValue: 3,
               },
               UnitName: 'kg',
            },
            {
               ValueGroups: null,
               Id: '62',
               FullName: 'Głębokość',
               ShortName: null,
               FilterName: 'Głębokość',
               Type: 'Range',
               Range: {
                  MinValue: 196.5,
                  MaxValue: 268,
               },
               UnitName: 'mm',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 10,
                     Values: [
                        {
                           ProductCount: 10,
                           Id: '734',
                           ShortName: 'Microsoft Windows 7 Home Premium PL',
                           FullName: 'Microsoft Windows 7 Home Premium PL (wersja 64-bitowa)',
                        },
                     ],
                     Id: '2019',
                     FullName: 'Windows 7',
                     ShortName: null,
                  },
                  {
                     ProductCount: 14,
                     Values: [
                        {
                           ProductCount: 4,
                           Id: '736',
                           ShortName: 'Microsoft Windows 7 Professional PL',
                           FullName: 'Microsoft Windows 7 Professional PL (wersja 64-bitowa)',
                        },
                        {
                           ProductCount: 7,
                           Id: '2993',
                           ShortName: null,
                           FullName: 'Microsoft Windows 7 Professional PL + Windows 8 PRO PL',
                        },
                        {
                           ProductCount: 3,
                           Id: '19452',
                           ShortName: null,
                           FullName: 'Microsoft Windows 7 Professional PL + Windows 8.1 PRO PL',
                        },
                     ],
                     Id: '87743',
                     FullName: 'Windows 95',
                     ShortName: null,
                  },
                  {
                     ProductCount: 22,
                     Values: [
                        {
                           ProductCount: 18,
                           Id: '2018',
                           ShortName: 'Microsoft Windows 8 PL',
                           FullName: 'Microsoft Windows 8 PL (wersja 64-bitowa)',
                        },
                        {
                           ProductCount: 4,
                           Id: '11936',
                           ShortName: 'Microsoft Windows 8.1 PL',
                           FullName: 'Microsoft Windows 8.1 PL (wersja 64-bitowa)',
                        },
                     ],
                     Id: '2020',
                     FullName: 'Windows 8',
                     ShortName: null,
                  },
                  {
                     ProductCount: 14,
                     Values: [
                        {
                           ProductCount: 13,
                           Id: '51085',
                           ShortName: 'Microsoft Windows 10 Home PL',
                           FullName: 'Microsoft Windows 10 Home PL (wersja 64-bitowa)',
                        },
                        {
                           ProductCount: 1,
                           Id: '53763',
                           ShortName: 'Microsoft Windows 10 Pro PL',
                           FullName: 'Microsoft Windows 10 Pro PL (wersja 64-bitowa)',
                        },
                     ],
                     Id: '51084',
                     FullName: 'Windows 10',
                     ShortName: null,
                  },
                  {
                     ProductCount: 20,
                     Values: [
                        {
                           ProductCount: 20,
                           Id: '993',
                           ShortName: null,
                           FullName: 'Brak systemu',
                        },
                     ],
                     Id: '61312',
                     FullName: 'Mac OS X',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '741',
                           ShortName: null,
                           FullName: 'Linux',
                        },
                     ],
                     Id: '2021',
                     FullName: 'Inne',
                     ShortName: null,
                  },
               ],
               Id: '44',
               FullName: 'Zainstalowany system operacyjny',
               ShortName: '',
               FilterName: 'Zainstalowany system operacyjny',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 26,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '32531',
                           ShortName: null,
                           FullName: '32 GB SSD eMMC',
                        },
                        {
                           ProductCount: 7,
                           Id: '2448',
                           ShortName: null,
                           FullName: '120 GB SSD SATA III',
                        },
                        {
                           ProductCount: 5,
                           Id: '192',
                           ShortName: null,
                           FullName: '128 GB SSD SATA III',
                        },
                        {
                           ProductCount: 11,
                           Id: '2639',
                           ShortName: null,
                           FullName: '240 GB SSD SATA III',
                        },
                        {
                           ProductCount: 1,
                           Id: '193',
                           ShortName: null,
                           FullName: '256 GB SSD SATA III',
                        },
                     ],
                     Id: '2404',
                     FullName: 'Dysk SSD',
                     ShortName: null,
                  },
                  {
                     ProductCount: 10,
                     Values: [
                        {
                           ProductCount: 10,
                           Id: '2059',
                           ShortName: null,
                           FullName: '24 GB SSD mSATA',
                        },
                     ],
                     Id: '72376',
                     FullName: 'Dyski SSD mSATA',
                     ShortName: null,
                  },
                  {
                     ProductCount: 5,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '20880',
                           ShortName: null,
                           FullName: '128 GB SSD M.2',
                        },
                        {
                           ProductCount: 4,
                           Id: '27611',
                           ShortName: null,
                           FullName: '256 GB SSD M.2',
                        },
                     ],
                     Id: '72377',
                     FullName: 'Dyski SSD M.2',
                     ShortName: null,
                  },
                  {
                     ProductCount: 48,
                     Values: [
                        {
                           ProductCount: 26,
                           Id: '166',
                           ShortName: null,
                           FullName: '500 GB SATA 5400 obr.',
                        },
                        {
                           ProductCount: 11,
                           Id: '168',
                           ShortName: null,
                           FullName: '750 GB SATA 5400 obr.',
                        },
                        {
                           ProductCount: 11,
                           Id: '169',
                           ShortName: null,
                           FullName: '1000 GB SATA 5400 obr.',
                        },
                     ],
                     Id: '1140',
                     FullName: 'Dysk HDD 5400 obr.',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: [
                        {
                           ProductCount: 4,
                           Id: '172',
                           ShortName: null,
                           FullName: '500 GB SATA 7200 obr.',
                        },
                        {
                           ProductCount: 2,
                           Id: '175',
                           ShortName: null,
                           FullName: '1000 GB SATA 7200 obr.',
                        },
                     ],
                     Id: '72379',
                     FullName: 'Dyski SSD eMMC',
                     ShortName: null,
                  },
                  {
                     ProductCount: 11,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '206',
                           ShortName: '500 GB SATA 5400 obr.',
                           FullName: '500 GB SATA 5400 obr. (zewnętrzny, w obudowie)',
                        },
                        {
                           ProductCount: 2,
                           Id: '212',
                           ShortName: '500 GB SATA 7200 obr.',
                           FullName: '500 GB SATA 7200 obr. (zewnętrzny, w obudowie)',
                        },
                        {
                           ProductCount: 7,
                           Id: '209',
                           ShortName: '1000 GB SATA 5400 obr.',
                           FullName: '1000 GB SATA 5400 obr. (zewnętrzny, w obudowie)',
                        },
                     ],
                     Id: '204',
                     FullName: 'Dysk zewnętrzny',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '1737',
                           ShortName: null,
                           FullName: 'Express Cache 20 GB',
                        },
                     ],
                     Id: '200',
                     FullName: 'Express Cache',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: [
                        {
                           ProductCount: 4,
                           Id: '17494',
                           ShortName: 'Możliwość montażu dodatkowego dysku M.2',
                           FullName: 'Możliwość montażu dodatkowego dysku M.2 (brak elementów montażowych)',
                        },
                     ],
                     Id: '1223',
                     FullName: 'Miejsce na drugi wewnętrzny dysk',
                     ShortName: null,
                  },
               ],
               Id: '32',
               FullName: 'Dysk twardy',
               ShortName: 'Dysk',
               FilterName: 'Dysk twardy',
               Type: 'List',
               Range: null,
               UnitName: 'GB',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 71,
                     Values: null,
                     Id: '417',
                     FullName: '1366 x 768 (HD)',
                     ShortName: null,
                  },
                  {
                     ProductCount: 5,
                     Values: null,
                     Id: '420',
                     FullName: '1920 x 1080 (FullHD)',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: null,
                     Id: '418',
                     FullName: '1600 x 900 (HD+)',
                     ShortName: null,
                  },
               ],
               Id: '36',
               FullName: 'Nominalna rozdzielczość',
               ShortName: null,
               FilterName: 'Nominalna rozdzielczość',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 42,
                     Values: null,
                     Id: '91',
                     FullName: '16 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 21,
                     Values: null,
                     Id: '90',
                     FullName: '8 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 9,
                     Values: null,
                     Id: '138',
                     FullName: '32 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '1830',
                     FullName: '10 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '136',
                     FullName: '2 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: null,
                     Id: '58533',
                     FullName: '64 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: null,
                     Id: '1390',
                     FullName: '12 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: null,
                     Id: '137',
                     FullName: '4 GB',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: null,
                     Id: '2401',
                     FullName: '1 GB',
                     ShortName: null,
                  },
               ],
               Id: '64',
               FullName: 'Maksymalna obsługiwana ilość pamięci RAM',
               ShortName: null,
               FilterName: 'Maksymalna obsługiwana ilość pamięci RAM',
               Type: 'List',
               Range: null,
               UnitName: 'GB',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 66,
                     Values: null,
                     Id: '30',
                     FullName: 'Nagrywarka DVD+/-RW DualLayer',
                     ShortName: null,
                  },
                  {
                     ProductCount: 14,
                     Values: null,
                     Id: '994',
                     FullName: 'Brak',
                     ShortName: null,
                  },
               ],
               Id: '33',
               FullName: 'Wbudowane napędy optyczne',
               ShortName: null,
               FilterName: 'Wbudowane napędy optyczne',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 44,
                     Values: [
                        {
                           ProductCount: 44,
                           Id: '579',
                           ShortName: null,
                           FullName: 'Pamięć współdzielona',
                        },
                     ],
                     Id: '2394',
                     FullName: 'Współdzielona',
                     ShortName: null,
                  },
                  {
                     ProductCount: 27,
                     Values: [
                        {
                           ProductCount: 16,
                           Id: '585',
                           ShortName: '2048 MB GDDR3',
                           FullName: '2048 MB GDDR3 (pamięć własna)',
                        },
                        {
                           ProductCount: 11,
                           Id: '583',
                           ShortName: '1024 MB GDDR3',
                           FullName: '1024 MB GDDR3 (pamięć własna)',
                        },
                     ],
                     Id: '580',
                     FullName: 'GDDR3',
                     ShortName: null,
                  },
                  {
                     ProductCount: 9,
                     Values: [
                        {
                           ProductCount: 9,
                           Id: '597',
                           ShortName: '2048 MB GDDR5',
                           FullName: '2048 MB GDDR5 (pamięć własna)',
                        },
                     ],
                     Id: '592',
                     FullName: 'GDDR5',
                     ShortName: null,
                  },
               ],
               Id: '67',
               FullName: 'Wielkość pamięci karty graficznej',
               ShortName: null,
               FilterName: 'Wielkość pamięci karty graficznej',
               Type: 'List',
               Range: null,
               UnitName: 'MB',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 80,
                     Values: [
                        {
                           ProductCount: 50,
                           Id: '651',
                           ShortName: null,
                           FullName: 'Wyjście słuchawkowe/wejście mikrofonowe - 1 szt.',
                        },
                        {
                           ProductCount: 30,
                           Id: '646',
                           ShortName: null,
                           FullName: 'Wejście mikrofonowe - 1 szt.',
                        },
                        {
                           ProductCount: 19,
                           Id: '647',
                           ShortName: null,
                           FullName: 'Wyjście słuchawkowe/głośnikowe - 1 szt.',
                        },
                        {
                           ProductCount: 9,
                           Id: '18932',
                           ShortName: null,
                           FullName: 'Wyjście słuchawkowe - 1 szt.',
                        },
                        {
                           ProductCount: 2,
                           Id: '649',
                           ShortName: 'Wyjście słuchawkowe/głośnikowe',
                           FullName: 'Wyjście słuchawkowe/głośnikowe (S/PDIF) - 1 szt.',
                        },
                     ],
                     Id: '645',
                     FullName: 'Audio',
                     ShortName: null,
                  },
                  {
                     ProductCount: 80,
                     Values: [
                        {
                           ProductCount: 80,
                           Id: '606',
                           ShortName: 'DC-in',
                           FullName: 'DC-in (wejście zasilania) - 1 szt.',
                        },
                     ],
                     Id: '604',
                     FullName: 'Zasilające',
                     ShortName: null,
                  },
                  {
                     ProductCount: 79,
                     Values: [
                        {
                           ProductCount: 79,
                           Id: '2348',
                           ShortName: null,
                           FullName: 'Czytnik kart pamięci - 1 szt.',
                        },
                     ],
                     Id: '63777',
                     FullName: 'Czytnik kart pamięci',
                     ShortName: null,
                  },
                  {
                     ProductCount: 78,
                     Values: [
                        {
                           ProductCount: 46,
                           Id: '632',
                           ShortName: null,
                           FullName: 'USB 3.0 - 1 szt.',
                        },
                        {
                           ProductCount: 29,
                           Id: '633',
                           ShortName: null,
                           FullName: 'USB 3.0 - 2 szt.',
                        },
                        {
                           ProductCount: 2,
                           Id: '634',
                           ShortName: null,
                           FullName: 'USB 3.0 - 3 szt.',
                        },
                        {
                           ProductCount: 1,
                           Id: '635',
                           ShortName: null,
                           FullName: 'USB 3.0 - 4 szt.',
                        },
                     ],
                     Id: '63041',
                     FullName: 'USB 3.0',
                     ShortName: null,
                  },
                  {
                     ProductCount: 77,
                     Values: [
                        {
                           ProductCount: 77,
                           Id: '623',
                           ShortName: 'RJ-45',
                           FullName: 'RJ-45 (LAN) - 1 szt.',
                        },
                     ],
                     Id: '622',
                     FullName: 'LAN',
                     ShortName: null,
                  },
                  {
                     ProductCount: 75,
                     Values: [
                        {
                           ProductCount: 75,
                           Id: '610',
                           ShortName: null,
                           FullName: 'HDMI - 1 szt.',
                        },
                     ],
                     Id: '63039',
                     FullName: 'HDMI',
                     ShortName: null,
                  },
                  {
                     ProductCount: 75,
                     Values: [
                        {
                           ProductCount: 36,
                           Id: '626',
                           ShortName: null,
                           FullName: 'USB 2.0 - 1 szt.',
                        },
                        {
                           ProductCount: 35,
                           Id: '627',
                           ShortName: null,
                           FullName: 'USB 2.0 - 2 szt.',
                        },
                        {
                           ProductCount: 4,
                           Id: '628',
                           ShortName: null,
                           FullName: 'USB 2.0 - 3 szt.',
                        },
                     ],
                     Id: '63042',
                     FullName: 'USB 2.0',
                     ShortName: null,
                  },
                  {
                     ProductCount: 57,
                     Values: [
                        {
                           ProductCount: 57,
                           Id: '608',
                           ShortName: 'VGA',
                           FullName: 'VGA (D-sub) - 1 szt.',
                        },
                     ],
                     Id: '607',
                     FullName: 'VGA',
                     ShortName: null,
                  },
                  {
                     ProductCount: 21,
                     Values: [
                        {
                           ProductCount: 21,
                           Id: '37266',
                           ShortName: null,
                           FullName: 'USB 3.1 Typ C- 1 szt.',
                        },
                     ],
                     Id: '63043',
                     FullName: 'USB 3.1',
                     ShortName: null,
                  },
                  {
                     ProductCount: 5,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '617',
                           ShortName: null,
                           FullName: 'Display Port - 1 szt.',
                        },
                        {
                           ProductCount: 2,
                           Id: '618',
                           ShortName: null,
                           FullName: 'Mini Display Port - 1 szt.',
                        },
                     ],
                     Id: '63040',
                     FullName: 'Display Port',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '667',
                           ShortName: null,
                           FullName: 'Złącze stacji dokującej - 1 szt.',
                        },
                     ],
                     Id: '63779',
                     FullName: 'Złącze stacji dokującej',
                     ShortName: null,
                  },
               ],
               Id: '43',
               FullName: 'Rodzaje wyjść / wejść',
               ShortName: null,
               FilterName: 'Rodzaje wyjść / wejść',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 30,
                     Values: [
                        {
                           ProductCount: 10,
                           Id: '2387',
                           ShortName: null,
                           FullName: '4-komorowa, 2950 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 7,
                           Id: '675',
                           ShortName: null,
                           FullName: '4-komorowa, 2600 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 7,
                           Id: '2384',
                           ShortName: null,
                           FullName: '4-komorowa, 3100 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 2,
                           Id: '2766',
                           ShortName: null,
                           FullName: '4-komorowa, 2700 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 1,
                           Id: '2089',
                           ShortName: null,
                           FullName: '4-komorowa, 2500 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 1,
                           Id: '22317',
                           ShortName: null,
                           FullName: '4-komorowa, 2630 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 1,
                           Id: '27637',
                           ShortName: null,
                           FullName: '4-komorowa, 3220 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 1,
                           Id: '13935',
                           ShortName: null,
                           FullName: '4-komorowa, 3700 mAh, Li-Ion',
                        },
                     ],
                     Id: '674',
                     FullName: '4-komorowa Li-Ion',
                     ShortName: null,
                  },
                  {
                     ProductCount: 19,
                     Values: [
                        {
                           ProductCount: 11,
                           Id: '683',
                           ShortName: null,
                           FullName: '6-komorowa, 4400 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 4,
                           Id: '682',
                           ShortName: null,
                           FullName: '6-komorowa, 4200 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 2,
                           Id: '34275',
                           ShortName: null,
                           FullName: '6-komorowa, 4730 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 2,
                           Id: '1480',
                           ShortName: null,
                           FullName: '6-komorowa, 6600 mAh, Li-Ion',
                        },
                     ],
                     Id: '681',
                     FullName: '6-komorowa Li-Ion',
                     ShortName: null,
                  },
                  {
                     ProductCount: 17,
                     Values: [
                        {
                           ProductCount: 12,
                           Id: '66260',
                           ShortName: null,
                           FullName: '3-komorowa, 3000mAh, Li-Ion',
                        },
                        {
                           ProductCount: 2,
                           Id: '2760',
                           ShortName: null,
                           FullName: '3-komorowa, 3870 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 2,
                           Id: '64378',
                           ShortName: null,
                           FullName: '3-komorowa, 4350 mAh, Li-Ion',
                        },
                        {
                           ProductCount: 1,
                           Id: '29044',
                           ShortName: null,
                           FullName: '3-komorowa, 3220 mAh, Li-Ion',
                        },
                     ],
                     Id: '671',
                     FullName: '3-komorowa Li-Ion',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '2460',
                           ShortName: null,
                           FullName: '3-komorowa, 4850 mAh, Li-Polymer',
                        },
                     ],
                     Id: '2793',
                     FullName: '3-komorowa Li-Polymer',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '68170',
                           ShortName: null,
                           FullName: '2-komorowa, 4400 mAh, Li-Ion',
                        },
                     ],
                     Id: '2438',
                     FullName: '2-komorowa Li-Ion',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: [
                        {
                           ProductCount: 2,
                           Id: '690',
                           ShortName: null,
                           FullName: '6-komorowa, 48 Wh, Li-Ion',
                        },
                     ],
                     Id: '2796',
                     FullName: '8-komorowa Li-Polymer',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: [
                        {
                           ProductCount: 1,
                           Id: '4705',
                           ShortName: null,
                           FullName: '4-komorowa, 3560 mAh, Li-Polymer',
                        },
                     ],
                     Id: '2794',
                     FullName: '4-komorowa Li-Polymer',
                     ShortName: null,
                  },
               ],
               Id: '40',
               FullName: 'Bateria',
               ShortName: null,
               FilterName: 'Bateria',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 66,
                     Values: null,
                     Id: '3061',
                     FullName: '2',
                     ShortName: null,
                  },
                  {
                     ProductCount: 14,
                     Values: null,
                     Id: '3062',
                     FullName: '4',
                     ShortName: null,
                  },
               ],
               Id: '174',
               FullName: 'Liczba rdzeni procesora',
               ShortName: null,
               FilterName: 'Liczba rdzeni procesora',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 61,
                     Values: null,
                     Id: '3064',
                     FullName: 'HDD',
                     ShortName: null,
                  },
                  {
                     ProductCount: 41,
                     Values: null,
                     Id: '3065',
                     FullName: 'SSD',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: null,
                     Id: '3066',
                     FullName: 'Możliwość montażu drugiego dysku twardego',
                     ShortName: null,
                  },
               ],
               Id: '175',
               FullName: 'Typ dysku twardego',
               ShortName: null,
               FilterName: 'Typ dysku twardego',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 12,
                     Values: null,
                     Id: '17783',
                     FullName: '25,4 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 8,
                     Values: null,
                     Id: '2185',
                     FullName: '21,2 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 7,
                     Values: null,
                     Id: '1211',
                     FullName: '33,1 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 7,
                     Values: null,
                     Id: '25317',
                     FullName: 'Od 32,3 do 37,6 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: null,
                     Id: '1208',
                     FullName: '20,7 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: null,
                     Id: '1066',
                     FullName: '34,3 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 6,
                     Values: null,
                     Id: '1456',
                     FullName: '36,0 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: null,
                     Id: '12043',
                     FullName: '21,8 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 4,
                     Values: null,
                     Id: '13863',
                     FullName: 'Od 31,3 do 33,7 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '1092',
                     FullName: '23,2 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '19289',
                     FullName: '25 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: null,
                     Id: '26738',
                     FullName: '30,3 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '1222',
                     FullName: '17,8 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '1320',
                     FullName: '26 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '13864',
                     FullName: '27,4 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '25324',
                     FullName: '34 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 2,
                     Values: null,
                     Id: '1481',
                     FullName: 'Od 25,4 do 31,3 mm',
                     ShortName: null,
                  },
                  {
                     ProductCount: 1,
                     Values: null,
                     Id: '23873',
                     FullName: '28,1 mm',
                     ShortName: null,
                  },
               ],
               Id: '60',
               FullName: 'Wysokość',
               ShortName: null,
               FilterName: 'Wysokość',
               Type: 'List',
               Range: null,
               UnitName: 'mm',
            },
            {
               ValueGroups: [
                  {
                     ProductCount: 41,
                     Values: [
                        {
                           ProductCount: 41,
                           Id: '31',
                           ShortName: null,
                           FullName: 'Błyszczący, LED',
                        },
                     ],
                     Id: '3033',
                     FullName: 'Błyszczący test',
                     ShortName: null,
                  },
                  {
                     ProductCount: 36,
                     Values: [
                        {
                           ProductCount: 27,
                           Id: '383',
                           ShortName: null,
                           FullName: 'Matowy, LED',
                        },
                        {
                           ProductCount: 7,
                           Id: '23353',
                           ShortName: null,
                           FullName: 'Matowy, LED, EWV',
                        },
                        {
                           ProductCount: 2,
                           Id: '2672',
                           ShortName: null,
                           FullName: 'Matowy, LED, IPS',
                        },
                     ],
                     Id: '3034',
                     FullName: 'Matowy test',
                     ShortName: null,
                  },
                  {
                     ProductCount: 3,
                     Values: [
                        {
                           ProductCount: 3,
                           Id: '2270',
                           ShortName: null,
                           FullName: 'Błyszczący, LED, dotykowy',
                        },
                     ],
                     Id: '22316',
                     FullName: 'Dotykowy',
                     ShortName: null,
                  },
               ],
               Id: '34',
               FullName: 'Typ ekranu',
               ShortName: 'Cali',
               FilterName: 'Typ ekranu',
               Type: 'List',
               Range: null,
               UnitName: null,
            },
         ],
      },
   ],

   service: [
      { id: '1234561', status: { status: 'W trakcie realizacji' } },
      { id: '1234562', status: { status: 'Zakończono' } },
      { id: '1234563', status: { status: 'Oczekuje' } },
      { id: '1234564', status: { status: 'W trakcie realizacji' } },
   ],
   postalCodes: ['11-111'],
   candidates: [],
});
