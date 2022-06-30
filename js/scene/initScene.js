let imageLinks;

imageLinks = [
    "https://cdna.artstation.com/p/assets/images/images/044/171/314/large/valentina-bog-b29b29b6-f504-4a76-918f-6b053c409ae2.jpg?1639299601",
    "https://cdnb.artstation.com/p/assets/images/images/044/101/311/large/valentina-bog-065a3155-9be7-4e88-b0a3-96edba93b5c8.jpg?1639080157",
    "https://cdna.artstation.com/p/assets/images/images/016/827/728/large/valentina-bog-8ea9c0b1-0165-4965-9cbc-63f754d227b6.jpg?1553624745",
    "https://cdnb.artstation.com/p/assets/images/images/042/535/527/large/valentina-bog-45ca5a1c-273d-4bd9-92bc-eb88ec4f2574.jpg?1634759952",
    "https://cdna.artstation.com/p/assets/images/images/042/535/402/large/valentina-bog-5e1e3f4e-e828-48b5-93af-51c9302179f8.jpg?1634759876",
    "https://cdna.artstation.com/p/assets/images/images/042/534/964/large/valentina-bog-9887e0bf-ceb0-4e29-bfde-8726252c9c40.jpg?1634759910",
    "https://cdna.artstation.com/p/assets/images/images/041/751/242/large/valentina-bog-01d9f7cc-40f1-481e-bf24-c885e4cd266e.jpg?1632583243",
    "https://cdna.artstation.com/p/assets/covers/images/037/578/968/large/valentina-bog-valentina-bog-48f72fac-073f-4734-883d-36d515efa4c7.jpg?1620749745",
    "https://cdnb.artstation.com/p/assets/images/images/037/578/685/large/valentina-bog-3f9982e7-eb7e-46b6-ad1b-98560ac23209.jpg?1620749125",
    "https://cdnb.artstation.com/p/assets/images/images/037/576/069/large/valentina-bog-4c73e1f5-cd0f-45d8-a75d-f640dec26ae1.jpg?1620743990",
    "https://cdnb.artstation.com/p/assets/images/images/037/578/393/large/valentina-bog-b784c8de-c6f7-42c9-b25b-2937853c3ea0.jpg?1620748549",
    "https://cdnb.artstation.com/p/assets/images/images/037/574/607/large/valentina-bog-c36dbffa-a460-4a3e-b654-153dd30541bc.jpg?1620741145",
    "https://cdnb.artstation.com/p/assets/images/images/037/574/227/large/valentina-bog-12a1fcde-f563-4aa4-a788-aa2d5f90319b.jpg?1620740256",
    "https://cdna.artstation.com/p/assets/images/images/037/573/920/large/valentina-bog-82857c5f-2e72-4d07-bb33-c31e8eee9a37.jpg?1620740172",
    "https://cdnb.artstation.com/p/assets/images/images/035/419/557/large/valentina-bog-c26778af-e3f0-4ade-a619-1233a90aa9a9.jpg?1614896827",
    "https://cdna.artstation.com/p/assets/images/images/034/782/396/large/valentina-bog-e6848d67-64bc-44f1-b639-5a280809539f.jpg?1613217469",
    "https://cdnb.artstation.com/p/assets/images/images/034/794/831/large/valentina-bog-69ad585c-ddd6-444b-bd26-349b9ff143b0.jpg?1613248495",
    "https://cdnb.artstation.com/p/assets/images/images/034/523/511/large/valentina-bog-bc22e2b0-4399-48e5-a6f8-148612215c25.jpg?1612515315",
    "https://cdna.artstation.com/p/assets/images/images/034/086/776/large/valentina-bog-5bdae9ca-a2c8-4680-9fcb-adde140e9951.jpg?1611347597",
    "https://cdna.artstation.com/p/assets/images/images/034/036/654/large/valentina-bog-.jpg?1611228767",
    "https://cdna.artstation.com/p/assets/images/images/033/747/406/large/valentina-bog-owl.jpg?1610468907",
    "https://cdna.artstation.com/p/assets/images/images/032/420/736/large/valentina-bog-d1d06e48-6854-4ef7-a5a6-451bf1330ab9.jpg?1606386128",
    "https://cdnb.artstation.com/p/assets/images/images/032/143/747/large/valentina-bog-d1504ca6-de94-4b41-91af-36ef0aee1d3a.jpg?1605606901",
    "https://cdna.artstation.com/p/assets/images/images/032/143/598/large/valentina-bog-e4dff8e6-386f-4f44-ba87-d1ef5eeb6241.jpg?1605606161",
    "https://cdna.artstation.com/p/assets/images/images/030/901/428/large/valentina-bog-.jpg?1601999710",
    "https://cdna.artstation.com/p/assets/images/images/030/901/330/large/valentina-bog-1.jpg?1601999510",
    "https://cdna.artstation.com/p/assets/images/images/030/901/134/large/valentina-bog-img-1161.jpg?1601999179",
    "https://cdna.artstation.com/p/assets/images/images/029/631/366/large/valentina-bog-e5be5a84-0c0f-4af8-93f2-1d753b5f3738.jpg?1598179892",
    "https://cdna.artstation.com/p/assets/images/images/026/342/220/large/valentina-bog-99279484-5a45-41eb-8d8f-617a97981962.jpg?1588526556",
    "https://cdna.artstation.com/p/assets/images/images/025/987/722/large/valentina-bog-0dd5e166-f849-4e30-a1a7-d77b80812daa.jpg?1587547153",
    "https://cdnb.artstation.com/p/assets/images/images/025/987/583/large/valentina-bog-915fd68e-5633-4c23-a943-30355c8e0cfe.jpg?1587546794",
    "https://cdna.artstation.com/p/assets/images/images/025/519/954/large/valentina-bog-084acf35-c8ef-4349-9f76-87306e0e49a4.jpg?1586058265",
    "https://cdna.artstation.com/p/assets/images/images/025/500/218/large/valentina-bog-112621x-a679-43e5-96a9-fea670f0cbf6.jpg?1585993870",
    "https://cdna.artstation.com/p/assets/images/images/025/148/838/large/valentina-bog-4f0d8e03-b34f-417c-a1cb-ebe02c7d2ee5.jpg?1584804729",
    "https://cdna.artstation.com/p/assets/images/images/025/148/838/large/valentina-bog-4f0d8e03-b34f-417c-a1cb-ebe02c7d2ee5.jpg?1584804729",
    "https://cdna.artstation.com/p/assets/images/images/024/516/596/large/valentina-bog-f8d17fc5-5ba2-4e64-8672-3ea5e9f9f656.jpg?1582670875",
    "https://cdna.artstation.com/p/assets/images/images/024/427/330/large/valentina-bog-594e22b2-5824-4d67-b926-398a991b26d6.jpg?1582386983",
    "https://cdnb.artstation.com/p/assets/images/images/024/311/667/large/valentina-bog-6af3a0c9-2375-4152-862a-32365b6c9451.jpg?1582010349",
    "https://cdnb.artstation.com/p/assets/images/images/024/070/827/large/valentina-bog-74661c28-2c1b-4912-a661-b82e42c4df35.jpg?1581239602",
    "https://cdnb.artstation.com/p/assets/images/images/024/040/635/large/valentina-bog-c5e2d08e-0cb0-4cb5-aaf3-908165620e19.jpg?1581115750",
    "https://cdna.artstation.com/p/assets/images/images/023/516/056/large/valentina-bog-c387f7f7-f012-49c5-a5f2-9b48d4104d23.jpg?1579469271",
    "https://cdnb.artstation.com/p/assets/covers/images/043/600/179/large/valentina-bog-valentina-bog-537b4f1a-1fa6-485d-946c-c3998860e3b5.jpg?1637731468",
    "https://cdna.artstation.com/p/assets/images/images/022/323/484/large/valentina-bog-9866cf9d-fb84-4a84-a9f2-d13dd120c758.jpg?1574978436",
    "https://cdnb.artstation.com/p/assets/images/images/021/657/277/large/valentina-bog-8d2826a5-24f9-4d85-9fa9-2d13a4dfdba3.jpg?1572474577",
    "https://cdnb.artstation.com/p/assets/images/images/021/657/225/large/valentina-bog-b4305eb3-c2aa-45da-8b42-c02161d8ed90.jpg?1572474377",
    "https://cdna.artstation.com/p/assets/images/images/018/688/126/large/valentina-bog-a36b12f0-a50a-44x-aed3-75a0f86bd8d8.jpg?1560331450",
    "https://cdnb.artstation.com/p/assets/images/images/018/219/207/large/valentina-bog-ca027c32-39f6-4da5-afaf-8e68f19dafx.jpg?1558621599",
    "https://cdnb.artstation.com/p/assets/images/images/018/061/953/large/valentina-bog-e079b307-12e1-4f0c-bf6e-9d0c651c322a.jpg?1558291548",
    "https://cdnb.artstation.com/p/assets/images/images/017/856/067/large/valentina-bog-caffff26-7a16-4fcf-8566-ce0df8fec4x.jpg?1557592412",
    "https://cdnb.artstation.com/p/assets/images/images/017/789/729/large/valentina-bog-71249a3e-ee4f-474b-b17a-e22957274f81.jpg?1557343346",
    "https://cdnb.artstation.com/p/assets/images/images/017/726/709/large/valentina-bog-c635c59f-c86f-4a83-90d6-5882debb6c73.jpg?1557128783",
    "https://cdna.artstation.com/p/assets/images/images/016/864/598/large/valentina-bog-d378d6e1-a136-4fce-942c-e3c4236a815d.jpg?1553760762",
    "https://cdna.artstation.com/p/assets/images/images/016/856/366/large/valentina-bog-e0f81851-6e5c-499e-b899-a424a91a642a.jpg?1553725324",
    "https://cdnb.artstation.com/p/assets/images/images/016/856/197/large/valentina-bog-d52412de-d773-446a-ba04-15fc1fa07e0a.jpg?1553724616",
    "https://cdnb.artstation.com/p/assets/images/images/016/839/863/large/valentina-bog-c4df1131-4a74-4874-a2bc-70c391b12bed.jpg?1553672910",
    "https://cdna.artstation.com/p/assets/images/images/042/535/942/large/valentina-bog-752acd50-d5c0-42e1-a594-126bd1822e57.jpg?1634760824",
  ]

let links = [
  "https://www.artstation.com/artwork/lRR0dV" ,
  "https://www.artstation.com/artwork/vJJVYd",
  "https://www.artstation.com/artwork/dO9VEX",
  "https://www.artstation.com/artwork/28P1dx",
  "https://www.artstation.com/artwork/L3DO8w",
  "https://www.artstation.com/artwork/d8vrQ3",
  "https://www.artstation.com/artwork/WKydKD",
  "https://www.artstation.com/artwork/AqY4GV",
  "https://www.artstation.com/artwork/rANKLm",
  "https://www.artstation.com/artwork/eaLZXb",
  "https://www.artstation.com/artwork/Xn62Vw",
  "https://www.artstation.com/artwork/R3w6JE",
  "https://www.artstation.com/artwork/R3w6gm",
  "https://www.artstation.com/artwork/8eNEPO",
  "https://www.artstation.com/artwork/18rBQ8",
  "https://www.artstation.com/artwork/oAml5L",
  "https://www.artstation.com/artwork/aYXbxq",
  "https://www.artstation.com/artwork/5XRwAA",
  "https://www.artstation.com/artwork/xJrKe1",
  "https://www.artstation.com/artwork/xJrNJ1",
  "https://www.artstation.com/artwork/g233YE",
  "https://www.artstation.com/artwork/Nxo3Xb",
  "https://www.artstation.com/artwork/nYvnvO",
  "https://www.artstation.com/artwork/R3gRXe",
  "https://www.artstation.com/artwork/mD56o8",
  "https://www.artstation.com/artwork/L38EXw",
  "https://www.artstation.com/artwork/ykZKPO",
  "https://www.artstation.com/artwork/XnaVxD",
  "https://www.artstation.com/artwork/PmdmnZ",
  "https://www.artstation.com/artwork/aRARe8",
  "https://www.artstation.com/artwork/oOaXvw",
  "https://www.artstation.com/artwork/v1gd5E",
  "https://www.artstation.com/artwork/VdPQK4",
  "https://www.artstation.com/artwork/xz5obm",
  "https://www.artstation.com/artwork/4b0q38",
  "https://www.artstation.com/artwork/3o01ZD",
  "https://www.artstation.com/artwork/oOEE5W",
  "https://www.artstation.com/artwork/3oXdGo",
  "https://www.artstation.com/artwork/Dxbaz0",
  "https://www.artstation.com/artwork/w8WvqO",
  "https://www.artstation.com/artwork/v1OXYa",
  "https://www.artstation.com/artwork/8l0D5n",
  "https://www.artstation.com/artwork/RYdB1e",
  "https://www.artstation.com/artwork/rRwdgE",
  "https://www.artstation.com/artwork/zAoLaq",
  "https://www.artstation.com/artwork/8lo2zR",
  "https://www.artstation.com/artwork/OyO4Ye",
  "https://www.artstation.com/artwork/xz22K2",
  "https://www.artstation.com/artwork/1nZ0Xe",
  "https://www.artstation.com/artwork/RYldwm",
  "https://www.artstation.com/artwork/DxlBBE",
  "https://www.artstation.com/artwork/PmEv6o",
  "https://www.artstation.com/artwork/0Xdb1V",
  "https://www.artstation.com/artwork/aRDqvq",
  "https://www.artstation.com/artwork/aRDqvq",
  "https://www.artstation.com/artwork/yk9R2J",
]

// try optimization
if(window.screen.width <= 1000){
  imageLinks = [
    "https://cdna.artstation.com/p/assets/images/images/044/171/314/smaller_square/valentina-bog-b29b29b6-f504-4a76-918f-6b053c409ae2.jpg?1639299601" ,
    "https://cdnb.artstation.com/p/assets/images/images/044/101/311/smaller_square/valentina-bog-065a3155-9be7-4e88-b0a3-96edba93b5c8.jpg?1639080157",
    "https://cdnb.artstation.com/p/assets/images/images/016/839/863/smaller_square/valentina-bog-c4df1131-4a74-4874-a2bc-70c391b12bed.jpg?1553672910",
    "https://cdnb.artstation.com/p/assets/images/images/042/535/527/20211020145911/smaller_square/valentina-bog-45ca5a1c-273d-4bd9-92bc-eb88ec4f2574.jpg?1634759952",
    "https://cdna.artstation.com/p/assets/images/images/042/535/402/20211020145756/smaller_square/valentina-bog-5e1e3f4e-e828-48b5-93af-51c9302179f8.jpg?1634759876",
    "https://cdna.artstation.com/p/assets/images/images/042/534/964/20211020145830/smaller_square/valentina-bog-9887e0bf-ceb0-4e29-bfde-8726252c9c40.jpg?1634759910",
    "https://cdna.artstation.com/p/assets/images/images/041/751/242/smaller_square/valentina-bog-01d9f7cc-40f1-481e-bf24-c885e4cd266e.jpg?1632583243",
    "https://cdna.artstation.com/p/assets/covers/images/037/578/968/smaller_square/valentina-bog-valentina-bog-48f72fac-073f-4734-883d-36d515efa4c7.jpg?1620749745",
    "https://cdnb.artstation.com/p/assets/images/images/037/578/685/smaller_square/valentina-bog-3f9982e7-eb7e-46b6-ad1b-98560ac23209.jpg?1620749125",
    "https://cdnb.artstation.com/p/assets/images/images/037/576/069/smaller_square/valentina-bog-4c73e1f5-cd0f-45d8-a75d-f640dec26ae1.jpg?1620743990",
    "https://cdnb.artstation.com/p/assets/images/images/037/578/393/smaller_square/valentina-bog-b784c8de-c6f7-42c9-b25b-2937853c3ea0.jpg?1620748549",
    "https://cdnb.artstation.com/p/assets/images/images/037/574/607/smaller_square/valentina-bog-c36dbffa-a460-4a3e-b654-153dd30541bc.jpg?1620741145",
    "https://cdnb.artstation.com/p/assets/images/images/037/574/227/smaller_square/valentina-bog-12a1fcde-f563-4aa4-a788-aa2d5f90319b.jpg?1620740256",
    "https://cdna.artstation.com/p/assets/images/images/037/573/920/20210511083611/smaller_square/valentina-bog-82857c5f-2e72-4d07-bb33-c31e8eee9a37.jpg?1620740172",
    "https://cdnb.artstation.com/p/assets/images/images/035/419/557/smaller_square/valentina-bog-c26778af-e3f0-4ade-a619-1233a90aa9a9.jpg?1614896827",
    "https://cdna.artstation.com/p/assets/images/images/034/782/396/smaller_square/valentina-bog-e6848d67-64bc-44f1-b639-5a280809539f.jpg?1613217469",
    "https://cdnb.artstation.com/p/assets/images/images/034/794/831/smaller_square/valentina-bog-69ad585c-ddd6-444b-bd26-349b9ff143b0.jpg?1613248495",
    "https://cdnb.artstation.com/p/assets/images/images/034/523/511/20210205025515/smaller_square/valentina-bog-bc22e2b0-4399-48e5-a6f8-148612215c25.jpg?1612515315",
    "https://cdna.artstation.com/p/assets/images/images/034/086/776/20210122143317/smaller_square/valentina-bog-5bdae9ca-a2c8-4680-9fcb-adde140e9951.jpg?1611347597",
    "https://cdna.artstation.com/p/assets/images/images/034/036/654/smaller_square/valentina-bog-.jpg?1611228767",
    "https://cdna.artstation.com/p/assets/images/images/033/747/406/smaller_square/valentina-bog-owl.jpg?1610468907",
    "https://cdna.artstation.com/p/assets/images/images/032/420/736/smaller_square/valentina-bog-d1d06e48-6854-4ef7-a5a6-451bf1330ab9.jpg?1606386128",
    "https://cdnb.artstation.com/p/assets/images/images/032/143/747/20201117035500/smaller_square/valentina-bog-d1504ca6-de94-4b41-91af-36ef0aee1d3a.jpg?1605606901",
    "https://cdna.artstation.com/p/assets/images/images/032/143/598/smaller_square/valentina-bog-e4dff8e6-386f-4f44-ba87-d1ef5eeb6241.jpg?1605606161",
    "https://cdna.artstation.com/p/assets/images/images/030/901/428/smaller_square/valentina-bog-.jpg?1601999710",
    "https://cdna.artstation.com/p/assets/images/images/030/901/330/smaller_square/valentina-bog-1.jpg?1601999510",
    "https://cdna.artstation.com/p/assets/images/images/030/901/134/smaller_square/valentina-bog-img-1161.jpg?1601999179",
    "https://cdna.artstation.com/p/assets/images/images/029/631/366/smaller_square/valentina-bog-e5be5a84-0c0f-4af8-93f2-1d753b5f3738.jpg?1598179892",
    "https://cdna.artstation.com/p/assets/images/images/026/342/220/smaller_square/valentina-bog-99279484-5a45-41eb-8d8f-617a97981962.jpg?1588526556",
    "https://cdna.artstation.com/p/assets/images/images/025/987/722/smaller_square/valentina-bog-0dd5e166-f849-4e30-a1a7-d77b80812daa.jpg?1587547153",
    "https://cdnb.artstation.com/p/assets/images/images/025/987/583/smaller_square/valentina-bog-915fd68e-5633-4c23-a943-30355c8e0cfe.jpg?1587546794",
    "https://cdna.artstation.com/p/assets/images/images/025/519/954/smaller_square/valentina-bog-084acf35-c8ef-4349-9f76-87306e0e49a4.jpg?1586058265",
    "https://cdna.artstation.com/p/assets/images/images/025/500/218/20200404045110/smaller_square/valentina-bog-112621x-a679-43e5-96a9-fea670f0cbf6.jpg?1585993870",
    "https://cdna.artstation.com/p/assets/images/images/025/148/838/smaller_square/valentina-bog-4f0d8e03-b34f-417c-a1cb-ebe02c7d2ee5.jpg?1584804729",
    "https://cdna.artstation.com/p/assets/images/images/025/148/838/smaller_square/valentina-bog-4f0d8e03-b34f-417c-a1cb-ebe02c7d2ee5.jpg?1584804729",
    "https://cdna.artstation.com/p/assets/images/images/024/516/596/20200225164755/smaller_square/valentina-bog-f8d17fc5-5ba2-4e64-8672-3ea5e9f9f656.jpg?1582670875",
    "https://cdna.artstation.com/p/assets/images/images/024/427/330/smaller_square/valentina-bog-594e22b2-5824-4d67-b926-398a991b26d6.jpg?1582386983",
    "https://cdnb.artstation.com/p/assets/images/images/024/311/667/smaller_square/valentina-bog-6af3a0c9-2375-4152-862a-32365b6c9451.jpg?1582010349",
    "https://cdna.artstation.com/p/assets/images/images/022/323/484/smaller_square/valentina-bog-9866cf9d-fb84-4a84-a9f2-d13dd120c758.jpg?1574978436", 
    "https://cdnb.artstation.com/p/assets/images/images/024/070/827/smaller_square/valentina-bog-74661c28-2c1b-4912-a661-b82e42c4df35.jpg?1581239602", 
    "https://cdnb.artstation.com/p/assets/images/images/024/040/635/20200207164910/smaller_square/valentina-bog-c5e2d08e-0cb0-4cb5-aaf3-908165620e19.jpg?1581115750",
    "https://cdna.artstation.com/p/assets/images/images/023/516/056/smaller_square/valentina-bog-c387f7f7-f012-49c5-a5f2-9b48d4104d23.jpg?1579469271",
    "https://cdnb.artstation.com/p/assets/covers/images/043/600/179/smaller_square/valentina-bog-valentina-bog-537b4f1a-1fa6-485d-946c-c3998860e3b5.jpg?1637731468",
    "https://cdnb.artstation.com/p/assets/images/images/021/657/277/smaller_square/valentina-bog-8d2826a5-24f9-4d85-9fa9-2d13a4dfdba3.jpg?1572474577",
    "https://cdnb.artstation.com/p/assets/images/images/021/657/225/smaller_square/valentina-bog-b4305eb3-c2aa-45da-8b42-c02161d8ed90.jpg?1572474377",
    "https://cdna.artstation.com/p/assets/images/images/018/688/126/smaller_square/valentina-bog-a36b12f0-a50a-44x-aed3-75a0f86bd8d8.jpg?1560331450",
    "https://cdnb.artstation.com/p/assets/images/images/018/219/207/smaller_square/valentina-bog-ca027c32-39f6-4da5-afaf-8e68f19dafx.jpg?1558621599",
    "https://cdnb.artstation.com/p/assets/images/images/018/061/953/smaller_square/valentina-bog-e079b307-12e1-4f0c-bf6e-9d0c651c322a.jpg?1558291548",
    "https://cdnb.artstation.com/p/assets/images/images/017/856/067/smaller_square/valentina-bog-caffff26-7a16-4fcf-8566-ce0df8fec4x.jpg?1557592412",
    "https://cdnb.artstation.com/p/assets/images/images/017/789/729/smaller_square/valentina-bog-71249a3e-ee4f-474b-b17a-e22957274f81.jpg?1557343346",
    "https://cdnb.artstation.com/p/assets/images/images/017/726/709/smaller_square/valentina-bog-c635c59f-c86f-4a83-90d6-5882debb6c73.jpg?1557128783",
    "https://cdna.artstation.com/p/assets/images/images/016/864/598/smaller_square/valentina-bog-d378d6e1-a136-4fce-942c-e3c4236a815d.jpg?1553760762",
    "https://cdna.artstation.com/p/assets/images/images/016/856/366/smaller_square/valentina-bog-e0f81851-6e5c-499e-b899-a424a91a642a.jpg?1553725324",
    "https://cdnb.artstation.com/p/assets/images/images/016/839/863/smaller_square/valentina-bog-c4df1131-4a74-4874-a2bc-70c391b12bed.jpg?1553672910",
    "https://cdnb.artstation.com/p/assets/images/images/016/856/197/smaller_square/valentina-bog-d52412de-d773-446a-ba04-15fc1fa07e0a.jpg?1553724616",
    "https://cdna.artstation.com/p/assets/images/images/042/535/942/20211020151344/smaller_square/valentina-bog-752acd50-d5c0-42e1-a594-126bd1822e57.jpg?1634760824",
  ]
}

THREE.Cache.enabled = true; // try to cache

function initDraws(child) {
    const index = child.name.split('draw')[1]
    
    if('0' in THREE.Cache.files == false)
    {
      var iterator = 0;

      imageLinks.forEach(element => {
        const texture = new THREE.TextureLoader().load(element)
        texture.encoding = THREE.sRGBEncoding
        texture.flipY = false

        THREE.Cache.add(iterator,texture)
        iterator++;
      });
    }
    
    const material = new THREE.MeshPhongMaterial({
      map: THREE.Cache.get(index - 1)
    })
    child.material = material
}
  
function initFrames(child) {
    child.material = new THREE.MeshBasicMaterial({
      color: 0x0000
    })
}
  
function initStairs(child) {
    child.material = new THREE.MeshStandardMaterial({
      color: 0xd1cdb7
    })
    child.material.roughness = 0.5
    child.material.metalness = 0.6
}
  
function initWalls(child) {
    child.material.roughness = 0.5
    child.material.metalness = 0.6
}
