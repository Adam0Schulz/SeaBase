import { DatabaseItem } from "./models/models";


export const searchByName = (items: { name: string, [key: string]: any }[], searchTerm: string) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return items.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearchTerm);
  });
};


// To use the function copy this line
// initialPopulationOfDatabase((item) => addDoc(faunaRef, item))
export const initialPopulationOfDatabase = (addDoc: (item: DatabaseItem) => void) => {
  const items: DatabaseItem[] = [
    {
      name: 'Amphiprion ocellaris (Clownfish)',
      typeOfSpecies: 'fish',
      description: 'The Clownfish (Amphiprion ocellaris) is a small tropical fish found in the Pacific and Indian Oceans, known for its vibrant orange color and three vertical white bands. They have a fascinating symbiotic relationship with certain species of sea anemones, providing protection for the Clownfish while receiving shelter in return. These popular reef fish, made famous by the movie "Finding Nemo," exhibit sequential hermaphroditism, with the largest male changing sex to become a female when the dominant female dies.',
      price: 20,
      habitat: {
        latitude: 0.7893,
        latitudeDelta: 15,
        longitude: 94.7714,
        longitudeDelta: 15,
      },
      images: [
        'https://www.ocellarisclownfish.com/images/ocellaris-clownfish.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Amphiprion_ocellaris_%281%29.jpg',
      ]
    },
    {
      name: 'Pterois volitans (Lionfish)',
      typeOfSpecies: 'fish',
      description: 'Pterois volitans, commonly known as the Lionfish, is a striking and venomous marine fish belonging to the family Scorpaenidae. This species is characterized by its flamboyant appearance, featuring long, flowing fins adorned with vibrant stripes and patterns. Native to the Indo-Pacific region, Lionfish have now become an invasive species in parts of the Atlantic Ocean, including the Caribbean and southeastern United States. Lionfish possess venomous spines along their dorsal, anal, and pelvic fins, which they use for defense and hunting prey. Their predatory behavior and voracious appetite have had detrimental effects on native fish populations and reef ecosystems where they have been introduced. Efforts are being made to control Lionfish populations through removal programs and encouraging human consumption as a means to mitigate their ecological impact.',
      price: 15,
      habitat: {
        latitude: 1.6762,
        latitudeDelta: 15,
        longitude: 40.9865,
        longitudeDelta: 15,
      },
      images: [
        'https://storage.googleapis.com/swf_product_images/marine_life/655_volitan-lionfish_1.jpg',
        'https://www.marinefishez.com/images/stories/virtuemart/product/blackvolitalionfish.jpg',
        'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_Il_Pesce_scorpione_o_pesce_cobra_Pterois_volitans_ha_numerose_spine_collegate_a_ghiandole_velenifere_c_Giuseppe_Mazza.jpg',
      ]
    },
    {
      name: 'Paracanthurus hepatus (Regal Tang)',
      typeOfSpecies: 'fish',
      description: 'Paracanthurus hepatus, commonly known as the Regal Tang or Blue Tang, is a vibrant marine fish species found in the Indo-Pacific region. It is renowned for its striking blue coloration, highlighted by a bright yellow tail and black markings. The Regal Tang has a sleek, oval-shaped body and can grow up to 30 centimeters in length. It is often associated with coral reefs and is known for its ability to swim gracefully among the intricate coral formations. Due to its popularity and recognition from the animated film "Finding Nemo," the Regal Tang has become a highly sought-after species in the aquarium trade, requiring careful consideration and appropriate care to maintain its health and well-being.',
      price: 40,
      habitat: {
        latitude: 1.9773,
        latitudeDelta: 15,
        longitude: 72.6930,
        longitudeDelta: 15,
      },
      images: [
        'https://www.fishlaboratory.com/wp-content/uploads/2022/05/Blue-Tang-1-1024x639.jpeg',
        'https://i.pinimg.com/736x/de/7c/46/de7c46cf42afd64674e1589ffcd2895f--saltwater-aquarium-fish-saltwater-tank.jpg',
        'https://reeffishcenter.shop/677-large_default/paracanthurus-hepatus-blue-tang-m.jpg',
      ]
    },
    {
      name: 'Amphiprion ocellaris (Clownfish)',
      typeOfSpecies: 'fish',
      description: 'The Clownfish (Amphiprion ocellaris) is a small tropical fish found in the Pacific and Indian Oceans, known for its vibrant orange color and three vertical white bands. They have a fascinating symbiotic relationship with certain species of sea anemones, providing protection for the Clownfish while receiving shelter in return. These popular reef fish, made famous by the movie "Finding Nemo," exhibit sequential hermaphroditism, with the largest male changing sex to become a female when the dominant female dies.',
      price: 20,
      habitat: {
        latitude: 0.7893,
        latitudeDelta: 15,
        longitude: 94.7714,
        longitudeDelta: 15,
      },
      images: [
        'https://www.ocellarisclownfish.com/images/ocellaris-clownfish.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Amphiprion_ocellaris_%281%29.jpg',
      ]
    },
    {
      name: 'Pterois volitans (Lionfish)',
      typeOfSpecies: 'fish',
      description: 'Pterois volitans, commonly known as the Lionfish, is a striking and venomous marine fish belonging to the family Scorpaenidae. This species is characterized by its flamboyant appearance, featuring long, flowing fins adorned with vibrant stripes and patterns. Native to the Indo-Pacific region, Lionfish have now become an invasive species in parts of the Atlantic Ocean, including the Caribbean and southeastern United States. Lionfish possess venomous spines along their dorsal, anal, and pelvic fins, which they use for defense and hunting prey. Their predatory behavior and voracious appetite have had detrimental effects on native fish populations and reef ecosystems where they have been introduced. Efforts are being made to control Lionfish populations through removal programs and encouraging human consumption as a means to mitigate their ecological impact.',
      price: 15,
      habitat: {
        latitude: 1.6762,
        latitudeDelta: 15,
        longitude: -40.9865,
        longitudeDelta: 15,
      },
      images: [
        'https://storage.googleapis.com/swf_product_images/marine_life/655_volitan-lionfish_1.jpg',
        'https://www.marinefishez.com/images/stories/virtuemart/product/blackvolitalionfish.jpg',
        'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_Il_Pesce_scorpione_o_pesce_cobra_Pterois_volitans_ha_numerose_spine_collegate_a_ghiandole_velenifere_c_Giuseppe_Mazza.jpg',
      ]
    },
    {
      name: 'Paracanthurus hepatus (Regal Tang)',
      typeOfSpecies: 'fish',
      description: 'Paracanthurus hepatus, commonly known as the Regal Tang or Blue Tang, is a vibrant marine fish species found in the Indo-Pacific region. It is renowned for its striking blue coloration, highlighted by a bright yellow tail and black markings. The Regal Tang has a sleek, oval-shaped body and can grow up to 30 centimeters in length. It is often associated with coral reefs and is known for its ability to swim gracefully among the intricate coral formations. Due to its popularity and recognition from the animated film "Finding Nemo," the Regal Tang has become a highly sought-after species in the aquarium trade, requiring careful consideration and appropriate care to maintain its health and well-being.',
      price: 45,
      habitat: {
        latitude: 22.1253,
        latitudeDelta: 15,
        longitude: 16.4710,
        longitudeDelta: 15,
      },
      images: [
        'https://www.fishlaboratory.com/wp-content/uploads/2022/05/Blue-Tang-1-1024x639.jpeg',
        'https://i.pinimg.com/736x/de/7c/46/de7c46cf42afd64674e1589ffcd2895f--saltwater-aquarium-fish-saltwater-tank.jpg',
        'https://reeffishcenter.shop/677-large_default/paracanthurus-hepatus-blue-tang-m.jpg',
      ]
    },
    {
      name: 'Acropora cervicornis (Staghorn Coral)',
      typeOfSpecies: 'coral',
      description: 'Acropora cervicornis, commonly known as Staghorn Coral, is a species of coral found in tropical and subtropical waters of the Caribbean Sea and western Atlantic Ocean. It is characterized by its branching and antler-like growth pattern, resembling the shape of staghorn antlers. Staghorn Coral plays a crucial role in coral reef ecosystems, providing habitat, shelter, and food sources for a diverse range of marine organisms. However, this species is currently facing significant threats due to climate change, pollution, and other human activities, making conservation efforts essential for its survival.',
      price: 145,
      habitat: {
        latitude: 14.5615,
        latitudeDelta: 15,
        longitude: 86.7126,
        longitudeDelta: 15,
      },
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hertshoon.jpg/1200px-Hertshoon.jpg',
        'https://www.fisheries.noaa.gov/s3/styles/full_width/s3/2021-11/Acropora_cervicornis_staghorn_coral.jpg?itok=8sYkq8lb',
        'https://as2.ftcdn.net/v2/jpg/00/88/88/09/1000_F_88880953_iFHI4R9khnaNnAAPNqlLRxjZnmN4tQ6S.jpg',
      ]
    },
    {
      name: 'Montipora digitata (Digitate Montipora)',
      typeOfSpecies: 'coral',
      description: 'Acropora cervicornis, commonly known as Staghorn Coral, is a species of coral found in tropical and subtropical waters of the Caribbean Sea and western Atlantic Ocean. It is characterized by its branching and antler-like growth pattern, resembling the shape of staghorn antlers. Staghorn Coral plays a crucial role in coral reef ecosystems, providing habitat, shelter, and food sources for a diverse range of marine organisms. However, this species is currently facing significant threats due to climate change, pollution, and other human activities, making conservation efforts essential for its survival.',
      price: 185,
      habitat: {
        latitude: 1.4282,
        latitudeDelta: 15,
        longitude: -80.7721,
        longitudeDelta: 15,
      },
      images: [
        'https://www.aquariumpassion.it/6882-large_default/montipora-foliosa-green-coralo-duro-sps-5-6-cm.jpg',
        'https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/04/grafted-digitata-montipora-WWC.jpg',
        'https://i.ytimg.com/vi/--AxDfzH93E/sddefault.jpg',
      ]
    },
    {
      name: 'Acropora cervicornis (Staghorn Coral)',
      typeOfSpecies: 'coral',
      description: 'Acropora cervicornis, commonly known as Staghorn Coral, is a species of coral found in tropical and subtropical waters of the Caribbean Sea and western Atlantic Ocean. It is characterized by its branching and antler-like growth pattern, resembling the shape of staghorn antlers. Staghorn Coral plays a crucial role in coral reef ecosystems, providing habitat, shelter, and food sources for a diverse range of marine organisms. However, this species is currently facing significant threats due to climate change, pollution, and other human activities, making conservation efforts essential for its survival.',
      price: 145,
      habitat: {
        latitude: 19.7931,
        latitudeDelta: 15,
        longitude: 74.1312,
        longitudeDelta: 15,
      },
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hertshoon.jpg/1200px-Hertshoon.jpg',
        'https://www.fisheries.noaa.gov/s3/styles/full_width/s3/2021-11/Acropora_cervicornis_staghorn_coral.jpg?itok=8sYkq8lb',
        'https://as2.ftcdn.net/v2/jpg/00/88/88/09/1000_F_88880953_iFHI4R9khnaNnAAPNqlLRxjZnmN4tQ6S.jpg',
      ]
    },
    {
      name: 'Montipora digitata (Digitate Montipora)',
      typeOfSpecies: 'coral',
      description: 'Acropora cervicornis, commonly known as Staghorn Coral, is a species of coral found in tropical and subtropical waters of the Caribbean Sea and western Atlantic Ocean. It is characterized by its branching and antler-like growth pattern, resembling the shape of staghorn antlers. Staghorn Coral plays a crucial role in coral reef ecosystems, providing habitat, shelter, and food sources for a diverse range of marine organisms. However, this species is currently facing significant threats due to climate change, pollution, and other human activities, making conservation efforts essential for its survival.',
      price: 185,
      habitat: {
        latitude: -33.7506,
        latitudeDelta: 15,
        longitude: -73.9824,
        longitudeDelta: 15,
      },
      images: [
        'https://www.aquariumpassion.it/6882-large_default/montipora-foliosa-green-coralo-duro-sps-5-6-cm.jpg',
        'https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/04/grafted-digitata-montipora-WWC.jpg',
        'https://i.ytimg.com/vi/--AxDfzH93E/sddefault.jpg',
      ]
    },

  ]

  items.forEach((item) => {
    addDoc(item)
  })

}

